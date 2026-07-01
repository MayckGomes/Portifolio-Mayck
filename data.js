/* ==========================================================================
   DATA.JS — Edite seu portfólio aqui
   ==========================================================================
   Este é o ÚNICO arquivo que você precisa mexer para atualizar o conteúdo.
   Para ADICIONAR um item: copie um bloco { ... } inteiro (com a vírgula
   antes/depois) e cole na lista, depois mude os valores.
   Para REMOVER um item: apague o bloco { ... } inteiro correspondente.
   Para EDITAR: só troque o texto entre aspas "".
   ========================================================================== */

const PORTFOLIO_DATA = {

  /* ------------------------------------------------------------------ */
  /* IDENTIDADE — nome, cargo, links do topo e rodapé                    */
  /* ------------------------------------------------------------------ */
  identidade: {
    nome: "Mayck Gomes",
    cargo: "Mobile & Backend Developer",
    localizacao: "Maceió, Alagoas — Brasil",
    fraseHero: "Construo produtos de ponta a ponta: do backend em Java ao app na mão do usuário em Kotlin.",
    disponivel: true, // true = mostra selo "Disponível para novos projetos"
  },

  /* ------------------------------------------------------------------ */
  /* SOBRE MIM                                                          */
  /* ------------------------------------------------------------------ */
  sobre: {
    paragrafos: [
      "Sou desenvolvedor mobile e backend, fundador e único desenvolvedor do DatePlan, um app para casais disponível na Google Play Store.",
      "Trabalho principalmente com Kotlin, Android e Kotlin Multiplatform (KMP), construindo desde o planejamento visual e tecnico ,infraestrutura de servidor até a experiência final no app.",
      "Gosto de entender o produto de ponta a ponta — arquitetura de API, banco de dados, segurança de infraestrutura e a interface que o usuário realmente usa todos os dias."
    ],
    destaques: [
      { numero: "1", rotulo: "App em produção na Play Store" },
      { numero: "KMP", rotulo: "Android + iOS a partir de uma base de código" },
      { numero: "100%", rotulo: "Ponta a ponta: backend, infra e app" },
      { numero: "24/7", rotulo: "Disposto a aprender" }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* STACK — adicione/remova categorias e tecnologias livremente        */
  /* ------------------------------------------------------------------ */
  stack: [
    {
      categoria: "Mobile",
      itens: ["Kotlin", "Android SDK", "Kotlin Multiplatform (KMP)", "Compose Multiplatform", "Jetpack Compose", "SQLDelight", "Room", "MVVM"]
    },
    {
      categoria: "Backend",
      itens: ["Spring Boot", "Java", "FastAPI", "Python", "PostgreSQL", "Redis", "Flyway", "JWT / Auth0"]
    },
    {
      categoria: "Infraestrutura",
      itens: ["Oracle Cloud", "NGINX", "Docker", "Grafana K6", "Let's Encrypt / SSL"]
    },
    {
      categoria: "Ferramentas & Serviços",
      itens: ["Firebase", "AdMob", "Koin", "Ktor", "Git", "Google Play Console"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* PROJETOS — para adicionar, copie um bloco inteiro { ... }          */
  /* ------------------------------------------------------------------ */
  projetos: [
    {
      titulo: "DatePlan",
      descricao: "App para casais planejarem momentos juntos: calendário compartilhado, registro de memórias, lembretes e widget de tela inicial.",
      tags: ["Kotlin", "KMP", "Compose Multiplatform", "SQLDelight"],
      link: "https://play.google.com/store/apps/details?id=mayckgomes.com.dateplan",
      linkRotulo: "Ver na Play Store",
      destaque: true
    },
    {
      titulo: "dateplan-api-v2",
      descricao: "API backend do DatePlan hospedada em VPS OCI ARM, desenvolvida em Java utilizando o Spring Framework, autenticação JWT de dois tokens e rate limiting em NGINX.",
      tags: ["Spring Boot", "Java 21", "Redis", "NGINX", "CI/CD"],
      link: "https://github.com/MayckGomes/dateplan-api-v2",
      linkRotulo: "Ver Repositório",
      destaque: true
    },
    {
      titulo: "Racetime App",
      descricao: "App para fãs de Fórmula Um, podendo acompanhar resultados de qualificação, corrida do ultimo final de semana, além de acompanhar a classificação de equipes e pilotos em tempo real, podendo favoritar os pilotos e equipes que ama.",
      tags: ["Kotlin", "Jetpack Compose", "Ktor", "Traduções"],
      link: "https://github.com/MayckGomes/Racetimeapp",
      linkRotulo: "Ver Repositório",
      destaque: false
    },
    {
      titulo: "Project Gym",
      descricao: "App para gerenciamento de treinos de academia, podendo ver sua frequencia, ultimo treino, media de tempo e muito mais!",
      tags: ["Kotlin", "Jetpack Compose", "Room"],
      link: "https://github.com/MayckGomes/Project-gym",
      linkRotulo: "Ver Repositório",
      destaque: false
    }
  ],

  /* ------------------------------------------------------------------ */
  /* CONTATO                                                            */
  /* ------------------------------------------------------------------ */
  contato: {
    frase: "Tem um projeto em mente ou quer trocar uma ideia sobre mobile e backend? Me chama.",
    email: "mayckgomes.dev@gmail.com",
    links: [
      { rotulo: "GitHub", url: "https://github.com/MayckGomes" },
      { rotulo: "LinkedIn", url: "https://linkedin.com/in/mayckgomes" },
      { rotulo: "Instagram", url: "https://instagram.com/mayckgomes.dev/" },
      { rotulo: "Play Store", url: "https://play.google.com/store/apps/dev?id=7526653252614764556&hl=pt_BR" }
    ]
  }
};
