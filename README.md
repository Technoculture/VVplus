# VV+

- [Figma file for UI Concept](https://www.figma.com/file/P5ysFXqNFwINuyKiecaJJo/VVplusDesigner?node-id=0%3A1)
- [SQL Schema](https://drawsql.app/teams/technoculture/diagrams/vvplus)

## TODO

- [x] Setup tailwind in apps/designer
- [x] Add a simple babylon example to apps/designer
- [x] Add planetscale(or maybe a Postgres provider) DB to apps/designer-server
- [ ] Add prisma as an ORM
- [x] Add a simple schema for a house
- [ ] Add some mock data
- [x] Choose a file storage system
- [ ] Integrate file storage into the DB
- [x] Add a simple layout to the UI
- [x] Make the layout reponsive
- [ ] Add a seperate package to estimate estimated cost based on chosen configuration

## Getting Started

```sh
# Start from the root directory of the repo
cd vvplus

# This repo uses pnpm instead of npm or yarn
pnpm installhooks
# important to run the above script to set up husky

pnpm build
# This builds the entire monorepo
```

> ⚠️ Do not build individual apps seperately, this may cause various problems.

> ⚠️ Use Chrome for testing purposes. The 3D rendering stack used here, may produce slightly different results on different browsers.

Any further issues regarding the monrepo organization: Google turborepo
