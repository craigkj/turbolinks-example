Simple turbolinks (https://github.com/turbolinks/turbolinks) example in a nodejs SSR app.

Overview
---

- Uses rollup to create a simple turbolinks js bundle.
- Creates an express server with three html routes and that serves static assets (the gzipped bundle).

Default turbolinks behaviour then makes the app act in a SPA manner (no server reloads - html fetched by ajax and merged into current page). 

To be expanded with more comprehensive examples... probably.

Get it running!
---

```
npm install
npm run build
npm start
```
