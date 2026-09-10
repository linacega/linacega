/* WM Logistik: navegación única, landings conectadas y sin estilos inyectados */

document.querySelectorAll('.site-header .brand img,.footer img').forEach(img=>{
  img.src='assets/logowmlogisticcontable.svg';
  img.alt='WM Logistik Contable. Soluciones contables y financieras para pymes';
});
document.querySelectorAll('.brand-descriptor').forEach(el=>el.remove());

const nav=document.querySelector('.nav');
const isHome=!document.body.classList.contains('landing-page');
const isLogistics=document.body.classList.contains('logistics-landing');
const isFinancial=document.body.classList.contains('financial-landing');
const isAccounting=document.body.classList.contains('accounting-landing');

/* El mismo menú en Inicio, Logística, Financiera y Contable */
if(nav){
  nav.innerHTML=`
    <a class="nav-home${isHome?' active-link':''}" href="${isHome?'#inicio':'index.html'}">Home</a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-toggle${(isLogistics||isFinancial||isAccounting)?' active-service':''}" type="button" aria-expanded="false">Servicios <span>⌄</span></button>
      <div class="nav-dropdown-menu">
        <a${isLogistics?' class="active-link"':''} href="logistica.html">Logística</a>
        <a${isFinancial?' class="active-link"':''} href="financiera.html">Financiera</a>
        <a${isAccounting?' class="active-link"':''} href="contable.html">Contable</a>
        <a href="${isHome?'#prediagnostico':'index.html#prediagnostico'}">Prediagnóstico</a>
      </div>
    </div>
    <a href="${isHome?'#diferencia':'index.html#diferencia'}">Nosotros</a>
    <a href="${isHome?'#contacto':'index.html#contacto'}">Contacto</a>`;
}

/* Home: orden comercial Logística → Financiera → Contable y enlaces a sus landings */
const visualGrid=document.querySelector('.visual-grid');
if(visualGrid){
  const cards=[...visualGrid.children];
  const logisticsCard=cards.find(c=>c.textContent.toLowerCase().includes('operación'));
  const financialCard=cards.find(c=>c.textContent.toLowerCase().includes('financiera'));
  const accountingCard=cards.find(c=>c.textContent.toLowerCase().includes('contable'));
  [logisticsCard,financialCard,accountingCard].filter(Boolean).forEach(c=>visualGrid.appendChild(c));
  const logisticsLink=logisticsCard?.querySelector('a');
  if(logisticsLink){
    logisticsLink.href='logistica.html';
    logisticsLink.innerHTML='Conocer solución logística <span>→</span>';
  }
  const kicker=document.querySelector('.visual-services .section-title .kicker');
  if(kicker) kicker.textContent='Logística. Finanzas. Contabilidad.';
}

/* Enlaces antiguos de logística ahora llevan a la landing dedicada */
document.querySelectorAll('a[href="index.html#logistica"]').forEach(a=>a.href='logistica.html');

const lNo=document.querySelector('.logistics-section .line-number');
if(lNo) lNo.textContent='01';

