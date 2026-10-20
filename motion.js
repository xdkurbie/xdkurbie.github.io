/* Scroll, scramble, cursor and tilt. Loaded only when motion is allowed. */
var PACKET_MOTION = (function () {
  var glyphs = "01<>/#_";
  var reduced = false;

  function scramble(el) {
    var finalText = el.getAttribute("data-text") || el.getAttribute("data-final") || el.textContent;
    if (!finalText) return;
    el.setAttribute("data-final", finalText);
    if (el._scramble) clearInterval(el._scramble);
    var ticks = 0;
    var max = Math.min(48, finalText.length * 3 + 6);
    el._scramble = setInterval(function () {
      if (reduced) {
        el.textContent = finalText;
        clearInterval(el._scramble);
        return;
      }
      ticks += 1;
      var out = "";
      for (var i = 0; i < finalText.length; i++) {
        var ch = finalText.charAt(i);
        if (ch === " " || ch === "·") { out += ch; continue; }
        if (ticks > i * 2 + 3) out += ch;
        else out += glyphs.charAt((ticks + i * 5) % glyphs.length);
      }
      el.textContent = out;
      if (ticks >= max) {
        el.textContent = finalText;
        clearInterval(el._scramble);
      }
    }, 32);
  }

  function watchScramble() {
    var nodes = document.querySelectorAll("[data-scramble]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(scramble);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        scramble(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    nodes.forEach(function (node) { io.observe(node); });
  }

  function progress(el) {
    var rect = el.getBoundingClientRect();
    var total = el.offsetHeight - window.innerHeight;
    if (total <= 8) {
      var visible = 1 - Math.min(1, Math.abs(rect.top + rect.height * 0.3) / window.innerHeight);
      return Math.min(1, Math.max(0, visible));
    }
    return Math.min(1, Math.max(0, -rect.top / total));
  }

  function scrub() {
    document.querySelectorAll("[data-scrub]").forEach(function (el) {
      el.style.setProperty("--scrub", progress(el).toFixed(3));
    });
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var page = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    document.documentElement.style.setProperty("--page", page.toFixed(3));
    document.documentElement.style.setProperty("--shift", page.toFixed(3));
    var label = document.getElementById("progress-label");
    if (label) {
      var names = ["01 HERO", "02 TOPOLOGI", "03 CS2", "04 TINKER", "05 NODER", "06 OM", "07 PING"];
      label.textContent = names[Math.min(names.length - 1, Math.floor(page * names.length))];
    }
    var hero = document.querySelector(".hero-pin");
    if (hero) {
      var heroP = progress(hero);
      hero.style.setProperty("--py", heroP.toFixed(3));
      if (window.__packetGL) window.__packetGL.setRoute(heroP);
    }
    var cs2 = document.getElementById("cs2-clips");
    if (cs2 && !cs2.dataset.glitched && progress(cs2) > 0.28) {
      cs2.dataset.glitched = "1";
      var frame = cs2.querySelector(".shot-frame");
      if (frame) {
        frame.classList.add("is-glitch");
        setTimeout(function () { frame.classList.remove("is-glitch"); }, 260);
      }
    }
  }

  function cursor() {
    if (document.querySelector(".cursor")) return;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var ring = document.createElement("div");
    ring.className = "cursor";
    ring.setAttribute("aria-hidden", "true");
    var tag = document.createElement("span");
    tag.className = "cursor-tag";
    tag.textContent = "ÅPNE";
    ring.appendChild(tag);
    document.body.appendChild(ring);
    document.documentElement.classList.add("has-cursor");
    var trails = [];
    for (var i = 0; i < 4; i++) {
      var dot = document.createElement("div");
      dot.className = "trail";
      dot.setAttribute("aria-hidden", "true");
      document.body.appendChild(dot);
      trails.push({ el: dot, x: 0, y: 0 });
    }
    var x = 0, y = 0, cx = 0, cy = 0;
    window.addEventListener("pointermove", function (event) {
      x = event.clientX;
      y = event.clientY;
      var coord = document.getElementById("coord");
      if (coord) {
        var px = Math.round(event.clientX / 10);
        var py = Math.round(event.clientY / 10);
        coord.textContent = "10.0." + (px % 250) + "." + (py % 250);
      }
    }, { passive: true });
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("pointerenter", function () { ring.classList.add("hot"); });
      el.addEventListener("pointerleave", function () { ring.classList.remove("hot"); });
    });
    function loop() {
      if (!reduced && ring.isConnected) {
        cx += (x - cx) * 0.22;
        cy += (y - cy) * 0.22;
        ring.style.transform = "translate(" + cx + "px," + cy + "px)";
        var px = cx, py = cy;
        for (var n = 0; n < trails.length; n++) {
          var dot = trails[n];
          dot.x += (px - dot.x) * (0.18 - n * 0.03);
          dot.y += (py - dot.y) * (0.18 - n * 0.03);
          dot.el.style.transform = "translate(" + dot.x + "px," + dot.y + "px)";
          px = dot.x;
          py = dot.y;
        }
        requestAnimationFrame(loop);
      }
    }
    requestAnimationFrame(loop);
  }

  function magnetic() {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".btn, .ping, .giant").forEach(function (el) {
      el.addEventListener("pointermove", function (event) {
        var rect = el.getBoundingClientRect();
        var dx = (event.clientX - rect.left - rect.width / 2) * 0.18;
        var dy = (event.clientY - rect.top - rect.height / 2) * 0.28;
        el.style.transform = "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  function hoverTitles() {
    document.querySelectorAll(".card").forEach(function (card) {
      var ghost = card.querySelector(".title-ghost");
      if (!ghost) return;
      function run() { if (!reduced) scramble(ghost); }
      card.addEventListener("pointerenter", run);
      card.addEventListener("focusin", run);
    });
  }

  function tilt() {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width - 0.5;
        var py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--gx", ((px + 0.5) * 100).toFixed(1) + "%");
        card.style.setProperty("--gy", ((py + 0.5) * 100).toFixed(1) + "%");
        card.style.transform = "perspective(900px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg)";
      });
      card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    });
  }

  function maybeGL() {
    if (window.__packetGL || reduced) return;
    var canvas = document.getElementById("net");
    if (!canvas || !window.PACKET_GL) return;
    var wide = matchMedia("(min-width: 900px)").matches;
    var cores = navigator.hardwareConcurrency || 2;
    var save = navigator.connection && navigator.connection.saveData;
    if (!wide || cores < 4 || save) return;
    var label = document.getElementById("node-label");
    try {
      window.__packetGL = window.PACKET_GL.mount(canvas, label);
    } catch (e) {
      window.__packetGL = null;
    }
  }

  function reveals() {
    var heads = document.querySelectorAll(".section-head h2");
    heads.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
        el.style.setProperty("--reveal", "0");
      }
    });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty("--reveal", "1");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.35 });
    heads.forEach(function (el) { io.observe(el); });
  }

  function bursts() {
    document.addEventListener("pointerdown", function (event) {
      if (reduced) return;
      var hit = event.target.closest && event.target.closest("a, button");
      if (!hit || document.querySelectorAll(".burst").length > 18) return;
      for (var i = 0; i < 6; i++) {
        var bit = document.createElement("span");
        bit.className = "burst";
        bit.setAttribute("aria-hidden", "true");
        var ang = (Math.PI * 2 * i) / 6 + Math.random() * 0.4;
        var dist = 28 + (i % 3) * 10;
        bit.style.left = event.clientX + "px";
        bit.style.top = event.clientY + "px";
        bit.style.setProperty("--dx", (Math.cos(ang) * dist).toFixed(1) + "px");
        bit.style.setProperty("--dy", (Math.sin(ang) * dist).toFixed(1) + "px");
        document.body.appendChild(bit);
        setTimeout(function (node) { if (node.parentNode) node.remove(); }, 520, bit);
      }
    }, { passive: true });
  }

  function portraitTilt() {
    var portrait = document.querySelector(".node-portrait");
    if (!portrait || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (portrait.dataset.tilt) return;
    portrait.dataset.tilt = "1";
    portrait.addEventListener("pointermove", function (event) {
      if (reduced) return;
      var rect = portrait.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width - 0.5;
      var py = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.setProperty("--rx", (-py * 10).toFixed(2));
      portrait.style.setProperty("--ry", (px * 12).toFixed(2));
      portrait.style.setProperty("--nx", (px * 8).toFixed(1));
      portrait.style.setProperty("--ny", (py * 8).toFixed(1));
    });
    portrait.addEventListener("pointerleave", function () {
      portrait.style.removeProperty("--rx");
      portrait.style.removeProperty("--ry");
      portrait.style.removeProperty("--nx");
      portrait.style.removeProperty("--ny");
    });
  }

  function armAvatar() {
    var face = document.querySelector(".node-face");
    if (!face || reduced || face.dataset.live === "1") return;
    if (navigator.connection && navigator.connection.saveData) return;
    var loop = new Image();
    loop.onload = function () {
      if (reduced || !face.isConnected) return;
      if (!face.dataset.poster) face.dataset.poster = face.getAttribute("src");
      face.src = loop.src;
      face.dataset.live = "1";
    };
    loop.src = "/img/avatar-loop.webp";
  }

  function loadGL() {
    if (reduced) return;
    if (!matchMedia("(min-width: 900px)").matches) return;
    if ((navigator.hardwareConcurrency || 2) < 4) return;
    if (navigator.connection && navigator.connection.saveData) return;
    if (window.PACKET_GL) { maybeGL(); return; }
    if (loadGL.busy) return;
    loadGL.busy = true;
    var script = document.createElement("script");
    script.src = "/gl.js";
    script.onload = maybeGL;
    document.body.appendChild(script);
  }

  function syncMotion() {
    reduced = document.documentElement.getAttribute("data-motion") !== "on";
    if (reduced) {
      document.documentElement.classList.remove("has-motion", "has-cursor");
      document.querySelectorAll(".cursor, .trail, .burst").forEach(function (el) { el.remove(); });
      var face = document.querySelector(".node-face");
      if (face && face.dataset.poster) {
        face.src = face.dataset.poster;
        face.dataset.live = "0";
      }
      if (window.__packetGL) {
        window.__packetGL.stop();
        window.__packetGL = null;
      }
      return;
    }
    document.documentElement.classList.add("has-motion");
    if (!syncMotion.booted) {
      syncMotion.booted = true;
      watchScramble();
      hoverTitles();
      reveals();
      bursts();
      var title = document.querySelector(".hero-title");
      if (title) title.classList.add("is-live");
      portraitTilt();
      armAvatar();
      cursor();
      magnetic();
      tilt();
      window.addEventListener("scroll", function () {
        if (syncMotion.ticking) return;
        syncMotion.ticking = true;
        requestAnimationFrame(function () {
          syncMotion.ticking = false;
          if (!reduced) scrub();
        });
      }, { passive: true });
      var launch = function () {
        if (reduced) return;
        if ("requestIdleCallback" in window) requestIdleCallback(loadGL, { timeout: 1800 });
        else setTimeout(loadGL, 700);
      };
      launch();
    } else {
      if (!document.querySelector(".cursor")) cursor();
      if (!window.__packetGL) loadGL();
      armAvatar();
    }
    scrub();
  }

  function start() {
    syncMotion();
    new MutationObserver(syncMotion).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"]
    });
  }

  return { start: start };
})();
PACKET_MOTION.start();
