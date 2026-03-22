# 🚀 Portfólio - Richard Moraes Souza

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-1.89.2-C6538C?style=flat-square&logo=sass)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()

**Portfólio moderno, responsivo e interativo** | React + Vite + SCSS  
Código limpo • Multi-idioma • Tema Dark/Light • Deploy Automático

[🌐 Ver ao Vivo](#-links-importantes) • [📖 Docs](#-documentação) • [⚙️ Setup](#-instalação-e-uso)

</div>

---

## 📋 Sobre

Portfólio profissional completo desenvolvido com **React 19** e **Vite**, demonstrando habilidades em desenvolvimento front-end moderno. Layout responsivo, suporte a **2 idiomas** (PT/EN) e **tema dinâmico** (claro/escuro) com persistência local.

Este projeto é um showcase de boas práticas em desenvolvimento, incluindo:
- ✅ Componentes React reutilizáveis
- ✅ Gerenciamento de estado com Context API
- ✅ Estilos modulares com SCSS
- ✅ Build otimizado com Vite
- ✅ Deploy automatizado (GitHub Pages, Netlify, Docker)
- ✅ Código limpo e bem organizado

---

## 📚 Índice

- [Características](#-características)
- [Tech Stack](#-tech-stack)
- [Instalação](#-instalação-e-uso)
- [Scripts](#-scripts-disponíveis)
- [Idiomas & Temas](#-sistema-de-idiomas)
- [Projetos](#-projetos-em-destaque)
- [Estrutura](#-estrutura-de-pastas)
- [Deploy](#-deploy)
- [Contribuição](#-como-contribuir)
- [Contato](#-links-importantes)

---

## ✨ Características

| Feature | Descrição |
|---------|-----------|
| 🌍 **Multi-idioma** | Português e Inglês com Context API |
| 🎨 **Tema Dinâmico** | Claro/Escuro com persistência localStorage |
| 📱 **Responsivo** | Mobile-first, adaptado para todos os tamanhos |
| ⚡ **Performance** | Build com Vite, ~2x mais rápido |
| 🖱️ **Interativo** | Efeitos visuais (rastro do mouse, fundo animado) |
| 💬 **Chat IA** | Assistente de IA integrado |
| 🎭 **Animações** | Transições suaves e efeitos CSS modernos |
| 🔒 **Segurança** | Headers HTTP, proteção XSS, CSRF token |
| ♿ **Acessível** | WCAG AA, navegação por teclado, ARIA labels |
| 📈 **SEO Ready** | Meta tags, robots.txt, sitemap.xml |

---

## 🛠️ Tech Stack

### 🚀 Core Technologies
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.1.0 | Biblioteca de componentes |
| **Vite** | 7.0.0 | Build tool & dev server |
| **ESLint** | 9.29.0 | Linting e qualidade |

### 📦 Dependências Principais
- **Axios** 1.13.6 - Requisições HTTP
- **EmailJS** 4.4.1 - Envio de emails
- **Noisejs** 2.1.0 - Efeitos visuais
- **gh-pages** 6.3.0 - Deploy GitHub Pages

### 🎯 Padrões & Arquitetura
- **Context API** - Gerenciamento de estado global (tema, idioma)
- **CSS Modules** - Estilos isolados e reutilizáveis
- **React Hooks** - Componentes funcionais
- **Lazy Loading** - Otimização de carregamento

---

## 📦 Instalação e Uso

### ⚙️ Pré-requisitos
- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** v7+ ou **yarn** v1.22+
- **Git** instalado

### 🚀 Setup Rápido

```bash
# 1. Clone o repositório
git clone https://github.com/richardmoraessouza/Portfólio.git
cd Portfólio/portfolio

# 2. Instale as dependências
npm install

# 3. Execute o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

### 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev         # Inicia servidor com Hot reload

# Build
npm run build       # Gera build otimizado (dist/)
npm run preview     # Visualiza build localmente

# Qualidade
npm run lint        # Verifica código com ESLint

# Deploy
npm run deploy      # Deploy automático para GitHub Pages
```

### 🐳 Usando Docker

```bash
# Build com Docker
docker build -t portfolio .

# Executar container
docker run -p 80:80 portfolio

# Ou com Docker Compose
docker-compose up --build
# Acesse: http://localhost
```

---

## 🌍 Sistema de Idiomas

### Linguagens Suportadas
- 🇵🇹 **Português** (PT-BR) - Padrão
- 🇬🇧 **Inglês** (EN-US) - Completo

### Arquivos Relevantes
```
src/hooks/
├── LanguageContext.jsx       # Context do idioma
└── translations.js           # Dicionário PT/EN

src/components/LanguageToggle/
├── LanguageToggle.jsx        # Componente de seleção
└── LanguageToggle.module.css # Estilos
```

### Como Usar
1. Clique no ícone de idioma (topo direito)
2. Preferências salvas automaticamente
3. Idioma persiste entre sessões

### ➕ Adicionar Novo Idioma

```javascript
// src/hooks/translations.js
export const translations = {
  pt: { /* Português */ },
  en: { /* Inglês */ },
  es: { /* Adicione Espanhol aqui */ }
};
```

---

## 🎨 Sistema de Temas

### Temas Disponíveis
- ☀️ **Light** - Cores claras, ideal para dia
- 🌙 **Dark** - Cores escuras, reduz fadiga visual

### Implementação
```
src/hooks/ThemeContext.jsx           # Context do tema
src/components/ThemeToggle/          # Botão de alternância
src/styles/                          # Variáveis CSS
```

### Variáveis CSS por Tema
```css
/* Light Theme */
--bg-primary: #f5f5f5;
--text-primary: #222;
--accent: #007bff;

/* Dark Theme */
--bg-primary: #1a1a1a;
--text-primary: #fff;
--accent: #0d6efd;
```

---

## 🎯 Projetos em Destaque

### 1️⃣ SerginhoEstetiCar
**Descrição**: Site institucional para estética automotiva  
**Tecnologias**: HTML, CSS, JavaScript, Responsivo  
**Link**: [🔗 Ver ao Vivo](https://serginhoesteticar.netlify.app/)  
**Aprendizados**: Design responsivo, formulários, integração com serviços

### 2️⃣ Calculadora
**Descrição**: Calculadora com operações básicas e avançadas  
**Tecnologias**: HTML, CSS, JavaScript  
**Link**: [🔗 Ver ao Vivo](https://calculadoraresponsiva.netlify.app/)  
**Aprendizados**: DOM manipulation, event listeners, cálculos

### 3️⃣ Timer Interativo
**Descrição**: Cronômetro regressivo com pausa e reset  
**Tecnologias**: HTML, CSS, JavaScript, Animações  
**Link**: [🔗 Ver ao Vivo](https://timer-interativo.netlify.app/)  
**Aprendizados**: Controle de tempo, UX interativa

### 4️⃣ Quiz Inteligente
**Descrição**: Quiz dinâmico com perguntas e pontuação  
**Tecnologias**: HTML, CSS, Bootstrap, JavaScript  
**Link**: [🔗 Ver ao Vivo](https://perguntas-front-end.netlify.app/)  
**Aprendizados**: Array methods, lógica condicional, scoring

---

## 📁 Estrutura de Pastas

```
Portfólio/
├── portfolio/                          # App principal (React + Vite)
│   ├── public/
│   │   ├── image/                      # Imagens dos projetos
│   │   ├── video/                      # Vídeos de demonstração
│   │   ├── robots.txt                  # SEO robots
│   │   ├── sitemap.xml                 # Sitemap SEO
│   │   └── _redirects                  # Redirects Netlify
│   │
│   ├── src/
│   │   ├── components/                 # Componentes React reutilizáveis
│   │   │   ├── ChatIA/                 # Chat com assistente IA
│   │   │   │   ├── ChatIA.jsx
│   │   │   │   └── ChatIA.module.css
│   │   │   ├── Header/                 # Cabeçalho principal
│   │   │   ├── Navegacao/              # Menu de navegação
│   │   │   ├── Modal/                  # Modal genérico
│   │   │   ├── LanguageToggle/         # Seletor de idioma
│   │   │   ├── ThemeToggle/            # Seletor de tema
│   │   │   ├── MouseTrail/             # Efeito rastro do mouse
│   │   │   ├── StarBackgroud/          # Fundo com estrelas
│   │   │   └── Painel/                 # Componente painel
│   │   │
│   │   ├── page/                       # Páginas/Seções principais
│   │   │   ├── Header/                 # Seção apresentação
│   │   │   ├── Sobre_mim/              # Seção sobre
│   │   │   ├── Tecnologias/            # Seção skills
│   │   │   │   ├── Tecnologias.jsx
│   │   │   │   ├── front.json          # Skills frontend
│   │   │   │   ├── back.json           # Skills backend
│   │   │   │   ├── git.json            # Skills git
│   │   │   │   └── Tecnologias.module.css
│   │   │   ├── Projetos/               # Seção projetos
│   │   │   │   ├── Projetos.jsx
│   │   │   │   ├── Projetos.json       # Base de projetos
│   │   │   │   └── Projetos.module.css
│   │   │   └── Footer/                 # Rodapé
│   │   │
│   │   ├── hooks/                      # Contextos e hooks
│   │   │   ├── LanguageContext.jsx     # Context idioma
│   │   │   ├── ThemeContext.jsx        # Context tema
│   │   │   └── translations.js         # Dicionário PT/EN
│   │   │
│   │   ├── styles/                     # Estilos globais
│   │   │   ├── animations.css          # Keyframes
│   │   │   └── index.css               # Estilos base
│   │   │
│   │   ├── App.jsx                     # Componente raiz
│   │   └── main.jsx                    # Ponto de entrada
│   │
│   ├── package.json                    # Dependências
│   ├── vite.config.js                  # Config Vite
│   ├── eslint.config.js                # Config ESLint
│   ├── netlify.toml                    # Config Netlify
│   ├── SCSS_GUIDE.md                   # Guia SCSS
│   └── README.md                       # Este arquivo
│
├── dockerfile                          # Imagem Docker
├── docker-compose.yml                  # Docker compose
└── README.md                           # README raiz
```

---

## ➕ Como Adicionar Novos Projetos

### Passo 1: Edite o JSON

Abra `src/page/Projetos/Projetos.json`:

```json
{
  "pt": [
    {
      "id": 5,
      "titulo": "Novo Projeto",
      "descricao": "Descrição em português",
      "imagem": "/image/projeto.jpg",
      "tecnologias": ["React", "Vite"],
      "links": {
        "demo": "https://projeto.netlify.app",
        "github": "https://github.com/user/repo"
      }
    }
  ],
  "en": [
    {
      "id": 5,
      "titulo": "New Project",
      "descricao": "Description in English",
      "imagem": "/image/projeto.jpg",
      "tecnologias": ["React", "Vite"],
      "links": {
        "demo": "https://projeto.netlify.app",
        "github": "https://github.com/user/repo"
      }
    }
  ]
}
```

### Passo 2: Adicione a Imagem

Coloque a imagem em `public/image/`
- Recomendado: min 800x600px
- Formatos: JPG, PNG, WebP

### Passo 3: Teste

```bash
npm run dev
# Navegue para a seção de Projetos
```

---

## 🚀 Deploy

### ✅ GitHub Pages (Recomendado)
```bash
npm run deploy
# Automático com gh-pages
# URL: https://richardmoraessouza.github.io/Portfólio
```

### ✅ Netlify
1. Conecte o repositório em [netlify.com](https://netlify.com)
2. Build: `npm run build`
3. Publish: `dist`
4. Headers e redirects: `netlify.toml`

### ✅ Docker
```bash
docker-compose up --build
# Acesse: http://localhost
# Usa Nginx + Node.js
```

### ✅ Vercel
```bash
npm install -g vercel
vercel
# Deploy automático
```

---

## 📊 Responsividade

Breakpoints utilizados:

```css
320px   /* Smartphones pequenos */
480px   /* Smartphones grandes */
768px   /* Tablets */
1024px  /* Desktops */
1440px  /* Large screens */
1920px  /* Ultra-wide */
```

---

## ♿ Acessibilidade

- ✅ Contraste WCAG AA
- ✅ Navegação por teclado completa
- ✅ ARIA labels onde necessário
- ✅ Imagens com alt text
- ✅ Semântica HTML5
- ✅ Focus states visíveis

---

## 📈 Performance

| Métrica | Resultado |
|---------|-----------|
| **Build Speed** | ~2x mais rápido (Vite vs Webpack) |
| **Bundle Size** | Otimizado com tree-shaking |
| **CSS** | Zero conflito (CSS Modules) |
| **Code Splitting** | Lazy loading automático |
| **Images** | Compressão automática |

---

## 📜 Licença

Este projeto está sob a licença **MIT**.

Você é livre para:
- ✅ Usar em projetos pessoais
- ✅ Usar em projetos comerciais
- ✅ Modificar o código
- ✅ Distribuir
- ⚠️ Incluir aviso de licença

Veja [LICENSE](LICENSE) para detalhes completos.

---

## 🔗 Links Importantes

<div align="center">

| Link | Descrição |
|------|-----------|
| 🌐 [Portfolio ao Vivo](https://richardmoraessouza.github.io/Portfólio) | Acesse o portfólio |
| 📧 [Email](mailto:richardmoraessouza2006@gmail.com) | richardmoraessouza2006@gmail.com |
| 💼 [LinkedIn](https://www.linkedin.com/in/richard-moraes-souza/) | Perfil profissional |
| 🐙 [GitHub](https://github.com/richardmoraessouza) | Repositórios |

</div>

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1. **Fork** o projeto
   ```bash
   # Clique em "Fork" no GitHub
   ```

2. **Clone seu fork**
   ```bash
   git clone https://github.com/SEU_USUARIO/Portfólio.git
   cd Portfólio/portfolio
   ```

3. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/MinhaFeature
   ```

4. **Faça suas mudanças** e commit
   ```bash
   git add .
   git commit -m "Add: Descrição da feature"
   ```

5. **Push para a branch**
   ```bash
   git push origin feature/MinhaFeature
   ```

6. **Abra um Pull Request**
   - Descreva suas mudanças
   - Referencie issues se houver

### 📋 Guidelines de Contribuição

- Mantenha o código limpo e formatado
- Adicione comentários quando necessário
- Teste suas mudanças localmente
- Atualize a documentação
- Siga o estilo de código existente
- Escreva commits descritivos

### 🆘 Reportar Bugs

- [Abra uma Issue](https://github.com/richardmoraessouza/Portfólio/issues)
- Descreva o bug claramente
- Inclua passos para reproduzir
- Anexe screenshots se possível

---

## 📞 Suporte

Tem dúvidas ou encontrou um problema?

- 💬 [Abra uma Issue](https://github.com/richardmoraessouza/Portfólio/issues)
- 📧 [Envie um email](mailto:richardmoraessouza2006@gmail.com)
- ⭐ Considere dar uma estrela se o projeto ajudou!

---

## 👨‍💻 Sobre o Desenvolvedor

**Richard Moraes Souza**  
Desenvolvedor Front-End autodidata apaixonado por criar experiências digitais modernas.

### 🎯 Especialidades
- React & Modern JavaScript (ES6+)
- SCSS/SASS e Design Responsivo
- Vite, Webpack e Build Tools
- Mobile-First Development
- Tooling & DevOps (Git, Docker)
- Multi-idioma & Acessibilidade

### 🚀 Em Aprendizado
- TypeScript
- Node.js & Express
- Banco de Dados (MySQL, MongoDB)
- Python

### 💡 Interessado Em
- Web Performance
- UX/UI Design
- DevOps
- Cloud Computing

---

<div align="center">

### Made with ❤️ by Richard Moraes Souza

⭐ Se este projeto foi útil, considere dar uma estrela!

[⬆ Voltar ao topo](#-portfólio---richard-moraes-souza)

</div>
