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
    if (label && !document.documentElement.getAttribute("data-journey")) {
      var names = document.documentElement.lang === "en"
        ? ["01 NETWORK", "02 CRYSTAL", "03 FOREST", "04 CONTACT"]
        : ["01 NETTVERK", "02 KRYSTALL", "03 SKOG", "04 KONTAKT"];
      label.textContent = names[Math.min(names.length - 1, Math.floor(page * names.length))];
    }
    var hero = document.querySelector(".hero-pin");
    if (hero) {
      var heroP = progress(hero);
      hero.style.setProperty("--py", heroP.toFixed(3));
      if (window.__packetGL) window.__packetGL.setRoute(page);
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
    tag.textContent = document.documentElement.lang === "en" ? "OPEN" : "ÅPNE";
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
    var x = 0, y = 0, cx = 0, cy = 0, down = false;
    window.addEventListener("pointerdown", function () { down = true; }, { passive: true });
    window.addEventListener("pointerup", function () { down = false; }, { passive: true });
    window.addEventListener("pointercancel", function () { down = false; }, { passive: true });
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
        ring.style.transform = "translate(" + cx + "px," + cy + "px) scale(" + (down ? 0.82 : 1) + ")";
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

  var clipIO = null;

  function pickSrc(video) {
    var narrow = window.matchMedia("(max-width: 720px)").matches;
    if (narrow && video.dataset.srcSm) return video.dataset.srcSm;
    return video.dataset.src || "";
  }

  function startClip(video) {
    if (reduced || !video) return;
    if (navigator.connection && navigator.connection.saveData) return;
    if (video.closest("[hidden]")) return;
    var next = pickSrc(video);
    if (!next) return;
    if (video.getAttribute("src") !== next) video.src = next;
    var pending = video.play();
    if (pending && pending.catch) pending.catch(function () {});
  }

  function watchClip(video) {
    if (!video || video.dataset.watched) return;
    video.dataset.watched = "1";
    video.addEventListener("playing", function () { video.classList.add("is-playing"); });
    if (!clipIO) {
      clipIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (reduced) return;
          if (entry.isIntersecting) startClip(entry.target);
          else entry.target.pause();
        });
      }, { rootMargin: "180px 0px" });
    }
    clipIO.observe(video);
  }

  function armPetals() {
    var field = document.querySelector(".petal-field");
    if (!field) return;
    if (!field.dataset.armed) {
      field.dataset.armed = "1";
      var colors = ["var(--signal)", "var(--packet)", "var(--flare)"];
      for (var i = 0; i < 14; i++) {
        var petal = document.createElement("i");
        petal.className = "petal";
        petal.style.left = (6 + (i * 41) % 88) + "%";
        petal.style.animationDelay = (-i * 0.42) + "s";
        petal.style.animationDuration = (5 + (i % 4) * 0.8) + "s";
        petal.style.background = colors[i % 3];
        petal.style.setProperty("--dx", ((i % 2 ? 1 : -1) * (16 + (i % 5) * 9)) + "px");
        petal.style.setProperty("--spin", ((i % 2 ? 1 : -1) * (48 + i * 8)) + "deg");
        field.appendChild(petal);
      }
      if ("IntersectionObserver" in window) {
        var host = field.closest(".sakura-break") || field;
        new IntersectionObserver(function (entries) {
          var on = entries.some(function (entry) { return entry.isIntersecting; });
          field.classList.toggle("is-live", on && !reduced);
        }, { rootMargin: "40px" }).observe(host);
      }
    }
    field.classList.toggle("is-live", !reduced && field.getBoundingClientRect().bottom > 0 && field.getBoundingClientRect().top < window.innerHeight);
  }

  function armClips() {
    document.querySelectorAll("video.clip").forEach(function (video) {
      if (video.closest("[hidden]")) return;
      watchClip(video);
      var rect = video.getBoundingClientRect();
      if (rect.bottom > -180 && rect.top < window.innerHeight + 180 && rect.width) startClip(video);
    });
  }

  function releaseClips() {
    document.querySelectorAll("video.clip").forEach(function (video) {
      video.pause();
      video.classList.remove("is-playing");
      if (video.getAttribute("src")) {
        video.removeAttribute("src");
        video.load();
      }
    });
    var field = document.querySelector(".petal-field");
    if (field) field.classList.remove("is-live");
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector("script[src='" + src + "']");
      if (existing && existing.dataset.ready === "1") { resolve(); return; }
      var script = existing || document.createElement("script");
      script.src = src;
      script.onload = function () { script.dataset.ready = "1"; resolve(); };
      script.onerror = reject;
      if (!existing) document.body.appendChild(script);
    });
  }

  function clearReelInline() {
    document.querySelectorAll(".reel-media, .layer, .reel-forest .duotone, .slit .clip-slot, .corridor .clip-slot, .corridor .duotone, .sakura-frame, .reel-tree .clip-slot, .thanks .clip-frame, .shot-frame, .node-portrait, #hero .hero-copy > *, #prosjekter .card, #prosjekter .feature-copy > *").forEach(function (el) {
      el.style.clipPath = "";
      el.style.transform = "";
      el.style.opacity = "";
      el.style.filter = "";
    });
    document.querySelectorAll(".is-gsap, .is-glitch").forEach(function (el) {
      el.classList.remove("is-gsap");
      el.classList.remove("is-glitch");
    });
    if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach(function (trigger) { trigger.kill(); });
  }

  function initReels() {
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    clearReelInline();
    var gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);
    var slit = document.querySelector(".slit");
    var slitSlot = slit && slit.querySelector(".clip-slot");
    if (slit && slitSlot) {
      slit.classList.add("is-gsap");
      gsap.fromTo(slitSlot, { clipPath: "inset(46% 0% 46% 0%)" }, {
        clipPath: "inset(0% 0% 0% 0%)", ease: "none",
        scrollTrigger: { trigger: slit, start: "top 90%", end: "center 62%", scrub: 0.4 }
      });
    }
    var sakura = document.querySelector(".sakura-break");
    var sakuraFrame = sakura && sakura.querySelector(".sakura-frame");
    if (sakura && sakuraFrame) {
      sakura.classList.add("is-gsap");
      gsap.fromTo(sakuraFrame, { scale: 1.14, yPercent: 6 }, {
        scale: 1, yPercent: -4, ease: "none",
        scrollTrigger: { trigger: sakura, start: "top bottom", end: "bottom top", scrub: true }
      });
    }
    var tree = document.querySelector(".reel-tree");
    var treeSlot = tree && tree.querySelector(".clip-slot");
    if (tree && treeSlot) {
      tree.classList.add("is-gsap");
      gsap.fromTo(treeSlot, { clipPath: "inset(8% 62% 8% 0%)", scale: 1.08 }, {
        clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "none",
        scrollTrigger: { trigger: tree, start: "top 90%", end: "center 60%", scrub: 0.45 }
      });
    }
    var about = document.querySelector(".corridor-section");
    var walk = about && about.querySelector(".corridor .clip-slot");
    if (about && walk) {
      about.classList.add("is-gsap");
      gsap.fromTo(walk, { yPercent: 8 }, {
        yPercent: -10, ease: "none",
        scrollTrigger: { trigger: about, start: "top bottom", end: "bottom top", scrub: true }
      });
      var walkDuo = about.querySelector(".corridor .duotone");
      if (walkDuo) gsap.fromTo(walkDuo, { opacity: 0.88 }, {
        opacity: 0.28, ease: "none",
        scrollTrigger: { trigger: about, start: "top 70%", end: "center center", scrub: true }
      });
    }
    var thanks = document.querySelector(".thanks");
    var thanksFrame = thanks && thanks.querySelector(".clip-frame");
    if (thanks && thanksFrame) {
      thanks.classList.add("is-gsap");
      gsap.fromTo(thanksFrame, { y: 36, scale: 0.94 }, {
        y: 0, scale: 1, ease: "none",
        scrollTrigger: { trigger: thanks, start: "top 92%", end: "center 70%", scrub: 0.4 }
      });
    }
    window.ScrollTrigger.refresh();
  }

  var STORY = "power3.out";

  function initStory() {
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    if (matchMedia("(max-width: 720px)").matches) return;
    var gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);
    window.ScrollTrigger.getAll().forEach(function (trigger) { trigger.kill(); });
    initReels();
    var hero = document.getElementById("hero");
    if (hero) {
      var bits = hero.querySelectorAll(".hero-copy > *:not(.node-portrait)");
      if (bits.length) {
        gsap.from(bits, {
          y: 16,
          duration: 0.9,
          stagger: 0.055,
          ease: STORY,
          immediateRender: false,
          scrollTrigger: { trigger: hero, start: "top 92%", toggleActions: "play none none none" }
        });
      }
      var portrait = hero.querySelector(".node-portrait");
      if (portrait) {
        gsap.to(portrait, {
          y: -22,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.65 }
        });
      }
    }
    gsap.utils.toArray("#prosjekter .station .feature-copy > *").forEach(function (el) {
      gsap.from(el, {
        y: 22,
        opacity: 0,
        duration: 0.75,
        ease: STORY,
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
      });
    });
    gsap.utils.toArray("#prosjekter .card").forEach(function (card) {
      gsap.from(card, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: STORY,
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" }
      });
    });
    var frame = document.querySelector("#topologi-studio .shot-frame");
    if (frame && matchMedia("(min-width: 980px)").matches) {
      gsap.fromTo(frame, { clipPath: "inset(18% 14% 18% 14% round 22px)" }, {
        clipPath: "inset(0% 0% 0% 0% round 18px)",
        ease: "none",
        scrollTrigger: {
          trigger: "#topologi-studio",
          start: "top 72%",
          end: "center 55%",
          scrub: 0.45
        }
      });
    }
    window.ScrollTrigger.refresh();
  }

  function armReels() {
    if (reduced) return;
    if (matchMedia("(max-width: 720px)").matches) return;
    if (navigator.connection && navigator.connection.saveData) return;
    if (window.gsap && window.ScrollTrigger) { initStory(); return; }
    if (armReels.started) return;
    armReels.started = true;
    function kick() {
      if (armReels.loading || reduced) return;
      if (matchMedia("(max-width: 720px)").matches) return;
      armReels.loading = true;
      window.removeEventListener("scroll", kick);
      loadScript("/vendor/gsap.min.js").then(function () {
        return loadScript("/vendor/ScrollTrigger.min.js");
      }).then(function () {
        if (!reduced) initStory();
      }).catch(function () {});
    }
    window.addEventListener("scroll", kick, { passive: true });
    if (window.scrollY > 8) kick();
    else if ("requestIdleCallback" in window) requestIdleCallback(kick, { timeout: 2400 });
    else setTimeout(kick, 1700);
  }

  function loadGL() {
    if (!document.getElementById("net")) return;
    if (document.getElementById("journey-gl")) return;
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
      releaseClips();
      clearReelInline();
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
      langSwitch();
      document.addEventListener("packet-lang", langSwitch);
      armAvatar();
      armClips();
      armPetals();
      armReels();
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
      armClips();
      armPetals();
      armReels();
    }
    scrub();
  }

  function langSwitch() {
    if (reduced) {
      try { sessionStorage.removeItem("packet-lang-switch"); } catch (e) {}
      return;
    }
    var flag = false;
    try { flag = sessionStorage.getItem("packet-lang-switch") === "1"; } catch (e) {}
    if (!flag) return;
    try { sessionStorage.removeItem("packet-lang-switch"); } catch (e) {}
    var nodes = document.querySelectorAll(".nav-links a, h2, .section-index, .filter, .thanks figcaption, .miss h1 span, .lost-fish figcaption span, [data-scramble]");
    var delay = 0;
    nodes.forEach(function (el) {
      if (el.closest("[hidden], .only-nb, .only-en") && el.offsetParent === null) return;
      if (el.children.length && !el.hasAttribute("data-scramble")) return;
      var wait = delay;
      delay += 28;
      setTimeout(function () { if (!reduced) scramble(el); }, wait);
    });
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
