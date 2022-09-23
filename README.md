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

> **Note**: This repo uses `pnpm` instead of `npm` or `yarn`

```sh
# 1. Clone this repository

# 2. Start from the root directory of the repo
cd vvplus

# 3. Install the dependencies
pnpm install

# 4. Install Husky Hooks
pnpm installhooks

# 5. 
pnpm build
```

📝 [MUST READ](./wiki/Guidelines-for-Contributing) before contributing to this repository.

Any further issues regarding the monorepo aspect: Look up turborepo
