/* ================= DATA ================= */

const DISTRICTS = [
  {
    id: 'mueang', name: 'อำเภอเมืองสมุทรปราการ', lat: 13.5991, lng: 100.5968,
    tag: ''
  },
  {
    id: 'bangphli', name: 'อำเภอบางพลี', lat: 13.6040, lng: 100.7123,
    tag: ''
  },
  {
    id: 'bangsaothong', name: 'อำเภอบางเสาธง', lat: 13.5280, lng: 100.7800,
    tag: ''
  },
  {
    id: 'bangbo', name: 'อำเภอบางบ่อ', lat: 13.5744, lng: 100.8358,
    tag: ''
  },
  {
    id: 'phrapradaeng', name: 'อำเภอพระประแดง', lat: 13.6570, lng: 100.5330,
    tag: ''
  },
  {
    id: 'phrasamutchedi', name: 'อำเภอพระสมุทรเจดีย์', lat: 13.5998, lng: 100.5940,
    tag: ''
  }
];

const DISTRICT_ICONS = {
};

/* หนึ่งไฮไลต์ต่ออำเภอ สำหรับการ์ดแนะนำในหน้าแรก */
const FEATURED_IDS = [
  'erawan', 'bangphliold', 'bangsaothongcom',
  'bangbowat', 'bangkachao', 'chedi'
];

const CAT_LABEL = {
  all: 'ทั้งหมด',
  landmark: 'แลนด์มาร์ก',
  temple: 'วัด',
  nature: 'ธรรมชาติ',
  market: 'ตลาด/ชุมชน',
  cafe: 'คาเฟ่/ร้านอาหาร'
};

const PLACES = [
  {
    id: 'tower',
    district: 'mueang',
    name: 'หอชมเมืองสมุทรปราการ',
    category: 'landmark',
    teaser: '',
    about: 'สถานที่ท่องเที่ยวของจังหวัดสมุทรปราการ ภายในอาคารมีการจัดแสดงแบบพิพิธภัณฑ์ โดยรวบรวมเรื่องราวของสถานที่สำคัญ ข้อมูลบุคคลสำคัญ ความรู้ประจำจังหวัด แหล่งรวมหนังสือ, ภาพยนตร์, ดนตรี และเทคโนโลยีที่น่าสนใจ ยอดหอคอยเป็นจุดที่สามารถชมทัศนียภาพได้ 360 องศา พื้นที่อุทยานการเรียนรู้อ่าวไทยแบ่งพื้นที่ออกเป็น 4 ส่วนคือ พิพิธภัณฑ์เด็ก พิพิธภัณฑ์สมุทรปราการ ห้องสมุด หอชมเมือง',
    transport: 'รถไฟฟ้า BTS สายสีเขียว สถานีปากน้ำ E16 จากนั้นเดินสกายวอล์คและออกทางออก 6 เป็นทางออกที่เชื่อมต่อกับบริเวณหอชมเมือง',
    image: "img/chommueng.png"
  },

  {
    id: 'erawan',
    district: 'mueang',
    name: 'พิพิธภัณฑ์ช้างเอราวัณ',
    category: 'landmark',
    teaser: '',
    about: 'เป็นประติมากรรมลอยตัวรูปช้าง 3 เศียร ซึ่งในทางวรรณคดีไทยเอราวัณซึ่งมีเศียรทั้งหมด 33 เศียร แต่เนื่องจากปัญหาขนาดและโครงสร้างที่ซับซ้อนจึงลดมาเหลือเพียง 3 เศียร พิพิธภัณฑ์ช้างเอราวัณ เป็นแหล่งท่องเที่ยวที่สำคัญและโดดเด่นแห่งหนึ่งของจังหวัดสมุทรปราการ ',
    transport: 
  'รถไฟฟ้า BTS สายสีเขียว ลงสถานีช้างเอราวัณ E17 ออกทางออกที่ 2\n' +
  'รถโดยสารประจำทางขององค์การขนส่งมวลชนกรุงเทพ 2, 23, 25, 102, 129, 142, 365, 511, 536\n' +
  'รถโดยสารประจำทางของเอกชน 2, 25, 507, 513, 522, 3-23E, 3-32, 365, 1141, 1209',
    image: "img/chang.jpg"
  },

  {
    id: 'asokaram',
    district: 'mueang',
    name: 'วัดอโศการาม',
    category: 'temple',
    teaser: '',
    about: '',
    transport: '',
    image: "images/chedi.jpg"
  },

  {
    id: 'bangpu',
    district: 'mueang',
    name: 'สถานตากอากาศบางปู',
    category: 'nature',
    teaser: '',
    about: '',
    transport: '',
    image: "img/Bangpu.png"
  },

  {
    id: 'crocfarm',
    district: 'mueang',
    name: 'ฟาร์มจระเข้สมุทรปราการ',
    category: 'nature',
    teaser: '',
     about: '',
    transport: '',
    image: "img/farmcrocodile.png"
  },

  {
    id: 'bangphliold',
    district: 'bangphli',
    name: 'ตลาดโบราณบางพลีใหญ่',
    category: 'market',
    teaser: '',
     about: '',
    transport: '',
    image: "images/chedi.jpg"
  },

  {
    id: 'watbangphli',
    district: 'bangphli',
    name: 'วัดบางพลีใหญ่ใน (หลวงพ่อโต)',
    category: 'temple',
    teaser: '',
     about: '',
    transport: '',
    image: "img/watbangphli.png"
  },

  {
    id: 'bangkachao',
    district: 'phrapradaeng',
    name: 'คุ้งบางกะเจ้า',
    category: 'nature',
    teaser: '',
     about: '',
    transport: '',
    image: "images/chedi.jpg"
  },

  {
    id: 'phrapradaengcity',
    district: 'phrapradaeng',
    name: 'ตัวเมืองพระประแดง',
    category: 'market',
    teaser: '',
     about: '',
    transport: '',
    image: "images/chedi.jpg"
  },

  {
    id: 'chedi',
    district: 'phrasamutchedi',
    name: 'พระสมุทรเจดีย์',
    category: 'landmark',
    teaser: '',
     about: '',
    transport: '',
    image: "images/chedi.jpg"
  },

  {
    id: 'fort',
    district: 'phrasamutchedi',
    name: 'ป้อมพระจุลจอมเกล้า',
    category: 'landmark',
    teaser: '',
     about: '',
    transport: '',
    image: "img/pompragul.png"
  },

  {
    id: 'bangbowat',
    district: 'bangbo',
    name: 'วัดในอำเภอบางบ่อ',
    category: 'temple',
    teaser: '',
    about: '',
    transport: '',
  },

  {
    id: 'bangsaothongcom',
    district: 'bangsaothong',
    name: 'ตลาดชุมชนบางเสาธง',
    category: 'market',
    teaser: '',
     about: '',
    transport: '',
    image: "images/chedi.jpg"
  }
];