/* Nosotros */
const aboutSection=document.querySelector('.difference-section');
if(aboutSection){
  aboutSection.id='diferencia';
  aboutSection.innerHTML=`
    <div class="container about-layout">
      <div class="about-copy reveal">
        <span class="kicker light">Nosotros</span>
        <h2>Experiencia para convertir problemas cotidianos en decisiones claras.</h2>
        <p>WM Logistik acompaña a pymes y emprendedores que necesitan ordenar áreas críticas de su negocio sin llenarse de procesos innecesarios. Conectamos logística, finanzas y contabilidad para entender qué está pasando, qué está costando dinero y qué conviene resolver primero.</p>
        <p>Nuestro enfoque combina experiencia empresarial, análisis y ejecución práctica. No entregamos diagnósticos para guardar: construimos prioridades, acciones e indicadores que puedan usarse en la operación real.</p>
        <div class="about-metrics">
          <article><strong>31</strong><span>años de experiencia empresarial</span></article>
          <article><strong>3</strong><span>frentes conectados: logística, finanzas y contabilidad</span></article>
          <article><strong>360°</strong><span>diagnóstico, acción y seguimiento</span></article>
        </div>
      </div>
      <div class="about-principles reveal delay-1">
        <article><b>01</b><div><h3>Miramos el negocio completo</h3><p>Una decisión de inventario puede afectar caja; un costo operativo puede cambiar la rentabilidad. Por eso conectamos las áreas.</p></div></article>
        <article><b>02</b><div><h3>Priorizamos lo que sí mueve el resultado</h3><p>Separamos lo urgente de lo importante y concentramos el esfuerzo donde hay mayor impacto y viabilidad.</p></div></article>
        <article><b>03</b><div><h3>Trabajamos con lenguaje claro</h3><p>Menos tecnicismo innecesario. Más información útil para que el empresario pueda decidir y hacer seguimiento.</p></div></article>
        <article><b>04</b><div><h3>Acompañamos hasta la acción</h3><p>La mejora no termina en una recomendación. Definimos responsables, pasos e indicadores para avanzar.</p></div></article>
      </div>
    </div>`;
}

/* Contacto */
const contactSection=document.querySelector('.contact-section');
if(contactSection){
  contactSection.id='contacto';
  contactSection.innerHTML=`
    <div class="container contact-grid contact-grid-form">
      <div class="contact-copy reveal">
        <span class="kicker light">Contacto</span>
        <h2>Cuéntanos qué necesitas ordenar en tu empresa.</h2>
        <p>Déjanos tus datos y una breve descripción del reto. Con esa información podemos identificar si conviene empezar por logística, finanzas, contabilidad o un diagnóstico integral.</p>
        <div class="contact-data compact-contact-data">
          <a href="https://wa.me/573245835162?text=Hola%20WM%20Logistik.%20Quiero%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener"><span>WhatsApp</span><strong>+57 324 583 5162</strong></a>
          <a href="mailto:contacto.ruedelabola@gmail.com"><span>Correo</span><strong>contacto.ruedelabola@gmail.com</strong></a>
          <div><span>Cobertura</span><strong>Valle de Aburrá y acompañamiento según el servicio</strong></div>
        </div>
      </div>
      <div class="contact-form-card reveal delay-1">
        <div class="contact-form-head">
          <span class="mini-label">Hablemos de tu empresa</span>
          <h3>Solicita contacto</h3>
          <p>Completa el formulario. Al enviarlo se abrirá WhatsApp con la información organizada para continuar la conversación.</p>
        </div>
        <form id="contact-lead-form" class="contact-lead-form">
          <div class="contact-form-row">
            <label>Nombre<input id="lead-name" name="nombre" type="text" autocomplete="name" required placeholder="Tu nombre" /></label>
            <label>Empresa<input id="lead-company" name="empresa" type="text" autocomplete="organization" required placeholder="Nombre de la empresa" /></label>
          </div>
          <div class="contact-form-row">
            <label>Correo<input id="lead-email" name="correo" type="email" autocomplete="email" required placeholder="correo@empresa.com" /></label>
            <label>WhatsApp<input id="lead-phone" name="whatsapp" type="tel" autocomplete="tel" required placeholder="300 000 0000" /></label>
          </div>
          <label>¿Qué servicio te interesa?
            <select id="lead-service" name="servicio" required>
              <option value="">Selecciona una opción</option><option>Logística</option><option>Financiera</option><option>Contable</option><option>Prediagnóstico integral</option><option>No estoy seguro</option>
            </select>
          </label>
          <label>Cuéntanos brevemente qué está pasando<textarea id="lead-message" name="mensaje" rows="4" required placeholder="Ej.: tenemos problemas de inventario, costos, caja, contabilidad atrasada..."></textarea></label>
          <label class="contact-consent"><input id="lead-consent" type="checkbox" required /><span>Acepto ser contactado por WM Logistik para dar respuesta a esta solicitud.</span></label>
          <button class="btn btn-orange btn-full" type="submit">Enviar solicitud</button>
          <p class="contact-form-status" id="contact-form-status" aria-live="polite"></p>
        </form>
      </div>
    </div>`;
}

