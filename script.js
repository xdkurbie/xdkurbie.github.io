(function () {
  "use strict";

  var root = document.documentElement;
  var lang = root.lang === "en" ? "en" : "nb";
  var copy = lang === "en" ? {
    locale: "en-GB",
    fetched: "Fetched from GitHub",
    archived: "archived",
    noDesc: "No description on GitHub.",
    site: "Website",
    allFiles: "All files",
    drift: "GitHub has a newer release than the text on this card. Read the README before you install.",
    updated: "The project list was updated from GitHub.",
    skip: "Skip",
    phrases: ["Connecting …", "DHCP →", "IP 10.0.20.48 →", "OK"]
  } : {
    locale: "nb-NO",
    fetched: "Hentet fra GitHub",
    archived: "arkivert",
    noDesc: "Ingen beskrivelse på GitHub.",
    site: "Nettsted",
    allFiles: "Alle filer",
    drift: "GitHub har en nyere utgivelse enn teksten på kortet. Les README-en før du installerer.",
    updated: "Prosjektlisten er oppdatert fra GitHub.",
    skip: "Hopp over",
    phrases: ["Kobler til …", "DHCP →", "IP 10.0.20.48 →", "OK"]
  };
  var themeBtn = document.getElementById("theme-toggle");
  var year = document.getElementById("year");
  var status = document.getElementById("live-status");
  var CACHE = "xdkurbie-gh-cache-v1";
  var BASELINE = Date.parse("2026-10-20T10:48:03Z");

  if (year) year.textContent = String(new Date().getFullYear());

  var darkBg = {
    signal: "#07090a", aurora: "#090712", kobber: "#110c09",
    dracula: "#282a36", nord: "#2e3440", catppuccin: "#1e1e2e",
    tokyonight: "#1a1b26", gruvbox: "#282828", "rose-pine": "#191724",
    solarized: "#002b36", "one-dark": "#282c34", synthwave: "#262335",
    monokai: "#272822", everforest: "#2d353b", cyberpunk: "#0b0614"
  };
  var lightBg = { signal: "#f4f5ef", aurora: "#f7f3fb", kobber: "#fbf6f1" };

  function syncThemeButton() {
    var light = root.getAttribute("data-theme") === "light";
    var palette = root.getAttribute("data-palette") || "signal";
    var lightOnly = palette === "signal" || palette === "aurora" || palette === "kobber";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", (light && lightOnly) ? (lightBg[palette] || lightBg.signal) : (darkBg[palette] || darkBg.signal));
  }

  function paletteLabel(button) {
    var key = lang === "en" ? "data-label-en" : "data-label-nb";
    return button.getAttribute(key) || button.textContent.trim() || "Signal";
  }

  function syncPalette() {
    var name = root.getAttribute("data-palette") || "signal";
    document.querySelectorAll("[data-palette-set]").forEach(function (button) {
      var on = button.getAttribute("data-palette-set") === name;
      button.setAttribute("aria-pressed", on ? "true" : "false");
      button.setAttribute("aria-selected", on ? "true" : "false");
      button.setAttribute("aria-label", paletteLabel(button));
      if (button.getAttribute("role") === "option") button.tabIndex = on ? 0 : -1;
    });
    syncThemeButton();
  }

  function choosePalette(name) {
    if (!darkBg[name]) name = "signal";
    root.setAttribute("data-palette", name);
    try { localStorage.setItem("palette", name); } catch (e) {}
    syncPalette();
  }

  syncPalette();
  document.querySelectorAll("[data-palette-set]").forEach(function (button) {
    button.addEventListener("click", function () {
      choosePalette(button.getAttribute("data-palette-set") || "signal");
    });
  });
  document.querySelectorAll(".palette-list").forEach(function (list) {
    list.addEventListener("keydown", function (event) {
      var options = Array.prototype.slice.call(list.querySelectorAll("[data-palette-set]"));
      if (!options.length) return;
      var current = options.indexOf(document.activeElement);
      if (current < 0) current = options.findIndex(function (option) { return option.getAttribute("aria-selected") === "true"; });
      var next = current;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (Math.max(0, current) + 1) % options.length;
      else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (Math.max(0, current) - 1 + options.length) % options.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = options.length - 1;
      else return;
      event.preventDefault();
      options[next].focus();
      if (options[next].scrollIntoView) options[next].scrollIntoView({ block: "nearest" });
      choosePalette(options[next].getAttribute("data-palette-set"));
    });
  });

  syncThemeButton();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncThemeButton();
    });
  }

  try {
    if (!localStorage.getItem("theme")) {
      matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (event) {
        if (localStorage.getItem("theme")) return;
        root.setAttribute("data-theme", event.matches ? "light" : "dark");
        syncThemeButton();
      });
    }
  } catch (e) {}

  var filters = document.querySelectorAll(".filter");
  var cards = function () { return document.querySelectorAll("#more-grid .card"); };
  var empty = document.getElementById("filter-empty");

  function applyFilter(name) {
    var visible = 0;
    cards().forEach(function (card) {
      var show = name === "all" || card.getAttribute("data-category") === name;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      filters.forEach(function (other) { other.setAttribute("aria-pressed", "false"); });
      button.setAttribute("aria-pressed", "true");
      applyFilter(button.getAttribute("data-filter") || "all");
    });
  });

  function formatDate(iso) {
    var date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(copy.locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Oslo"
    }).format(date);
  }

  function formatSize(bytes) {
    if (!bytes || bytes < 0) return "";
    if (bytes < 900 * 1024) return Math.round(bytes / 1024) + " KB";
    return (bytes / 1024 / 1024).toLocaleString(copy.locale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }) + " MB";
  }

  function safeGithub(url, repo) {
    try {
      var parsed = new URL(url);
      if (parsed.protocol !== "https:" || parsed.hostname !== "github.com") return "";
      var base = "/xdkurbie/" + repo;
      if (parsed.pathname !== base && parsed.pathname.indexOf(base + "/") !== 0) return "";
      return parsed.href;
    } catch (e) {
      return "";
    }
  }

  function safeHttp(url) {
    try {
      var parsed = new URL(url);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return "";
      return parsed.href;
    } catch (e) {
      return "";
    }
  }

  function classify(name) {
    var n = name.toLowerCase();
    if (n.endsWith(".blockmap") || n.endsWith(".sig")) return null;
    if (n.indexOf("cli") !== -1 && (n.endsWith(".tar.gz") || n.endsWith(".zip"))) return null;
    if (n.endsWith(".dmg")) {
      return { order: 1, label: n.indexOf("universal") !== -1 ? "macOS universal" : "macOS", ext: ".dmg" };
    }
    if ((n.indexOf("macos") !== -1 || n.indexOf("darwin") !== -1) && n.endsWith(".zip")) {
      return { order: 2, label: "macOS", ext: ".zip" };
    }
    if (n.indexOf("arm64") !== -1 && n.endsWith(".exe")) return { order: 4, label: "Windows ARM64", ext: ".exe" };
    if (n.endsWith(".exe") && (n.indexOf("x64") !== -1 || n.indexOf("win") !== -1)) {
      return { order: 3, label: "Windows x64", ext: ".exe" };
    }
    if (n.endsWith(".exe")) return { order: 3, label: "Windows", ext: ".exe" };
    if (n.indexOf("arm64") !== -1 && n.endsWith(".msi")) return { order: 6, label: "Windows ARM64", ext: ".msi" };
    if (n.endsWith(".msi")) return { order: 6, label: "Windows x64", ext: ".msi" };
    if (n.indexOf("windows") !== -1 && n.endsWith(".zip")) return { order: 5, label: "Windows", ext: ".zip" };
    if (n.endsWith(".zip") && n.indexOf("web") !== -1) return { order: 7, label: "Web-zip", ext: ".zip" };
    if (n.endsWith(".zip")) return { order: 7, label: "Zip", ext: ".zip" };
    return null;
  }

  function makeButton(href, label, size, primary) {
    var link = document.createElement("a");
    link.className = primary ? "btn primary" : "btn";
    link.href = href;
    link.appendChild(document.createTextNode(label + " "));
    if (size) {
      var span = document.createElement("span");
      span.className = "size";
      span.textContent = size;
      link.appendChild(span);
    }
    var arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    link.appendChild(arrow);
    return link;
  }

  function readCache() {
    try {
      var raw = sessionStorage.getItem(CACHE);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || Date.now() - data.t > 60 * 60 * 1000) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  function writeCache(data) {
    try { sessionStorage.setItem(CACHE, JSON.stringify(data)); } catch (e) {}
  }

  function getJson(url) {
    return fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(8000)
    }).then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      return res.json();
    });
  }

  function knownRepos() {
    var names = {};
    document.querySelectorAll("[data-repo]").forEach(function (el) {
      names[el.getAttribute("data-repo")] = true;
    });
    names.xdkurbie = true;
    return names;
  }

  function updateDates(repos) {
    var byName = {};
    repos.forEach(function (repo) { byName[repo.name] = repo; });
    document.querySelectorAll("[data-repo]").forEach(function (article) {
      var repo = byName[article.getAttribute("data-repo")];
      var time = article.querySelector(".repo-time");
      if (!repo || !time || !repo.pushed_at) return;
      time.setAttribute("datetime", repo.pushed_at.slice(0, 10));
      time.textContent = formatDate(repo.pushed_at);
    });
    var newest = BASELINE;
    repos.forEach(function (repo) {
      var stamp = Date.parse(repo.pushed_at || "");
      if (stamp > newest) newest = stamp;
    });
    var updated = document.getElementById("updated");
    if (updated && newest > BASELINE) {
      var iso = new Date(newest).toISOString().slice(0, 10);
      updated.setAttribute("datetime", iso);
      updated.textContent = formatDate(iso);
    }
  }

  function addNewRepos(repos) {
    var known = knownRepos();
    var grid = document.getElementById("more-grid");
    if (!grid) return false;
    var fresh = repos.filter(function (repo) {
      return repo && repo.name && !repo.private && !repo.fork && !known[repo.name] && safeGithub(repo.html_url, repo.name);
    });
    fresh.sort(function (a, b) {
      return Date.parse(b.pushed_at || 0) - Date.parse(a.pushed_at || 0);
    });
    var active = document.querySelector('.filter[aria-pressed="true"]');
    var filter = active ? active.getAttribute("data-filter") : "all";
    fresh.forEach(function (repo) {
      var article = document.createElement("article");
      article.className = "card";
      article.setAttribute("data-repo", repo.name);
      article.setAttribute("data-category", "annet");
      var meta = document.createElement("p");
      meta.className = "meta";
      var bits = [copy.fetched];
      if (repo.archived) bits.push(copy.archived);
      if (repo.language) bits.push(repo.language);
      if (repo.pushed_at) bits.push(formatDate(repo.pushed_at));
      meta.textContent = bits.join(" · ");
      var title = document.createElement("h3");
      title.textContent = repo.name;
      var text = document.createElement("p");
      text.textContent = repo.description && String(repo.description).trim()
        ? repo.description
        : copy.noDesc;
      var actions = document.createElement("div");
      actions.className = "actions";
      actions.appendChild(makeButton(safeGithub(repo.html_url, repo.name), "GitHub", "", true));
      var home = safeHttp(repo.homepage || "");
      if (home) actions.appendChild(makeButton(home, copy.site, "", false));
      article.appendChild(meta);
      article.appendChild(title);
      article.appendChild(text);
      article.appendChild(actions);
      if (filter !== "all") article.hidden = true;
      grid.appendChild(article);
    });
    return fresh.length > 0;
  }

  function applyRelease(repoName, release) {
    var article = document.querySelector('[data-repo="' + CSS.escape(repoName) + '"]');
    var box = article && article.querySelector("[data-downloads]");
    if (!article || !box || !release) return false;
    var assets = Array.isArray(release.assets) ? release.assets : [];
    var items = assets.map(function (asset) {
      var kind = classify(asset.name || "");
      var href = safeGithub(asset.browser_download_url || "", repoName);
      if (!kind || !href) return null;
      return {
        order: kind.order,
        label: kind.label,
        ext: kind.ext,
        href: href,
        size: asset.size
      };
    }).filter(Boolean);
    if (items.some(function (item) { return item.ext === ".exe"; })) {
      items = items.filter(function (item) { return item.ext !== ".msi"; });
    }
    items.sort(function (a, b) { return a.order - b.order; });
    if (!items.length) return false;
    var outsidePrimary = false;
    article.querySelectorAll(".btn.primary").forEach(function (button) {
      if (!box.contains(button)) outsidePrimary = true;
    });
    var pageHref = safeGithub(release.html_url || "", repoName);
    box.replaceChildren();
    items.forEach(function (item, index) {
      box.appendChild(makeButton(item.href, item.label + " " + item.ext, formatSize(item.size), index === 0 && !outsidePrimary));
    });
    if (pageHref) {
      var page = document.createElement("a");
      page.className = "btn ghost";
      page.setAttribute("data-release-page", "true");
      page.href = pageHref;
      page.textContent = copy && copy.allFiles ? copy.allFiles : (lang === "en" ? "All files" : "Alle filer");
      box.appendChild(page);
    }
    var changed = false;
    var version = article.querySelector(".version");
    if (release.tag_name && version && release.tag_name !== article.getAttribute("data-version")) {
      version.textContent = release.tag_name;
      article.setAttribute("data-version", release.tag_name);
      if (!article.querySelector(".version-drift")) {
        var note = document.createElement("p");
        note.className = "note version-drift";
        note.textContent = copy.drift;
        var copy = article.querySelector(".feature-copy") || article;
        copy.appendChild(note);
      }
      changed = true;
    }
    return changed;
  }

  function refresh() {
    if (!document.getElementById("more-grid")) return;
    var cached = readCache();
    var releases = cached && cached.releases ? cached.releases : {};
    var announced = false;

    function finish(repos) {
      if (!Array.isArray(repos)) return;
      updateDates(repos);
      if (addNewRepos(repos)) announced = true;
      var wanted = [];
      document.querySelectorAll("[data-version]").forEach(function (el) {
        var name = el.getAttribute("data-repo");
        if (name) wanted.push(name);
      });
      Promise.all(wanted.map(function (name) {
        if (releases[name]) return Promise.resolve(releases[name]);
        return getJson("https://api.github.com/repos/xdkurbie/" + encodeURIComponent(name) + "/releases/latest")
          .then(function (data) {
            releases[name] = {
              tag_name: data.tag_name,
              html_url: data.html_url,
              assets: (data.assets || []).map(function (asset) {
                return {
                  name: asset.name,
                  browser_download_url: asset.browser_download_url,
                  size: asset.size
                };
              })
            };
            return releases[name];
          })
          .catch(function () { return null; });
      })).then(function () {
        wanted.forEach(function (name) {
          if (releases[name] && applyRelease(name, releases[name])) announced = true;
        });
        writeCache({ t: Date.now(), repos: repos, releases: releases });
        if (announced && status) {
          status.textContent = copy.updated;
        }
      });
    }

    if (cached && Array.isArray(cached.repos)) {
      finish(cached.repos);
      return;
    }

    getJson("https://api.github.com/users/xdkurbie/repos?per_page=100&sort=pushed")
      .then(function (repos) {
        finish(repos.map(function (repo) {
          return {
            name: repo.name,
            private: repo.private,
            fork: repo.fork,
            archived: repo.archived,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            pushed_at: repo.pushed_at
          };
        }));
        return getJson("https://api.github.com/repos/xdkurbie/xdkurbie.github.io/commits/main");
      })
      .then(function (commit) {
        var sha = commit && commit.sha;
        var el = document.getElementById("commit");
        if (!el || !sha) return;
        el.textContent = sha.slice(0, 7);
        el.setAttribute("href", "https://github.com/xdkurbie/xdkurbie.github.io/commit/" + sha);
      })
      .catch(function () {});
  }

  var motionBtn = document.getElementById("motion-toggle");
  var soundBtn = document.getElementById("sound-toggle");
  var audioCtx = null;

  function syncLangButtons() {
    var current = root.lang === "en" ? "en" : "nb";
    document.querySelectorAll("[data-lang-set]").forEach(function (el) {
      if (el.getAttribute("data-lang-set") === current) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });
    var group = document.querySelector(".langs");
    if (group) group.setAttribute("aria-label", current === "en" ? "Language" : "Språk");
    document.querySelectorAll(".nav-links").forEach(function (nav) {
      if (!nav.querySelector(".only-en")) return;
      nav.setAttribute("aria-label", current === "en" ? "Main menu" : "Hovedmeny");
    });
    if (current === "en") {
      document.querySelectorAll("[data-alt-en]").forEach(function (img) {
        img.alt = img.getAttribute("data-alt-en");
      });
    }
  }

  syncLangButtons();
  document.querySelectorAll("[data-lang-set]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var next = link.getAttribute("data-lang-set") === "en" ? "en" : "nb";
      try { localStorage.setItem("lang", next); } catch (e) {}
      if (next === (root.lang === "en" ? "en" : "nb")) return;
      try { sessionStorage.setItem("packet-lang-switch", "1"); } catch (e) {}
      if (link.tagName === "BUTTON") {
        event.preventDefault();
        root.lang = next;
        lang = next;
        syncLangButtons();
        syncPalette();
        document.dispatchEvent(new CustomEvent("packet-lang"));
      }
    });
  });

  function syncMotionButton() {
    if (!motionBtn) return;
    motionBtn.setAttribute("aria-pressed", root.getAttribute("data-motion") === "on" ? "true" : "false");
  }

  var fishReturn = null;

  function openFish() {
    var egg = document.getElementById("fish-egg");
    if (!egg || !egg.hidden) return;
    var still = egg.querySelector("img");
    if (still && still.dataset.src && !still.getAttribute("src")) still.src = still.dataset.src;
    fishReturn = document.activeElement;
    egg.hidden = false;
    var close = document.getElementById("fish-close");
    if (close) close.focus();
    document.dispatchEvent(new CustomEvent("packet-fish"));
  }

  function closeFish() {
    var egg = document.getElementById("fish-egg");
    if (!egg || egg.hidden) return;
    egg.hidden = true;
    var video = egg.querySelector("video");
    if (video) video.pause();
    if (fishReturn && fishReturn.focus) fishReturn.focus();
    fishReturn = null;
  }

  (function armFish() {
    var egg = document.getElementById("fish-egg");
    if (!egg) return;
    var close = document.getElementById("fish-close");
    if (close) close.addEventListener("click", closeFish);
    egg.addEventListener("click", function (event) {
      if (event.target === egg) closeFish();
    });
    document.addEventListener("keydown", function (event) {
      if (egg.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeFish();
      }
    });
    var portrait = document.querySelector(".node-portrait");
    if (portrait) {
      var taps = 0;
      var first = 0;
      portrait.addEventListener("click", function () {
        var now = Date.now();
        if (now - first > 4000) { taps = 0; first = now; }
        taps += 1;
        if (taps >= 5) { taps = 0; openFish(); }
      });
    }
    var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    var step = 0;
    document.addEventListener("keydown", function (event) {
      var key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key === konami[step]) {
        step += 1;
        if (step === konami.length) { step = 0; openFish(); }
      } else {
        step = key === konami[0] ? 1 : 0;
      }
    });
  })();

  function bootMotion() {
    if (root.getAttribute("data-motion") !== "on" || bootMotion.started) return;
    if (!document.querySelector("#hero, video.clip")) return;
    bootMotion.started = true;
    var script = document.createElement("script");
    script.src = "/motion.js";
    document.body.appendChild(script);
  }

  function journeyTier() {
    if (root.getAttribute("data-motion") !== "on") return "static";
    var cores = navigator.hardwareConcurrency || 8;
    var mem = navigator.deviceMemory || 8;
    var gl = false;
    try {
      var test = document.createElement("canvas");
      gl = !!(window.WebGL2RenderingContext && test.getContext("webgl2"));
    } catch (e) {}
    if (!gl || cores <= 2 || mem <= 2) return "video";
    if (cores <= 4 || mem <= 4 || matchMedia("(max-width: 720px)").matches) return "low";
    return "full";
  }

  function stageName() {
    var ids = ["hero", "krystall", "prosjekter", "om-meg", "demo", "kontakt"];
    var names = root.lang === "en"
      ? ["01 NETWORK", "02 CRYSTAL", "02 PROJECTS", "03 FOREST", "04 STUDIO", "05 CONTACT"]
      : ["01 NETTVERK", "02 KRYSTALL", "02 PROSJEKTER", "03 SKOG", "04 STUDIO", "05 KONTAKT"];
    var y = window.scrollY + 8;
    var i = 0;
    ids.forEach(function (id, idx) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= y) i = idx;
    });
    return names[i];
  }

  function bootScrubVideo() {
    var video = document.getElementById("journey-scrub");
    if (!video) return;
    root.setAttribute("data-journey", "video");
    if (bootScrubVideo.armed) return;
    bootScrubVideo.armed = true;
    var narrow = matchMedia("(max-width: 720px)").matches;
    video.poster = "/img/journey-poster.webp";
    video.src = narrow ? "/video/journey-scrub-sm.mp4" : "/video/journey-scrub.mp4";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    var duration = 12;
    video.addEventListener("loadedmetadata", function () {
      if (video.duration && isFinite(video.duration)) duration = video.duration;
    });
    var frame = 0;
    function apply() {
      frame = 0;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--page", p.toFixed(4));
      var label = document.getElementById("progress-label");
      if (label) label.textContent = stageName();
      if (video.readyState >= 1) {
        var target = Math.min(Math.max(0, duration - 0.04), p * duration);
        if (Math.abs((video.currentTime || 0) - target) > 0.04) {
          try { video.currentTime = target; } catch (e) {}
        }
      }
    }
    window.addEventListener("scroll", function () {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    }, { passive: true });
    apply();
    window.__journey = {
      stop: function () {
        root.removeAttribute("data-journey");
        video.removeAttribute("src");
        video.load();
      },
      start: function () { bootScrubVideo(); }
    };
  }

  function bootJourney() {
    if (root.getAttribute("data-motion") !== "on") {
      if (window.__journey && window.__journey.stop) window.__journey.stop();
      return;
    }
    if (window.__journey && window.__journey.start && root.getAttribute("data-journey") !== "3d" && root.getAttribute("data-journey") !== "video") {
      window.__journey.start();
      return;
    }
    if (bootJourney.started) return;
    var tier = journeyTier();
    if (tier === "static") return;
    bootJourney.started = true;
    if (tier === "video") { bootScrubVideo(); return; }
    var script = document.createElement("script");
    script.type = "module";
    script.src = "/journey-gl.js";
    script.dataset.tier = tier;
    document.body.appendChild(script);
  }

  syncMotionButton();
  if (motionBtn) {
    motionBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-motion") === "on" ? "off" : "on";
      root.setAttribute("data-motion", next);
      try { localStorage.setItem("motion", next); } catch (e) {}
      syncMotionButton();
      if (next === "on") { bootMotion(); bootJourney(); }
      else if (window.__journey && window.__journey.stop) window.__journey.stop();
    });
  }

  try {
    if (localStorage.getItem("sound") === "on" && soundBtn) {
      root.setAttribute("data-sound", "on");
      soundBtn.setAttribute("aria-pressed", "true");
    }
  } catch (e) {}

  function blip(freq) {
    if (root.getAttribute("data-sound") !== "on") return;
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === "suspended") audioCtx.resume();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.value = freq || 700;
    gain.gain.value = 0.02;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    var stopAt = audioCtx.currentTime + 0.045;
    gain.gain.exponentialRampToValueAtTime(0.0001, stopAt);
    osc.stop(stopAt);
  }

  if (soundBtn) {
    soundBtn.addEventListener("click", function () {
      var on = root.getAttribute("data-sound") !== "on";
      if (on) root.setAttribute("data-sound", "on");
      else root.removeAttribute("data-sound");
      soundBtn.setAttribute("aria-pressed", on ? "true" : "false");
      try { localStorage.setItem("sound", on ? "on" : "off"); } catch (e) {}
      if (on) blip(520);
    });
  }

  document.addEventListener("pointerdown", function (event) {
    var hit = event.target.closest && event.target.closest("a, button");
    if (!hit || hit.id === "sound-toggle") return;
    blip(hit.classList.contains("primary") ? 880 : 640);
  }, { passive: true });

  function bootLine() {
    if (!document.getElementById("hero") || root.getAttribute("data-motion") !== "on") return;
    try { if (sessionStorage.getItem("packet-boot")) return; } catch (e) { return; }
    var bar = document.createElement("div");
    bar.className = "boot";
    bar.setAttribute("role", "status");
    var text = document.createElement("p");
    var ascii = document.createElement("pre");
    var skip = document.createElement("button");
    skip.type = "button";
    skip.className = "hud-btn";
    skip.textContent = copy.skip;
    text.textContent = copy.phrases[0];
    ascii.textContent = "[          ]";
    bar.appendChild(text);
    bar.appendChild(ascii);
    bar.appendChild(skip);
    document.body.appendChild(bar);
    var phrases = copy.phrases;
    var step = 0;
    var timer = setInterval(function () {
      step += 1;
      var n = Math.min(10, step * 3);
      var fill = "";
      var pad = "";
      for (var i = 0; i < n; i++) fill += "#";
      for (var j = n; j < 10; j++) pad += ".";
      ascii.textContent = "[" + fill + pad + "]";
      if (phrases[step]) text.textContent = phrases[step];
    }, 260);
    function done() {
      clearInterval(timer);
      if (bar.parentNode) bar.parentNode.removeChild(bar);
      try { sessionStorage.setItem("packet-boot", "1"); } catch (e) {}
    }
    skip.addEventListener("click", done);
    setTimeout(done, 1200);
  }

  bootLine();
  window.addEventListener("load", function () {
    var run = function () { bootMotion(); };
    if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 1400 });
    else setTimeout(run, 350);
    var armJourney = function () {
      window.removeEventListener("scroll", armJourney);
      window.removeEventListener("wheel", armJourney);
      window.removeEventListener("touchstart", armJourney);
      window.removeEventListener("keydown", armJourney);
      bootJourney();
    };
    window.addEventListener("scroll", armJourney, { passive: true });
    window.addEventListener("wheel", armJourney, { passive: true });
    window.addEventListener("touchstart", armJourney, { passive: true });
    window.addEventListener("keydown", armJourney);
    if (window.scrollY > 8) armJourney();
  });

  refresh();
})();
