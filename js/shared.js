// ── BASE PATH ──
const BASE = '/Eumais';

// ── NAV ITEMS ──
const NAV = [
  { label: 'Início',        href: BASE + '/index.html',              key: 'inicio' },
  { label: 'Institucional', href: BASE + '/documentos/index.html',   key: 'institucional' },
  { label: 'Organização',   href: BASE + '/organizacao/index.html',  key: 'organizacao' },
  { label: 'Governança',    href: BASE + '/governanca/index.html',   key: 'governanca' },
  { label: 'Frameworks',    href: BASE + '/frameworks/index.html',   key: 'frameworks' },
  { label: 'Projetos',      href: BASE + '/projetos/index.html',     key: 'projetos' },
  { label: 'Laboratório',   href: BASE + '/laboratorio/index.html',  key: 'laboratorio' },
  { label: 'Roadmap',       href: BASE + '/roadmap/index.html',      key: 'roadmap' },
];

const CONTACT = {
  nome:     'Bruno Vieira',
  email:    'eumaisempresa@gmail.com',
  phone:    '(27) 99813-1806',
  linkedin: 'https://www.linkedin.com/in/brunorsantosvieira',
  github:   'https://github.com/eumaisempresa/Eumais',
  drive:    'https://drive.google.com',
};

function buildNav(activeKey) {
  const links = NAV.map(item =>
    `<li><a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a></li>`
  ).join('');

  document.getElementById('topnav').innerHTML = `
    <div class="container">
      <a href="${BASE}/index.html" class="nav-logo">EU<sup class="plus">+</sup></a>
      <ul class="nav-links" id="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="mailto:${CONTACT.email}">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" stroke-width="1.1"/>
            <path d="M1 3.5l5 3.5 5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
          </svg>
          Contato
        </a>
      </div>
      <button class="nav-burger" id="nav-burger" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      </button>
    </div>`;

  document.getElementById('nav-burger')?.addEventListener('click', () => {
    document.getElementById('nav-links')?.classList.toggle('open');
  });
}

function buildFooter() {
  const navLinks = NAV.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('');

  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${BASE}/index.html" class="footer-brand-name">EU<sup class="plus">+</sup></a>
          <p>Comunidade viva de preservação humana e aceleração de iniciativas. Gerando autonomia integral e patrimônio permanente.</p>
          <span class="footer-tagline">Agentes livres. Conhecimento preservado.</span>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-title">Portal</div>
          <div class="footer-nav-links">${navLinks}</div>
        </div>
        <div class="footer-contact">
          <div class="footer-contact-title">Presidência</div>
          <a href="mailto:${CONTACT.email}" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <path d="M1.5 4l5.5 4 5.5-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.email}</span>
          </a>
          <a href="tel:+5527998131806" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5h3l1 2.5-1.5 1.5a7 7 0 002.5 2.5L9 7.5l2.5 1v3a1 1 0 01-1 1A10 10 0 011.5 3.5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${CONTACT.phone}</span>
          </a>
          <a href="${CONTACT.linkedin}" target="_blank" rel="noopener" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.2"/>
              <path d="M4 6v4M4 4.5v.01M6.5 10V8a1.5 1.5 0 013 0v2M6.5 7v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span>${CONTACT.nome} · LinkedIn</span>
          </a>
          <a href="${CONTACT.github}" target="_blank" rel="noopener" class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C3.69 1 1 3.69 1 7c0 2.65 1.72 4.9 4.1 5.69.3.06.41-.13.41-.29v-1.02c-1.67.36-2.02-.8-2.02-.8-.27-.69-.67-.88-.67-.88-.55-.37.04-.36.04-.36.6.04.92.62.92.62.54.92 1.41.65 1.75.5.05-.39.21-.65.38-.8-1.34-.15-2.75-.67-2.75-2.98 0-.66.23-1.2.62-1.62-.06-.15-.27-.77.06-1.6 0 0 .51-.16 1.66.62a5.77 5.77 0 013 0c1.15-.78 1.66-.62 1.66-.62.33.83.12 1.45.06 1.6.38.42.62.96.62 1.62 0 2.32-1.41 2.83-2.76 2.98.22.19.41.56.41 1.13v1.67c0 .16.11.35.42.29A6.01 6.01 0 0013 7c0-3.31-2.69-6-6-6z" fill="currentColor"/>
            </svg>
            <span>GitHub · Repositório</span>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Grupo EU⁺ · Documentos sob versionamento controlado · Acesso público</p>
        <p class="footer-purpose">Autonomia integral. Patrimônio permanente.</p>
      </div>
    </div>`;
}

function toggleDoc(btn) {
  const content = btn.nextElementSibling;
  const isOpen  = btn.classList.contains('open');
  document.querySelectorAll('.doc-trigger.open').forEach(b => {
    b.classList.remove('open');
    b.setAttribute('aria-expanded', 'false');
    if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    content.classList.add('open');
    setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.page-hero .reveal, .home-hero .reveal').forEach(el => el.classList.add('visible'));
  }, 60);
}

window.addEventListener('DOMContentLoaded', initReveal);
