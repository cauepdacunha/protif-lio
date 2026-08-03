  /* ============================================================
     CONFIG — EDITE APENAS AQUI para atualizar seus links e dados
     ============================================================ */
  const CONFIG = {
    // TODO: troque pelo seu usuário real do GitHub (sem espaços, sem @)
    githubUser: "cauepdacunha",

    // TODO: troque pelo seu usuário/slug real do LinkedIn (o que vem depois de linkedin.com/in/)
    linkedinUser: "cauê-pereira-701896423",

    // TODO: troque pelo seu e-mail profissional
    email: "cauepereiradacunhatech@gmail.com"
  };

  /* ============================================================
     PROJETOS — adicione um objeto para cada projeto seu aqui.
     Copie e cole o bloco { ... } para adicionar mais projetos.
     Campos:
       file        -> nome do arquivo principal (aparece como "rótulo" do card)
       title       -> nome do projeto
       description -> descrição curta (1-2 frases)
       tags        -> lista de tecnologias usadas, ex: ["HTML", "CSS", "JS"]
       github      -> link do repositório no GitHub
       demo        -> link do projeto funcionando (deixe "" se não tiver)
     ============================================================ */
  const PROJECTS = [
    // TODO: exemplo — apague este comentário e edite os projetos reais abaixo
    {
      file: "projeto-mario.html",
      title: "projeto do filme super-mario bross",
      description: "Esse projeto foi feito com o intuito de testar um pouco minhas habilidades no front-end.",
      tags: ["HTML", "CSS", "JS"],
      github: "https://cauepdacunha.github.io/project/",
      demo: ""
    },
    {
      file: "projeto-02.html",
      title: "Nome do Projeto 2",
      description: "Descreva em uma ou duas frases o que esse projeto faz e qual problema ele resolve.",
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/SEU_USUARIO_GITHUB/projeto-02",
      demo: ""
    },
    {
      file: "projeto-03.html",
      title: "Nome do Projeto 3",
      description: "Descreva em uma ou duas frases o que esse projeto faz e qual problema ele resolve.",
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/SEU_USUARIO_GITHUB/projeto-03",
      demo: ""
    }
    // TODO: adicione quantos projetos quiser, seguindo o mesmo formato acima
  ];

  /* ============================================================
     A partir daqui é só lógica — normalmente não precisa mexer
     ============================================================ */

  // Preenche os links de GitHub, LinkedIn e e-mail em toda a página
  function applyConfig() {
    const githubUrl = `https://github.com/${CONFIG.githubUser}`;
    // encodeURI trata corretamente acentos (ex: "ê") no slug do LinkedIn,
    // sem isso o link quebra em alguns navegadores.
    const linkedinUrl = `https://www.linkedin.com/in/${encodeURI(CONFIG.linkedinUser)}`;
    const mailUrl = `mailto:${CONFIG.email}`;

    document.getElementById('link-github').href = githubUrl;
    document.getElementById('link-github-2').href = githubUrl;
    document.getElementById('link-linkedin').href = linkedinUrl;
    document.getElementById('link-linkedin-2').href = linkedinUrl;
    document.getElementById('link-email').href = mailUrl;
    document.getElementById('link-email').lastChild.textContent = ` ${CONFIG.email}`;
  }

  // Renderiza os cards de projeto a partir do array PROJECTS
  function renderProjects() {
    const grid = document.getElementById('projects-grid');

    if (!PROJECTS.length) {
      grid.innerHTML = `<div class="projects__empty">// nenhum projeto adicionado ainda — edite o array PROJECTS no script.js</div>`;
      return;
    }

    grid.innerHTML = PROJECTS.map(p => `
      <article class="project-card">
        <div class="project-card__file">${p.file}</div>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <div class="project-card__tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-card__links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub →</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : ''}
        </div>
      </article>
    `).join('');
  }

  // Alterna as abas do editor (index.html / style.css / script.js)
  function setupTabs() {
    const tabs = document.querySelectorAll('.editor__tab');
    const panes = document.querySelectorAll('.editor__pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('is-active'));
        panes.forEach(p => p.classList.remove('is-active'));
        tab.classList.add('is-active');
        document.querySelector(`.editor__pane[data-pane="${tab.dataset.tab}"]`).classList.add('is-active');
      });
    });
  }

  // Efeito de "digitação" no comentário do topo do editor
  function typeComment() {
    const el = document.getElementById('typed-comment');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const text = 'em busca da primeira oportunidade';

    if (prefersReducedMotion) {
      el.textContent = text;
      return;
    }

    let i = 0;
    (function step() {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) setTimeout(step, 45);
    })();
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  applyConfig();
  renderProjects();
  setupTabs();
  typeComment();
