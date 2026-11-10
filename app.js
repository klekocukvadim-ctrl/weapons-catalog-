const CATEGORIES = [
  "пістолет",
  "автомат/штурмова гвинтівка",
  "снайперська гвинтівка",
  "кулемет",
  "пістолет-кулемет",
  "дробовик"
];

const SPEC_ROWS = [
  ["manufacturer", "Виробник", "factory"],
  ["years_adopted", "Прийнято на озброєння", "shield"],
  ["years_produced", "Роки виробництва", "calendar"],
  ["cartridge", "Калібр / набій", "cartridge"],
  ["operating_principle", "Принцип дії", "gear"],
  ["mass", "Маса", "mass"],
  ["length", "Довжина", "ruler"],
  ["barrel_length", "Довжина ствола", "barrel"],
  ["effective_range", "Дальність", "range"],
  ["magazine_capacity", "Живлення / магазин", "magazine"],
  ["rate_of_fire", "Темп вогню", "rate"]
];

const ICONS = {
  factory: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 20V10l6 3V10l6 3V7l6-2v15H3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 20v-3M12 20v-3M17 20v-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5l7 3v5.2c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V6.5l7-3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  cartridge: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 4h8v4H8V4zM8 8h8v11l-4 1.5L8 19V8z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 12h8" stroke="currentColor" stroke-width="1.7"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2M6.4 6.4l1.6 1.6M16 16l1.6 1.6M17.6 6.4L16 8M8 16l-1.6 1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  mass: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.5 8h7L18.5 20h-13L8.5 8z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 8V5.5M9.5 5.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 15.5l12-12 4.5 4.5-12 12L3.5 15.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8.5l1.2 1.2M10.2 6.3l1.2 1.2M12.4 4.1l1.2 1.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  barrel: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 9.5v5M19 9.5v5M12 10.2v3.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  range: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 3.5v2.5M12 18v2.5M3.5 12h2.5M18 12h2.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  magazine: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 4.5h8v15H8z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 8.5h8M8 12.5h8M8 16.5h8" stroke="currentColor" stroke-width="1.7"/></svg>',
  rate: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 16.5a7.5 7.5 0 1114 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 16.5l4.2-5.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.2" fill="currentColor"/></svg>',
  pistol: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 10.5h12.5l1.2-2h4.3v3.2H17L16 14H9.5l-1 5.5H6.2L7 14H5.5L3 12.2v-1.7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  rifle: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 13h13l2-3h5v2.2H18l-1.2 2.3H14l.4 3.2h-2.1L12 14.5H8.5L2 13.6V13z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  sniper: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 13.2h11.5L15 10h5.5v2H16l-1 2.4H13l.3 2.8h-2L11 14.6H7.5L2 13.8v-.6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="11" cy="8.2" r="2.1" stroke="currentColor" stroke-width="1.5"/></svg>',
  mg: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 11.5h14l1.5-2h4v2.4h-3.2L18 14H14.5l.4 3H12.6L12.2 14H8L3 12.4v-.9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 14.2l-2 5M10 14.2l-1 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  smg: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11h10l1-2h5v2.2H16L15 14H10.5l-.7 4.5H7.6L8.4 14H6.5L4 12.6V11z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  shotgun: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12.4h12.5l1.4-2.2H22v2.6h-5.3L17 15.2h-3.2l-.3 2.6h-2.2l.2-2.6H9.2L2 13.3v-.9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s6-5.2 6-10.2A6 6 0 006 10.8C6 15.8 12 21 12 21z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="2" stroke="currentColor" stroke-width="1.7"/></svg>',
  all: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13" y="4" width="7" height="7" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="13" width="7" height="7" rx="1.4" stroke="currentColor" stroke-width="1.7"/><rect x="13" y="13" width="7" height="7" rx="1.4" stroke="currentColor" stroke-width="1.7"/></svg>'
};

const CATEGORY_ICON = {
  "пістолет": "pistol",
  "автомат/штурмова гвинтівка": "rifle",
  "снайперська гвинтівка": "sniper",
  "кулемет": "mg",
  "пістолет-кулемет": "smg",
  "дробовик": "shotgun"
};