/* ================= UTILS & UI FUNCTIONS ================= */

function toggleDropdown() {
  document.getElementById("submenu").classList.toggle("active");
  document.getElementById("arrow").classList.toggle("rotate");
}


function placeholderThumb() {
  return `
    <svg class="place-thumb-svg"
         viewBox="0 0 88 88"
         preserveAspectRatio="xMidYMid slice"
         aria-hidden="true">
      <rect width="88" height="88" fill="#cfe9fb"/>
      <rect y="56" width="88" height="32" fill="#b7dfa0"/>
      <circle cx="26" cy="28" r="11" fill="#ffffff" opacity="0.9"/>
      <circle cx="38" cy="33" r="9" fill="#ffffff" opacity="0.9"/>
    </svg>`;
}


/* รูปที่ยังไม่มีไฟล์จริง (เช่น images/*.jpg ที่ยังไม่ได้เพิ่ม)
   จะโหลดไม่สำเร็จ -> สลับไปใช้ภาพประกอบ SVG แทนโดยอัตโนมัติ */
function handleImgError(imgEl) {
  imgEl.outerHTML = placeholderThumb();
}


/* ================= HOME: DISTRICT MAP ================= */

/* รูปทรงแต่ละอำเภอ (โพลิกอนอย่างง่าย จำลองจากแผนที่จังหวัดสมุทรปราการ)
   fill / labelColor / labelPos ใช้สำหรับวาดและติดป้ายชื่อ */
