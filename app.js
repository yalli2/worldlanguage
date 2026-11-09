// World Language Exams — app
const store={get(k,d){try{const v=localStorage.getItem('wl_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('wl_'+k,JSON.stringify(v))}catch(e){}}};
function pickLang(){const q=new URLSearchParams(location.search).get('lang');if(q&&I18N[q])return q;const s=store.get('lang',null);if(s&&I18N[s])return s;const n=(navigator.language||'ko').slice(0,2);return I18N[n]?n:'ko'}
let L=pickLang();
const LORDER=["en","es","fr","de","ja","zh","ko","ru","it","pt","ar","vi","th","id","tr","nl","pl","cs","hu","el","sv","no","da","fi","uk","he","hi","ca","multi"];
const EX=(window.EXAMS||[]).slice().sort((a,b)=>LORDER.indexOf(a.lang)-LORDER.indexOf(b.lang));
const FEATURED=["toeic","ielts","toefl","jlpt","hsk","dele","delf-dalf","goethe","topik"].filter(id=>EX.some(e=>e.id===id));
const GROUPS=[
 {k:"en",gl:"Aa",codes:["en"]},{k:"es",gl:"Ñ",codes:["es"]},{k:"fr",gl:"Ç",codes:["fr"]},{k:"de",gl:"ß",codes:["de"]},
 {k:"ja",gl:"あ",codes:["ja"]},{k:"zh",gl:"字",codes:["zh"]},
 {k:"eu",gl:"Ж",codes:["it","pt","ca","nl","ru","pl","cs","hu","el","tr","sv","no","da","fi","uk"],name:{ko:"기타 유럽 언어",en:"Other European",es:"Otras europeas",ja:"その他の欧州言語",zh:"其他欧洲语言",fr:"Autres langues européennes"}},
 {k:"as",gl:"한",codes:["ko","vi","th","id","ar","he","multi"],name:{ko:"아시아·중동·다언어",en:"Asia, Middle East & multi",es:"Asia, Oriente Medio y multi",ja:"アジア・中東・多言語",zh:"亚洲·中东·多语种",fr:"Asie, Moyen-Orient, multi"}}];
const S={tab:'home',langs:new Set(),sys:'all',kr:false,q:'',sort:'lang',country:'KR',slide:0};
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function t(k,v){let s=(I18N[L]&&I18N[L][k])??I18N.en[k]??k;if(v)for(const x in v)s=s.replace('{'+x+'}',v[x]);return s}
const _dn={};function dname(type,c){const k=L+type+c;if(!(k in _dn)){try{_dn[k]=new Intl.DisplayNames([L],{type}).of(c)}catch(e){_dn[k]=c}}return _dn[k]}
const lname=c=>c==='multi'?t('multi'):dname('language',c);
const cname=c=>c==='GLOBAL'?t('global'):dname('region',c);
const flag=c=>c&&/^[A-Z]{2}$/.test(c)?String.fromCodePoint(...[...c].map(x=>127397+x.charCodeAt())):'🌐';
const note=e=>L==='ko'?(e.note||e.note_en):(e.note_en||e.note);
const lvl=e=>L==='ko'?(e.levels||e.levels_en):(e.levels_en||e.levels);
const krFee=e=>{const f=(e.fees||[]).find(x=>x.country==='KR'&&/\d/.test(x.amount));return f?f.amount:''};
const isCefr=e=>!!(e.cefr_map&&Object.keys(e.cefr_map).length);
const examLangs=e=>e.lang==='multi'?['multi',...(e.langs||[])]:[e.lang];
const byId=id=>EX.find(e=>e.id===id);
const nLinks=EX.reduce((n,e)=>n+1+(e.register||[]).length+(e.practice||[]).length+(e.books||[]).length,0);
const allLangs=new Set(EX.flatMap(e=>e.lang==='multi'?(e.langs||[]):[e.lang]));

function match(e){
  if(S.langs.size&&!examLangs(e).some(c=>S.langs.has(c)))return false;
  if(S.sys==='cefr'&&!isCefr(e))return false;
  if(S.sys==='score'&&isCefr(e))return false;
  if(S.kr&&!krFee(e))return false;
  if(S.q){const h=[e.name,e.full,e.org,...examLangs(e).map(lname),e.note,e.note_en,...(e.books||[]).map(b=>b.title)].join(' ').toLowerCase();if(!h.includes(S.q.toLowerCase()))return false}
  return true}
function filtered(){const l=EX.filter(match);
  if(S.sort==='name')l.sort((a,b)=>a.name.localeCompare(b.name));
  if(S.sort==='kr')l.sort((a,b)=>(!!krFee(b))-(!!krFee(a)));
  return l}

function card(e){const kf=krFee(e);
  return `<div class="card ${e.lang==='en'||e.lang==='multi'?'':'intl'}" data-open="${e.id}">
   <div class="top"><span class="s">${esc(lname(e.lang))}</span><span class="l">· ${esc(e.org||'')}</span></div>
   <h4>${esc(e.name)}</h4><div class="en">${esc(e.full||'')}</div>
   <div class="desc">${esc(note(e)||'')}</div>
   <div class="tags"><span class="tg">${esc(lvl(e)||'')}</span>${isCefr(e)?'<span class="lvb lv2">CEFR</span>':''}${(e.books||[]).length?`<span class="lvb lv1">📚 ${t('books_n',{n:e.books.length})}</span>`:''}</div>
   <div class="due"><span class="dl">${kf?`🇰🇷 ${esc(kf)}`:esc(e.validity?t('validity')+' · '+e.validity:'')}</span><span class="go">${t('detail')} →</span></div></div>`}

function homeView(){
  const f=FEATURED.map(byId);
  const langCount={};EX.forEach(e=>examLangs(e).forEach(c=>{if(c!=='multi')langCount[c]=(langCount[c]||0)+1}));
  const topL=LORDER.filter(c=>langCount[c]).sort((a,b)=>langCount[b]-langCount[a]).slice(0,7);
  const nC=EX.filter(isCefr).length;
  const kr=EX.filter(krFee);
  return `<section class="hero"><div class="hero-l"><small>${t('h_small')}</small><h1>${t('h1a')}<br><em>${t('h1b')}</em>${t('h1c')}</h1><p>${t('h_p')}</p>
   <div class="stats"><div><b>${EX.length}</b>${t('st_exams')}</div><div><b>${allLangs.size}</b>${t('st_langs')}</div><div><b>${nLinks}</b>${t('st_links')}</div></div></div>
   <div class="slider"><div class="lab"><h2><span>${t('feat')}</span> ${t('feat_t')}</h2><div class="ctrl"><button class="ic" data-sl="-1" aria-label="prev">◀</button>${f.map((_,i)=>`<button class="dot ${i===S.slide?'on':''}" data-dot="${i}" aria-label="${i+1}"></button>`).join('')}<button class="ic" data-sl="1" aria-label="next">▶</button></div></div>
   <div id="slideBox">${slideHTML(f[S.slide],S.slide)}</div></div>
   <div class="sched"><h2>${t('quick_t')} <a data-go="find">${t('viewall')}</a></h2><div class="m">${t('quick_m')}</div><ul>
   ${topL.map(c=>`<li data-lang="${c}"><div class="t"><span class="dd">${langCount[c]}</span>${esc(lname(c))}</div><div class="d">${EX.filter(e=>examLangs(e).includes(c)).slice(0,4).map(e=>esc(e.name)).join(' · ')}</div></li>`).join('')}</ul></div></section>
  <section class="blk"><div class="inner"><div class="blk-h"><div><h2>${t('tiles_t')}</h2><p>${t('tiles_sub')}</p></div><a class="more" data-go="find">${t('all_ex')} →</a></div>
   <div class="tiles">${GROUPS.map((g,i)=>{const n=EX.filter(e=>examLangs(e).some(c=>g.codes.includes(c))).length;const nm=g.name?(g.name[L]||g.name.en):lname(g.k);
     return `<div class="tile ${i===3?'red':i===6?'dark':''}" data-group="${g.k}"><span class="arrow">↗</span><span class="gl">${g.gl}</span><h3>${esc(nm)}</h3><span class="tc">${t('n_ex',{n})}</span></div>`}).join('')}</div></div></section>
  <section class="blk" style="padding-top:0"><div class="inner"><div class="blk-h"><div><h2>${t('sys_t')}</h2><p>${t('sys_sub')}</p></div></div>
   <div class="split"><div class="lvl" data-sys="cefr"><div class="big">A1<br>C2</div><div><h3>${t('sys_cefr')}</h3><p>${t('sys_cefr_d')}</p><p class="n">${t('n_ex',{n:nC})}</p></div></div>
   <div class="lvl h" data-sys="score"><div class="big">990</div><div><h3>${t('sys_score')}</h3><p>${t('sys_score_d')}</p><p class="n">${t('n_ex',{n:EX.length-nC})}</p></div></div></div></div></section>
  <section class="blk" style="padding-top:0"><div class="inner"><div class="blk-h"><div><h2>${t('kr_t')}</h2><p>${t('kr_sub')}</p></div><a class="more" data-krall="1">${t('viewall')} →</a></div>
   <div class="board">${kr.slice(0,10).map(e=>`<div class="row" data-open="${e.id}"><span class="cat ${e.lang==='en'?'':'i'}">${esc(lname(e.lang))}</span><span class="tt">${esc(e.name)} <span class="sm">${esc(e.full||'')}</span></span><span class="sm">${esc(e.org||'')}</span><span><b>${esc(krFee(e))}</b></span></div>`).join('')}</div></div></section>
  <section class="blk guide"><div class="inner"><div class="blk-h"><div><h2>${t('g_t')}</h2></div></div>
   <div class="steps">${[1,2,3,4].map(i=>`<div class="step"><h3>${t('g'+i)}</h3><p>${t('g'+i+'d')}</p></div>`).join('')}</div></div></section>`}
function slideHTML(e,i){if(!e)return'';const kf=krFee(e);
  return `<div class="slide" data-open="${e.id}"><span class="tag">${esc(lname(e.lang))}</span><h3>${esc(e.name)}</h3><div class="en">${esc(e.full||'')}</div><p>${esc(note(e)||'')}</p>
   <div class="meta"><span>${t('levels')} <b>${esc(lvl(e)||'')}</b></span>${kf?`<span>🇰🇷 <b>${esc(kf)}</b></span>`:''}${(e.books||[]).length?`<span>📚 <b>${t('books_n',{n:e.books.length})}</b></span>`:''}</div><span class="num">0${i+1}</span></div>`}

function head(sm,tk,dk,extra=''){return `<div class="pagehead"><div class="inner"><div class="crumb">HOME › ${t(tk)}</div><small>${sm}</small><h1>${t(tk)}</h1><p>${t(dk)}</p>${extra}</div></div>`}
function langChips(){const cnt={};EX.forEach(e=>examLangs(e).forEach(c=>cnt[c]=(cnt[c]||0)+1));
  return LORDER.filter(c=>cnt[c]).map(c=>`<span class="chip ${S.langs.has(c)?'on':''}" data-chip="${c}">${esc(lname(c))}<span class="c">${cnt[c]}</span></span>`).join('')}
function filtersHTML(){return `<aside class="filters" id="filters"><div class="fh">${t('filters')}<button data-reset="1">${t('reset')} ↺</button></div>
  <div class="fg"><input class="fsearch" id="fq" placeholder="${t('search')}" value="${esc(S.q)}"></div>
  <div class="fg"><h4>${t('f_sys')}</h4><div class="seg">${['all','cefr','score'].map(s=>`<button class="${S.sys===s?'on':''}" data-seg="${s}">${s==='all'?t('sys_all'):s==='cefr'?'CEFR':t('sys_score')}</button>`).join('')}</div></div>
  <div class="fg"><h4>${t('f_kr')}</h4><div class="chips"><span class="chip ex ${S.kr?'on':''}" data-kr="1">🇰🇷 ${t('kr_yes')}</span></div></div>
  <div class="fg"><h4>${t('f_lang')}</h4><div class="chips">${langChips()}</div></div></aside>`}
function fbNote(){return L==='ko'||L==='en'?'':`<div class="fallback">${t('fb')}</div>`}
function listView(){const l=filtered();
  return head('EXPLORE','p_find','p_find_d')+`<div class="inner layout">${filtersHTML()}<div>${fbNote()}
   <div class="toolbar"><div class="count">${t('total',{n:`<b>${l.length}</b>`})}</div><div style="display:flex;gap:8px"><button class="ftbtn" id="ftbtn">${t('filters')}</button><select id="sort"><option value="lang" ${S.sort==='lang'?'selected':''}>${t('sort_lang')}</option><option value="name" ${S.sort==='name'?'selected':''}>${t('sort_name')}</option><option value="kr" ${S.sort==='kr'?'selected':''}>${t('sort_fee')}</option></select></div></div>
   ${l.length?`<div class="grid">${l.map(card).join('')}</div>`:`<div class="empty">${t('empty')}</div>`}</div></div>`}

const EXTRA_C=["KR","JP","CN","TW","VN","TH","ID","PH","IN","AE","SA","TR","IL","RU","DE","FR","ES","IT","PT","GB","IE","NL","PL","CZ","HU","GR","SE","NO","DK","FI","UA","AT","CH","US","CA","MX","AR","CL","CO","PE","BR","AU","NZ","ZA","EG","MA"];
function countryView(){
  const own={};EX.forEach(e=>(e.register||[]).forEach(r=>{if(r.country!=='GLOBAL'){own[r.country]=own[r.country]||new Set();own[r.country].add(e.id)}}));
  const all=[...new Set([...Object.keys(own),...EXTRA_C])].sort((a,b)=>cname(a).localeCompare(cname(b),L));
  const topC=Object.keys(own).sort((a,b)=>own[b].size-own[a].size).slice(0,12);
  const l=EX.filter(match).map(e=>({e,mine:(e.register||[]).filter(r=>r.country===S.country),gl:(e.register||[]).filter(r=>r.country==='GLOBAL'),fee:(e.fees||[]).find(f=>f.country===S.country)}))
    .sort((a,b)=>(b.mine.length>0)-(a.mine.length>0)||(!!b.fee)-(!!a.fee));
  return head('BY COUNTRY','p_country','p_country_d')+`<div class="inner" style="padding-top:28px;padding-bottom:70px">
   <div class="toolbar"><div class="count">${flag(S.country)} <b style="font-size:20px">${esc(cname(S.country))}</b></div><select id="cs" class="cselect" style="max-width:280px">${all.map(c=>`<option value="${c}" ${c===S.country?'selected':''}>${flag(c)} ${esc(cname(c))}</option>`).join('')}</select></div>
   <h4 style="margin:0 0 10px">${t('top_countries')}</h4><div class="ccount" style="margin-bottom:22px">${topC.map(c=>`<div class="cc" data-cc="${c}"><span class="flag">${flag(c)}</span>${esc(cname(c))} <b>${own[c].size}</b></div>`).join('')}</div>
   <div class="chips" style="margin-bottom:18px">${langChips()}</div>
   <div class="board">${l.map(({e,mine,gl,fee})=>`<div class="crow"><div class="ch"><span class="cat ${mine.length?'':'i'}">${mine.length?t('own_page'):t('global')}</span><a data-open="${e.id}"><b>${esc(e.name)}</b></a><span class="sm">${esc(lname(e.lang))}</span>${fee?`<span class="feeb">${esc(fee.amount)}</span>`:''}</div>
     <div class="links">${(mine.length?mine:gl).map(lk).join('')||`<span class="sm">${t('globalOnly')}</span>`}</div></div>`).join('')}</div></div>`}
function lk(r){const g=r.country==='GLOBAL';return `<a class="lk" href="${esc(r.url)}" target="_blank" rel="noopener"><span class="ccb ${g?'g':''}">${flag(r.country)} ${esc(g?t('global'):r.country)}</span><span class="lt">${esc(r.label)}</span><span class="ar">↗</span></a>`}

function compareView(){const l=filtered();
  return head('COMPARE','p_compare','p_compare_d')+`<div class="inner" style="padding-top:28px;padding-bottom:70px"><div class="chips" style="margin-bottom:16px">${langChips()}</div>
   <div class="cal"><table><thead><tr><th style="text-align:left">${t('exam')}</th><th>${t('lang')}</th><th>${t('org')}</th><th>${t('levels')}</th><th>${t('kfee')}</th><th>${t('validity')}</th><th>📚</th></tr></thead><tbody>
   ${l.map(e=>`<tr><td class="name" data-open="${e.id}"><b>${esc(e.name)}</b></td><td>${esc(lname(e.lang))}</td><td style="font-size:12.5px">${esc(e.org||'')}</td><td style="font-size:12.5px;text-align:left">${esc(lvl(e)||'')}</td><td><b>${esc(krFee(e)||'–')}</b></td><td>${esc(e.validity||'–')}</td><td>${(e.books||[]).length||'–'}</td></tr>`).join('')}</tbody></table></div></div>`}
function cefrView(){const C=["A1","A2","B1","B2","C1","C2"];const l=filtered().filter(isCefr);
  return head('CEFR','p_cefr','p_cefr_d')+`<div class="inner" style="padding-top:28px;padding-bottom:70px"><div class="note">${t('cefrNote')}</div><div class="chips" style="margin-bottom:16px">${langChips()}</div>
   <div class="cal"><table><thead><tr><th style="text-align:left">${t('exam')}</th>${C.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>
   ${l.map(e=>`<tr><td class="name" data-open="${e.id}"><b>${esc(e.name)}</b> <span style="color:var(--sub);font-size:12px">${esc(lname(e.lang))}</span></td>${C.map((c,i)=>`<td class="${e.cefr_map[c]?'cf cf'+i:''}">${esc(e.cefr_map[c]||'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`}
const BT={"공식":"t_official","국내 베스트셀러":"t_kr","해외 대표":"t_intl"};
function bookLi(b){const ty=BT[b.type]||'t_intl';
  return `<li class="bk"><span class="bt ${ty}">${t(ty)}</span><a href="${esc(b.url)}" target="_blank" rel="noopener"><b>${esc(b.title)}</b>${b.url_is_search?` <small>(${t('search_book')})</small>`:''} ↗</a><div class="by">${esc(b.by||'')}</div>${L==='ko'&&b.desc?`<div class="bd">${esc(b.desc)}</div>`:''}</li>`}
function booksView(){const l=filtered();
  return head('PREP BOOKS','p_books','p_books_d')+`<div class="inner" style="padding-top:28px;padding-bottom:70px"><div class="chips" style="margin-bottom:18px">${langChips()}</div>
   <div class="rm-grid">${l.map(e=>`<div class="rm"><h4><a data-open="${e.id}" style="cursor:pointer">${esc(e.name)}</a><span>${esc(lname(e.lang))}</span></h4>
    ${(e.books||[]).length?`<ul class="bks">${e.books.map(bookLi).join('')}</ul>`:`<p class="sm">${t('no_books')}</p>`}
    <button data-open="${e.id}">${t('prac')} →</button></div>`).join('')}</div></div>`}

function chrome(){
  const tabs=['home','find','country','compare','cefr','books'];
  document.getElementById('menu').innerHTML=tabs.slice(1).map(k=>`<button class="${S.tab===k?'on':''}" data-go="${k}">${t('m_'+k)}</button>`).join('');
  document.getElementById('utilNav').innerHTML=tabs.map(k=>`<a class="${S.tab===k?'on':''}" data-go="${k}">${t('m_'+k)}</a>`).join('');
  document.getElementById('langName').textContent=LANGS.find(x=>x[0]===L)[1];
  document.getElementById('langList').innerHTML=LANGS.map(([c,n,en])=>`<li><button class="${c===L?'on':''}" data-setlang="${c}">${n}<small>${en}</small></button></li>`).join('');
  document.getElementById('today').textContent=t('today')+' '+new Date().toLocaleDateString(L,{year:'numeric',month:'long',day:'numeric'});
  document.getElementById('hq').placeholder=t('search');
  document.querySelectorAll('[data-i]').forEach(el=>el.textContent=t(el.dataset.i));
  document.documentElement.lang=L;
  document.getElementById('foot').innerHTML=`<div class="links">${tabs.map(k=>`<a data-go="${k}">${t('m_'+k)}</a>`).join('')}</div><div class="flex"><div><div class="flogo">World<b>Language</b></div><p>${t('foot')}</p></div><div>© 2026 다인에듀 · 후안샘<br>github.com/yalli2/worldlanguage</div></div>`}
function render(top){chrome();const v={home:homeView,find:listView,country:countryView,compare:compareView,cefr:cefrView,books:booksView}[S.tab];
  document.getElementById('content').innerHTML=v();if(top)scrollTo(0,0)}
let timer;function startSlider(){clearInterval(timer);timer=setInterval(()=>{if(S.tab==='home'&&!document.getElementById('mbg').classList.contains('open'))moveSlide(1)},6000)}
function moveSlide(d){const n=FEATURED.length;S.slide=(S.slide+d+n)%n;const b=document.getElementById('slideBox');if(!b)return;b.innerHTML=slideHTML(byId(FEATURED[S.slide]),S.slide);document.querySelectorAll('[data-dot]').forEach(x=>x.classList.toggle('on',+x.dataset.dot===S.slide))}
function resetF(){S.langs.clear();S.sys='all';S.kr=false;S.q=''}
function go(tab){S.tab=tab;document.getElementById('menu').classList.remove('open');render(true)}
function setLang(c){L=c;store.set('lang',c);const u=new URL(location.href);u.searchParams.set('lang',c);history.replaceState(null,'',u);document.getElementById('lang').classList.remove('open');const y=scrollY;render();scrollTo(0,y)}

function openModal(id){const e=byId(id);if(!e)return;
  const regs=(e.register||[]).slice().sort((a,b)=>(a.country==='KR'?-2:a.country==='GLOBAL'?-1:0)-(b.country==='KR'?-2:b.country==='GLOBAL'?-1:0));
  document.getElementById('modal').innerHTML=`<div class="mhead ${e.lang==='en'?'dom':''}"><small>${esc(lname(e.lang))} · ${esc(e.org||'')}</small><h2>${esc(e.name)}</h2><div class="en">${esc(e.full||'')}</div><button class="close" data-close="1" aria-label="close">✕</button></div>
  <div class="mbody">${fbNote()}<p style="margin:0;font-size:15px">${esc(note(e)||'')}</p>
   <dl class="kv"><dt>${t('org')}</dt><dd>${esc(e.org||'')}</dd><dt>${t('official')}</dt><dd>${e.official?`<a href="${esc(e.official)}" target="_blank" rel="noopener" style="color:var(--red);font-weight:600">${esc(e.official.replace(/^https?:\/\//,'').replace(/\/$/,''))}</a>`:'–'}</dd>
   <dt>${t('levels')}</dt><dd>${esc(lvl(e)||'')}</dd>${e.cefr?`<dt>${t('cefr')}</dt><dd>${esc(e.cefr)}</dd>`:''}${e.langs?`<dt>${t('langs')}</dt><dd>${e.langs.map(lname).map(esc).join(', ')}</dd>`:''}${e.validity?`<dt>${t('validity')}</dt><dd>${esc(e.validity)}</dd>`:''}</dl>
   ${isCefr(e)?`<div class="cefrbar">${["A1","A2","B1","B2","C1","C2"].map((c,i)=>`<div class="${e.cefr_map[c]?'cf cf'+i:''}"><b>${c}</b><span>${esc(e.cefr_map[c]||'')}</span></div>`).join('')}</div>`:''}
   ${(e.fees||[]).length?`<div class="sec"><h3>💳 ${t('fee')}</h3><table class="ft"><thead><tr><th>${t('country')}</th><th>${t('amount')}</th><th>${t('memo')}</th></tr></thead><tbody>${e.fees.map(f=>`<tr><td>${flag(f.country)} ${esc(cname(f.country))}</td><td><b>${esc(f.amount)}</b></td><td>${esc(f.note||'')}</td></tr>`).join('')}</tbody></table></div>`:''}
   ${regs.length?`<div class="sec"><h3>📍 ${t('reg')}</h3><div class="links">${regs.map(lk).join('')}</div></div>`:''}
   ${(e.practice||[]).length?`<div class="sec"><h3>📝 ${t('prac')}</h3><div class="links">${e.practice.map(p=>`<a class="lk" href="${esc(p.url)}" target="_blank" rel="noopener"><span class="ccb g">FREE</span><span class="lt">${esc(p.label)}</span><span class="ar">↗</span></a>`).join('')}</div></div>`:''}
   <div class="sec"><h3>📚 ${t('books')}</h3>${(e.books||[]).length?`<ul class="bks">${e.books.map(bookLi).join('')}</ul>`:`<p class="sm">${t('no_books')}</p>`}</div>
   <div class="warn">⚠ ${t('warn')}</div>
   <div class="acts">${e.official?`<a class="btn p" href="${esc(e.official)}" target="_blank" rel="noopener">${t('open_official')} ↗</a>`:''}<button class="btn s" data-close="1">✕</button></div></div>`;
  document.getElementById('mbg').classList.add('open');document.body.style.overflow='hidden';history.replaceState(null,'','#'+id)}
function closeModal(){document.getElementById('mbg').classList.remove('open');document.body.style.overflow='';history.replaceState(null,'',location.pathname+location.search)}

document.addEventListener('click',ev=>{const el=ev.target;
  if(el.closest('#langBtn')){const w=document.getElementById('lang');w.classList.toggle('open');return}
  if(!el.closest('#lang'))document.getElementById('lang').classList.remove('open');
  const q=s=>el.closest(s);let x;
  if(x=q('[data-setlang]'))return setLang(x.dataset.setlang);
  if(x=q('[data-close]'))return closeModal();
  if(el.id==='mbg')return closeModal();
  if(x=q('a.lk'))return;
  if(x=q('[data-open]')){ev.preventDefault();return openModal(x.dataset.open)}
  if(x=q('[data-go]'))return go(x.dataset.go);
  if(x=q('[data-lang]')){resetF();S.langs.add(x.dataset.lang);return go('find')}
  if(x=q('[data-group]')){resetF();GROUPS.find(g=>g.k===x.dataset.group).codes.forEach(c=>S.langs.add(c));return go('find')}
  if(x=q('[data-sys]')){resetF();S.sys=x.dataset.sys;return go('find')}
  if(x=q('[data-krall]')){resetF();S.kr=true;return go('find')}
  if(x=q('[data-chip]')){const c=x.dataset.chip;S.langs.has(c)?S.langs.delete(c):S.langs.add(c);const y=scrollY;render();scrollTo(0,y);return}
  if(x=q('[data-seg]')){S.sys=x.dataset.seg;const y=scrollY;render();scrollTo(0,y);return}
  if(x=q('[data-kr]')){S.kr=!S.kr;const y=scrollY;render();scrollTo(0,y);return}
  if(x=q('[data-reset]')){resetF();render();return}
  if(x=q('[data-cc]')){S.country=x.dataset.cc;const y=scrollY;render();scrollTo(0,y);return}
  if(x=q('[data-sl]'))return moveSlide(+x.dataset.sl),startSlider();
  if(x=q('[data-dot]')){S.slide=+x.dataset.dot-1;moveSlide(1);startSlider();return}
  if(el.id==='ftbtn')return document.getElementById('filters').classList.toggle('show');
  if(el.id==='mtoggle')return document.getElementById('menu').classList.toggle('open');
  if(el.id==='totop')return scrollTo({top:0,behavior:'smooth'});
});
document.addEventListener('input',ev=>{if(ev.target.id==='fq'){S.q=ev.target.value;const p=ev.target.selectionStart,y=scrollY;render();const f=document.getElementById('fq');f.focus();f.setSelectionRange(p,p);scrollTo(0,y)}});
document.addEventListener('change',ev=>{if(ev.target.id==='sort'){S.sort=ev.target.value;render()}if(ev.target.id==='cs'){S.country=ev.target.value;const y=scrollY;render();scrollTo(0,y)}});
document.getElementById('hsearch').addEventListener('submit',ev=>{ev.preventDefault();resetF();S.q=document.getElementById('hq').value;go('find')});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeModal()});
addEventListener('scroll',()=>{document.getElementById('totop').style.display=scrollY>500?'block':'none'});
render();startSlider();
if(location.hash.length>1)openModal(decodeURIComponent(location.hash.slice(1)));
