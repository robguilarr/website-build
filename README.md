# Personal Portfolio Website

A minimalistic and aesthetic Astro-based personal portfolio website inspired by Read.cv. This website showcases professional experience, achievements, education, volunteer work, and technical writing.

Built with modern web technologies including Astro, React, TailwindCSS, and MDX, featuring math rendering support (KaTeX), syntax highlighting, and optimized performance.

## Features

- **Professional Portfolio**: Display work experience, achievements, education, languages, and volunteer work
- **Technical Writing**: MDX-powered blog for sharing articles and insights
- **Modern Stack**: Astro for fast static site generation with React components
- **Math Support**: LaTeX math rendering with KaTeX
- **Syntax Highlighting**: Code blocks with Shiki syntax highlighting
- **Responsive Design**: Beautiful, responsive UI with TailwindCSS
- **Dark Mode**: Theme switching support
- **SEO Optimized**: Sitemap generation and meta tag management

## Installation

In terms of local development, you can use the following requirements:

`Node.js - v18.17.1 or v20.3.0, v22.0.0 or higher`

Next, install the dependencies using Bun or NPM:

```sh
bun install

# npm
npm install
```

Finally, start the development server:

```sh
bun dev

# npm
npm run dev
```

The site will be available at `http://localhost:4321`

To build the production site:

```sh
bun build

# npm
npm run build
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md`, `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Here's an overview of folders relevant to customization:

| Path                     | Purpose                                                   |
|--------------------------|-----------------------------------------------------------|
| `src/assets/`            | Fonts and static images (e.g., avatar, meta image)        |
| `src/components/`        | UI and layout components (header, footer, etc.)           |
| `src/content/`           | Editable content: jobs, links, posts, pages, achievements, education, languages, volunteering |
| `src/layouts/`           | Astro layout templates                                    |
| `src/pages/`             | Page routing (`index.astro`, `writing/`, `spaces/`)       |
| `src/styles/global.css`  | Global CSS and utility styles                             |
| `src/lib/`               | Utility functions and constants                           |
| `public/`                | Static assets (favicons, images)                          |

### Content Structure

The `src/content/` directory contains all editable content:

- **`posts/`**: Blog posts and articles (MDX format)
- **`jobs/`**: Work experience entries
- **`achievements/`**: Professional achievements and awards
- **`education/`**: Educational background
- **`languages/`**: Language proficiencies
- **`volunteering/`**: Volunteer work and contributions
- **`links/`**: Contact and social media links (YAML format)
- **`pages/`**: Static page content (homepage, etc.)

## Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install` / `npm install` | Installs dependencies                            |
| `bun dev` / `npm run dev` | Starts local dev server at `localhost:4321`      |
| `bun build` / `npm run build` | Build your production site to `./dist/`          |
| `bun preview` / `npm run preview` | Preview your build locally, before deploying     |
| `bun astro ...` / `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` / `npm run astro -- --help` | Get help using the Astro CLI                     |

## Customization

### Updating Personal Information

1. **Author Profile**: Edit `src/lib/constants.ts` to update your name, headline, username, and avatar
2. **Homepage Content**: Edit `src/content/pages/homepage/index.mdx` for your about section
3. **Contact Links**: Update files in `src/content/links/` (email.yml, github.yml, website.yml, etc.)
4. **Work Experience**: Add or modify files in `src/content/jobs/`
5. **Achievements**: Add entries in `src/content/achievements/`
6. **Education**: Update `src/content/education/`
7. **Blog Posts**: Add new MDX files in `src/content/posts/`

### Configuration

- **Site URL**: Update `site` in `astro.config.mjs`
- **SEO**: Modify SEO settings in `src/lib/constants.ts` and individual content entries
- **Theme**: Customize colors and styles in `src/styles/global.css` and `tailwind.config.mjs`

## Technologies Used

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://react.dev/)** - UI component library
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX
- **[KaTeX](https://katex.org/)** - Math typesetting
- **[Shiki](https://shiki.matsu.io/)** - Syntax highlighting
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

## Deployment

The site can be deployed to any static hosting service. For GitHub Pages, see the deployment guide in `docs/guides/how-to-deploy-github-pages.md`.

Build the production site:

```sh
bun build

# npm
npm run build
```

The output will be in the `dist/` directory, ready to deploy.
