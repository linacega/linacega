(() => {
  const nav = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });

  dropdownToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      dropdownToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      dropdown?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      dropdownToggle?.setAttribute('aria-expanded', 'false');
      if (menuToggle) menuToggle.textContent = '☰';
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    nav?.classList.remove('open');
    dropdown?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    dropdownToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 940) return;
    nav?.classList.remove('open');
    dropdown?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    dropdownToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const text = [
      'Hola WM Logistik. Envío una solicitud desde la página web.',
      '',
      `Nombre: ${data.get('nombre')}`,
      `Empresa: ${data.get('empresa')}`,
      `Correo: ${data.get('correo')}`,
      `WhatsApp: ${data.get('whatsapp')}`,
      `Servicio: ${data.get('servicio')}`,
      `Mensaje: ${data.get('mensaje')}`
    ].join('\n');
    const status = document.getElementById('contact-status');
    if (status) status.textContent = 'Listo. Se abrirá WhatsApp con tu solicitud organizada.';
    window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  const diagnosticForm = document.getElementById('diagnostic-form');
  diagnosticForm?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(diagnosticForm);
    const text = [
      'Hola WM Logistik. Quiero realizar el prediagnóstico gratuito.',
      '',
      `Empresa: ${data.get('empresa')}`,
      `Área: ${data.get('area')}`,
      `Problema principal: ${data.get('problema')}`,
      `Urgencia: ${data.get('urgencia')}`
    ].join('\n');
    window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
})();
