/* ==========================================================================
   SCRIPT.JS
   Lê PORTFOLIO_DATA (data.js) e injeta no HTML.
   Você normalmente NÃO precisa editar este arquivo — edite data.js.
   ========================================================================== */

(function () {
  const D = PORTFOLIO_DATA;

  const iconArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;

  /* -------------------- HERO -------------------- */
  function renderHero() {
    document.getElementById("heroNome").textContent = D.identidade.nome;
    document.getElementById("heroCargo").textContent = D.identidade.cargo;
    document.getElementById("heroFrase").textContent = D.identidade.fraseHero;
    document.getElementById("heroLocal").textContent = D.identidade.localizacao;

    const statusText = document.getElementById("heroStatusText");
    statusText.textContent = D.identidade.disponivel
      ? "Disponível para novos projetos"
      : "Focado em projetos atuais";

    document.title = `${D.identidade.nome} — ${D.identidade.cargo}`;
  }

  /* -------------------- SOBRE -------------------- */
  function renderSobre() {
    const paragrafosEl = document.getElementById("sobreParagrafos");
    paragrafosEl.innerHTML = D.sobre.paragrafos
      .map((p) => `<p>${p}</p>`)
      .join("");

    const destaquesEl = document.getElementById("sobreDestaques");
    destaquesEl.innerHTML = D.sobre.destaques
      .map(
        (d) => `
        <div class="sobre__destaque">
          <span class="sobre__destaque-num">${d.numero}</span>
          <span class="sobre__destaque-label">${d.rotulo}</span>
        </div>`
      )
      .join("");
  }

  /* -------------------- STACK -------------------- */
  function renderStack() {
    const grid = document.getElementById("stackGrid");
    grid.innerHTML = D.stack
      .map(
        (grupo) => `
        <div class="stack__card">
          <div class="stack__cat">${grupo.categoria}</div>
          <ul class="stack__itens">
            ${grupo.itens.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>`
      )
      .join("");
  }

  /* -------------------- PROJETOS -------------------- */
  function renderProjetos() {
    const grid = document.getElementById("projetosGrid");
    grid.innerHTML = D.projetos
      .map((p) => {
        const temLink = p.link && p.link.trim().length > 0;
        const linkHTML = temLink
          ? `<a class="card-projeto__link" href="${p.link}" target="_blank" rel="noopener">${p.linkRotulo || "Acessar"} ${iconArrow}</a>`
          : `<span class="card-projeto__link card-projeto__link--disabled">${p.linkRotulo || "Indisponível"}</span>`;

        return `
        <article class="card-projeto reveal">
          <div class="card-projeto__top">
            <h3 class="card-projeto__titulo">${p.titulo}</h3>
            ${p.destaque ? `<span class="card-projeto__badge">Em produção</span>` : ""}
          </div>
          <p class="card-projeto__desc">${p.descricao}</p>
          <div class="card-projeto__tags">
            ${p.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
          ${linkHTML}
        </article>`;
      })
      .join("");
  }

  /* -------------------- CONTATO -------------------- */
  function renderContato() {
    document.getElementById("contatoFrase").textContent = D.contato.frase;

    const emailEl = document.getElementById("contatoEmail");
    emailEl.textContent = D.contato.email;
    emailEl.href = `mailto:${D.contato.email}`;

    const linksEl = document.getElementById("contatoLinks");
    linksEl.innerHTML = D.contato.links
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.rotulo}</a>`)
      .join("");
  }

  /* -------------------- FOOTER -------------------- */
  function renderFooter() {
    document.getElementById("footerNome").textContent = D.identidade.nome;
    document.getElementById("footerAno").textContent = new Date().getFullYear();
  }

  /* -------------------- HEADER: hide on scroll down -------------------- */
  function initHeaderScroll() {
    const header = document.getElementById("header");
    const scrollBar = document.getElementById("scrollBar");
    let lastY = window.scrollY;

    window.addEventListener("scroll", () => {
      const y = window.scrollY;

      if (y > lastY && y > 140) {
        header.classList.add("header--hidden");
      } else {
        header.classList.remove("header--hidden");
      }
      lastY = y;

      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      scrollBar.style.width = progress + "%";
    }, { passive: true });
  }

  /* -------------------- MOBILE MENU -------------------- */
  function initMobileMenu() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("mobileNav");

    burger.addEventListener("click", () => {
      burger.classList.toggle("is-open");
      nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("is-open");
        nav.classList.remove("is-open");
      })
    );
  }

  /* -------------------- SCROLL REVEAL -------------------- */
  function initReveal() {
    // Cada grupo revela em sequência (stagger) quando entra na tela.
    // O primeiro seletor de cada grupo é o "gatilho" observado;
    // todos os elementos do grupo recebem o delay escalonado.
    const grupos = [
      ".hero__inner .eyebrow, .hero__inner .hero__title, .hero__inner .hero__frase, .hero__inner .hero__meta, .hero__inner .hero__actions",
      "#sobre .section__tag, #sobre .section__title",
      "#sobre .sobre__texto p, #sobre .sobre__destaque",
      "#stack .section__tag, #stack .section__title",
      "#stack .stack__card",
      "#projetos .section__tag, #projetos .section__title",
      "#projetos .card-projeto",
      "#contato .section__tag, #contato .section__title, #contato .contato__frase, #contato .contato__email, #contato .contato__links",
    ];

    const STAGGER_MS = 90;

    grupos.forEach((seletor) => {
      const els = document.querySelectorAll(seletor);
      if (!els.length) return;

      els.forEach((el, i) => {
        el.classList.add("reveal");
        el.style.transitionDelay = `${i * STAGGER_MS}ms`;
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              els.forEach((el) => el.classList.add("is-visible"));
              observer.disconnect();
            }
          });
        },
        { threshold: 0.12 }
      );

      // observa o primeiro elemento do grupo como gatilho
      observer.observe(els[0]);
    });

    // Hero já está visível ao carregar a página — revela de imediato,
    // sem depender de scroll.
    requestAnimationFrame(() => {
      document
        .querySelectorAll(
          ".hero__inner .eyebrow, .hero__inner .hero__title, .hero__inner .hero__frase, .hero__inner .hero__meta, .hero__inner .hero__actions"
        )
        .forEach((el) => el.classList.add("is-visible"));
    });
  }

  /* -------------------- INIT -------------------- */
  function init() {
    renderHero();
    renderSobre();
    renderStack();
    renderProjetos();
    renderContato();
    renderFooter();
    initHeaderScroll();
    initMobileMenu();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", init);
})();