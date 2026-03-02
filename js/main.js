/**
 * main.js
 * profile.js のデータを読み込んでページを描画し、
 * アコーディオンの開閉を制御します。
 */

/* ── SVG icons ──────────────────────────────────────────────── */
const ICONS = {
  chevron: `<svg class="chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
  </svg>`,
  link: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"/>
    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"/>
  </svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`,
  mail: `<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
  </svg>`,
  zenn: `<svg viewBox="0 0 88 88" fill="currentColor" aria-hidden="true">
    <path d="M9.0 78.2L49.1 9.8h16.6L25.5 78.2H9zm32.6 0L82.5 9.8H66L25 78.2h16.6z"/>
  </svg>`,
  briefcase: `💼`,
  graduation: `🎓`,
  cert: `🏆`,
  profile: `👤`,
  building: `🏢`,
  folder: `📁`,
  youtube: `▶`,
};

/* ── Helpers ────────────────────────────────────────────────── */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function escHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── Accordion helper ───────────────────────────────────────── */
function setupAccordion(btn, panel) {
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("open", !isOpen);
  });
}

/* ── Header ─────────────────────────────────────────────────── */
function renderHeader(p) {
  // Name / title
  const headerText = document.getElementById("header-text");
  headerText.innerHTML = `
    <h1>${escHtml(p.name)}</h1>
    <p class="name-en">${escHtml(p.nameEn)}</p>
    <span class="title-badge">${escHtml(p.title)}</span>
  `;

  // Avatar
  const avatarWrap = document.getElementById("avatar-wrap");
  if (p.avatar) {
    avatarWrap.innerHTML = `<img src="${escHtml(p.avatar)}" alt="${escHtml(p.name)}">`;
  }

  // Contact links
  const contactEl = document.getElementById("contact-links");
  const links = [];

  if (p.contact.email) {
    // Base64デコードでメールアドレスを復元（スパム対策）
    const decodedEmail = atob(p.contact.email);
    // クリック時にのみmailtoを生成（ボット対策）
    links.push(`<a href="#" class="email-link" data-email="${escHtml(p.contact.email)}">${ICONS.mail} ${escHtml(decodedEmail)}</a>`);
  }
  if (p.contact.github) {
    links.push(`<a href="${escHtml(p.contact.github)}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>`);
  }
  if (p.contact.zenn) {
    links.push(`<a href="${escHtml(p.contact.zenn)}" target="_blank" rel="noopener">${ICONS.zenn} Zenn</a>`);
  }
  if (p.contact.linkedin) {
    links.push(`<a href="${escHtml(p.contact.linkedin)}" target="_blank" rel="noopener">🔗 LinkedIn</a>`);
  }
  if (p.contact.twitter) {
    links.push(`<a href="${escHtml(p.contact.twitter)}" target="_blank" rel="noopener">🐦 Twitter / X</a>`);
  }
  if (p.contact.blog) {
    links.push(`<a href="${escHtml(p.contact.blog)}" target="_blank" rel="noopener">📝 Blog</a>`);
  }
  contactEl.innerHTML = links.join("");
}

/* ── Summary ────────────────────────────────────────────────── */
function renderSummary(p) {
  const el = document.getElementById("summary-text");
  if (!p.summary) { el.closest(".section").hidden = true; return; }

  if (Array.isArray(p.summary)) {
    el.innerHTML = p.summary.map(paragraph => `<p>${escHtml(paragraph)}</p>`).join("");
  } else {
    el.textContent = p.summary;
  }
}

