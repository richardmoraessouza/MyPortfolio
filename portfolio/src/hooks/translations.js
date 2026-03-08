// transição do português para o inglês

export const translations = {
  pt: {
    home: "Início",
    about: "Sobre mim",
    technologies: "Tecnologias",
    projects: "Projetos",
    contact: "Contato",
    
    // Sobre mim
    sobre_mim: "Sou Desenvolvedor Full Stack com foco em React, Node.js e TypeScript. Tenho experiência prática na criação de aplicações escaláveis com Express, SQL e Docker, sempre priorizando performance e SEO. Como freelancer, desenvolvi projetos completos, do design ao deploy, alcançando métricas máximas de 100/100 no Lighthouse. Meu objetivo é usar a tecnologia para gerar impacto real, entregando interfaces modernas e sistemas robustos que realmente resolvam problemas.",
    perguntar: "Perguntar algo...",

    questions: {
      tech: { id: 1, text: "Quais tecnologias você domina?" },
      freelance: { id: 5, text: "Fale sobre seu projeto freelance." },
      pride: { id: 2, text: "Fale sobre um projeto que você se orgulha." },
      hiring: { id: 4, text: "Por que eu deveria te contratar para o meu time?" },
      whoIs: { id: 3, text: "Quem é o Richard?" },
      favoriteLang: { id: 6, text: "Qual linguagem de programação você mais gosta e por quê?" },
      learningExpectation: { id: 8, text: "O que você espera aprender aqui na empresa?" },
      currentStudy: { id: 9, text: "Que tecnologia você está aprendendo atualmente?" },
      start: { id: 10, text: "Como você começou na programação?" },
      strengths: { id: 11, text: "Quais são seus pontos fortes e fracos?" },
      challenge: { id: 7, text: "Qual foi o maior desafio que você enfrentou programando?" },
      future: { id: 12, text: "Onde você se vê daqui a 5 anos?" },
      ia: { id: 13, text: "Como você utiliza a Inteligência Artificial no seu fluxo de desenvolvimento?" }
    },

    frontend: "Front-end",
    backend: "Back-end",
    tools: "Ferramentas",
    aboutTechnology: "Sobre Tecnologia",

    projectsTitle: "Projetos",
    viewProject: "Ver projeto",
    viewRepository: "Ver repositório",

    close: "Fechar",

    footerText: "Desenvolvido com ❤️ por Richard",

    toggleTheme: "Alternar tema",
    toggleLanguage: "Alternar idioma",


    // projetos
    serginhoEstetiCar: {
      title: "SerginhoEstetiCar",
      description:
        "Este projeto foi desenvolvido sob demanda para um cliente real, com o objetivo de criar um site institucional que apresentasse os serviços oferecidos pela estética automotiva Serginho estetiCar. A proposta foi entregar uma solução visualmente moderna, responsiva e funcional, ajudando a atrair novos clientes e fortalecer a presença online do negócio. O site exibe os principais serviços oferecidos, como lavagem detalhada, polimento e cristalização, além de contar com um formulário de agendamento que permite que os usuários entrem em contato de forma prática e direta."
    },
    calculator: {
      title: "Calculadora",
      description:
        "Calculadora desenvolvida com HTML, CSS e JavaScript puro, focando na responsividade e experiência do usuário. Possui interface limpa e intuitiva com operações básicas e avançadas, design totalmente responsivo e feedback visual claro. O projeto demonstra habilidades em manipulação do DOM, eventos JavaScript e design responsivo."
    },
    quiz: {
      title: "Quiz",
      description:
        "Este projeto é um quiz interativo desenvolvido com HTML, CSS, Bootstrap e JavaScript puro, com o objetivo de testar conhecimentos do usuário de forma simples e dinâmica. As perguntas são carregadas dinamicamente, e ao final, o usuário recebe uma pontuação com base nas respostas corretas."
    },
    projectWeb1: {
      title: "Projeto web 1",
      description:
        "Esse projeto foi um exercício de aprendizado, onde reproduzi o layout de um site já existente usando apenas HTML e CSS. O objetivo era entender melhor como organizar arquivos, trabalhar com estrutura de pastas e aplicar boas práticas de desenvolvimento front-end. Apesar de ser uma cópia, foi uma ótima oportunidade para treinar responsividade, atenção aos detalhes e reforçar meus conhecimentos em construção de páginas estáticas."
    },
    timer: {
      title: "Timer Interativo",
      description:
        "Criei este timer interativo inspirado em um desafio do Codecon. Ele é regressivo, permite pausar, resetar e ajustar o tempo em tempo real. Nos últimos segundos, a tela muda de cor e um som alerta o fim. Ideal para estudos, treinos ou outras tarefas. Um projeto prático que mostra minha habilidade em resolver problemas e entregar soluções funcionais."
    },
    projectWeb2: {
      title: "Projeto web 2",
      description:
        "O 'Projeto web 2' foi desenvolvido como parte do meu processo de evolução no front-end. Diferente do primeiro, busquei aplicar técnicas mais avançadas de responsividade e organização de código, além de experimentar novas abordagens de layout. O foco foi aprimorar a estrutura dos arquivos, melhorar a semântica do HTML e explorar ainda mais o uso do CSS para criar uma interface moderno e funcional. Esse projeto reforçou minha capacidade de transformar ideias em páginas web bem estruturadas e visualmente agradáveis."
    },
    youtubeClone: {
      title: "Youtube Clone",
      description:
        "Clone funcional da interface do YouTube, desenvolvido com React, Bootstrap e Sass. O projeto replica o layout e a navegação da plataforma, proporcionando uma experiência de uso realista. Totalmente responsivo, conta com componentes reutilizáveis, gerenciamento de estado eficiente e segue as boas práticas do ecossistema React, garantindo escalabilidade, organização e fácil manutenção do código."
    },
    MarioJump: {
      title: "Mario Jump",
      description:
        "Jogo estilo endless runner inspirado no universo do Mario, onde o objetivo é pular obstáculos e alcançar a maior pontuação possível. Desenvolvido com HTML, CSS, TypeScript e React, o projeto inclui física simples de salto, detecção de colisão, sistemas de pontuação e aumento gradual de dificuldade. O layout é responsivo e otimizado para Web, com foco em performance e uma experiência fluida no desktop e mobile."
    },
    githubFinder: {
      title: "GitHub Finder",
      description:
        "Aplicação desenvolvida em React e TypeScript que permite buscar usuários do GitHub através da sua API oficial. O projeto oferece uma interface moderna e responsiva para visualizar perfis públicos de desenvolvedores, exibindo informações como fotos do avatar, número de seguidores, repositórios públicos e estatísticas detalhadas. Implementa tratamento de erros, estados de loading e uma experiência fluida de busca, demonstrando conhecimentos em consumo de APIs REST, gerenciamento de estado e componentes funcionais."
    },
    instagramClone: {
      title: "Instagram Clone",
      description:
        "Clone da interface do Instagram desenvolvido com React, HTML e CSS puro. O projeto replica o layout principal da rede social, incluindo o feed de posts, stories, barras de navegação e elementos visuais característicos da plataforma. Focado em responsividade e design pixel-perfect, demonstra habilidades em criação de interfaces modernas, organização de componentes React e aplicação de conhecimentos avançados em CSS para recriar com fidelidade um design complexo e reconhecido mundialmente."
    },
    shoppingLife: {
      title: "Shopping Life",
      description:
        "E-commerce desenvolvido com React, TypeScript e Styled Components. O projeto inclui funcionalidades essenciais como catálogo de produtos, carrinho de compras, filtros de busca e checkout. Utiliza integração com API própria desenvolvida em Node.js, Express e PostgreSQL hospedada no Render. A API fornece endpoints para autenticação, gerenciamento de produtos e pedidos. Sistema completo com frontend responsivo e backend robusto.",
      apiUrl: "https://api-shopping-life.onrender.com/"
    },
    PersonIA: {
      title: "PersonIA",
      description:
        "PersonIA é uma plataforma web voltada para a criação e interação com personagens virtuais personalizados. O usuário pode definir aparência, personalidade, história e até regras específicas de comportamento, criando personagens únicos e coerentes. Além disso, a plataforma oferece um sistema de chat que permite conversar diretamente com cada personagem, proporcionando uma experiência imersiva, dinâmica e totalmente personalizada. O projeto integra frontend em React e TypeScript com uma API própria em Node.js, Express e PostgreSQL, garantindo desempenho, organização e expansão futura.",
      apiUrl: "https://api-personia.onrender.com"
    },
    portfolioBackend: {
      title: "IA Portfolio - Backend Inteligente",
      description:
        "O 'cérebro' do portfólio, um sistema de chat inteligente robusto construído com Java 21 e Spring Boot 4. A aplicação utiliza a API do Google Gemini para responder perguntas sobre minha trajetória profissional, integrada a um banco de dados PostgreSQL. Implementa uma arquitetura context-aware que busca dados reais no banco para alimentar a IA, evitando alucinações e garantindo respostas precisas e baseadas em fatos. Conta com API REST completa, suporte a Docker e um prompt de sistema altamente otimizado para interações profissionais."
    }
  },

  // -------------------------------------------------------
  // ENGLISH
  // -------------------------------------------------------

  en: {
    home: "Home",
    about: "About me",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",

    // Sobre mim

    perguntar: "Ask something",
    sobre_mim: "I am a Full Stack Developer focusing on React, Node.js, and TypeScript. I have practical experience creating scalable applications with Express, SQL, and Docker, always prioritizing performance and SEO. As a freelancer, I have developed complete projects from design to deploy, achieving 100/100 Lighthouse metrics. My goal is to use technology to create real impact, delivering modern interfaces and robust systems that truly solve problems.",

    questions: {
      tech: { id:1, text: "What technologies do you master?" },
      freelance: { id: 5, text: "Tell me about your freelance projects." },
      pride: { id: 2, text: "Tell me about a project you are proud of." },
      hiring: { id: 4, text: "Why should I hire you for my team?" },
      whoIs: { id: 3, text: "Who is Richard?" },
      favoriteLang: { id: 6, text: "Which programming language do you like the most and why?" },
      learningExpectation: { id: 8, text: "What do you expect to learn here at the company?" },
      currentStudy: { id: 9, text: "What technology are you currently learning?" },
      start: { id: 10, text: "How did you start in programming?" },
      strengths: { id: 11, text: "What are your strengths and weaknesses?" },
      challenge: { id: 7, text: "What was the biggest challenge you faced while programming?" },
      future: { id: 12, text: "Where do you see yourself in 5 years?" },
      ia: { id: 13, text: "How do you use Artificial Intelligence in your development flow?" }
    },

    frontend: "Front-end",
    backend: "Back-end",
    tools: "Tools",
    aboutTechnology: "About Technology",

    projectsTitle: "Projects",
    viewProject: "View project",
    viewRepository: "View repository",

    close: "Close",

    footerText: "Developed with ❤️ by Richard",

    toggleTheme: "Toggle theme",
    toggleLanguage: "Toggle language",

     // projetos
    serginhoEstetiCar: {
      title: "SerginhoEstetiCar",
      description:
        "This project was developed on demand for a real client, with the goal of creating an institutional website that would present the services offered by Serginho estetiCar automotive detailing. The proposal was to deliver a visually modern, responsive and functional solution, helping to attract new customers and strengthen the business's online presence. The website displays the main services offered, such as detailed washing, polishing and crystallization, in addition to having a booking form that allows users to get in touch in a practical and direct way."
    },
    calculator: {
      title: "Calculator",
      description:
        "Calculator developed with pure HTML, CSS and JavaScript, focusing on responsiveness and user experience. It has a clean and intuitive interface with basic and advanced operations, fully responsive design and clear visual feedback. The project demonstrates skills in DOM manipulation, JavaScript events and responsive design."
    },
    quiz: {
      title: "Quiz",
      description:
        "This project is an interactive quiz developed with HTML, CSS, Bootstrap and pure JavaScript, with the goal of testing user knowledge in a simple and dynamic way. Questions are loaded dynamically, and at the end, the user receives a score based on correct answers."
    },
    projectWeb1: {
      title: "Web project 1",
      description:
        "This project was a learning exercise, where I reproduced the layout of an existing website using only HTML and CSS. The goal was to better understand how to organize files, work with folder structure and apply good front-end development practices. Although it was a copy, it was a great opportunity to train responsiveness, attention to detail and reinforce my knowledge in building static pages."
    },
    timer: {
      title: "Interactive Timer",
      description:
        "In this project, I took the idea of a simple and light timer, but I went beyond the basics. I saw a video on Codecon where 3 back-end devs and 1 front-end dev were trying to make a timer, but they couldn't implement everything properly — so I decided to redo it my way and make it work 100%. The result was a countdown timer that counts time backwards, you can pause, reset and even change the time while it's running. In the last seconds, the screen background changes color to warn that it's ending, and it even plays a sound at the end. Besides working well, it's easy to use and helps in various situations like studying, exercising or any activity that needs a timer."
    },
    projectWeb2: {
      title: "Web project 2",
      description:
        "The 'Web project 2' was developed as part of my evolution process in front-end. Unlike the first one, I applied more advanced responsiveness techniques and code organization, in addition to experimenting with new layout approaches. The focus was to improve file structure, enhance HTML semantics and explore CSS further to create a modern and functional interface. This project reinforced my ability to transform ideas into well-structured and visually appealing web pages."
    },
    youtubeClone: {
      title: "Youtube Clone",
      description:
        "Fully functional YouTube interface clone, built with React, Bootstrap, and Sass. The project replicates the platform’s layout and navigation, delivering a realistic user experience. Fully responsive, it features reusable components, efficient state management and follows React best practices, ensuring scalability and clean architecture."
    },
    MarioJump: {
      title: "Mario Jump",
      description:
        "Endless runner-style game inspired by the Mario universe, where the goal is to jump over obstacles and achieve the highest possible score. Built with HTML, CSS, TypeScript and React, it includes simple jump physics, collision detection, scoring system and progressive difficulty. Fully responsive and optimized for web, ensuring smooth performance across devices."
    },
    githubFinder: {
      title: "GitHub Finder",
      description:
        "Application developed with React and TypeScript that allows searching GitHub users through the official API. The interface is modern and responsive, showing detailed public profile data like avatars, followers, public repositories and statistics. Features loading states, error handling and a smooth search experience."
    },
    instagramClone: {
      title: "Instagram Clone",
      description:
        "Instagram interface clone developed using React, HTML and CSS. It faithfully reproduces the feed, stories, navigation bars and characteristic visual elements. Focused on responsiveness and pixel-perfect accuracy, demonstrating strong UI/UX and component architecture skills."
    },
    shoppingLife: {
      title: "Shopping Life",
      description:
        "E-commerce developed with React, TypeScript, and Styled Components. Includes essential features like product catalog, shopping cart, search filters and checkout. Integrated with a custom Node.js, Express and PostgreSQL API hosted on Render. The API handles user authentication, product management and order processing.",
      apiUrl: "https://api-shopping-life.onrender.com/"
    },
    PersonIA: {
      title: "PersonIA",
      description:
        "PersonIA is a web platform designed for creating and interacting with personalized virtual characters. Users can define appearance, personality, history and even custom behavior rules, forming unique and coherent characters. The platform also includes a chat system that allows direct interaction with each character, providing an immersive and dynamic experience. Built with React and TypeScript, integrated with a custom Node.js, Express and PostgreSQL API for performance and scalability.",
      apiUrl: "https://api-personia.onrender.com"
    },
    portfolioBackend: {
      title: "IA Portfolio - Intelligent Backend",
      description:
        "This is the 'brain' of the portfolio, a robust intelligent chat system built with Java 21 and Spring Boot 4. The application uses the Google Gemini API to answer questions about my professional experience, integrated with a PostgreSQL database. It implements a context-aware architecture that retrieves relevant data from the DB to feed the AI, preventing hallucinations and ensuring precise, data-driven responses. It features a complete REST API, Docker support, and a highly optimized system prompt for professional interactions."
    }
  }
};



