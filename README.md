# GraphQL-Yoga boilerplate with prisma-client 🚀

## Description
This Repo exists for my own purpose of starting a fast graphql project through docker.
If you somehow want to use this you can use the following steps to get started.

## 🔥 Getting Started 🔥
for every following step you need to have these done in the first place:
- install docker
- clone this repo

### Running the containers 🐳
1. `cd <cloned repo>`
2. `docker-compose up` to run the docker containers

### Modifying Graphql-Yoga Server 🙏
1. `cd api` - api stands for the officially exposed Graphql-Yoga server for client side use
2. in here you'll find a typical npm project structure, so the modifieable Graphql-Yoga files are inside `/api/src`
3. Have fun coding 🙌

### Modifying Prisma Service
1. `cd prisma` - from here you can run `prisma deploy` to deploy your prisma service to the docker container (WARNING: docker container with prisma must be up for this), `prisma generate` to generate a new instance of prisma-client (recommended if you modified the datamodel.prisma in /prisma) or `prisma admin` to open the prisma admin tool (WARNING: docker container with prisma must be up for this).

## Sidenotes
 - `npm run dev` and `npm run playground` won't work very well since Graphql-Yoga needs a working prisma instance.
 - a prisma secret is not provided in the prisma.yml. However, you can easily add one via: `secret: <PRISMA_SECRET>` under `datamodel: ...` for example (don't forget to also provide your prisma secret to the Prisma-client instance in the code).