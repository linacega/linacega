['site-unified.css','mobile-menu.css'].forEach(href=>{if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}});

/* Un solo logo institucional en encabezados y pies de página */
document.querySelectorAll('.site-header .brand img,.footer img').forEach(img=>{img.src='assets/wm-logistik-logo.svg';img.alt='WM Logistik';});

/* Navegación única: Logística → Financiera → Contable */
const nav=document.querySelector('.nav');
if(nav){
  const links=[...nav.querySelectorAll('a')];
  const byText=t=>links.find(a=>a.textContent.trim().toLowerCase().includes(t));
  const inicio=byText('inicio');
  const logistica=byText('logística');
  const financiera=byText('financiera');
  const contable=byText('contable');
  const prediag=byText('prediagnóstico');
  const como=byText('cómo trabajamos');
  const hablemos=byText('hablemos');
  if(inicio) inicio.remove();
  [logistica,financiera,contable,prediag,como,hablemos].filter(Boolean).forEach(a=>nav.appendChild(a));
}

/* Home: mismo orden comercial y menos duplicación */
const visualGrid=document.querySelector('.visual-grid');
if(visualGrid){
  const cards=[...visualGrid.children];
  const getCard=t=>cards.find(c=>c.textContent.toLowerCase().includes(t));
  [getCard('operación'),getCard('financiera'),getCard('contable')].filter(Boolean).forEach(c=>visualGrid.appendChild(c));
  const kicker=document.querySelector('.visual-services .section-title .kicker');
  if(kicker) kicker.textContent='Logística. Finanzas. Contabilidad.';
}
const lNo=document.querySelector('.logistics-section .line-number');if(lNo)lNo.textContent='01';
const heroLead=document.querySelector('.hero-pro .hero-copy>p');
if(heroLead)heroLead.textContent='Integramos logística, finanzas y contabilidad para que tu empresa tenga una operación más eficiente, información confiable y decisiones con mayor control.';

const menuBtn=document.querySelector('.menu-toggle');
menuBtn?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');menuBtn.textContent=open?'×':'☰'});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Abrir menú');menuBtn.textContent='☰'}}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');menuBtn?.setAttribute('aria-label','Abrir menú');if(menuBtn)menuBtn.textContent='☰'}});
window.addEventListener('resize',()=>{if(window.innerWidth>940&&nav?.classList.contains('open')){nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');menuBtn?.setAttribute('aria-label','Abrir menú');if(menuBtn)menuBtn.textContent='☰'}});

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const pdForm=document.getElementById('prediagnostic-form');
const fields=['pd-area','pd-problem','pd-operating','pd-urgency','pd-company'].map(id=>document.getElementById(id));
const progress=document.getElementById('progress-bar');
function updateProgress(){const done=fields.filter(f=>String(f?.value||'').trim()).length;if(progress)progress.style.width=`${done/fields.length*100}%`;}
fields.forEach(f=>f?.addEventListener('input',updateProgress));
document.querySelectorAll('[data-focus]').forEach(link=>link.addEventListener('click',()=>{const area=document.getElementById('pd-area');setTimeout(()=>{if(!area)return;area.value=link.dataset.focus==='contable'?'Contable / tributaria':'Logística / inventarios';updateProgress();},350)}));
pdForm?.addEventListener('submit',e=>{e.preventDefault();const area=document.getElementById('pd-area').value;const problem=document.getElementById('pd-problem').value.trim();const operating=document.getElementById('pd-operating').value;const urgency=document.getElementById('pd-urgency').value;const company=document.getElementById('pd-company').value.trim();const text=`Hola WM Logistik. Quiero realizar el prediagnóstico inicial gratuito.\n\nEmpresa: ${company}\nÁrea a revisar: ${area}\nPrincipal problema: ${problem}\n¿Está operando?: ${operating}\nUrgencia: ${urgency}\n\nQuisiera conocer el siguiente paso recomendado.`;window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`,'_blank','noopener');});
