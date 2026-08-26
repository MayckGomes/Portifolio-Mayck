/* Conteúdo do portfólio nos idiomas disponíveis. */
const PORTFOLIO_DATA = {
  pt: {
    identidade: {
      nome: "Mayck Gomes",
      cargo: "Mobile & Backend Developer",
      localizacao: "Maceió, Alagoas — Brasil",
      fraseHero: "Construo produtos de ponta a ponta: do backend em Java ao app na mão do usuário em Kotlin.",
      disponivel: true
    },
    sobre: {
      paragrafos: [
        "Sou desenvolvedor mobile e backend, fundador e único desenvolvedor do DatePlan, um app para casais disponível na Google Play Store.",
        "Trabalho principalmente com Kotlin, Android e Kotlin Multiplatform (KMP), construindo desde o planejamento visual e técnico, infraestrutura de servidor até a experiência final no app.",
        "Gosto de entender o produto de ponta a ponta — arquitetura de API, banco de dados, segurança de infraestrutura e a interface que o usuário realmente usa todos os dias."
      ],
      destaques: [
        { numero: "1", rotulo: "App em produção na Play Store" },
        { numero: "KMP", rotulo: "Android + iOS a partir de uma base de código" },
        { numero: "100%", rotulo: "Ponta a ponta: backend, infra e app" },
        { numero: "24/7", rotulo: "Disposto a aprender" }
      ]
    },
    stack: [
      { categoria: "Mobile", itens: ["Kotlin", "Android SDK", "Kotlin Multiplatform (KMP)", "Compose Multiplatform", "Jetpack Compose", "SQLDelight", "Room", "MVVM"] },
      { categoria: "Backend", itens: ["Spring Boot", "Java", "FastAPI", "Python", "PostgreSQL", "Redis", "Flyway", "JWT / Auth0"] },
      { categoria: "Infraestrutura", itens: ["Oracle Cloud", "NGINX", "Docker", "Grafana K6", "Let's Encrypt / SSL"] },
      { categoria: "Ferramentas & Serviços", itens: ["Firebase", "AdMob", "Koin", "Ktor", "Git", "Google Play Console"] }
    ],
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
        linkRotulo: "Ver repositório",
        destaque: true
      },
      {
        titulo: "Racetime App",
        descricao: "App para fãs de Fórmula 1 acompanharem resultados de classificação, a corrida do último fim de semana e a classificação de equipes e pilotos em tempo real, com opção de favoritar seus pilotos e equipes preferidos.",
        tags: ["Kotlin", "Jetpack Compose", "Ktor", "Traduções"],
        link: "https://github.com/MayckGomes/Racetimeapp",
        linkRotulo: "Ver repositório",
        destaque: false
      },
      {
        titulo: "Project Gym",
        descricao: "App para gerenciamento de treinos de academia, com acompanhamento de frequência, último treino, média de tempo e muito mais.",
        tags: ["Kotlin", "Jetpack Compose", "Room"],
        link: "https://github.com/MayckGomes/Project-gym",
        linkRotulo: "Ver repositório",
        destaque: false
      }
    ],
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
  },
  en: {
    identidade: {
      nome: "Mayck Gomes",
      cargo: "Mobile & Backend Developer",
      localizacao: "Maceió, Alagoas — Brazil",
      fraseHero: "I build end-to-end products: from a Java backend to the Kotlin app in the user's hands.",
      disponivel: true
    },
    sobre: {
      paragrafos: [
        "I'm a mobile and backend developer, founder and sole developer of DatePlan, a couples app available on the Google Play Store.",
        "I work primarily with Kotlin, Android and Kotlin Multiplatform (KMP), covering everything from visual planning and server infrastructure to the final in-app experience.",
        "I like understanding products end to end — API architecture, databases, infrastructure security and the interface users actually interact with every day."
      ],
      destaques: [
        { numero: "1", rotulo: "App in production on the Play Store" },
        { numero: "KMP", rotulo: "Android + iOS from a single codebase" },
        { numero: "100%", rotulo: "End to end: backend, infra and app" },
        { numero: "24/7", rotulo: "Always ready to learn" }
      ]
    },
    stack: [
      { categoria: "Mobile", itens: ["Kotlin", "Android SDK", "Kotlin Multiplatform (KMP)", "Compose Multiplatform", "Jetpack Compose", "SQLDelight", "Room", "MVVM"] },
      { categoria: "Backend", itens: ["Spring Boot", "Java", "FastAPI", "Python", "PostgreSQL", "Redis", "Flyway", "JWT / Auth0"] },
      { categoria: "Infrastructure", itens: ["Oracle Cloud", "NGINX", "Docker", "Grafana K6", "Let's Encrypt / SSL"] },
      { categoria: "Tools & Services", itens: ["Firebase", "AdMob", "Koin", "Ktor", "Git", "Google Play Console"] }
    ],
    projetos: [
      {
        titulo: "DatePlan",
        descricao: "An app for couples to plan moments together: shared calendar, memory journal, reminders and a home screen widget.",
        tags: ["Kotlin", "KMP", "Compose Multiplatform", "SQLDelight"],
        link: "https://play.google.com/store/apps/details?id=mayckgomes.com.dateplan",
        linkRotulo: "View on Play Store",
        destaque: true
      },
      {
        titulo: "dateplan-api-v2",
        descricao: "DatePlan's backend API hosted on an OCI ARM VPS, built in Java with the Spring Framework, two-token JWT authentication and NGINX rate limiting.",
        tags: ["Spring Boot", "Java 21", "Redis", "NGINX", "CI/CD"],
        link: "https://github.com/MayckGomes/dateplan-api-v2",
        linkRotulo: "View repository",
        destaque: true
      },
      {
        titulo: "Racetime App",
        descricao: "An app for Formula 1 fans to follow qualifying results, last weekend's race and team and driver standings in real time, with the option to favorite their favorite drivers and teams.",
        tags: ["Kotlin", "Jetpack Compose", "Ktor", "Translations"],
        link: "https://github.com/MayckGomes/Racetimeapp",
        linkRotulo: "View repository",
        destaque: false
      },
      {
        titulo: "Project Gym",
        descricao: "A workout management app with tracking for frequency, latest workout, average duration and much more.",
        tags: ["Kotlin", "Jetpack Compose", "Room"],
        link: "https://github.com/MayckGomes/Project-gym",
        linkRotulo: "View repository",
        destaque: false
      }
    ],
    contato: {
      frase: "Have a project in mind or want to talk about mobile and backend? Get in touch.",
      email: "mayckgomes.dev@gmail.com",
      links: [
        { rotulo: "GitHub", url: "https://github.com/MayckGomes" },
        { rotulo: "LinkedIn", url: "https://linkedin.com/in/mayckgomes" },
        { rotulo: "Instagram", url: "https://instagram.com/mayckgomes.dev/" },
        { rotulo: "Play Store", url: "https://play.google.com/store/apps/dev?id=7526653252614764556&hl=en" }
      ]
    }
  }
};

