# E&J Schakt & Entreprenad – Hemsida

Website for **E&J Schakt & Entreprenad Sverige AB**, a groundwork and excavation company in Västerås.

🌐 **Live:** [https://ejentreprenad.se](https://ejentreprenad.se/)

## Company info

| | |
|---|---|
| Company | E&J Schakt & Entreprenad Sverige AB |
| Email | info@ejentreprenad.se |
| Phone | +46 70-542 20 31 |
| Address | Knotavägen 16, 723 52 Västerås |
| Hours | Mån–fre 07–17 |

## Tech stack

- [React 18](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/) for routing
- [Tailwind CSS 3](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI) components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Web3Forms](https://web3forms.com/) for the contact form
- Originally generated with Hostinger Horizons, hosted on Hostinger

## Project structure

```
Hemsida/                     # npm workspace root
├── package.json             # root scripts (dev / build / lint)
└── apps/web/                # the website
    ├── public/              # favicon, logos, images
    ├── src/
    │   ├── App.jsx          # routes
    │   ├── components/      # Header, Footer, ui/ (shadcn components)
    │   ├── lib/company.js   # company details & list of services
    │   └── pages/
    │       ├── HomePage.jsx     # /
    │       ├── OmOssPage.jsx    # /om-oss
    │       └── KontaktPage.jsx  # /kontakt (contact form)
    └── vite.config.js
```

**Editing content:** company name, phone, email, address, opening hours and the list of services all live in `Hemsida/apps/web/src/lib/company.js`.

## Getting started

Requires **Node.js 22** (see `Hemsida/.nvmrc`).

```bash
cd Hemsida
npm install
npm run dev        # http://localhost:3000
```

### Environment variables

The contact form needs a Web3Forms access key. Create `Hemsida/apps/web/.env.local`:

```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

`.env*` files are gitignored – never commit the key.

### Scripts (run from `Hemsida/`)

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build → `apps/web/dist/` |
| `npm run lint` | Run ESLint |

Preview a production build with `npm run start --prefix apps/web`.

## Deployment

Run `npm run build` and upload the contents of `Hemsida/apps/web/dist/` to the Hostinger hosting for ejentreprenad.se. Make sure the server rewrites unknown paths to `index.html` so the `/om-oss` and `/kontakt` routes work on reload.
