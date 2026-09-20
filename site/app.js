(function(){
'use strict';

var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var INK='#1E2F26';

/* ---------- placeholder images (replace with real photos and screenshots) ---------- */
function art(p,i,label){
  var t=esc(label||p.title);
  var file=(!label&&p.cover)?p.cover:(p.images&&p.images[i]);
  if(file){
    return '<img src="images/'+encodeURI(file)+'" alt="'+t+'" loading="lazy" decoding="async">';
  }
  return '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+t+' (placeholder image)">'
    +'<rect width="800" height="600" fill="'+p.tint+'"/>'
    +'<g fill="none" stroke="#2F6B4F" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" opacity=".55" transform="translate(340 180)"><rect width="120" height="90" rx="14"/><circle cx="34" cy="30" r="9"/><path d="M8 78l34-30 24 20 18-14 28 24"/></g>'
    +'<text x="400" y="352" text-anchor="middle" font-family="Manrope,system-ui,sans-serif" font-size="32" font-weight="600" fill="'+INK+'" opacity=".75">'+t+'</text>'
    +'<text x="400" y="396" text-anchor="middle" font-family="Manrope,system-ui,sans-serif" font-size="22" fill="'+INK+'" opacity=".5">Photo goes here</text></svg>';
}

var TITLE=NAME+' | Design Engineering portfolio';

/* ---------- home: search, filter, grid ---------- */
var $=function(id){return document.getElementById(id)};
var home=$('home'),view=$('project'),grid=$('grid'),statusEl=$('status'),qEl=$('q'),clearEl=$('clear'),emptyEl=$('empty'),chipsEl=$('chips');
var state={q:'',cat:'All'};

function matches(p){
  var hay=(p.title+' '+p.summary+' '+p.cat+' '+p.tags.join(' ')+' '+p.tools.join(' ')+' '+p.module+' '+p.year).toLowerCase();
  var terms=state.q.toLowerCase().split(/\s+/).filter(Boolean);
  return (state.cat==='All'||p.cat===state.cat)&&terms.every(function(t){return hay.indexOf(t)>-1});
}
function tileHTML(p){
  return '<li><a class="tile" href="#/project/'+p.slug+'">'
    +'<span class="tile-art">'+art(p,0)+'</span>'
    +'<span class="tile-body"><span class="meta-line"><span class="pill">'+p.cat+'</span><span>'+p.year+'</span></span>'
    +'<h3 class="tile-title">'+esc(p.title)+'</h3><span class="tile-text">'+esc(p.summary)+'</span></span></a></li>';
}
function renderGrid(){
  var list=PROJECTS.filter(matches);
  grid.innerHTML=list.map(tileHTML).join('');
  grid.hidden=!list.length;
  emptyEl.hidden=list.length>0;
  clearEl.hidden=!state.q;
  var txt='Showing '+list.length+' of '+PROJECTS.length+' projects';
  if(state.cat!=='All')txt+=' in '+state.cat;
  if(state.q.trim())txt+=' matching \u201C'+state.q.trim()+'\u201D';
  statusEl.textContent=txt;
  if(!list.length){
    $('empty-text').textContent='No projects match'+(state.q.trim()?' \u201C'+state.q.trim()+'\u201D':'')+(state.cat!=='All'?' in '+state.cat:'')+'. Try a different word or category.';
  }
}
function renderChips(){
  chipsEl.innerHTML=CATS.map(function(c){
    var n=c==='All'?PROJECTS.length:PROJECTS.filter(function(p){return p.cat===c}).length;
    return '<button class="chip" type="button" data-cat="'+c+'" aria-pressed="'+(state.cat===c)+'">'+c+' <span class="n">'+n+'</span></button>';
  }).join('');
}
chipsEl.addEventListener('click',function(e){
  var b=e.target.closest('[data-cat]');if(!b)return;
  state.cat=b.getAttribute('data-cat');
  Array.prototype.forEach.call(chipsEl.children,function(c){c.setAttribute('aria-pressed',String(c===b))});
  renderGrid();
});
qEl.addEventListener('input',function(){state.q=qEl.value;renderGrid()});
qEl.addEventListener('keydown',function(e){if(e.key==='Escape'&&qEl.value){qEl.value='';state.q='';renderGrid()}});
clearEl.addEventListener('click',function(){qEl.value='';state.q='';renderGrid();qEl.focus()});
$('reset').addEventListener('click',function(){
  qEl.value='';state.q='';state.cat='All';renderChips();renderGrid();qEl.focus();
});


/* ---------- project page with slideshow ---------- */
var current=null;
function projectHTML(p,i){
  var n=PROJECTS.length,prev=PROJECTS[(i-1+n)%n],next=PROJECTS[(i+1)%n];
  var slides=p.slides.map(function(s,k){
    return '<figure class="slide" role="group" aria-roledescription="slide" aria-label="'+(k+1)+' of '+p.slides.length+'">'+art(p,k,s[0])+'</figure>';
  }).join('');
  var thumbs=p.slides.map(function(s,k){
    return '<button class="thumb" type="button" data-go="'+k+'" aria-label="Go to slide '+(k+1)+': '+esc(s[0])+'" aria-current="'+(k===0)+'">'+art(p,k,s[0]).replace(' role="img"',' aria-hidden="true"')+'</button>';
  }).join('');
  var chevL='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  var chevR='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  return '<div class="p-wrap">'
    +'<a class="back" href="#/work">'+chevL+'All projects</a>'
    +'<div class="p-head"><span class="pill">'+p.cat+'</span>'
    +'<h1 class="p-title" id="p-title" tabindex="-1">'+esc(p.title)+'</h1><p class="p-summary">'+esc(p.summary)+'</p></div></div>'
    +'<section class="show" aria-roledescription="carousel" aria-label="'+esc(p.title)+' slides">'
    +'<div class="stage'+(p.portrait?' portrait':'')+'" id="stage"><div class="track" id="track">'+slides+'</div>'
    +'<button class="arrow prev" type="button" id="prev" aria-label="Previous slide">'+chevL+'</button>'
    +'<button class="arrow next" type="button" id="next" aria-label="Next slide">'+chevR+'</button></div>'
    +'<div class="caption"><div aria-live="polite"><h2 class="cap-title" id="cap-title"></h2><p class="cap-text" id="cap-text"></p><a class="full" id="full" target="_blank" rel="noopener" hidden>Open full size</a></div><span class="counter" id="counter"></span></div>'
    +'<div class="thumbs'+(p.portrait?' portrait':'')+'" id="thumbs">'+thumbs+'</div></section>'
    +'<div class="details"><div>'
    +'<section><h2>The brief</h2><p>'+esc(p.brief)+'</p></section>'
    +'<section><h2>The work</h2><ul class="did">'+p.did.map(function(d){return '<li>'+esc(d)+'</li>'}).join('')+'</ul></section>'
    +'<section><h2>Outcome</h2><p>'+esc(p.outcome)+'</p></section></div>'
    +'<aside class="facts" aria-label="Project details"><h2>Details</h2><dl>'
    +'<dt>Year</dt><dd>'+p.year+'</dd><dt>Module</dt><dd>'+esc(p.module)+'</dd><dt>My role</dt><dd>'+esc(p.role)+'</dd>'
    +(p.team?'<dt>Team</dt><dd>'+esc(p.team)+'</dd>':'')
    +(p.tools.length?'<dt>Tools</dt><dd><ul class="tags">'+p.tools.map(function(t){return '<li class="tag">'+esc(t)+'</li>'}).join('')+'</ul></dd>':'')
    +'<dt>Topics</dt><dd><ul class="tags">'+p.tags.map(function(t){return '<li class="tag">'+esc(t)+'</li>'}).join('')+'</ul></dd>'
    +'</dl></aside></div>'
    +'<nav class="pn" aria-label="More projects">'
    +(n>2?'<a href="#/project/'+prev.slug+'"><span class="thumb-s">'+art(prev,0).replace(' role="img"',' aria-hidden="true"')+'</span><span><small>Previous project</small><strong>'+esc(prev.title)+'</strong></span></a>':'')
    +'<a class="next-link" href="#/project/'+next.slug+'"><span><small>Next project</small><strong>'+esc(next.title)+'</strong></span><span class="thumb-s">'+art(next,0).replace(' role="img"',' aria-hidden="true"')+'</span></a></nav>';
}
function smooth(){return !(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)}
function go(n){
  if(!current)return;
  var p=current.p,len=p.slides.length;
  n=(n+len)%len;current.idx=n;
  var track=$('track');if(!track)return;
  track.style.transform='translateX('+(-n*100)+'%)';
  Array.prototype.forEach.call(track.children,function(s,k){s.setAttribute('aria-hidden',String(k!==n))});
  $('cap-title').textContent=p.slides[n][0];
  $('cap-text').textContent=p.slides[n][1];
  var full=$('full'),im=p.images&&p.images[n];
  if(im){full.href='images/'+encodeURI(im);full.hidden=false}else{full.hidden=true}
  $('counter').textContent=(n+1)+' / '+len;
  var strip=$('thumbs');
  Array.prototype.forEach.call(strip.children,function(t,k){
    t.setAttribute('aria-current',String(k===n));
    if(k===n){strip.scrollTo({left:t.offsetLeft-strip.clientWidth/2+t.clientWidth/2,behavior:smooth()?'smooth':'auto'})}
  });
}
function bindShow(){
  $('prev').addEventListener('click',function(){go(current.idx-1)});
  $('next').addEventListener('click',function(){go(current.idx+1)});
  $('thumbs').addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(b)go(+b.getAttribute('data-go'))});
  var stage=$('stage'),sx=null;
  stage.addEventListener('pointerdown',function(e){sx=e.clientX});
  stage.addEventListener('pointerup',function(e){
    if(sx===null)return;var dx=e.clientX-sx;sx=null;
    if(Math.abs(dx)>50)go(current.idx+(dx<0?1:-1));
  });
  stage.addEventListener('pointercancel',function(){sx=null});
}
document.addEventListener('keydown',function(e){
  if(view.hidden||!current)return;
  var t=e.target&&e.target.tagName;
  if(t==='INPUT'||t==='TEXTAREA'||e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.key==='ArrowRight')go(current.idx+1);
  else if(e.key==='ArrowLeft')go(current.idx-1);
});

