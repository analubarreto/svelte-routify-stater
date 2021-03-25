# Svelte with Routify

A starter template using svelte, routify, tailwindcss and typescript
Like my work? Will you buy me a coffee?
https://www.buymeacoffee.com/analu

!!! DISCLAIMER !!! <br />
This is not compatible with either Firebase or Amplify, I believe it's because of Routify. I'm working on a new template that should work with both. As soon as I have something I'll post it here.

### Get started

This is deprecated, please use either:
(New Svelte Starter)[https://github.com/analubarreto/new-svelte-starter]
or
(SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

#### Starter templates

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

Note that you should remove the curly braces for this to work. 7. Start the project (method 1 and 2)

```
npm run dev
```

#### Used techs

-   [Routify](https://routify.dev/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Svelte](https://svelte.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)

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

### Environmental Variables

1. Add a .env file to your root directory
2. Go to your rollup.config.js file, find this code:

```
// Env variables
replace({
    process: JSON.stringify({
        env: {
            // EXAMPLE => API_URL: process.env.API_URL,
            ...config().parsed
        }
    })
}),
```

3. Remove the example
4. Add your own variables according to the name you've used in your .env file
5. (optional) Go to your utils folder inside src, inside envVariables.js and add shortcuts to your variables
6. (optional) Import envVariables.js file inside the file you need to use your variables and use it at will.

\*\* There is an example of use inside Post.svelte

### Testing PWAs

PWAs only run on a production environment, so if you are testing this on localhost you have to go through these steps:

1. run `npm run build`
2. run `npm run serve`

### Lazy Image Loading

Lazy image loading has been added, the file lazySize.js inside util is responsible for it. It is rendered inside \_\_app.html. To use it in your images follow the example below:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

# (PT-BR) Svelte com Routify

Um modelo inicial usando svelte, routify, tailwindcss e typescript
Isso está obsoleto, por favor, use:
(New Svelte Starter)[https://github.com/analubarreto/new-svelte-starter]
ou
(SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

### Iniciar

#### Modelos iniciais

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

Observe que você deve remover as chaves para que isso funcione. 7. Inicie o projeto (método 1)

```
npm run dev
```

#### Tecnologias usadas

-   [Routify](https://routify.dev/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Svelte](https://svelte.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)

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

### Variáveis de ambiente

1. Adicione um arquivo .env ao seu diretório raiz
2. Vá para o arquivo rollup.config.js, encontre este código:

```
// Env variables
replace({
    process: JSON.stringify({
        env: {
            // EXAMPLE => API_URL: process.env.API_URL,
            ...config().parsed
        }
    })
}),
```

### Lazy Image Loading

O carregamento lento da imagem foi adicionado, o arquivo lazySize.js dentro do util é responsável por isso. Ele é renderizado dentro de \_\_app.html. Para utilizá-lo em suas imagens siga o exemplo abaixo:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

### Testando PWAs

Os PWAs são executados apenas em um ambiente de produção, portanto, se você estiver testando no localhost, siga estas etapas:

1. rode `npm run build`
2. rode `npm run serve`

# (ES-ES) Svelte con Routify

Una plantilla de inicio que utiliza svelte, routify, tailwindcss y typescript

Esto está obsoleto, por favor use:
(New Svelte Starter)[https://github.com/analubarreto/new-svelte-starter]
o
(SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

### Empezar

#### Plantillas de inicio

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

Tenga en cuenta que debe quitar las llaves para que esto funcione. 7. Inicie el proyecto (método 1 y 2)

```
npm run dev
```

#### Tecnologías usadas

-   [Routify](https://routify.dev/)
-   [Mecanografiado](https://www.typescriptlang.org/)
-   [Svelte](https://svelte.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)

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

### Variables de entorno

1. Agregue un archivo .env a su directorio raíz
2. Vaya al archivo rollup.config.js, busque este código:

```
// Env variables
replace({
    process: JSON.stringify({
        env: {
            // EXAMPLE => API_URL: process.env.API_URL,
            ...config().parsed
        }
    })
}),
```

3. Quite el ejemplo
4. Agregue sus propias variables de acuerdo con el nombre que utilizó en su archivo .env
5. (opcional) Vaya a la carpeta utils dentro de src, dentro de envVariables.js y agregue atajos para sus variables
6. (opcional) Importe el archivo envVariables.js al archivo que necesita para usar sus variables y úselo a voluntad.

\*\* Hay un ejemplo de uso dentro de Post.svelte

### Testando PWAs

Los PWA solo se ejecutan en un entorno de producción, por lo que si está probando esto en localhost, debe seguir estos pasos:

1. corra `npm run build`
2. corra `npm run serve`

### Lazy Image Loading

Se ha agregado la carga diferida de imágenes, el archivo lazySize.js dentro de util es responsable de ello. Se representa dentro de \_\_app.html. Para usarlo en tus imágenes sigue el siguiente ejemplo:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```
