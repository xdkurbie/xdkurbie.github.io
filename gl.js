/* Original WebGL2 network. No third-party engine, models or textures. */
var PACKET_GL = (function () {
  var VERT_LINE = "#version 300 es\nlayout(location=0) in vec3 aPos;\nuniform mat4 uVP;\nuniform vec2 uMouse;\nvoid main(){\n  vec3 p=aPos;\n  vec2 m=uMouse*1.4;\n  float d=length(p.xy-m);\n  p.xy += m * (0.09 / (0.45 + d));\n  gl_Position=uVP*vec4(p,1.0);\n}";
  var FRAG_LINE = "#version 300 es\nprecision mediump float;\nuniform vec3 uColor;\nout vec4 o;\nvoid main(){ vec3 c=uColor*0.62; o=vec4(c,0.62); }";
  var VERT_POINT = "#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in float aSize;\nlayout(location=2) in float aKind;\nuniform mat4 uVP;\nuniform vec2 uMouse;\nuniform float uDpr;\nout float vKind;\nvoid main(){\n  vec3 p=aPos;\n  vec2 m=uMouse*1.4;\n  float d=length(p.xy-m);\n  p.xy += m * (0.14 / (0.4 + d));\n  gl_Position=uVP*vec4(p,1.0);\n  float atten=clamp(1.15 / max(0.35, gl_Position.w), 0.35, 2.2);\n  gl_PointSize=aSize * uDpr * atten;\n  vKind=aKind;\n}";
  var FRAG_POINT = "#version 300 es\nprecision mediump float;\nin float vKind;\nuniform vec3 uNode;\nuniform vec3 uPacket;\nuniform float uShift;\nout vec4 o;\nvoid main(){\n  vec2 uv=gl_PointCoord*2.0-1.0;\n  float d=dot(uv,uv);\n  if(d>1.0) discard;\n  float glow=pow(1.0-d,1.55);\n  float core=smoothstep(1.0,0.12,d);\n  float halo=step(1.5,vKind);\n  vec3 col=mix(uNode,uPacket,max(clamp(vKind,0.0,1.0),uShift));\n  float a=halo>0.5?glow*0.32:(core*0.82+glow*0.5);\n  o=vec4(col*a,a);\n}";

  function hexToRgb(hex, fallback) {
    var h = (hex || "").trim();
    if (h.charAt(0) !== "#" || (h.length !== 7 && h.length !== 4)) return fallback;
    if (h.length === 4) h = "#" + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2) + h.charAt(3) + h.charAt(3);
    return [
      parseInt(h.slice(1, 3), 16) / 255,
      parseInt(h.slice(3, 5), 16) / 255,
      parseInt(h.slice(5, 7), 16) / 255
    ];
  }

  function readColor(name, fallback) {
    var value = getComputedStyle(document.documentElement).getPropertyValue(name);
    return hexToRgb(value, fallback);
  }

  function compile(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function program(gl, vs, fs) {
    var v = compile(gl, gl.VERTEX_SHADER, vs);
    var f = compile(gl, gl.FRAGMENT_SHADER, fs);
    if (!v || !f) return null;
    var p = gl.createProgram();
    gl.attachShader(p, v);
    gl.attachShader(p, f);
    gl.linkProgram(p);
    gl.deleteShader(v);
    gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
    return p;
  }

  function perspective(fov, aspect, near, far) {
    var f = 1 / Math.tan(fov / 2);
    var nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0
    ]);
  }

  function lookAt(eye, target) {
    var zx = eye[0] - target[0], zy = eye[1] - target[1], zz = eye[2] - target[2];
    var zl = Math.hypot(zx, zy, zz) || 1;
    zx /= zl; zy /= zl; zz /= zl;
    var xx = zy * 0 - zz * 1, xy = zz * 0 - zx * 0, xz = zx * 1 - zy * 0;
    var xl = Math.hypot(xx, xy, xz) || 1;
    xx /= xl; xy /= xl; xz /= xl;
    var yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
    return new Float32Array([
      xx, yx, zx, 0,
      xy, yy, zy, 0,
      xz, yz, zz, 0,
      -(xx * eye[0] + xy * eye[1] + xz * eye[2]),
      -(yx * eye[0] + yy * eye[1] + yz * eye[2]),
      -(zx * eye[0] + zy * eye[1] + zz * eye[2]),
      1
    ]);
  }

  function multiply(a, b) {
    var o = new Float32Array(16);
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 4; r++) {
        o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
      }
    }
    return o;
  }

  function project(vp, p, w, h) {
    var x = vp[0] * p[0] + vp[4] * p[1] + vp[8] * p[2] + vp[12];
    var y = vp[1] * p[0] + vp[5] * p[1] + vp[9] * p[2] + vp[13];
    var w4 = vp[3] * p[0] + vp[7] * p[1] + vp[11] * p[2] + vp[15];
    if (w4 <= 0.05) return null;
    return [(x / w4 * 0.5 + 0.5) * w, (1 - (y / w4 * 0.5 + 0.5)) * h];
  }

  function mount(canvas, label) {
    var gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      powerPreference: "high-performance"
    });
    if (!gl) return null;
    var lineProg = program(gl, VERT_LINE, FRAG_LINE);
    var pointProg = program(gl, VERT_POINT, FRAG_POINT);
    if (!lineProg || !pointProg) return null;

    var nodes = [
      { name: "HERO", p: [0, 0.15, 0] },
      { name: "TOPOLOGI", p: [-1.7, 0.85, -0.3] },
      { name: "CS2", p: [1.55, 0.7, 0.15] },
      { name: "TINKER", p: [0.15, -1.0, 0.55] },
      { name: "DUNE", p: [-1.35, -0.45, -1.05] },
      { name: "VLAN", p: [1.2, -0.75, -0.85] },
      { name: "RUST", p: [-0.35, 1.25, 0.9] },
      { name: "KICAD", p: [0.85, 0.05, 1.25] },
      { name: "KONTAKT", p: [0.05, -1.35, -0.15] }
    ];
    var edges = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 6], [2, 5], [2, 7], [3, 8], [4, 8], [5, 7], [6, 3], [4, 6]];
    var packets = edges.map(function (edge, i) {
      return { edge: edge, t: (i * 0.17) % 1, speed: 0.12 + (i % 5) * 0.035 };
    });
    var quality = 1;
    var slowFrames = 0;
    var mouse = [0, 0];
    var route = 0;
    var running = true;
    var visible = true;
    var raf = 0;
    var last = performance.now();
    var colors = { node: [0.82, 1, 0], packet: [0.36, 0.95, 1] };
    var lineTint = [0.82, 1, 0];
    var dprCap = 1.5;
    var lineData = new Float32Array(edges.length * 6);
    var pointData = new Float32Array((nodes.length * 2 + packets.length) * 5);
    var uLine = {
      vp: gl.getUniformLocation(lineProg, "uVP"),
      mouse: gl.getUniformLocation(lineProg, "uMouse"),
      color: gl.getUniformLocation(lineProg, "uColor")
    };
    var uPoint = {
      vp: gl.getUniformLocation(pointProg, "uVP"),
      mouse: gl.getUniformLocation(pointProg, "uMouse"),
      dpr: gl.getUniformLocation(pointProg, "uDpr"),
      node: gl.getUniformLocation(pointProg, "uNode"),
      packet: gl.getUniformLocation(pointProg, "uPacket"),
      shift: gl.getUniformLocation(pointProg, "uShift")
    };

    var lineBuf = gl.createBuffer();
    var lineVao = gl.createVertexArray();
    gl.bindVertexArray(lineVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

    var pointBuf = gl.createBuffer();
    var pointVao = gl.createVertexArray();
    gl.bindVertexArray(pointVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, pointBuf);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 20, 12);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 20, 16);
    gl.bindVertexArray(null);

    function resize() {
      var rect = canvas.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      var w = Math.max(1, Math.floor(rect.width * dpr));
      var h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function readColors() {
      colors.node = readColor("--gl-node", [0.82, 1, 0]);
      colors.packet = readColor("--gl-packet", [0.36, 0.95, 1]);
    }

    function frame(now) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (dt > 0.022) slowFrames += 1;
      else slowFrames = Math.max(0, slowFrames - 1);
      if (slowFrames > 45) quality = 0;

      resize();
      var aspect = canvas.width / Math.max(1, canvas.height);
      var ang = route * 1.15 + now * 0.00008;
      var eye = [Math.sin(ang) * 4.4, 0.35 + Math.sin(route * Math.PI) * 0.45, Math.cos(ang) * 4.4];
      var view = lookAt(eye, [route * 0.2, 0, 0]);
      var proj = perspective(0.82, aspect, 0.1, 30);
      var vp = multiply(proj, view);

      var li = 0;
      edges.forEach(function (edge) {
        var a = nodes[edge[0]].p;
        var b = nodes[edge[1]].p;
        lineData[li++] = a[0]; lineData[li++] = a[1]; lineData[li++] = a[2];
        lineData[li++] = b[0]; lineData[li++] = b[1]; lineData[li++] = b[2];
      });

      var packetCount = quality ? packets.length : Math.min(6, packets.length);
      var pi = 0;
      nodes.forEach(function (node, i) {
        pointData[pi++] = node.p[0];
        pointData[pi++] = node.p[1];
        pointData[pi++] = node.p[2];
        pointData[pi++] = 16 + Math.sin(now * 0.003 + i) * 2;
        pointData[pi++] = 0;
      });
      nodes.forEach(function (node) {
        pointData[pi++] = node.p[0];
        pointData[pi++] = node.p[1];
        pointData[pi++] = node.p[2];
        pointData[pi++] = 34;
        pointData[pi++] = 2;
      });
      for (var ip = 0; ip < packetCount; ip++) {
        var packet = packets[ip];
        packet.t = (packet.t + packet.speed * dt) % 1;
        var a = nodes[packet.edge[0]].p;
        var b = nodes[packet.edge[1]].p;
        var t = packet.t;
        var wobble = Math.sin(t * Math.PI) * 0.05;
        pointData[pi++] = a[0] + (b[0] - a[0]) * t;
        pointData[pi++] = a[1] + (b[1] - a[1]) * t + wobble;
        pointData[pi++] = a[2] + (b[2] - a[2]) * t;
        pointData[pi++] = 9;
        pointData[pi++] = 1;
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(lineProg);
      gl.uniformMatrix4fv(uLine.vp, false, vp);
      gl.uniform2f(uLine.mouse, mouse[0], mouse[1]);
      lineTint[0] = colors.node[0] + (colors.packet[0] - colors.node[0]) * route;
      lineTint[1] = colors.node[1] + (colors.packet[1] - colors.node[1]) * route;
      lineTint[2] = colors.node[2] + (colors.packet[2] - colors.node[2]) * route;
      gl.uniform3fv(uLine.color, lineTint);
      gl.bindVertexArray(lineVao);
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuf);
      gl.bufferData(gl.ARRAY_BUFFER, lineData, gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.LINES, 0, edges.length * 2);

      gl.useProgram(pointProg);
      gl.uniformMatrix4fv(uPoint.vp, false, vp);
      gl.uniform2f(uPoint.mouse, mouse[0], mouse[1]);
      gl.uniform1f(uPoint.dpr, Math.min(window.devicePixelRatio || 1, dprCap));
      gl.uniform3fv(uPoint.node, colors.node);
      gl.uniform3fv(uPoint.packet, colors.packet);
      gl.uniform1f(uPoint.shift, route);
      gl.bindVertexArray(pointVao);
      gl.bindBuffer(gl.ARRAY_BUFFER, pointBuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, pointData.subarray(0, pi));
      gl.drawArrays(gl.POINTS, 0, nodes.length * 2 + packetCount);

      if (label) {
        var rect = canvas.getBoundingClientRect();
        var best = null;
        var bestD = 46;
        nodes.forEach(function (node) {
          var s = project(vp, node.p, rect.width, rect.height);
          if (!s) return;
          var dx = s[0] - (mouse[0] * 0.5 + 0.5) * rect.width;
          var dy = s[1] - (0.5 - mouse[1] * 0.5) * rect.height;
          var dist = Math.hypot(dx, dy);
          if (dist < bestD) { bestD = dist; best = { name: node.name, x: s[0], y: s[1] }; }
        });
        if (best) {
          label.hidden = false;
          label.textContent = best.name;
          label.style.transform = "translate(" + Math.round(best.x) + "px," + Math.round(best.y) + "px)";
        } else {
          label.hidden = true;
        }
      }
    }

    function onPointer(event) {
      var rect = canvas.getBoundingClientRect();
      mouse[0] = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse[1] = 1 - ((event.clientY - rect.top) / rect.height) * 2;
    }

    readColors();
    resize();
    gl.bindBuffer(gl.ARRAY_BUFFER, pointBuf);
    gl.bufferData(gl.ARRAY_BUFFER, pointData.byteLength, gl.DYNAMIC_DRAW);
    raf = requestAnimationFrame(frame);
    var stage = canvas.closest(".hero-stage");
    if (stage) stage.classList.add("gl-on");

    var io = new IntersectionObserver(function (entries) {
      visible = entries.some(function (entry) { return entry.isIntersecting; });
    }, { threshold: 0 });
    io.observe(canvas);

    window.addEventListener("pointermove", onPointer, { passive: true });
    var observer = new MutationObserver(readColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-palette"] });

    return {
      setRoute: function (value) { route = value; },
      stop: function () {
        running = false;
        cancelAnimationFrame(raf);
        io.disconnect();
        observer.disconnect();
        window.removeEventListener("pointermove", onPointer);
        var lose = gl.getExtension("WEBGL_lose_context");
        if (lose) lose.loseContext();
        var stageEl = canvas.closest(".hero-stage");
        if (stageEl) stageEl.classList.remove("gl-on");
      }
    };
  }

  return { mount: mount };
})();
