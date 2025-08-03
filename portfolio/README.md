# 🚀 Portfólio - Richard Moraes Souza

Um portfólio moderno e responsivo desenvolvido com React, demonstrando projetos e habilidades em desenvolvimento front-end com suporte a múltiplos idiomas.

## 📋 Sobre

Este portfólio apresenta minha jornada como desenvolvedor front-end autodidata, destacando projetos desenvolvidos e tecnologias que domino. O site é totalmente responsivo, oferece uma experiência de usuário intuitiva e moderna, e suporta múltiplos idiomas (Português e Inglês).

## ✨ Funcionalidades

- **🌍 Suporte Multi-idioma**: Tradução completa em Português e Inglês
- **🎨 Tema Escuro/Claro**: Alternância entre temas com persistência local
- **📱 Design Responsivo**: Interface adaptável para diferentes dispositivos
- **⚡ Performance Otimizada**: Carregamento rápido com Vite
- **🎯 Seção Sobre Mim**: Apresentação pessoal e experiência profissional
- **🛠️ Tecnologias**: Exibição das tecnologias com modais informativos
- **📂 Projetos**: Galeria de projetos com links para demonstração e repositório
- **🎭 Animações**: Transições suaves e elementos interativos

## 🛠️ Tecnologias Utilizadas

### Front-end
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **SCSS/Sass** - Pré-processador CSS para estilos avançados
- **Vite** - Build tool rápida e moderna
- **ESLint** - Linter para qualidade de código

### Funcionalidades
- **Context API** - Gerenciamento de estado para tema e idioma
- **LocalStorage** - Persistência de preferências do usuário
- **CSS Modules** - Estilos modulares e organizados

### Deploy
- **GitHub Pages** - Hospedagem gratuita
- **gh-pages** - Deploy automatizado

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/richardmoraessouza/Portf-lio.git
cd Portf-lio/portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run deploy` - Faz deploy para GitHub Pages

## 🌍 Sistema de Idiomas

O portfólio suporta dois idiomas:

### Português (Padrão)
- Interface completa em português
- Descrições detalhadas dos projetos
- Informações sobre tecnologias

### Inglês
- Tradução completa da interface
- Projetos e tecnologias traduzidos
- Manutenção da qualidade do conteúdo

### Como Usar
- Clique no botão de alternar idioma no cabeçalho
- As preferências são salvas automaticamente
- O idioma é mantido entre sessões

## 🎨 Sistema de Temas

### Tema Claro
- Design limpo e moderno
- Cores suaves e legíveis
- Ideal para uso diurno

### Tema Escuro
- Reduz fadiga visual
- Cores contrastantes
- Ideal para uso noturno

### Persistência
- As preferências são salvas no navegador
- O tema é mantido entre sessões
- Alternância instantânea

## 🎯 Projetos Destacados

### SerginhoEstetiCar
Site institucional desenvolvido sob demanda para estética automotiva, com formulário de agendamento e design responsivo.

**Tecnologias**: HTML, CSS, JavaScript
**Link**: [Ver projeto](https://serginhoesteticar.netlify.app/)

### Calculadora
Calculadora responsiva desenvolvida com HTML, CSS e JavaScript puro, com operações básicas e avançadas.

**Tecnologias**: HTML, CSS, JavaScript
**Link**: [Ver projeto](https://calculadoraresponsiva.netlify.app/)

### Timer Interativo
Cronômetro regressivo com funcionalidades avançadas como pausa, reset e alertas visuais.

**Tecnologias**: HTML, CSS, JavaScript
**Link**: [Ver projeto](https://timer-interativo.netlify.app/)

### Quiz
Quiz interativo desenvolvido com HTML, CSS, Bootstrap e JavaScript, com perguntas dinâmicas e sistema de pontuação.

**Tecnologias**: HTML, CSS, Bootstrap, JavaScript
**Link**: [Ver projeto](https://perguntas-front-end.netlify.app/)

## 🛠️ Tecnologias Demonstradas

### Front-end
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos modernos e responsivos
- **JavaScript** - Interatividade e dinamismo
- **React** - Componentes reutilizáveis
- **Sass/SCSS** - Estilos organizados e modulares
- **Bootstrap** - Framework CSS responsivo

### Back-end
- **Python** - Automação e processamento de dados
- **MySQL** - Gerenciamento de banco de dados
- **JSON** - Troca de dados entre sistemas

### Ferramentas
- **Git** - Controle de versão
- **GitHub** - Hospedagem de código e colaboração

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🚀 Deploy

O projeto está hospedado no GitHub Pages e pode ser acessado em:
[https://richardmoraessouza.github.io/Portf-lio](https://richardmoraessouza.github.io/Portf-lio)

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── image/          # Imagens dos projetos
│   └── video/          # Vídeos demonstrativos
├── src/
│   ├── components/     # Componentes React
│   │   ├── Footer/     # Rodapé
│   │   ├── Header/     # Cabeçalho com navegação
│   │   ├── LanguageToggle/ # Alternador de idioma
│   │   ├── Modal/      # Modal de projetos
│   │   ├── Navegacao/  # Menu de navegação
│   │   ├── Projetos/   # Seção de projetos
│   │   ├── Sobre_mim/  # Seção sobre mim
│   │   ├── Tecnologias/ # Seção de tecnologias
│   │   └── ThemeToggle/ # Alternador de tema
│   ├── contexts/       # Contextos React
│   │   ├── LanguageContext.jsx # Gerenciamento de idioma
│   │   └── ThemeContext.jsx    # Gerenciamento de tema
│   ├── translations/   # Arquivos de tradução
│   │   └── translations.js     # Traduções PT/EN
│   ├── styles/         # Arquivos SCSS
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Ponto de entrada
└── package.json        # Dependências e scripts
```

## 🎨 Características do Design

### Cores
- **Tema Claro**: Cores suaves e contrastantes
- **Tema Escuro**: Cores escuras com destaque
- **Acessibilidade**: Contraste adequado para leitura

### Tipografia
- **Fonte Principal**: Sistema de fontes do navegador
- **Hierarquia**: Tamanhos bem definidos
- **Legibilidade**: Espaçamento otimizado

### Animações
- **Transições Suaves**: 0.3s ease-in-out
- **Hover Effects**: Feedback visual interativo
- **Loading States**: Indicadores de carregamento

## 👨‍💻 Desenvolvedor

**Richard Moraes Souza**
- 🎯 Desenvolvedor Front-end autodidata
- 💡 Apaixonado por criar experiências digitais envolventes
- 🛠️ Foco em React, JavaScript, HTML, CSS e SCSS
- 🔧 Conhecimentos em Python e MySQL
- 🌍 Experiência com projetos multi-idioma

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs
- 💡 Sugerir novas funcionalidades
- 📝 Melhorar a documentação
- 🔧 Corrigir problemas de código


## 📞 Contato

- **Email**: [richardmoraessouza2006@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/richard-moraes-souza/]
- **GitHub**: [richardmoraessouza](https://github.com/richardmoraessouza)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ por Richard Moraes Souza**