/* Menú principal y dropdown */
const menuBtn=document.querySelector('.menu-toggle');
const drop=document.querySelector('.nav-dropdown');
const dropBtn=document.querySelector('.nav-dropdown-toggle');

menuBtn?.addEventListener('click',()=>{
  const open=nav?.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  menuBtn.textContent=open?'×':'☰';
});

dropBtn?.addEventListener('click',e=>{
  e.stopPropagation();
  const open=drop?.classList.toggle('open');
  dropBtn.setAttribute('aria-expanded',String(open));
});

document.addEventListener('click',e=>{
  if(drop && !drop.contains(e.target)){
    drop.classList.remove('open');
    dropBtn?.setAttribute('aria-expanded','false');
  }
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  nav?.classList.remove('open');
  drop?.classList.remove('open');
  if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Abrir menú');menuBtn.textContent='☰';}
  dropBtn?.setAttribute('aria-expanded','false');
}));

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    nav?.classList.remove('open');drop?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');dropBtn?.setAttribute('aria-expanded','false');if(menuBtn) menuBtn.textContent='☰';
  }
});

window.addEventListener('resize',()=>{
  if(window.innerWidth>940){nav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');if(menuBtn) menuBtn.textContent='☰';}
});

/* Animaciones */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}
  }),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}else{
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

/* Prediagnóstico */
const pdForm=document.getElementById('prediagnostic-form');
const fields=['pd-area','pd-problem','pd-operating','pd-urgency','pd-company'].map(id=>document.getElementById(id));
const progress=document.getElementById('progress-bar');
function updateProgress(){const done=fields.filter(f=>String(f?.value||'').trim()).length;if(progress) progress.style.width=`${done/fields.length*100}%`;}
fields.forEach(f=>f?.addEventListener('input',updateProgress));

document.querySelectorAll('[data-focus]').forEach(link=>link.addEventListener('click',()=>{
  const area=document.getElementById('pd-area');
  setTimeout(()=>{if(!area) return;area.value=link.dataset.focus==='contable'?'Contable / tributaria':'Logística / inventarios';updateProgress();},350);
}));

pdForm?.addEventListener('submit',e=>{
  e.preventDefault();
  const area=document.getElementById('pd-area').value;
  const problem=document.getElementById('pd-problem').value.trim();
  const operating=document.getElementById('pd-operating').value;
  const urgency=document.getElementById('pd-urgency').value;
  const company=document.getElementById('pd-company').value.trim();
  const text=`Hola WM Logistik. Quiero realizar el prediagnóstico inicial gratuito.\n\nEmpresa: ${company}\nÁrea a revisar: ${area}\nPrincipal problema: ${problem}\n¿Está operando?: ${operating}\nUrgencia: ${urgency}\n\nQuisiera conocer el siguiente paso recomendado.`;
  window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`,'_blank','noopener');
});

/* Formulario de contacto */
const leadForm=document.getElementById('contact-lead-form');
leadForm?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('lead-name').value.trim();
  const company=document.getElementById('lead-company').value.trim();
  const email=document.getElementById('lead-email').value.trim();
  const phone=document.getElementById('lead-phone').value.trim();
  const service=document.getElementById('lead-service').value;
  const message=document.getElementById('lead-message').value.trim();
  const status=document.getElementById('contact-form-status');
  const text=`Hola WM Logistik. Envío una solicitud desde la página web.\n\nNombre: ${name}\nEmpresa: ${company}\nCorreo: ${email}\nWhatsApp: ${phone}\nServicio de interés: ${service}\nMensaje: ${message}`;
  if(status) status.textContent='Solicitud preparada. Se abrirá WhatsApp para enviarla a WM Logistik.';
  window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`,'_blank','noopener');
});
