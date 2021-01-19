# Svelte with Routify

A starter template using svelte, routify, tailwindcss and typescript

### Get started

#### Starter templates

***You need the latest Node LTS version.***

1. To use this clone the repo to your computer (method 1) 
```
git@github.com:analubarreto/svelte-starter.git
```
2. Create a new project clicking "Use this template" (method 2)

3. Install dependencies (method 1 and 2)
```
npm install
```
4. Remove remote (method 1)
```
git remote rm <remote-name>
```
5. Create a new github repository for your project (method 1) 
6. Add your project repository to remote (method 1)
```
git remote add origin git@github.com:{your_user_name}/{your_repo}.git
```
Note that you should remove the curly braces for this to work.
7. Start the project (method 1 and 2)
```
npm run dev
```


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

*** Você precisa da versão mais recente do Node LTS. ***

1. Para usar este clone o repo em seu computador (método 1)
```
git@github.com:analubarreto/svelte-starter.git
```
2. Crie um respositório novo clicando em "Use esse template" (método 2)
3. Instale dependências (método 1 e 2)
```
npm install
```
4. Remova o respositório remoto (método 1)
```
git remote rm <remote-name>
```

5. Crie um novo repositório github para seu projeto (método 1)
6. Adicione seu repositório de projeto ao remoto (método 1)
```
git remote add origin git@github.com: {your_user_name} / {your_repo} .git
```

Observe que você deve remover as chaves para que isso funcione.
7. Inicie o projeto (método 1)
```
npm run dev
```

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

*** Necesita la última versión de Node LTS. ***

1. Para usar este clon del repositorio en su computadora (método 1)
```
git@github.com:analubarreto/svelte-starter.git
```
2. Crie un nuevo repositório usando "Use este template" (método 2)
3. Instalar dependencias (método 1 y 2)
```
npm install
```
4. Retire el repositorio remoto (método 1)

```
git remote rm <remote-name>
```

5. Cree un nuevo repositorio de github para su proyecto (método 1)
6. Agregue su repositorio de proyectos a remoto (método 1)
```
git remote add origin git@github.com: {su_numbre} / {su_repo} .git
```
Tenga en cuenta que debe quitar las llaves para que esto funcione.
7. Inicie el proyecto (método 1 y 2)
```
npm run dev
```

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
