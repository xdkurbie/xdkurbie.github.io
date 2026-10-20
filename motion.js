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
    var hero = document.querySelector(".hero-pin");
    if (hero && window.__packetGL) window.__packetGL.setRoute(progress(hero));
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
      var ring = document.querySelector(".cursor");
      if (ring) ring.remove();
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
