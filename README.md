### HMR-BACKEND

One server for hot module replacement and backend api. There are two developing folders: client and server. Webpack hot middleware watches on changes from folder `client` and updates the page. Also there is watcher on all changes, made in folder `server`, which cleans require cache and send action to client for refreshing page.

## How to use

clone locally, run `npm install` and `npm run dev`.