/* ── Skills ─────────────────────────────────────────────────── */
function renderSkills(p) {
  const container = document.getElementById("skills-grid");
  if (!p.skills || p.skills.length === 0) {
    container.closest(".section").hidden = true;
    return;
  }
  container.innerHTML = p.skills.map(cat => `
    <div class="skill-category">
      <div class="skill-category-name">${escHtml(cat.category)}</div>
      <div class="tag-list">
        ${cat.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ── Experience ─────────────────────────────────────────────── */
function renderExperience(p) {
  const list = document.getElementById("experience-list");
  if (!p.experience || p.experience.length === 0) {
    list.closest(".section").hidden = true;
    return;
  }

  p.experience.forEach((job, ji) => {
    const card = el("div", "company-card");

    // Company header (always visible)
    const companyNameHtml = job.companyUrl
      ? `<a href="${escHtml(job.companyUrl)}" target="_blank" rel="noopener">${escHtml(job.company)}</a>`
      : escHtml(job.company);

    card.innerHTML = `
      <div class="company-header">
        <div class="company-meta">
          <div class="company-dot">${ICONS.building}</div>
          <div class="company-info">
            <div class="company-name">${companyNameHtml}</div>
            <div class="company-role">${escHtml(job.role)}</div>
            <div class="company-period">${escHtml(job.period)}</div>
          </div>
        </div>
        ${job.overview ? `<p class="company-overview">${escHtml(job.overview)}</p>` : ""}
      </div>
    `;

    // Projects section
    if (job.projects && job.projects.length > 0) {
      const projectsSection = el("div", "projects-section");

      const toggleBtn = el("button", "projects-toggle");
      toggleBtn.setAttribute("aria-controls", `projects-${ji}`);
      toggleBtn.innerHTML = `
        <span>${ICONS.folder} 主なプロジェクト詳細 (${job.projects.length}件)</span>
        ${ICONS.chevron}
      `;

      const projectsList = el("div", "projects-list");
      projectsList.id = `projects-${ji}`;

      job.projects.forEach((proj, pi) => {
        const item = el("div", "project-item");

        const projToggle = el("button", "project-toggle");
        projToggle.setAttribute("aria-controls", `proj-panel-${ji}-${pi}`);
        projToggle.innerHTML = `
          <span class="project-toggle-icon">▸</span>
          <span class="project-toggle-text">
            <span class="project-toggle-name">${escHtml(proj.name)}</span>
            <span class="project-toggle-period">${escHtml(proj.period)}</span>
          </span>
          ${ICONS.chevron}
        `;

        const panel = el("div", "project-panel");
        panel.id = `proj-panel-${ji}-${pi}`;

        // Role badge
        const roleBadge = proj.role
          ? `<span class="project-role-badge">${escHtml(proj.role)}</span>`
          : "";

        // Description
        const description = proj.description
          ? `<p class="project-description">${escHtml(proj.description)}</p>`
          : "";

        // Tech tags
        const techTags = (proj.tech && proj.tech.length > 0)
          ? `<div class="project-tech-list">${proj.tech.map(t => `<span class="tag">${escHtml(t)}</span>`).join("")}</div>`
          : "";

        // 統一メディアギャラリー（画像・GIF・MP4動画・YouTube を同じグリッドに並べる）
        let mediaHtml = "";
        const mediaItems = [
          ...(proj.images || []).map(img => {
            // 文字列の場合はオブジェクトに変換
            if (typeof img === 'string') {
              return { type: "image", url: img, caption: "" };
            }
            return { type: "image", ...img };
          }),
          ...(proj.videos || []).map(v   => ({ type: "video", ...v })),
          ...(proj.youtube ? [{ type: "youtube", id: extractYouTubeId(proj.youtube) }] : []),
        ];
        if (mediaItems.length > 0) {
          const countClass =
            mediaItems.length === 1 ? "count-1" :
            mediaItems.length === 2 ? "count-2" :
            mediaItems.length === 3 ? "count-3" : "count-many";

          const cells = mediaItems.map(m => {
            if (m.type === "image") {
              return `<div class="media-cell">
                <img src="${escHtml(m.url)}" alt="${escHtml(m.caption || "")}" loading="lazy">
                ${m.caption ? `<div class="media-caption">${escHtml(m.caption)}</div>` : ""}
              </div>`;
            } else if (m.type === "video") {
              return `<div class="media-cell">
                <video autoplay loop muted playsinline preload="metadata">
                  <source src="${escHtml(m.url)}" type="video/mp4">
                </video>
                ${m.caption ? `<div class="media-caption">${escHtml(m.caption)}</div>` : ""}
              </div>`;
            } else {
              return `<div class="media-cell">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/${escHtml(m.id)}"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>`;
            }
          }).join("");

          mediaHtml = `<div class="project-media-gallery ${countClass}">${cells}</div>`;
        }

        // Links（OGPカード or プレーンボタン）
        let linksHtml = "";
        if (proj.links && proj.links.length > 0) {
          // プレーンボタン（label のみ指定、ogp: false）
          const plainLinks = proj.links.filter(l => l.ogp === false);
          // OGPカード（デフォルト: ogp: true）
          const ogpLinks  = proj.links.filter(l => l.ogp !== false);

          const plainHtml = plainLinks.length
            ? `<div class="project-link-buttons">
                ${plainLinks.map(lnk => `
                  <a href="${escHtml(lnk.url)}" target="_blank" rel="noopener" class="project-link-btn">
                    ${ICONS.link} ${escHtml(lnk.label)}
                  </a>`).join("")}
               </div>` : "";

          linksHtml = `<div class="project-links">${plainHtml}</div>`;

          // OGPカードは非同期で後から差し込む
          if (ogpLinks.length) {
            // プレースホルダー付き div を返す（data属性にリンク情報を持たせる）
            const placeholders = ogpLinks.map((lnk, idx) => {
              const pid = `ogp-${ji}-${pi}-${idx}`;
              return `<div class="ogp-card-loading" id="${pid}">
                <span class="ogp-spinner"></span>
                <span>${escHtml(lnk.label || lnk.url)}</span>
              </div>`;
            }).join("");
            linksHtml = `<div class="project-links">${plainHtml}${placeholders}</div>`;

            // パネルをDOMに挿入後に非同期フェッチ（後述）
            requestAnimationFrame(() => {
              ogpLinks.forEach((lnk, idx) => {
                const pid = `ogp-${ji}-${pi}-${idx}`;
                fetchOgp(lnk.url, lnk.label).then(card => {
                  const placeholder = document.getElementById(pid);
                  if (placeholder) placeholder.replaceWith(card);
                });
              });
            });
          }
        }

        panel.innerHTML = roleBadge + description + techTags + mediaHtml + linksHtml;

        setupAccordion(projToggle, panel);
        item.appendChild(projToggle);
        item.appendChild(panel);
        projectsList.appendChild(item);
      });

      setupAccordion(toggleBtn, projectsList);
      projectsSection.appendChild(toggleBtn);
      projectsSection.appendChild(projectsList);
      card.appendChild(projectsSection);
    }

    list.appendChild(card);
  });
}

