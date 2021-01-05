# Svelte with Routify

A starter template using svelte, routify, tailwindcss and typescript

### Get started

#### Starter templates

To use this template you click at: "Use this template" on the top of the commit list.
That will create a new github repo with this template after you create your repository you can clone it using:

```
git clone git@github.com:{your_user_name}/{your_repository}.git
```

Note that you should remove the curly braces for this to work.

#### Used techs

- [Routify](https://routify.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Folder Structure

#### Components Folder

This is not a necessary folder, but it is advised you put your components here.

#### Pages folder

This is a necessary folder where routes are created. It's advised to create a folder like blog with a index and [content].svelte only if you have a route with dynamic sub routes.

### Prettier and ESLint
To use these you have to create the configuration files:
.eslintrc.js
```
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
  },
  plugins: ["@typescript-eslint", "svelte3"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
};
```
and
.prettierrc
```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100,
  "overrides": [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```
You don't need to use these settings, these are just examples I got from:
[Setup Prettier and ESLint](https://dev.to/mhaecker/use-airbnb-s-eslint-config-with-typescript-prettier-in-svelte-apps-4fb7)

### Missing .nolluprc.js file
In your root folder add .nolluprc.js with this code:
```
module.exports = {
  hot: true,
  contentBase: 'assets',
  publicPath: 'build',
  historyApiFallback: '__app.html',
  port: 5000
 }
 ```

# (PT-BR) Svelte com Routify

Um modelo inicial usando svelte, routify, tailwindcss e typescript

### Iniciar

#### Modelos iniciais

Para usar este modelo, você clica em: "Use este modelo" no topo da lista de commits.
Isso criará um novo repo github com este modelo depois de criar seu repositório, você pode cloná-lo usando:

`` ` git clone git@github.com: {your_user_name} / {your_repository} .git `` `

Observe que você deve remover as chaves para que isso funcione.

#### Tecnologias usadas

- [Routify](https://routify.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Estrutura de Pastas

#### Pasta de Components

Esta pasta não é necessária, mas é recomendado que você coloque seus componentes aqui.

#### Pasta de páginas

Esta é uma pasta necessária onde as rotas são criadas. É aconselhável criar uma pasta como blog com um índice e [conteudo].svelte apenas se você tiver uma rota com rotas secundárias dinâmicas.

### Prettier e ESLint
Para usar, você precisa adicionar os seguintes arquivos de configuração:
.eslintrc.js
```
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
  },
  plugins: ["@typescript-eslint", "svelte3"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
};
```
and
.prettierrc
```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100,
  "overrides": [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```
Você não precisa usar essas configurações, essas são sugestões que eu peguei daqui:
[Setup Prettier and ESLint](https://dev.to/mhaecker/use-airbnb-s-eslint-config-with-typescript-prettier-in-svelte-apps-4fb7)

### Arquivo .nolluprc.js faltando
Na raiz do seu projeto adicione .nolluprc.js com esse código:
```
module.exports = {
  hot: true,
  contentBase: 'assets',
  publicPath: 'build',
  historyApiFallback: '__app.html',
  port: 5000
 }
 ```

# (ES-ES) Svelte con Routify

Una plantilla de inicio que utiliza svelte, routify, tailwindcss y typescript

### Empezar

#### Plantillas de inicio

Para usar esta plantilla, haga clic en: "Usar esta plantilla" en la parte superior de la lista de confirmaciones.
Eso creará un nuevo repositorio de github con esta plantilla después de crear su repositorio, puede clonarlo usando:

''
git clone git@github.com: {your_user_name}/{your_repository}.git
''

Tenga en cuenta que debe quitar las llaves para que esto funcione.

#### Tecnologías usadas

- [Routify](https://routify.dev/)
- [Mecanografiado](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Estructura de Carpetas

#### Carpeta de Components

Esta no es una carpeta necesaria, pero se recomiends que coloque sus componentes aquí.

#### Carpeta de Pagina

Esta es una carpeta necesaria donde se crean las rutas. Se recomienda crear una carpeta como blog con un índice y [contenido].svelte solo si tiene una ruta con subrutas dinámicas.

### Prettier y ESLint
Para usarlos, debe crear los archivos de configuración:
.eslintrc.js
```
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-mutable-exports": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
  },
  plugins: ["@typescript-eslint", "svelte3"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
};
```
and
.prettierrc
```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100,
  "overrides": [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```
No necesita usar esta configuración, estos son solo ejemplos que obtuve de:
[Setup Prettier and ESLint](https://dev.to/mhaecker/use-airbnb-s-eslint-config-with-typescript-prettier-in-svelte-apps-4fb7)

### Arquivo .nolluprc.js

En la raíz de su proyecto, agregue .nolluprc.js con este código:
```
module.exports = {
  hot: true,
  contentBase: 'assets',
  publicPath: 'build',
  historyApiFallback: '__app.html',
  port: 5000
 }
 ```
