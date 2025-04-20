# GIRR React Frontend

## TODO / Roadmap

- Titrage personnalisable (choix de la police, couleur, position)
- Effets d'apparition/disparition (glitch, fondu, etc.)
- Vue XSplit flexible (séparer titre et média en 2 pages ou non)
- Aperçu XSplit dans l'éditeur des sujets/émissions
- Travail full cloud (édition et utilisation 100% en ligne)


Migration du frontend GIRR de Vue.js 2 vers React 18+, avec Vite, Tailwind CSS, Zustand, React Router et intégration WebSocket.

## Fonctionnalités principales

- ⚡️ Vite + React 18+
- 🎨 Tailwind CSS pour une UI moderne et responsive
- 🔀 React Router pour la navigation
- 🗃️ Zustand pour la gestion d’état globale
- 🔌 API REST (Axios) et WebSocket natif
- 📱 Responsive (mobile/tablette/desktop)
- 🧩 Structure modulaire : components, pages, services, hooks

---

## Installation

1. **Cloner le repo**

```bash
git clone <repo-url>
cd girr-react
```

2. **Configurer l’environnement**

Copier `.env.example` en `.env` et adapter les URLs si besoin :

```bash
cp .env.example .env
```

- `VITE_API_BASE_URL=http://localhost:3000/api`
- `VITE_WS_URL=ws://localhost:3000/ws`

3. **Installer les dépendances**

```bash
npm install
```

4. **Démarrer en développement**

```bash
npm run dev
```

---

## Structure du projet

```
src/
  components/
    common/        # Card, Header, Loader, NavBar…
    features/      # ShowSubjects, etc.
  hooks/           # useWebSocket, hooks personnalisés
  pages/           # HomePage, ShowPage, ConfigPage…
  services/        # api.ts (Axios), websocket.ts
  store/           # useShowStore.ts (Zustand)
  App.tsx          # Routing principal
```

---

## Migration Vue 2 → React

| Vue 2 (Options API)         | React 18 + Hooks/Zustand         |
|----------------------------|----------------------------------|
| `data() { ... }`           | `useState()`/Zustand store        |
| `computed: { ... }`        | `useMemo()`/Zustand selectors     |
| `methods: { ... }`         | Fonctions ou hooks                |
| `mounted()`                | `useEffect(() => ..., [])`        |
| `v-for`                    | `{array.map(...)}`                |
| `v-if`                     | `{condition && ...}`              |
| `props: [...]`             | Props de fonction                 |
| `emit`                     | Props callback                    |
| `vue-router`               | `react-router-dom`                |
| `pinia`                    | `zustand`                         |
| `axios`                    | `axios` (identique)               |
| `WebSocket natif`          | `WebSocket` natif + hooks         |

---

## Liaison avec le backend (API & WebSocket)

### API REST
- Configuration via `.env` :
  - `VITE_API_BASE_URL` (ex: http://localhost:3000/api)
- Les appels API sont centralisés dans `src/services/api.ts`.
- Exemple d’utilisation :

```ts
import { getShows, getShowById } from "@/services/api";

// Pour récupérer la liste des shows
const shows = await getShows();

// Pour récupérer le détail d’un show
const show = await getShowById("idShow");
```

### WebSocket
- Configuration via `.env` :
  - `VITE_WS_URL` (ex: ws://localhost:3000/ws)
- Gestion centralisée dans `src/services/websocket.ts` et le hook `useWebSocket`.
- Exemple d’utilisation :

```ts
import { connectWebSocket, onWebSocketMessage, sendWebSocketMessage } from "@/services/websocket";

// Connexion
const ws = connectWebSocket(import.meta.env.VITE_WS_URL);

// Ecouter les messages
const unsubscribe = onWebSocketMessage((data) => {
  console.log("Message reçu:", data);
});

// Envoyer un message
sendWebSocketMessage({ type: "ping" });
```

---

## Intégration API & WebSocket

- **API REST** : toutes les requêtes passent par `/src/services/api.ts` (Axios, baseURL configurable)
- **WebSocket** : connexion unique via `/src/services/websocket.ts` + hook React `/src/hooks/useWebSocket.ts`
- **Exemple** : HomePage se met à jour en temps réel sur réception d’un message `show_updated` via WebSocket

---

## Responsivité

- UI 100% responsive grâce à Tailwind CSS
- Conteneurs adaptatifs (`max-w-2xl mx-auto p-4`, etc.)
- Testé sur mobile, tablette, desktop

---

## Développement

- **Ajouter une page** : créer un fichier dans `src/pages/`, ajouter une route dans `App.tsx`
- **Ajouter un composant** : placer dans `src/components/common` ou `features` selon le cas
- **Ajouter un état global** : éditer `src/store/useShowStore.ts`
- **Brancher un flux temps réel** : utiliser `useWebSocket` dans le composant cible

---

## Bonnes pratiques

- Ne jamais exposer de secrets dans le frontend
- Préférer Zustand pour les états globaux simples
- Utiliser Tailwind pour la cohérence visuelle
- Respecter la structure modulaire

---

## Lancer les tests (si présents)

```bash
npm run test
```

---

## Déploiement

Construire pour la prod :

```bash
npm run build
```

---

## Contact & Support

Pour toute question ou bug, ouvrir une issue ou contacter l’équipe GIRR.
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