/* ── Education ──────────────────────────────────────────────── */
function renderEducation(p) {
  const list = document.getElementById("education-list");
  if (!p.education || p.education.length === 0) {
    list.closest(".section").hidden = true;
    return;
  }
  list.innerHTML = p.education.map(ed => `
    <div class="education-item">
      <div class="edu-icon">🎓</div>
      <div class="edu-info">
        <div class="edu-school">${escHtml(ed.school)}</div>
        ${ed.degree ? `<div class="edu-degree">${escHtml(ed.degree)}</div>` : ""}
        <div class="edu-period">${escHtml(ed.period)}</div>
        ${ed.note ? `<div class="edu-note">${escHtml(ed.note)}</div>` : ""}
      </div>
    </div>
  `).join("");
}

/* ── Certifications ─────────────────────────────────────────── */
function renderCertifications(p) {
  const list = document.getElementById("cert-list");
  if (!p.certifications || p.certifications.length === 0) {
    list.closest(".section").hidden = true;
    return;
  }
  list.innerHTML = p.certifications.map(cert => {
    const badgeHtml = cert.badgeUrl
      ? `<div class="cert-badge"><img src="${escHtml(cert.badgeUrl)}" alt="${escHtml(cert.name)}"></div>`
      : `<div class="cert-badge">🏆</div>`;

    const credLink = cert.credentialUrl
      ? `<a href="${escHtml(cert.credentialUrl)}" target="_blank" rel="noopener" class="cert-link">${ICONS.link} 認定証を見る</a>`
      : "";

    return `
      <div class="cert-item">
        ${badgeHtml}
        <div class="cert-info">
          <div class="cert-name">${escHtml(cert.name)}</div>
          <div class="cert-issuer">${escHtml(cert.issuer)}</div>
          <div class="cert-date">${escHtml(cert.date)}</div>
          ${credLink}
        </div>
      </div>
    `;
  }).join("");
}