const PORTFOLIO_UI = {
  pt: {
    nav: { about: "Sobre", stack: "Stack", projects: "Projetos", contact: "Contato" },
    hero: { projects: "Ver projetos", contact: "Falar comigo" },
    sections: { aboutTag: "01 — Piloto", about: "Sobre mim", stackTag: "02 — Setup", stack: "Stack", projectsTag: "03 — Garagem", projects: "Projetos", contactTag: "04 — Box", contact: "Contato" },
    statusAvailable: "Disponível para novos projetos",
    statusBusy: "Focado em projetos atuais",
    production: "Em produção",
    access: "Acessar",
    unavailable: "Indisponível",
    switchLabel: "Mudar para inglês",
    menuOpen: "Abrir menu"
  },
  en: {
    nav: { about: "About", stack: "Stack", projects: "Projects", contact: "Contact" },
    hero: { projects: "View projects", contact: "Get in touch" },
    sections: { aboutTag: "01 — Driver", about: "About me", stackTag: "02 — Setup", stack: "Stack", projectsTag: "03 — Garage", projects: "Projects", contactTag: "04 — Pit box", contact: "Contact" },
    statusAvailable: "Available for new projects",
    statusBusy: "Focused on current projects",
    production: "In production",
    access: "Access",
    unavailable: "Unavailable",
    switchLabel: "Mudar para português",
    menuOpen: "Open menu"
  }
};
