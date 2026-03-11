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

    responses: {
      tech: { id: 1, text: "No Backend, minha especialidade é Node.js, onde desenvolvo APIs de alta performance utilizando Express e TypeScript, integrando bancos de dados como MySQL e PostgreSQL. Tenho vivência com Docker para containerização e também possuo conhecimentos em Java com Spring Boot. No Frontend, domino React, JavaScript (ES6+), Tailwind CSS e Bootstrap para a criação de interfaces modernas e responsivas." },
      freelance: { id: 5, text: "Como freelancer, desenvolvi projetos completos, do design ao deploy, alcançando métricas máximas de 100/100 no Lighthouse." },
      pride: { id: 2, text: "O meu projeto de maior destaque é o PersonIA, uma plataforma web completa onde o usuário tem total controle criativo para moldar personas do zero. Para construir essa experiência Fullstack, utilizei Node.js com Express no Backend, gerenciando a persistência em um banco de dados PostgreSQL e autenticação segura com JWT. No Frontend, usei React 19 com TypeScript e Tailwind CSS para criar uma interface fluida e responsiva. O  \"cérebro\" do projeto é a integração com a API da Gemini, que permite conversas em tempo real com personagens personalizados. Além da IA, o sistema conta com uma camada social completa de seguidores, likes e favoritos, tudo orquestrado com boas práticas de componentização e hooks customizados." },
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


    responses: {
      tech: { id: 1, text: "On the Backend, my specialty is Node.js, where I develop high-performance APIs using Express and TypeScript, integrating databases like MySQL and PostgreSQL. I have experience with Docker for containerization and also have knowledge in Java with Spring Boot. On the Frontend, I master React, JavaScript (ES6+), Tailwind CSS, and Bootstrap to create modern and responsive interfaces." },
      freelance: { id: 5, text: "Como freelancer, desenvolvi projetos completos, do design ao deploy, alcançando métricas máximas de 100/100 no Lighthouse." },
      pride: { id: 2, text: "My most prominent project is PersonIA, a complete web platform where the user has total creative control to shape personas from scratch. To build this Fullstack experience, I used Node.js with Express on the Backend, managing persistence in a PostgreSQL database and secure authentication with JWT. On the Frontend, I used React 19 with TypeScript and Tailwind CSS to create a fluid and responsive interface. The \"brain\" of the project is the integration with the OpenAI API (GPT-4o-mini), which allows real-time conversations with customized characters. In addition to the AI, the system has a complete social layer of followers, likes, and favorites, all orchestrated with componentization best practices and custom hooks." },
      hiring: { id: 4, text: "You should hire me because I am a Fullstack developer focused on results and autonomy. I master modern technologies such as Node.js, React, and AI integration, as well as having solid experience with Java and Spring Boot for developing robust APIs. I use Docker to ensure scalable environments and write clean code with TypeScript. I have the ability to transform complex requirements into end-to-end functional solutions, always focusing on performance, security, and the best user experience." },
      whoIs: { id: 3, text: "I am a Full Stack Developer focused on React, Node.js, and TypeScript. I have practical experience in creating scalable applications with Express, SQL and Docker, always prioritizing performance and SEO. As a freelancer, I have developed complete projects from design to deploy, achieving maximum 100/100 metrics on Lighthouse. My goal is to use technology to generate real impact, delivering modern interfaces and robust systems that truly solve problems." },
      favoriteLang: { id: 6, text: "The language that fascinates me the most is JavaScript. It was through it that I discovered there are no limits to creation: I could build everything from robust APIs with Node.js to interactive interfaces and 3D models on the Frontend with React. JS allowed me to take ideas off paper and transform them into incredible projects, like systems that talk via AI, something I never imagined I would be capable of creating when I started. This versatility of being \"fullstack\" with a single language, combined with the constant evolution of the ecosystem, is what motivates me to evolve as a developer every day." },
      learningExpectation: { id: 8, text: "My expectation is to evolve my technical skills in real production and high-scale environments. Although I have proficiency in stacks like Node.js and React, I want to learn how the team handles complex microservices architectures, automated testing culture, and continuous integration (CI/CD) at scale. Additionally, I seek to further develop my soft skills by collaborating with experienced professionals and understanding how technology can be optimized to solve the company's specific business challenges." },
      currentStudy: { id: 9, text: "Today my total focus is on Java and Docker. I am deepening my knowledge in the Spring Boot ecosystem to create even more robust APIs and studying Docker to master containers and infrastructure. The idea is to combine the agility I already have with Node.js with the solidity of Java, ensuring that my projects are professional and easy to scale." },
      starty: { id: 10, text: "It all started when I saw a programming video on YouTube that really caught my attention. I decided to start Gustavo Guanabara’s Python course, and that was when it clicked: I realized I loved creating logic and seeing things come to life. What was once curiosity became a passion, and I soon moved to the JavaScript ecosystem, where I started developing complete projects like the ones you see here today." },
      strengths: { id: 11, text: "My greatest strength is proactivity and ease of learning; when a new challenge or technology arises that the project requires, I dive into studies until I master it and deliver the solution. As a point to improve, I am sometimes a bit of a perfectionist with the code and end up spending too much time on UI details. To balance this, I am focusing on agile methodologies to deliver value quickly without compromising quality." },
      challenge: { id: 7, text: "My biggest challenge was the integration of PersonIA. I had to learn how to handle the AI API response time to avoid freezing the user experience on the Frontend and, at the same time, create Backend logic to control message limits for anonymous users. Solving this \"conversation\" between technologies, ensuring the chat was fluid and the database secure, was a great lesson in architecture and performance." },
      future: { id: 12, text: "In 5 years, I see myself as a Senior Full Stack developer or Tech Lead, mastering complex architectures and leading projects that use AI natively. My goal is to have consolidated my experience in large production ecosystems, contributing not only with high-quality code but also mentoring new developers and helping define technological strategies that bring innovation and scale to the business." },
      ia: { id: 13, text: "I see AI as an acceleration tool. I use Cursor AI and GitHub Copilot for refactoring and writing tests, but always with a critical eye on the generated logic. Additionally, I implement AI in my projects, such as PersonIA, where I connected the OpenAI API to create interactive chat experiences and customized characters." },
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