/* ── YouTube ID extractor ────────────────────────────────────── */
/**
 * youtu.be/XXXXX 形式・watch?v=XXXXX 形式・IDのみ、すべてに対応。
 */
function extractYouTubeId(input) {
  if (!input) return "";
  try {
    const url = new URL(input);
    // youtu.be/XXXXX
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("?")[0];
    // youtube.com/watch?v=XXXXX
    const v = url.searchParams.get("v");
    if (v) return v;
  } catch (_) {
    // URL のパースに失敗 → すでに ID のみと判断してそのまま返す
  }
  return input;
}

/* ── OGP card fetch ──────────────────────────────────────────── */
/**
 * allorigins.win を使って OGP メタタグを取得し、
 * カード要素（<a>）を返す。失敗時はプレーンリンクにフォールバック。
 */
async function fetchOgp(url, label) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";

  try {
    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const res = await fetch(apiUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error("fetch failed");
    const json = await res.json();
    const html = json.contents || "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const getMeta = (prop) =>
      doc.querySelector(`meta[property="${prop}"]`)?.getAttribute("content") ||
      doc.querySelector(`meta[name="${prop}"]`)?.getAttribute("content") || "";

    const title = getMeta("og:title") || doc.title || label || url;
    const desc  = getMeta("og:description") || getMeta("description") || "";
    let   image = getMeta("og:image") || "";
    const domain = new URL(url).hostname;

    // 相対パスの画像URLを絶対URLに
    if (image && !image.startsWith("http")) {
      const base = new URL(url);
      image = base.origin + (image.startsWith("/") ? "" : "/") + image;
    }

    a.className = "ogp-card";
    a.innerHTML = `
      <div class="ogp-card-image${image ? "" : " no-image"}">
        ${image
          ? `<img src="${escHtml(image)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('no-image');this.remove();this.parentElement.textContent='🔗'">`
          : "🔗"}
      </div>
      <div class="ogp-card-body">
        <div class="ogp-card-title">${escHtml(title)}</div>
        ${desc ? `<div class="ogp-card-desc">${escHtml(desc)}</div>` : ""}
        <div class="ogp-card-domain">${escHtml(domain)}</div>
      </div>
    `;
  } catch (_) {
    // フォールバック: プレーンリンクボタン
    a.className = "project-link-btn";
    a.innerHTML = `${ICONS.link} ${escHtml(label || url)}`;
  }

  return a;
}

/* ── Nav highlight on scroll ─────────────────────────────────── */
function initNavHighlight() {
  const navLinks = document.querySelectorAll(".nav-inner a");
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove("active"));
          const link = document.querySelector(`.nav-inner a[href="#${entry.target.id}"]`);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach(s => observer.observe(s));
}

/* ── Page title ─────────────────────────────────────────────── */
function setPageTitle(p) {
  document.title = `${p.name} | ${p.title}`;
}

/* ── Email link handler (anti-spam) ─────────────────────── */
function initEmailLinks() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".email-link");
    if (link) {
      e.preventDefault();
      const encodedEmail = link.getAttribute("data-email");
      if (encodedEmail) {
        const decodedEmail = atob(encodedEmail);
        window.location.href = "mailto:" + decodedEmail;
      }
    }
  });
}

/* ── Boot ───────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof PROFILE === "undefined") {
    document.body.innerHTML =
      "<p style='padding:40px;color:red'>Error: data/profile.js が読み込まれていません。</p>";
    return;
  }
  setPageTitle(PROFILE);
  renderHeader(PROFILE);
  renderSummary(PROFILE);
  renderSkills(PROFILE);
  renderExperience(PROFILE);
  renderEducation(PROFILE);
  renderCertifications(PROFILE);
  initNavHighlight();
  initEmailLinks();
});
