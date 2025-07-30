# 🎨 Guia de Uso do SCSS

Este documento explica como usar SCSS de forma eficiente no projeto do portfólio.

## 📁 Estrutura de Arquivos

```
src/
├── styles/
│   ├── _variables.scss     # Variáveis globais
│   ├── _mixins.scss        # Mixins reutilizáveis
│   └── animations.scss     # Animações
└── components/
    └── ComponentName/
        ├── ComponentName.jsx
        └── ComponentName.module.scss
```

## 🎯 Variáveis Disponíveis

### Cores
```scss
$primary-color: #1e1e1e;
$secondary-color: #1a1a1a;
$background-dark: #0b0c10;
$text-white: #ffffff;
$text-light: #f0f0f0;
$text-black: #000000;
```

### Gradientes
```scss
$gradient-glow: linear-gradient(...);
$gradient-github: linear-gradient(...);
$gradient-linkedin: linear-gradient(...);
$gradient-purple: linear-gradient(...);
```

### Tipografia
```scss
$font-family-primary: "Orbitron", sans-serif;
$font-size-small: clamp(0.7rem, 2vw, 3rem);
$font-size-medium: clamp(0.8rem, 1.5vw, 3rem);
$font-size-large: clamp(0.8rem, 2vw, 1.1rem);
```

### Espaçamentos
```scss
$spacing-xs: 4px;
$spacing-sm: 5px;
$spacing-md: 10px;
$spacing-lg: 15px;
$spacing-xl: 17px;
```

### Breakpoints
```scss
$breakpoint-sm: 400px;
$breakpoint-md: 480px;
$breakpoint-lg: 500px;
$breakpoint-xl: 600px;
$breakpoint-xxl: 747px;
```

## 🔧 Mixins Disponíveis

### Flexbox
```scss
@include flex(column, center, center, nowrap);
// Parâmetros: direction, justify, align, wrap
```

### Grid
```scss
@include grid(1fr 1fr, 10px);
// Parâmetros: columns, gap
```

### Responsividade
```scss
@include respond-to('lg') {
  // Estilos para telas grandes
}
// Breakpoints: 'sm', 'md', 'lg', 'xl', 'xxl'
```

### Botões
```scss
@include button-style($bg-color, $text-color, $border-radius);
```

### Animações
```scss
@include animation(glowing, 20s, linear, infinite);
```

### Gradientes Animados
```scss
@include glowing-gradient($gradient-github);
```

### Links de Navegação
```scss
@include nav-link;
```

## 📝 Como Usar

### 1. Importar Variáveis e Mixins
```scss
@import '../../styles/variables';
@import '../../styles/mixins';
```

### 2. Exemplo de Componente
```scss
.meuComponente {
  @include flex(column, center, center, nowrap);
  background-color: $primary-color;
  
  h1 {
    font-size: $font-size-large;
    color: $text-white;
    @include text-shadow;
  }
  
  .botao {
    @include button-style($secondary-color, $text-white);
    @include hover-lift;
  }
  
  @include respond-to('lg') {
    @include flex(row, space-between, center, nowrap);
  }
}
```

## 🎨 Boas Práticas

1. **Sempre use variáveis** para cores, fontes e espaçamentos
2. **Utilize mixins** para padrões repetitivos
3. **Organize imports** no topo do arquivo
4. **Use breakpoints consistentes** com `@include respond-to()`
5. **Mantenha aninhamento máximo de 3 níveis**
6. **Use comentários** para seções complexas

## 🚀 Benefícios

- **Manutenibilidade**: Mudanças globais em um lugar
- **Consistência**: Padrões uniformes em todo o projeto
- **Produtividade**: Mixins aceleram o desenvolvimento
- **Responsividade**: Breakpoints padronizados
- **Performance**: SCSS compila para CSS otimizado

## 🔄 Atualizações

Para adicionar novas variáveis ou mixins:

1. Adicione em `_variables.scss` ou `_mixins.scss`
2. Documente aqui
3. Teste em diferentes componentes
4. Mantenha compatibilidade com código existente 