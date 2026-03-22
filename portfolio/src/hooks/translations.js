// transição do português para o inglês

export const translations = {
  pt: {
    home: "Início",
    about: "Sobre mim",
    technologies: "Tecnologias",
    projects: "Projetos",
    contact: "Contato",

    // Section Painel
    Section_messages: {
      home: "[ OPERADOR: RICHARD ] Dev Full Stack. Node.js · React · Java · TypeScript. Sistemas online e prontos para missão.",
      sobre:   "[ BIO SCAN ] Operador identificado. Dev Full Stack — React, Node.js, TypeScript. Missões concluídas: do design ao deploy, 100/100 Lighthouse. Status: pronto para embarcar.",
      skills:   "[ ARMAMENTO TÉCNICO ] Node.js · React · Tailwind CSS · SQL · TypeScript · Java · Spring Boot · Docker · PostgreSQL. Sistema de integração com IA: ATIVO.",
      projetos: "[ BANCO DE MISSÕES ] Portfólio carregado. Projetos registrados — de sites institucionais a plataformas Full Stack com IA. Selecione um setor para inspecionar.",
      contato:  "[ CANAL ABERTO ] Frequência disponível. Transmita sua mensagem — o operador responderá assim que possível.",
    },

    // perguntas sobre mim
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

    responses: {
      tech: { id: 1, text: "No Backend, minha especialidade é Node.js, onde desenvolvo APIs de alta performance utilizando Express e TypeScript, integrando bancos de dados como MySQL e PostgreSQL. Tenho vivência com Docker para containerização e também possuo conhecimentos em Java com Spring Boot. No Frontend, domino React, JavaScript (ES6+), Tailwind CSS e Bootstrap para a criação de interfaces modernas e responsivas." },
      freelance: { id: 5, text: "Como freelancer, desenvolvi projetos completos, do design ao deploy, alcançando métricas máximas de 100/100 no Lighthouse." },
      pride: { id: 2, text: "O meu projeto de maior destaque é o PersonIA, uma plataforma web completa onde o usuário tem total controle criativo para moldar personas do zero. Para construir essa experiência Fullstack, utilizei Node.js com Express no Backend, gerenciando a persistência em um banco de dados PostgreSQL e autenticação segura com JWT. No Frontend, usei React 19 com TypeScript e Tailwind CSS para criar uma interface fluida e responsiva. O \"cérebro\" do projeto é a integração com a API da Gemini, que permite conversas em tempo real com personagens personalizados. Além da IA, o sistema conta com uma camada social completa de seguidores, likes e favoritos, tudo orquestrado com boas práticas de componentização e hooks customizados." },
      hiring: { id: 4, text: "Você deve me contratar porque sou um desenvolvedor Fullstack focado em resultados e autonomia. Domino tecnologias modernas como Node.js, React e integração com IAs, além de possuir sólida experiência com Java e Spring Boot para o desenvolvimento de APIs robustas. Utilizo Docker para garantir ambientes escaláveis e escrevo código limpo com TypeScript. Tenho a capacidade de transformar requisitos complexos em soluções funcionais de ponta a ponta, sempre focando em performance, segurança e na melhor experiência para o usuário." },
      whoIs: { id: 3, text: "Sou Desenvolvedor Full Stack com foco em React, Node.js e TypeScript. Tenho experiência prática na criação de aplicações escaláveis com Express, SQL e Docker, sempre priorizando performance e SEO. Como freelancer, desenvolvi projetos completos, do design ao deploy, alcançando métricas máximas de 100/100 no Lighthouse. Meu objetivo é usar a tecnologia para gerar impacto real, entregando interfaces modernas e sistemas robustos que realmente resolvam problemas." },
      favoriteLang: { id: 6, text: "A linguagem que mais me fascina é o JavaScript. Foi através dela que descobri que não há limites para a criação: pude construir desde APIs robustas com Node.js até interfaces interativas e modelos 3D no Frontend com React. O JS me permitiu tirar ideias do papel e transformá-las em projetos incríveis, como sistemas que conversam via IA, algo que eu nunca imaginei que seria capaz de criar quando comecei. Essa versatilidade de ser \"fullstack\" com uma única linguagem, somada à evolução constante do ecossistema, é o que me motiva a evoluir como desenvolvedor todos os dias." },
      learningExpectation: { id: 8, text: "Minha expectativa é evoluir minhas competências técnicas em ambientes de produção real e de alta escala. Embora eu tenha domínio em stacks como Node.js e React, quero aprender como o time lida com arquiteturas de microsserviços complexas, cultura de testes automatizados e integração contínua (CI/CD) em larga escala. Além disso, busco desenvolver ainda mais minhas soft skills, colaborando com profissionais experientes e entendendo como a tecnologia pode ser otimizada para resolver os desafios de negócio específicos da empresa." },
      currentStudy: { id: 9, text: "Hoje meu foco total está em Java e Docker. Estou aprofundando no ecossistema Spring Boot para criar APIs ainda mais robustas e estudando Docker para dominar a parte de containers e infraestrutura. A ideia é unir a agilidade que já tenho com Node.js à solidez do Java, garantindo que meus projetos sejam profissionais e fáceis de escalar." },
      starty: { id: 10, text: "Tudo começou quando vi um vídeo de programação no YouTube que me chamou muita atenção. Decidi começar o curso de Python do Gustavo Guanabara e foi ali que a chave virou: percebi que amava criar lógica e ver as coisas ganhando vida. O que era curiosidade virou paixão, e logo passei para o ecossistema JavaScript, onde comecei a desenvolver projetos completos como os que você vê aqui hoje." },
      strengths: { id: 11, text: "Meu maior ponto forte é a proatividade e a facilidade de aprendizado; quando surge um desafio novo ou uma tecnologia que o projeto exige, eu mergulho nos estudos até dominar e entregar a solução. Como ponto a melhorar, às vezes sou um pouco perfeccionista com o código e acabo gastando muito tempo em detalhes de UI. Para equilibrar isso, estou focando em metodologias ágeis para entregar valor rápido sem abrir mão da qualidade." },
      challenge: { id: 7, text: "Meu maior desafio foi a integração do PersonIA. Tive que aprender a lidar com o tempo de resposta da API de IA para não travar a experiência do usuário no Frontend e, ao mesmo tempo, criar uma lógica no Backend para controlar limites de mensagens de usuários anônimos. Resolver essa \"conversa\" entre as tecnologias, garantindo que o chat fosse fluido e o banco de dados seguro, foi um grande aprendizado de arquitetura e performance." },
      future: { id: 12, text: "Daqui a 5 anos, me vejo como um desenvolvedor Full Stack sênior ou Tech Lead, dominando arquiteturas complexas e liderando projetos que utilizam IA de forma nativa. Meu objetivo é ter consolidado minha experiência em grandes ecossistemas de produção, contribuindo não apenas com código de alta qualidade, mas também mentorando novos desenvolvedores e ajudando a definir estratégias tecnológicas que tragam inovação e escala para o negócio." },
      ia: { id: 13, text: "Vejo a IA como uma ferramenta de aceleração. Utilizo o Cursor AI e o GitHub Copilot para refatoração e escrita de testes, mas sempre com um olhar crítico sobre a lógica gerada. Além disso, implemento IAs em meus projetos, como no PersonIA, onde conectei a API da Gemini para criar experiências interativas de chat e personagens personalizados." },
    },

    frontend: "Front-end",
    backend: "Back-end",
    tools: "Ferramentas",
    aboutTechnology: "Sobre Tecnologia",

    projectsTitle: "Projetos",
    viewProject: "Ver projeto",
    viewRepository: "Ver repositório",
    viewAPI: "Ver API",
    viewRepositoryAPI: "Ver repositório da API",

    close: "Fechar",
    footerText: "Desenvolvido com ❤️ por Richard",
    toggleTheme: "Alternar tema",
    toggleLanguage: "Alternar idioma",
    expandSub: "clique para expandir o portfólio completo",
    expandButton: "OUTROS PROJETOS",

    // ── PROJETOS ──────────────────────────────────────────
    serginhoEstetiCar: {
      title: "SerginhoEstetiCar",
      description:
        "Site institucional desenvolvido para cliente real do setor de estética automotiva. Entregue do zero ao deploy com foco em conversão: seção de serviços clara, galeria de antes/depois e formulário de agendamento direto via WhatsApp. Alcançou nota 100/100 no Google Lighthouse em performance e SEO, aumentando a visibilidade orgânica do negócio."
    },
    calculator: {
      title: "Calculadora",
      description:
        "Calculadora responsiva com operações básicas e avançadas, desenvolvida em JavaScript puro sem dependências externas. Focada em boas práticas de manipulação de DOM, tratamento de edge cases e UX limpa."
    },
    quiz: {
      title: "Quiz Interativo",
      description:
        "Quiz dinâmico com perguntas carregadas via JavaScript, pontuação em tempo real e feedback imediato ao usuário. Desenvolvido sem frameworks para demonstrar domínio de lógica pura, eventos e manipulação do DOM."
    },
    projectWeb1: {
      title: "Projeto Web 1",
      description:
        "Recriação fiel de um layout real usando apenas HTML e CSS — sem frameworks. Exercício de atenção a detalhes, semântica HTML e responsividade manual. Base para consolidar fundamentos sólidos de front-end."
    },
    timer: {
      title: "Timer Interativo",
      description:
        "Timer regressivo com pause, reset e ajuste em tempo real — inspirado em um desafio do Codecon onde devs back-end não conseguiram implementar todas as features. Inclui alerta sonoro e mudança de cor nos segundos finais. Demonstra controle preciso de estado, eventos assíncronos e UX funcional."
    },
    projectWeb2: {
      title: "Projeto Web 2",
      description:
        "Evolução direta do Projeto Web 1: layout mais complexo, CSS avançado, hierarquia visual aprimorada e melhor organização de componentes. Mostra progressão técnica consistente em construção de interfaces estáticas."
    },
    youtubeClone: {
      title: "YouTube Clone",
      description:
        "Clone funcional da interface do YouTube construído com React, Bootstrap e Sass. Replica feed, barra lateral, player e responsividade da plataforma. Foco em componentização, reutilização e organização de estado — base sólida para projetos de maior escala."
    },
    MarioJump: {
      title: "Mario Jump",
      description:
        "Endless runner no estilo Mario com física de salto, detecção de colisão e dificuldade progressiva. Desenvolvido com React e TypeScript, roda direto no navegador sem instalação. Demonstra lógica de game loop, animações CSS e gerenciamento de estado em tempo real."
    },
    githubFinder: {
      title: "GitHub Finder",
      description:
        "App React + TypeScript que consome a API pública do GitHub para busca de perfis em tempo real. Exibe avatar, seguidores, repositórios e estatísticas com loading states e tratamento de erros. Exemplo prático de consumo de API REST, tipagem forte e componentização."
    },
    instagramClone: {
      title: "Instagram Clone",
      description:
        "Réplica pixel-perfect da interface do Instagram com React e CSS puro. Reproduz feed, stories e navegação com fidelidade ao design original. Demonstra precisão técnica em UI e domínio de CSS avançado para interfaces de alta complexidade visual."
    },
    shoppingLife: {
      title: "Shopping Life",
      description:
        "E-commerce Full Stack com catálogo de produtos, carrinho, filtros e checkout. Front-end em React, TypeScript e Styled Components; back-end próprio em Node.js, Express e PostgreSQL com autenticação JWT e endpoints RESTful. Projeto completo que simula um fluxo real de compra do início ao fim."
    },
    PersonIA: {
      title: "PersonIA",
      description:
        "Plataforma Full Stack para criação e interação com personagens virtuais personalizados. O usuário define personalidade, aparência e regras de comportamento — e conversa com o personagem via chat alimentado pela API Gemini. Back-end em Node.js, Express e PostgreSQL com JWT; front-end em React 19, TypeScript e Tailwind. Inclui sistema social completo com seguidores, likes e favoritos.",
      apiUrl: "https://api-personia.onrender.com"
    },
    portfolioBackend: {
      title: "IA Portfolio — Backend Inteligente",
      description:
        "Motor de IA por trás do chat deste portfólio. Construído com Java 21 e Spring Boot, consome a API Gemini e busca dados reais no PostgreSQL para responder perguntas sobre minha trajetória sem alucinações. Arquitetura context-aware com API REST completa e suporte a Docker. Mostra capacidade de integrar IA em sistemas de produção de forma responsável e precisa."
    }
  },

  // ─────────────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────────────
  en: {
    home: "Home",
    about: "About me",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",

    expandSub: "click to expand the portfolio",
    expandButton: "OTHER PROJECTS",

    section_messages: {
      home: "[ OPERATOR: RICHARD ] Full Stack Dev. Node.js · React · Java · TypeScript. Systems online and ready for mission.",
      sobre:    "[ BIO SCAN ] Operator identified. Full Stack Dev — React, Node.js, TypeScript. Missions completed: design to deploy, 100/100 Lighthouse. Status: ready to board.",
      skills:   "[ TECHNICAL ARSENAL ] Node.js · React · Tailwind CSS · SQL · TypeScript · Java · Spring Boot · Docker · PostgreSQL. AI integration system: ACTIVE.",
      projetos: "[ MISSION DATABASE ] Portfolio loaded. Projects on record — from institutional sites to Full Stack AI platforms. Select a sector to inspect.",
      contato:  "[ CHANNEL OPEN ] Frequency available. Transmit your message — the operator will respond as soon as possible.",
    },

    // perguntas sobre mim
    perguntar: "Ask something",
    sobre_mim: "I am a Full Stack Developer focusing on React, Node.js, and TypeScript. I have practical experience creating scalable applications with Express, SQL, and Docker, always prioritizing performance and SEO. As a freelancer, I have developed complete projects from design to deploy, achieving 100/100 Lighthouse metrics. My goal is to use technology to create real impact, delivering modern interfaces and robust systems that truly solve problems.",

    questions: {
      tech: { id: 1, text: "What technologies do you master?" },
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

    responses: {
      tech: { id: 1, text: "On the Backend, my specialty is Node.js, where I develop high-performance APIs using Express and TypeScript, integrating databases like MySQL and PostgreSQL. I have experience with Docker for containerization and also have knowledge in Java with Spring Boot. On the Frontend, I master React, JavaScript (ES6+), Tailwind CSS, and Bootstrap to create modern and responsive interfaces." },
      freelance: { id: 5, text: "As a freelancer, I developed complete projects from design to deploy, achieving perfect 100/100 Lighthouse scores." },
      pride: { id: 2, text: "My most prominent project is PersonIA, a complete web platform where the user has total creative control to shape personas from scratch. To build this Fullstack experience, I used Node.js with Express on the Backend, managing persistence in a PostgreSQL database and secure authentication with JWT. On the Frontend, I used React 19 with TypeScript and Tailwind CSS to create a fluid and responsive interface. The \"brain\" of the project is the integration with the Gemini API, which allows real-time conversations with customized characters. In addition to the AI, the system has a complete social layer of followers, likes, and favorites, all orchestrated with componentization best practices and custom hooks." },
      hiring: { id: 4, text: "You should hire me because I am a Fullstack developer focused on results and autonomy. I master modern technologies such as Node.js, React, and AI integration, as well as having solid experience with Java and Spring Boot for developing robust APIs. I use Docker to ensure scalable environments and write clean code with TypeScript. I have the ability to transform complex requirements into end-to-end functional solutions, always focusing on performance, security, and the best user experience." },
      whoIs: { id: 3, text: "I am a Full Stack Developer focused on React, Node.js, and TypeScript. I have practical experience in creating scalable applications with Express, SQL and Docker, always prioritizing performance and SEO. As a freelancer, I have developed complete projects from design to deploy, achieving maximum 100/100 metrics on Lighthouse. My goal is to use technology to generate real impact, delivering modern interfaces and robust systems that truly solve problems." },
      favoriteLang: { id: 6, text: "The language that fascinates me the most is JavaScript. It was through it that I discovered there are no limits to creation: I could build everything from robust APIs with Node.js to interactive interfaces and 3D models on the Frontend with React. JS allowed me to take ideas off paper and transform them into incredible projects, like systems that talk via AI, something I never imagined I would be capable of creating when I started. This versatility of being \"fullstack\" with a single language, combined with the constant evolution of the ecosystem, is what motivates me to evolve as a developer every day." },
      learningExpectation: { id: 8, text: "My expectation is to evolve my technical skills in real production and high-scale environments. Although I have proficiency in stacks like Node.js and React, I want to learn how the team handles complex microservices architectures, automated testing culture, and continuous integration (CI/CD) at scale. Additionally, I seek to further develop my soft skills by collaborating with experienced professionals and understanding how technology can be optimized to solve the company's specific business challenges." },
      currentStudy: { id: 9, text: "Today my total focus is on Java and Docker. I am deepening my knowledge in the Spring Boot ecosystem to create even more robust APIs and studying Docker to master containers and infrastructure. The idea is to combine the agility I already have with Node.js with the solidity of Java, ensuring that my projects are professional and easy to scale." },
      starty: { id: 10, text: "It all started when I saw a programming video on YouTube that really caught my attention. I decided to start Gustavo Guanabara's Python course, and that was when it clicked: I realized I loved creating logic and seeing things come to life. What was once curiosity became a passion, and I soon moved to the JavaScript ecosystem, where I started developing complete projects like the ones you see here today." },
      strengths: { id: 11, text: "My greatest strength is proactivity and ease of learning; when a new challenge or technology arises that the project requires, I dive into studies until I master it and deliver the solution. As a point to improve, I am sometimes a bit of a perfectionist with the code and end up spending too much time on UI details. To balance this, I am focusing on agile methodologies to deliver value quickly without compromising quality." },
      challenge: { id: 7, text: "My biggest challenge was the integration of PersonIA. I had to learn how to handle the AI API response time to avoid freezing the user experience on the Frontend and, at the same time, create Backend logic to control message limits for anonymous users. Solving this \"conversation\" between technologies, ensuring the chat was fluid and the database secure, was a great lesson in architecture and performance." },
      future: { id: 12, text: "In 5 years, I see myself as a Senior Full Stack developer or Tech Lead, mastering complex architectures and leading projects that use AI natively. My goal is to have consolidated my experience in large production ecosystems, contributing not only with high-quality code but also mentoring new developers and helping define technological strategies that bring innovation and scale to the business." },
      ia: { id: 13, text: "I see AI as an acceleration tool. I use Cursor AI and GitHub Copilot for refactoring and writing tests, but always with a critical eye on the generated logic. Additionally, I implement AI in my projects, such as PersonIA, where I connected the Gemini API to create interactive chat experiences and customized characters." },
    },

    frontend: "Front-end",
    backend: "Back-end",
    tools: "Tools",
    aboutTechnology: "About Technology",

    projectsTitle: "Projects",
    viewProject: "View project",
    viewRepository: "View repository",
    viewAPI: "View API",
    viewRepositoryAPI: "View repository of API",

    close: "Close",
    footerText: "Developed with ❤️ by Richard",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Toggle language",

    // ── PROJETOS ──────────────────────────────────────────
    serginhoEstetiCar: {
      title: "SerginhoEstetiCar",
      description:
        "Institutional website built for a real client in the automotive detailing industry. Delivered end-to-end with a conversion focus: clear services section, before/after gallery and a direct WhatsApp booking form. Achieved a perfect 100/100 on Google Lighthouse for performance and SEO, boosting the business's organic visibility."
    },
    calculator: {
      title: "Calculator",
      description:
        "Responsive calculator with basic and advanced operations built in vanilla JavaScript — no external dependencies. Focused on DOM manipulation best practices, edge case handling and clean UX."
    },
    quiz: {
      title: "Interactive Quiz",
      description:
        "Dynamic quiz with JavaScript-loaded questions, real-time scoring and instant user feedback. Built without frameworks to demonstrate mastery of pure logic, events and DOM manipulation."
    },
    projectWeb1: {
      title: "Web Project 1",
      description:
        "Faithful recreation of a real layout using only HTML and CSS — no frameworks. Exercise in attention to detail, HTML semantics and manual responsiveness. Foundation for building strong front-end fundamentals."
    },
    timer: {
      title: "Interactive Timer",
      description:
        "Countdown timer with pause, reset and real-time adjustments — inspired by a Codecon challenge where back-end devs couldn't implement all the features. Includes sound alert and color change in the final seconds. Demonstrates precise state control, async events and functional UX."
    },
    projectWeb2: {
      title: "Web Project 2",
      description:
        "Direct evolution of Web Project 1: more complex layout, advanced CSS, improved visual hierarchy and better component organization. Shows consistent technical growth in building static interfaces."
    },
    youtubeClone: {
      title: "YouTube Clone",
      description:
        "Functional YouTube interface clone built with React, Bootstrap and Sass. Replicates the feed, sidebar, player and platform responsiveness. Focus on componentization, reusability and state organization — solid base for larger-scale projects."
    },
    MarioJump: {
      title: "Mario Jump",
      description:
        "Mario-style endless runner with jump physics, collision detection and progressive difficulty. Built with React and TypeScript, runs directly in the browser with no install. Demonstrates game loop logic, CSS animations and real-time state management."
    },
    githubFinder: {
      title: "GitHub Finder",
      description:
        "React + TypeScript app consuming the GitHub public API for real-time profile search. Displays avatar, followers, repositories and stats with loading states and error handling. Practical example of REST API consumption, strong typing and componentization."
    },
    instagramClone: {
      title: "Instagram Clone",
      description:
        "Pixel-perfect Instagram interface replica built with React and pure CSS. Reproduces feed, stories and navigation with fidelity to the original design. Demonstrates technical precision in UI and mastery of advanced CSS for visually complex interfaces."
    },
    shoppingLife: {
      title: "Shopping Life",
      description:
        "Full Stack e-commerce with product catalog, cart, filters and checkout. Front-end in React, TypeScript and Styled Components; custom back-end in Node.js, Express and PostgreSQL with JWT authentication and RESTful endpoints. Complete project simulating a real purchase flow from start to finish."
    },
    PersonIA: {
      title: "PersonIA",
      description:
        "Full Stack platform for creating and interacting with custom virtual characters. Users define personality, appearance and behavior rules — then chat with the character via a Gemini API-powered interface. Back-end in Node.js, Express and PostgreSQL with JWT; front-end in React 19, TypeScript and Tailwind. Includes a complete social layer with followers, likes and favorites.",
      apiUrl: "https://api-personia.onrender.com"
    },
    portfolioBackend: {
      title: "IA Portfolio — Intelligent Backend",
      description:
        "The AI engine behind this portfolio's chat. Built with Java 21 and Spring Boot, it consumes the Gemini API and queries real data from PostgreSQL to answer questions about my background without hallucinations. Context-aware architecture with a complete REST API and Docker support. Demonstrates the ability to integrate AI into production systems responsibly and accurately."
    }
  }
};