const DISTRICT_SHAPES = {
  phrapradaeng: {
    d: "M55,95 L170,20 L300,95 L215,140 L65,175 Z",
    fill: "#ffffff",
    label: { x: 168, y: 108, rotate: -15, color: "#2C4F86", size: 12 }
  },
  bangphli: {
    d: "M300,95 L345,50 L430,68 L392,195 L215,140 Z",
    fill: "#fdfdfd",
    label: { x: 330, y: 125, rotate: 0, color: "#2C4F86", size: 12 }
  },
  bangsaothong: {
    d: "M430,68 L448,205 L420,258 L392,195 Z",
    fill: "#ffffff",
    label: { x: 420, y: 175, rotate: -80, color: "#2C4F86", size: 10 }
  },
  bangbo: {
    d: "M430,68 L525,45 L568,150 L538,248 L448,205 Z",
    fill: "#ffffff",
    label: { x: 498, y: 148, rotate: -8, color: "#2C4F86", size: 12 }
  },
  mueang: {
    d: "M215,140 L392,195 L420,258 L268,302 L183,308 L52,232 L65,175 Z",
    fill: "#ffffff",
    label: { x: 232, y: 232, rotate: 0, color: "#2C4F86", size: 13 }
  },
  phrasamutchedi: {
    d: "M183,308 L52,232 L18,248 L45,312 L128,345 Z",
    fill: "#ffffff",
    label: { x: 88, y: 288, rotate: -15, color: "#2C4F86", size: 10.5 }
  }
};



function renderDistrictMap() {

  const holder = document.getElementById("districtGrid");

  if (!holder) return;

  const districtGroups = DISTRICTS.map(d => {

    const shape = DISTRICT_SHAPES[d.id];

    if (!shape) return "";

    const lbl = shape.label;

    const transform = lbl.rotate
      ? ` transform="rotate(${lbl.rotate} ${lbl.x} ${lbl.y})"`
      : "";

    return `
      <g class="spk-district" data-id="${d.id}" tabindex="0" role="link" aria-label="${d.name}">
        <title>${d.name}</title>
        <path d="${shape.d}" fill="${shape.fill}" stroke="#2255aa" stroke-width="1.5"/>
        <text x="${lbl.x}" y="${lbl.y}" text-anchor="middle" font-size="${lbl.size}" fill="${lbl.color}"${transform}>${d.name.replace("อำเภอ", "อ.")}</text>
      </g>`;

  }).join("");



  holder.innerHTML = `
    <div class="spk-map-wrap">
      <svg class="spk-map" viewBox="0 0 580 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="แผนที่จังหวัดสมุทรปราการ 6 อำเภอ">
        ${districtGroups}

      </svg>

    </div>
  `;

  holder.querySelectorAll(".spk-district").forEach(g => {

    const id = g.getAttribute("data-id");

    const go = () => {
      location.hash = `#places-${id}`;
    };

    g.addEventListener("click", go);

    g.addEventListener("keydown", (e) => {

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }

    });

  });

}


/* ================= HOME: FEATURED PLACES ================= */

function renderFeaturedHighlights() {

  const grid = document.getElementById("featuredGrid");

  if (!grid) return;

  const featured = FEATURED_IDS
    .map(id => PLACES.find(p => p.id === id))
    .filter(Boolean);

  grid.innerHTML = featured.map((p, i) => {

    const district = DISTRICTS.find(d => d.id === p.district);
    const side = i % 2 === 0 ? "reveal-left" : "reveal-right";

    return `
      <a class="featured-card reveal ${side}" href="#place-${p.id}">

        <div class="featured-thumb">
          ${
            p.image
              ? `<img src="${p.image}" alt="${p.name}" onerror="handleImgError(this)">`
              : placeholderThumb()
          }
        </div>

        <div class="featured-info">
          <span class="featured-district">${district ? district.name : ""}</span>
          <span class="featured-name">${p.name}</span>
          <span class="featured-teaser">${p.teaser}</span>
        </div>

      </a>
    `;

  }).join("");
}


/* ================= SCROLL REVEAL ================= */

let revealObserver = null;
const revealTracked = new WeakSet();

function ensureRevealObserver() {

  if (revealObserver || typeof IntersectionObserver === "undefined") return;

  revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }

    });

  }, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });

}

function observeReveals(root) {

  root = root || document;

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const els = root.querySelectorAll(".reveal:not(.visible)");

  if (reduceMotion || typeof IntersectionObserver === "undefined") {
    els.forEach(el => el.classList.add("visible"));
    return;
  }

  ensureRevealObserver();

  els.forEach(el => {

    if (!revealTracked.has(el)) {
      revealTracked.add(el);
      revealObserver.observe(el);
    }

  });

}