function showProject(slug){
  var i=-1;PROJECTS.forEach(function(p,k){if(p.slug===slug)i=k});
  home.hidden=true;view.hidden=false;
  window.scrollTo(0,0);
  if(i<0){
    current=null;
    view.innerHTML='<div class="lost"><h1 class="p-title" id="p-title" tabindex="-1">Project not found</h1><p class="p-summary" style="margin:0 auto 24px">That link doesn\'t match any project here. It may have been renamed.</p><a class="btn btn-primary" href="#/work">Browse all projects</a></div>';
    document.title='Not found | '+TITLE;
  }else{
    var p=PROJECTS[i];
    current={p:p,idx:0};
    view.innerHTML=projectHTML(p,i);
    document.title=p.title+' | '+NAME;
    bindShow();go(0);
  }
  var h=$('p-title');if(h)h.focus({preventScroll:true});
}
function showHome(hash){
  var wasProject=!view.hidden;
  view.hidden=true;view.innerHTML='';current=null;home.hidden=false;
  document.title=TITLE;
  var id=hash.replace(/^#\/?/,'');
  var target=(id==='work'||id==='experience'||id==='about'||id==='contact')?$(id):null;
  requestAnimationFrame(function(){
    if(target)target.scrollIntoView({behavior:(wasProject||!smooth())?'auto':'smooth',block:'start'});
    else window.scrollTo(0,0);
  });
}
function route(){
  var h=location.hash||'#/';
  var m=h.match(/^#\/project\/([\w-]+)/);
  if(m)showProject(m[1]);else showHome(h);
}
window.addEventListener('hashchange',route);
document.addEventListener('click',function(e){
  var a=e.target.closest('a[data-nav]');
  if(a&&location.hash===a.getAttribute('href')){e.preventDefault();route()}
});
$('skip').addEventListener('click',function(){$('main').focus()});

/* ---------- experience ---------- */
(function(){
  var list=(typeof EXPERIENCE!=='undefined')?EXPERIENCE:[];
  var sec=$('experience');if(!sec||!list.length)return;
  $('xp').innerHTML=list.map(function(x){
    return '<li class="xp-row"><div class="xp-when">'+esc(x.dates)+'</div><div class="xp-what"><h3 class="xp-role">'+esc(x.role)+'</h3><p class="xp-org">'+esc(x.org)+'</p><p class="xp-text">'+esc(x.text)+'</p></div></li>';
  }).join('');
  sec.hidden=false;
})();

$('brand-name').textContent=NAME;$('foot-name').textContent=NAME;
$('brand').setAttribute('aria-label',NAME+', home');
$('email-link').setAttribute('href','mailto:'+EMAIL);
document.title=TITLE;
renderChips();renderGrid();route();
})();
