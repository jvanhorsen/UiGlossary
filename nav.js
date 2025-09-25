class SiteNav extends HTMLElement{
  connectedCallback(){
    const active = (this.getAttribute('active')||'').toLowerCase();
    this.innerHTML = `
      <div class="topbar">
        <div class="toolbar container">
          <div class="brand"><div class="logo" aria-hidden="true"><img src="apple-touch-icon.png" alt="" /></div> ${this.getAttribute('title')||'UI Component Glossary'}</div>
          <label class="switch" id="theme-switch-wrap" style="margin-right:8px" title="Toggle light mode">
            <input type="checkbox" id="theme-switch" aria-label="Toggle light mode" />
            <span class="track"><span class="thumb"></span><span class="ico sun" aria-hidden="true">☀︎</span><span class="ico moon" aria-hidden="true">☾</span></span>
          </label>
          <div class="nav__links" id="primary-links">
            <a href="index.html" ${active==='glossary'?'aria-current="page"':''}>Glossary</a>
            <a href="architecture.html" ${active==='architecture'?'aria-current="page"':''}>Architecture</a>
            <a href="database.html" ${active==='database'?'aria-current="page"':''}>Database</a>
          </div>
        </div>
      </div>`;
    // theme init
    const themeSwitch = this.querySelector('#theme-switch');
    const setTheme = (isLight)=>{
      const theme = isLight ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      try{ localStorage.setItem('theme', theme); }catch(_){ }
    };
    try{
      const savedTheme = localStorage.getItem('theme');
      const isLight = savedTheme ? savedTheme === 'light' : false;
      if(themeSwitch){ themeSwitch.checked = isLight; }
      document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
    }catch(_){ document.documentElement.setAttribute('data-theme','dark'); }
    if(themeSwitch){ themeSwitch.addEventListener('change', ()=> setTheme(themeSwitch.checked)); }
  }
}

class SubNav extends HTMLElement{
  connectedCallback(){
    // content is the slot of anchors; if none, use data-links CSV (label#href)
    const inner = this.innerHTML.trim();
    let linksHTML = inner;
    if(!inner && this.getAttribute('links')){
      linksHTML = this.getAttribute('links').split(',').map(x=>{
        const [label, id] = x.split('#');
        return `<a href="#${(id||'').trim()}">${(label||'').trim()}</a>`;
      }).join('');
    }
    this.innerHTML = `
      <nav class="subnav" aria-label="Page sections">
        <div class="subnav__inner container">
          ${linksHTML}
          <div class="subnav__tools">${this.getAttribute('tools')||''}</div>
        </div>
      </nav>`;
  }
}

customElements.define('site-nav', SiteNav);
customElements.define('sub-nav', SubNav);


