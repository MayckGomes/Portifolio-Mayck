/* Editor do portfólio. Só roda com ?edit na URL.
   NÃO suba este arquivo no deploy: sem ele, o ?edit não faz nada. */
(function(){
'use strict';
const P=window.__PF; if(!P) return;
const {DEFAULT,KEY,clone,esc,$,render,saveDraft}=P;
let DATA=P.data();
const setData=d=>{DATA=d;P.setData(d)};
const st=document.createElement('style');
st.textContent=`/* ===== editor ===== */
.editor{position:fixed;top:0;right:0;bottom:0;width:min(460px,100vw);z-index:120;background:#0e0e12;border-left:1px solid var(--line);color:var(--fg);display:flex;flex-direction:column;transform:translateX(102%);transition:transform .5s var(--ease);font-size:.86rem}
.editor.open{transform:none}
.editor,.editor *{cursor:auto!important}
.editor button,.ed-toggle{cursor:pointer!important}
.ed-top{padding:1rem 1.1rem;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:.6rem}
.ed-top h3{font-family:var(--display);font-weight:400;font-size:1.6rem;letter-spacing:.03em;text-transform:uppercase}
.ed-tabs{display:flex;gap:.35rem;padding:.7rem 1.1rem;border-bottom:1px solid var(--line);flex-wrap:wrap}
.ed-body{flex:1;overflow:auto;padding:1rem 1.1rem 5rem;overscroll-behavior:contain}
.ed-foot{padding:.8rem 1.1rem;border-top:1px solid var(--line);display:flex;gap:.5rem;flex-wrap:wrap}
.ed-status{color:var(--mut);font-size:.72rem;width:100%}
.ed-hint{color:var(--mut);font-size:.76rem;line-height:1.5;margin-bottom:1rem}
.ed-h{font-family:var(--display);font-weight:400;font-size:1.3rem;text-transform:uppercase;letter-spacing:.04em;margin:1.4rem 0 .8rem;color:var(--acc)}
.f{display:block;margin-bottom:.8rem}
.f span{display:block;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin-bottom:.3rem}
.f input,.f textarea{width:100%;background:#17171c;border:1px solid var(--line);border-radius:8px;padding:.55rem .7rem;color:var(--fg);font:inherit;resize:vertical}
.f input:focus,.f textarea:focus{outline:none;border-color:var(--acc)}
.it{border:1px solid var(--line);border-radius:12px;padding:.8rem;margin-bottom:.8rem;background:#121217}
.it-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:.7rem;gap:.5rem}
.it-h b{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.it-h span{display:flex;gap:.3rem;flex:none}
.btn{background:#1c1c22;border:1px solid var(--line);color:var(--fg);border-radius:8px;padding:.45rem .75rem;font:inherit;font-size:.78rem;transition:border-color .2s,color .2s}
.btn:hover{border-color:var(--acc)}
.btn.on,.btn.pri{background:var(--acc);color:#000;border-color:var(--acc);font-weight:700}
.btn.x:hover{border-color:#ff5a5a;color:#ff5a5a}
.btn.add{width:100%;border-style:dashed;padding:.7rem}
.ed-toggle{position:fixed;left:1.2rem;bottom:1.2rem;z-index:119;background:var(--acc);color:#000;border:0;border-radius:99px;padding:.8rem 1.2rem;font:700 .8rem var(--body);letter-spacing:.1em;text-transform:uppercase;box-shadow:0 8px 30px rgba(0,0,0,.5)}
body.on-panel .cur,body.on-panel .cur-dot{opacity:0}
`;
document.head.appendChild(st);

  const NEW={
    projects:{title:'Novo projeto',tags:[],desc:'',link:'',linkLabel:'Ver no GitHub',badge:'',image:'',imagePosition:'50% 0%'},
    timeline:{yr:'',title:'Novo item',where:'',more:''},
    facts:{label:'',value:''}
  };
  const get=path=>path.split('.').reduce((o,k)=>o==null?o:o[k],DATA);
  const set=(path,val)=>{const ks=path.split('.');let o=DATA;ks.slice(0,-1).forEach(k=>{if(o[k]==null)o[k]={};o=o[k]});o[ks[ks.length-1]]=val};

  const ed=document.createElement('aside'); ed.className='editor open'; ed.setAttribute('aria-label','Editor do portfólio');
  const tg=document.createElement('button'); tg.className='ed-toggle'; tg.textContent='✎ Editar';
  const fileIn=document.createElement('input'); fileIn.type='file'; fileIn.accept='.js,.json'; fileIn.hidden=true;
  document.body.append(ed,tg,fileIn);
  [ed,tg].forEach(el=>{el.addEventListener('pointerenter',()=>document.body.classList.add('on-panel'));el.addEventListener('pointerleave',()=>document.body.classList.remove('on-panel'))});
  tg.addEventListener('click',()=>ed.classList.toggle('open'));

  let tab='perfil';
  const TABS=[['perfil','Perfil'],['projetos','Projetos'],['stack','Stack'],['faixa','Faixa'],['trajetoria','Trajetória']];

  const fld=(label,path,o={})=>{
    const kind=o.kind||'text', v=get(path);
    const val=kind==='list'?(v||[]).join(', '):kind==='lines'?(v||[]).join('\n'):(v==null?'':v);
    const inner=(o.area||kind==='lines')
      ?`<textarea data-path="${path}" data-kind="${kind}" rows="${kind==='lines'?9:3}">${esc(val)}</textarea>`
      :`<input data-path="${path}" data-kind="${kind}" value="${esc(val)}">`;
    return `<label class="f"><span>${label}</span>${inner}</label>`;
  };
  const item=(list,i,title,inner)=>`<div class="it"><div class="it-h"><b>${esc(title||'(sem título)')}</b><span>
    <button class="btn" data-act="up" data-list="${list}" data-i="${i}">↑</button>
    <button class="btn" data-act="down" data-list="${list}" data-i="${i}">↓</button>
    <button class="btn x" data-act="del" data-list="${list}" data-i="${i}">✕</button></span></div>${inner}</div>`;
  const addBtn=(list,label)=>`<button class="btn add" data-act="add" data-list="${list}">+ ${label}</button>`;

  function body(){
    if(tab==='perfil'){
      return `<p class="ed-hint">No texto "Sobre", coloque <b>**duas estrelas**</b> em volta das palavras que quer destacar em cor. O texto do selo funciona melhor curto.</p>`
        +fld('Nome','profile.first')+fld('Sobrenome','profile.last')+fld('Cargo','profile.role')
        +fld('Frase curta (hero)','profile.tagline',{area:true})+fld('Texto do selo giratório','profile.badge')
        +fld('Texto "Sobre"','profile.about',{area:true})
        +fld('Foto (caminho ou URL; vazio = sem foto)','profile.photo')+fld('Enquadramento da foto (ex.: 50% 20%)','profile.photoPosition')
        +fld('LinkedIn (URL; vazio = não aparece)','profile.linkedin')+fld('Currículo em PDF (ex.: curriculo.pdf; vazio = sem botão)','profile.resumePdf')+fld('Disponibilidade (ex.: Aberto a oportunidades de estágio e CLT; vazio = não aparece)','profile.availability',{area:true})
        +fld('E-mail','profile.email')+fld('GitHub (URL)','profile.github')
        +fld('Local (relógio e rodapé)','profile.location')+fld('Sigla no relógio','profile.clockLabel')+fld('Fuso horário (ex.: America/Maceio)','profile.timezone')
        +`<h4 class="ed-h">Fatos do "Sobre"</h4>`
        +(DATA.facts||[]).map((f,i)=>item('facts',i,f.label,fld('Título',`facts.${i}.label`)+fld('Texto',`facts.${i}.value`))).join('')
        +addBtn('facts','Adicionar fato');
    }
    if(tab==='projetos'){
      return `<p class="ed-hint">Os cards aparecem na ordem da lista. Sem link, o card fica sem o botão.</p>`
        +(DATA.projects||[]).map((p,i)=>item('projects',i,p.title,
          fld('Título',`projects.${i}.title`)+fld('Selo de destaque (ex.: Na Google Play; vazio = sem selo)',`projects.${i}.badge`)+fld('Tecnologias (separe por vírgula)',`projects.${i}.tags`,{kind:'list'})
          +fld('Descrição',`projects.${i}.desc`,{area:true})+fld('Link (URL)',`projects.${i}.link`)+fld('Texto do botão',`projects.${i}.linkLabel`)
          +fld('Imagem (caminho ou URL; vazio = sem imagem)',`projects.${i}.image`)+fld('Enquadramento da imagem (ex.: 50% 0%)',`projects.${i}.imagePosition`))).join('')
        +addBtn('projects','Adicionar projeto');
    }
    if(tab==='stack') return `<p class="ed-hint">Uma tecnologia por linha.</p>`+fld('Tecnologias','stack',{kind:'lines'});
    if(tab==='faixa') return `<p class="ed-hint">Palavras da faixa que rola sozinha. Uma por linha.</p>`+fld('Palavras','marquee',{kind:'lines'});
    return `<p class="ed-hint">Do mais recente pro mais antigo. O texto "detalhe" aparece ao passar o mouse.</p>`
      +(DATA.timeline||[]).map((t,i)=>item('timeline',i,t.title,
        fld('Período',`timeline.${i}.yr`)+fld('Título',`timeline.${i}.title`)+fld('Onde',`timeline.${i}.where`)+fld('Detalhe',`timeline.${i}.more`,{area:true}))).join('')
      +addBtn('timeline','Adicionar item');
  }

  function panel(){
    const st=$('.ed-body',ed)?ed.querySelector('.ed-body').scrollTop:0;
    ed.innerHTML=`<div class="ed-top"><h3>Editor</h3><button class="btn" data-act="close">Fechar</button></div>
      <div class="ed-tabs">${TABS.map(([k,l])=>`<button class="btn${k===tab?' on':''}" data-tab="${k}">${l}</button>`).join('')}</div>
      <div class="ed-body">${body()}</div>
      <div class="ed-foot">
        <button class="btn pri" data-act="export">Baixar data.js</button>
        <button class="btn" data-act="import">Importar</button>
        <button class="btn x" data-act="reset">Descartar rascunho</button>
        <div class="ed-status" id="edStatus">As mudanças aparecem na hora e ficam salvas como rascunho neste navegador.</div>
      </div>`;
    ed.querySelector('.ed-body').scrollTop=st;
  }
  const status=msg=>{const s=$('#edStatus');if(s)s.textContent=msg};
  const refresh=()=>{panel();render();status(saveDraft()?'Rascunho salvo neste navegador.':'Não consegui salvar o rascunho (armazenamento bloqueado). Baixe o data.js.')};

  let timer;
  ed.addEventListener('input',e=>{
    const t=e.target; if(!t.dataset||!t.dataset.path) return;
    let v=t.value;
    if(t.dataset.kind==='list') v=v.split(',').map(s=>s.trim()).filter(Boolean);
    else if(t.dataset.kind==='lines') v=v.split('\n').map(s=>s.trim()).filter(Boolean);
    set(t.dataset.path,v);
    clearTimeout(timer); timer=setTimeout(()=>{render();status(saveDraft()?'Rascunho salvo neste navegador.':'Não consegui salvar o rascunho. Baixe o data.js.')},250);
  });

  ed.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(!b) return;
    if(b.dataset.tab){tab=b.dataset.tab;return panel()}
    const act=b.dataset.act, list=b.dataset.list, i=+b.dataset.i;
    if(act==='close') return ed.classList.remove('open');
    if(act==='export') return download();
    if(act==='import') return fileIn.click();
    if(act==='reset'){ if(confirm('Descartar o rascunho e voltar ao que está no data.js?')){try{localStorage.removeItem(KEY)}catch(_){} setData(clone(DEFAULT)); panel(); render(); status('Rascunho descartado.');} return; }
    if(act==='add'){ (DATA[list]=DATA[list]||[]).push(clone(NEW[list])); return refresh(); }
    const arr=DATA[list]; if(!arr) return;
    if(act==='del'){ if(confirm('Remover este item?')){arr.splice(i,1);refresh()} return; }
    if(act==='up'&&i>0){ [arr[i-1],arr[i]]=[arr[i],arr[i-1]]; return refresh(); }
    if(act==='down'&&i<arr.length-1){ [arr[i+1],arr[i]]=[arr[i],arr[i+1]]; return refresh(); }
  });

  function download(){
    const head='// Dados do portfólio. Dá pra editar este arquivo na mão ou abrir o site com ?edit\n// (ex.: index.html?edit), mexer pelo painel e clicar em "Baixar data.js".\n';
    const blob=new Blob([head+'window.PORTFOLIO = '+JSON.stringify(DATA,null,2)+';\n'],{type:'text/javascript'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='data.js'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1500);
    status('data.js baixado. Substitua o arquivo no projeto e faça o deploy.');
  }
  fileIn.addEventListener('change',()=>{
    const f=fileIn.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=()=>{ try{
      const txt=String(r.result), a=txt.indexOf('{'), z=txt.lastIndexOf('}');
      setData(Object.assign(clone(DEFAULT),JSON.parse(txt.slice(a,z+1)))); refresh(); status('Importado com sucesso.');
    }catch(err){ status('Não consegui ler esse arquivo. Precisa ser um data.js gerado pelo editor.'); } fileIn.value=''; };
    r.readAsText(f);
  });

  panel();

})();