/* ================= SUBMENU ================= */

function renderSubmenu() {
  const submenu = document.getElementById("submenu");

  if (!submenu) return;

  submenu.innerHTML = DISTRICTS.map(d => `
    <li>
      <a href="#places-${d.id}" data-close>
        ${d.name}
      </a>
    </li>
  `).join("");
}


/* ================= STATE ================= */

let currentDistrictId = "mueang";
let currentCategory = "all";

let detailPlaces = [];
let detailIndex = 0;


/* ================= DISTRICT MAP ================= */

function updateDistrictMap(distId) {

  const district = DISTRICTS.find(d => d.id === distId);
  const map = document.getElementById("districtMap");

  if (!district || !map) return;

  map.src =
    `https://www.google.com/maps?q=${district.lat},${district.lng}&z=13&output=embed`;
}


/* ================= PLACES VIEW ================= */

function renderPlacesView(distId) {

  currentDistrictId = distId;
  currentCategory = "all";

  const dObj = DISTRICTS.find(d => d.id === distId);

  if (!dObj) return;

  /* ชื่ออำเภอ */
  document.getElementById("placesDistName").textContent = dObj.name;

  /* อัปเดตแผนที่ตามอำเภอ */
  updateDistrictMap(distId);

  /* สถานที่ของอำเภอนั้น */
  const districtPlaces = PLACES.filter(
    p => p.district === distId
  );

  /* ตรงนี้คือส่วนที่หายไปในโค้ดเดิม */
  const categories = [
    "all",
    ...new Set(districtPlaces.map(p => p.category))
  ];


  /* ================= FILTER CHIPS ================= */

  const chipContainer = document.getElementById("filterChips");

  chipContainer.innerHTML = categories.map(cat => `
    <button
      class="chip ${cat === currentCategory ? 'active' : ''}"
      data-cat="${cat}">
      ${CAT_LABEL[cat] || cat}
    </button>
  `).join("");


  chipContainer.querySelectorAll(".chip").forEach(btn => {

    btn.addEventListener("click", () => {

      currentCategory = btn.dataset.cat;

      chipContainer
        .querySelectorAll(".chip")
        .forEach(b => {
          b.classList.toggle("active", b === btn);
        });

      renderPlaceList();
    });

  });


  renderPlaceList();
}


/* ================= PLACE LIST ================= */

function renderPlaceList() {

  const list = document.getElementById("placeList");
  const countEl = document.getElementById("placesCount");

  if (!list) return;

  const districtPlaces = PLACES.filter(
    p => p.district === currentDistrictId
  );

  const filtered = districtPlaces.filter(
    p =>
      currentCategory === "all" ||
      p.category === currentCategory
  );


  if (countEl) {
    countEl.textContent = `${filtered.length} สถานที่`;
  }


  list.innerHTML = filtered.length

    ? filtered.map(p => `
        <a class="place-card" href="#place-${p.id}">

          <div class="place-thumb">
            ${
              p.image
                ? `<img src="${p.image}" alt="${p.name}" onerror="handleImgError(this)">`
                : placeholderThumb()
            }
          </div>

          <div class="place-info">
            <span class="place-name">
              ${p.name}
            </span>

            <span class="place-teaser">
              ${p.teaser}
            </span>
          </div>

        </a>
      `).join("")

    : `
        <div class="place-empty">
          ไม่พบสถานที่ในหมวดนี้
        </div>
      `;
}


/* ================= PLACE DETAIL ================= */

function renderPlaceDetail(placeId) {

  const p = PLACES.find(x => x.id === placeId);

  if (!p) return;


  detailPlaces = PLACES.filter(
    x => x.district === p.district
  );

  detailIndex = detailPlaces.findIndex(
    x => x.id === placeId
  );

  if (detailIndex < 0) {
    detailIndex = 0;
  }


  buildDetailCoverflow();
  updateDetailContent();
}


/* ================= COVERFLOW ================= */