const CATEGORY_SHORT = {
  "пістолет": "пістолет",
  "автомат/штурмова гвинтівка": "автомат",
  "снайперська гвинтівка": "снайперська",
  "кулемет": "кулемет",
  "пістолет-кулемет": "пістолет-кулемет",
  "дробовик": "дробовик"
};

const state = {
  weapons: [],
  query: "",
  category: "",
  country: "",
  currentId: null,
  firstGrid: true
};

const els = {};
const drag = {
  active: false,
  startY: 0,
  lastY: 0,
  lastT: 0,
  dy: 0,
  velocity: 0
};

const reduceMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function $(id) {
  return document.getElementById(id);
}

function dash(value) {
  return value == null || value === "" ? "—" : value;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function uniqueCountries(list) {
  return [...new Set(list.map((w) => w.country).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "uk")
  );
}

function matches(weapon) {
  const q = state.query.trim().toLowerCase();
  if (state.category && weapon.category !== state.category) return false;
  if (state.country && weapon.country !== state.country) return false;
  if (!q) return true;
  const hay = [weapon.name, weapon.name_original, weapon.manufacturer, weapon.cartridge]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function icon(name) {
  return ICONS[name] || "";
}

function bindSkeletons(root) {
  root.querySelectorAll("img").forEach((img) => {
    const wrap = img.closest(".card-photo, .hero-media");
    if (!wrap) return;
    const done = () => wrap.classList.remove("is-loading");
    if (img.complete && img.naturalWidth) {
      done();
      return;
    }
    wrap.classList.add("is-loading");
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

function renderChips(container, values, current, allLabel, kind, withCategoryIcons) {
  const make = (value, label, pressed, iconName) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.innerHTML = `${icon(iconName)}<span>${escapeHtml(label)}</span>`;
    btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    btn.addEventListener("click", () => {
      state[kind] = value;
      updateChips();
      renderGrid();
    });
    return btn;
  };

  container.replaceChildren();
  container.appendChild(make("", allLabel, current === "", "all"));
  values.forEach((value) => {
    const ic = withCategoryIcons ? (CATEGORY_ICON[value] || "all") : "pin";
    container.appendChild(make(value, value, current === value, ic));
  });
}

function updateChips() {
  const sync = (container, current) => {
    const buttons = [...container.querySelectorAll(".chip")];
    buttons.forEach((btn, i) => {
      const value = i === 0 ? "" : btn.textContent.trim();
      btn.setAttribute("aria-pressed", current === value ? "true" : "false");
    });
  };
  sync(els.catChips, state.category);
  sync(els.countryChips, state.country);
}

function renderGrid() {
  const items = state.weapons.filter(matches);
  els.count.textContent = items.length
    ? `Зразків: ${items.length}`
    : "Нічого не знайдено";

  if (!items.length) {
    els.grid.innerHTML = `<p class="empty">За цим запитом зразків немає. Змініть пошук або фільтри.</p>`;
    return;
  }

  const stagger = state.firstGrid && !reduceMotion();
  els.grid.replaceChildren();
  items.forEach((w, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card" + (stagger ? " is-enter" : "");
    btn.style.setProperty("--i", String(i));
    btn.setAttribute("aria-label", `${w.name}, ${w.category}. Відкрити докладні відомості`);
    const catIcon = CATEGORY_ICON[w.category] || "all";
    btn.innerHTML = `
      <div class="card-photo is-loading">
        <img src="${escapeHtml(w.image)}" alt="${escapeHtml(w.name)}" width="300" height="188">
        <div class="card-overlay">
          <span class="badge">${icon(catIcon)}<span>${escapeHtml(CATEGORY_SHORT[w.category] || w.category)}</span></span>
          <h2>${escapeHtml(w.name)}</h2>
        </div>
      </div>`;
    btn.addEventListener("click", () => openDetail(w.id));
    els.grid.appendChild(btn);
  });
  bindSkeletons(els.grid);
  state.firstGrid = false;
}

function renderDetail(weapon) {
  els.sheetTitle.textContent = weapon.name;
  const creditLink = weapon.image_license_url
    ? ` · <a href="${escapeHtml(weapon.image_license_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(weapon.image_license)}</a>`
    : ` · ${escapeHtml(weapon.image_license || "")}`;

  const tiles = SPEC_ROWS.map(([key, label, ic]) => {
    const value = dash(weapon[key]);
    const long = String(value).length > 42;
    return `<div class="spec-tile${long ? " wide" : ""}">
      <div class="spec-icon">${icon(ic)}</div>
      <span class="spec-label">${escapeHtml(label)}</span>
      <span class="spec-value">${escapeHtml(value)}</span>
    </div>`;
  }).join("");

  const users = (weapon.users || [])
    .map((u) => `<li>${escapeHtml(u)}</li>`)
    .join("");

  const catIcon = CATEGORY_ICON[weapon.category] || "all";
  els.sheetBody.innerHTML = `
    <div class="hero">
      <div class="hero-media is-loading" id="hero-media">
        <img src="${escapeHtml(weapon.image)}" alt="${escapeHtml(weapon.name)}" width="1280" height="260">
      </div>
      <div class="hero-gradient"></div>
      <div class="hero-caption">
        <span class="badge">${icon(catIcon)}<span>${escapeHtml(weapon.category)}</span></span>
        <h2>${escapeHtml(weapon.name)}</h2>
        <p class="orig">${escapeHtml(weapon.name_original || "")}</p>
      </div>
    </div>
    <p class="credit">Фото: ${escapeHtml(weapon.image_credit || "невідомий автор")}${creditLink}. Джерело зображення: Wikimedia Commons.</p>
    <div class="detail">
      <div class="pills">
        <span class="pill">${icon(catIcon)} ${escapeHtml(weapon.category)}</span>
        <span class="pill">${icon("pin")} ${escapeHtml(weapon.country)}</span>
      </div>
      <h3 class="section-title">Характеристики</h3>
      <div class="spec-grid">${tiles}</div>
      <h3 class="section-title">Призначення</h3>
      <p class="prose">${escapeHtml(dash(weapon.purpose))}</p>
      <h3 class="section-title">Коротка історія</h3>
      <p class="prose">${escapeHtml(dash(weapon.short_history))}</p>
      <h3 class="section-title">Користувачі</h3>
      <ul class="users">${users || "<li>—</li>"}</ul>
      <h3 class="section-title">Джерело</h3>
      <a class="source" href="${escapeHtml(weapon.source_url)}" target="_blank" rel="noopener noreferrer">
        <strong>${escapeHtml(weapon.source_title || "Вікіпедія")}</strong>
        <span>Відкрити статтю у Вікіпедії</span>
      </a>
      ${weapon.source_notes ? `<p class="notes">${escapeHtml(weapon.source_notes)}</p>` : ""}
      ${weapon.manual_note ? `<p class="notes">${escapeHtml(weapon.manual_note)}</p>` : ""}
    </div>`;
  bindSkeletons(els.sheetBody);
  els.sheetBody.scrollTop = 0;
}

function setPanelY(y) {
  els.sheetPanel.style.transform = y ? `translateY(${y}px)` : "";
}

function openDetail(id, push = true) {
  const weapon = state.weapons.find((w) => w.id === id);
  if (!weapon) return;
  state.currentId = id;
  renderDetail(weapon);
  els.backdrop.hidden = false;
  requestAnimationFrame(() => {
    els.sheet.classList.add("is-open");
    els.backdrop.classList.add("is-open");
  });
  els.sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("sheet-open");
  setPanelY(0);
  els.backBtn.focus();
  if (push && location.hash !== `#/${id}`) {
    history.pushState({ id }, "", `#/${id}`);
  }
}

function closeDetail(push = true) {
  state.currentId = null;
  els.sheet.classList.remove("is-open", "is-dragging");
  els.backdrop.classList.remove("is-open");
  els.sheet.setAttribute("aria-hidden", "true");
  document.body.classList.remove("sheet-open");
  setPanelY("");
  window.setTimeout(() => {
    if (!state.currentId) els.backdrop.hidden = true;
  }, reduceMotion() ? 0 : 400);
  if (push && location.hash) {
    history.pushState({}, "", location.pathname + location.search);
  }
}

function syncFromHash() {
  const id = decodeURIComponent((location.hash || "").replace(/^#\/?/, ""));
  if (id && state.weapons.some((w) => w.id === id)) {
    openDetail(id, false);
  } else if (state.currentId) {
    closeDetail(false);
  }
}

function onSheetScroll() {
  if (reduceMotion()) return;
  const media = document.getElementById("hero-media");
  if (!media) return;
  const y = els.sheetBody.scrollTop;
  media.style.transform = `translateY(${y * 0.32}px) scale(1.05)`;
}

function onPointerDown(e) {
  if (!state.currentId) return;
  if (e.target.closest("button, a")) return;
  if (e.pointerType === "mouse" && e.button !== 0) return;
  drag.active = true;
  drag.startY = e.clientY;
  drag.lastY = e.clientY;
  drag.lastT = performance.now();
  drag.dy = 0;
  drag.velocity = 0;
  els.sheet.classList.add("is-dragging");
  els.sheetGrab.setPointerCapture(e.pointerId);
}

function onPointerMove(e) {
  if (!drag.active) return;
  const now = performance.now();
  const y = e.clientY;
  const dy = Math.max(0, y - drag.startY);
  const dt = Math.max(1, now - drag.lastT);
  drag.velocity = (y - drag.lastY) / dt;
  drag.lastY = y;
  drag.lastT = now;
  drag.dy = dy;
  setPanelY(dy);
}

function onPointerUp() {
  if (!drag.active) return;
  drag.active = false;
  els.sheet.classList.remove("is-dragging");
  const shouldClose = drag.dy > 120 || (drag.dy > 48 && drag.velocity > 0.45);
  if (shouldClose) {
    closeDetail(true);
  } else {
    setPanelY(0);
  }
}

function initSheetDrag() {
  els.sheetGrab.addEventListener("pointerdown", onPointerDown);
  els.sheetGrab.addEventListener("pointermove", onPointerMove);
  els.sheetGrab.addEventListener("pointerup", onPointerUp);
  els.sheetGrab.addEventListener("pointercancel", onPointerUp);
}

function update() {
  renderChips(els.catChips, CATEGORIES, state.category, "Усі", "category", true);
  renderChips(els.countryChips, uniqueCountries(state.weapons), state.country, "Усі", "country", false);
  renderGrid();
}

async function init() {
  els.grid = $("grid");
  els.count = $("count");
  els.catChips = $("category-chips");
  els.countryChips = $("country-chips");
  els.search = $("search");
  els.sheet = $("sheet");
  els.sheetPanel = $("sheet-panel");
  els.sheetBody = $("sheet-body");
  els.sheetTitle = $("sheet-title");
  els.sheetGrab = $("sheet-grab");
  els.backBtn = $("back-btn");
  els.closeBtn = $("close-btn");
  els.backdrop = $("backdrop");

  const res = await fetch("data/weapons.json");
  state.weapons = await res.json();
  update();

  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    renderGrid();
  });

  els.backBtn.addEventListener("click", () => closeDetail(true));
  els.closeBtn.addEventListener("click", () => closeDetail(true));
  els.backdrop.addEventListener("click", () => closeDetail(true));
  els.sheetBody.addEventListener("scroll", onSheetScroll, { passive: true });
  initSheetDrag();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.currentId) closeDetail(true);
  });

  window.addEventListener("popstate", syncFromHash);
  syncFromHash();

  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (err) {
      console.warn("Service worker не зареєстровано:", err);
    }
  }
}

init().catch((err) => {
  document.getElementById("grid").innerHTML =
    `<p class="empty">Не вдалося завантажити каталог. Відкрийте сторінку через локальний сервер.</p>`;
  console.error(err);
});
