['site-unified.css','mobile-menu.css'].forEach(href=>{if(!document.querySelector(`link[href="${href}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}});

/* Un solo logo: el archivo exacto suministrado por la marca */
document.querySelectorAll('.site-header .brand img,.footer img').forEach(img=>{
  img.src='assets/logowmlogisticcontable.svg';
  img.alt='WM Logistik Contable. Soluciones contables y financieras para pymes';
});
document.querySelectorAll('.brand-descriptor').forEach(el=>el.remove());

const nav=document.querySelector('.nav');
const isHome=!document.body.classList.contains('landing-page');

if(nav){
  const base=isHome?'':'index.html';
  nav.innerHTML=`
    <a class="nav-home" href="${isHome?'#inicio':'index.html'}">Home</a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-toggle" type="button" aria-expanded="false">Servicios <span>⌄</span></button>
      <div class="nav-dropdown-menu">
        <a href="${base}#logistica">Logística</a>
        <a href="financiera.html">Financiera</a>
        <a href="contable.html">Contable</a>
        <a href="${base}#prediagnostico">Prediagnóstico</a>
      </div>
    </div>
    <a href="${base}#diferencia">Nosotros</a>
    <a href="${base}#contacto">Contacto</a>`;
}

/* Orden comercial consistente en el home */
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
  if(drop && !drop.contains(e.target)){drop.classList.remove('open');dropBtn?.setAttribute('aria-expanded','false');}
});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  nav?.classList.remove('open');
  drop?.classList.remove('open');
  if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Abrir menú');menuBtn.textContent='☰';}
  dropBtn?.setAttribute('aria-expanded','false');
}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav?.classList.remove('open');drop?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');dropBtn?.setAttribute('aria-expanded','false');if(menuBtn)menuBtn.textContent='☰';}});
window.addEventListener('resize',()=>{if(window.innerWidth>940){nav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');if(menuBtn)menuBtn.textContent='☰';}});

/* Animaciones y formulario */
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const pdForm=document.getElementById('prediagnostic-form');
const fields=['pd-area','pd-problem','pd-operating','pd-urgency','pd-company'].map(id=>document.getElementById(id));
const progress=document.getElementById('progress-bar');
function updateProgress(){const done=fields.filter(f=>String(f?.value||'').trim()).length;if(progress)progress.style.width=`${done/fields.length*100}%`;}
fields.forEach(f=>f?.addEventListener('input',updateProgress));
document.querySelectorAll('[data-focus]').forEach(link=>link.addEventListener('click',()=>{const area=document.getElementById('pd-area');setTimeout(()=>{if(!area)return;area.value=link.dataset.focus==='contable'?'Contable / tributaria':'Logística / inventarios';updateProgress();},350);}));
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