function buildDetailCoverflow() {

  const track = document.getElementById("cfDetailTrack");
  const wrap = document.getElementById("cfDetailWrap");

  if (!track || !wrap) return;


  track.innerHTML = detailPlaces.map(dp => `
    <div
      class="cf-card compact"
      data-id="${dp.id}"
      style="background-image: url('${dp.image || ""}');">

      <div class="cf-body"></div>

    </div>
  `).join("");


  const cards = [...track.children];


  function renderDetailCF() {

    cards.forEach((card, i) => {

      const offset = i - detailIndex;
      const abs = Math.abs(offset);

      let tx;
      let rot;
      let scale;
      let z;
      let op;


      if (abs === 0) {

        tx = 0;
        rot = 0;
        scale = 1;
        z = 30;
        op = 1;

      } else {

        tx = offset * 115;
        rot = offset > 0 ? -42 : 42;
        scale = 0.82;
        z = 20 - abs;
        op = abs > 2 ? 0 : 0.55;

      }


      card.style.transform =
        `translateX(${tx}px) rotateY(${rot}deg) scale(${scale})`;

      card.style.zIndex = z;
      card.style.opacity = op;

      card.style.pointerEvents =
        abs > 2 ? "none" : "auto";

      card.classList.toggle(
        "is-active",
        abs === 0
      );

    });

  }


  function goTo(i) {

    detailIndex = i;

    renderDetailCF();
    updateDetailContent();

  }


  cards.forEach((card, i) => {

    card.addEventListener("click", () => {

      if (i !== detailIndex) {
        goTo(i);
      }

    });

  });


  const prev =
    document.getElementById("cfDetailPrev");

  const next =
    document.getElementById("cfDetailNext");


  if (prev) {
    prev.onclick = () => {
      goTo(
        Math.max(
          0,
          detailIndex - 1
        )
      );
    };
  }


  if (next) {
    next.onclick = () => {
      goTo(
        Math.min(
          detailPlaces.length - 1,
          detailIndex + 1
        )
      );
    };
  }


  /* ปัดซ้าย-ขวาบนมือถือ */

  let startX = null;


  wrap.onpointerdown = e => {
    startX = e.clientX;
  };


  wrap.onpointerup = e => {

    if (startX === null) return;

    const dx = e.clientX - startX;


    if (dx > 40) {

      goTo(
        Math.max(
          0,
          detailIndex - 1
        )
      );

    } else if (dx < -40) {

      goTo(
        Math.min(
          detailPlaces.length - 1,
          detailIndex + 1
        )
      );

    }


    startX = null;

  };


  renderDetailCF();
}


/* ================= DETAIL CONTENT ================= */

function updateDetailContent() {

  const p = detailPlaces[detailIndex];

  if (!p) return;


  document.getElementById("detailName").textContent =
    p.name;

  document.getElementById("detailAbout").textContent =
    p.about;

  document.getElementById("detailTransport").textContent =
    p.transport;






  history.replaceState(
    null,
    "",
    `#place-${p.id}`
  );
}


/* ================= SPA ROUTER ================= */

const views = {

  home: document.getElementById("view-home"),

  places: document.getElementById("view-places"),

  place: document.getElementById("view-place"),

  history: document.getElementById("view-history"),

  credits: document.getElementById("view-credits")

};


function route() {

  const hash =
    location.hash || "#home";


  /* ปิดเมนู */

  const menuToggle =
    document.getElementById("menu-toggle");

  if (menuToggle) {
    menuToggle.checked = false;
  }


  /* ซ่อนทุกหน้า */

  Object.values(views).forEach(v => {

    if (v) {
      v.classList.remove("active");
    }

  });


  /* ================= HOME ================= */

  if (hash === "#home") {

    views.home.classList.add("active");
    renderDistrictMap();
    renderFeaturedHighlights();
    observeReveals(views.home);

  }


  /* ================= DISTRICT ================= */

  else if (hash.startsWith("#places-")) {

    const distId =
      hash.replace("#places-", "");

    renderPlacesView(distId);

    views.places.classList.add("active");

  }


  /* ================= PLACE DETAIL ================= */

  else if (hash.startsWith("#place-")) {

    const placeId =
      hash.replace("#place-", "");

    renderPlaceDetail(placeId);

    views.place.classList.add("active");

  }


  /* ================= HISTORY ================= */

  else if (hash === "#history") {

    views.history.classList.add("active");

  }


  /* ================= CREDITS ================= */

  else if (hash === "#credits") {

    views.credits.classList.add("active");

  }


  /* ================= DEFAULT ================= */

  else {

    views.home.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* ================= EVENTS ================= */

window.addEventListener(
  "hashchange",
  route
);


/* ================= INIT ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderSubmenu();

    route();

  }
);