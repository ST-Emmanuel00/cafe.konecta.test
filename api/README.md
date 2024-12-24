<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://th.bing.com/th/id/R.5b2a116dc230e944b25b3a67ea408c76?rik=DgNYqSHxx6%2bmdw&pid=ImgRaw&r=0" width="120" alt="Nest Logo" /></a>
</p>

## Stack

- Language: Javascript
- Paradigm: functional
- Framework: Express.js
- Database: PostgreSQL
- ORM: Prisma

## Description

[Postman](https://documenter.getpostman.com/view/30636207/2sAYJ3FMhd) documentation and use case.

[Notion resourses](https://laced-ball-e4b.notion.site/1642551f881b80b88267f320c43ef434?v=ad0327dcdc1e4a11b3b9475d3713eefe) information about the project as env info.


## Clone repository

```bash
# Step 1: clone repository *
$ git clone https://github.com/ST-Emmanuel00/cafe.konecta.test.git

# Step 2: Api directory *
$ cd api

# Step 3: Install dependencies *
$ npm install

# Step 4: Search env files in notion resourse
# Open "notion resourses" in description seccion 
```
### Option 1: Env Production
```bash
# Step 5: Fill data base (optional)
$ npm run seed

# Step 6: Run server
$ npm run start
```

### Option 2: Env development

```bash
# Step 5: Up docker data base container
$ docker compose up development-db

# Step 6: Migrate db * 
$ npm run migrate:dev

# Step 7: Fill data base (optional)
$ npm run seed:dev

# Step 8: Run server
$ npm run dev
```

### Final step
```bash
# Test in postman link or use web app
```


## Compile and run the project

```bash
# watch mode
$ npm run dev

# producction mode
$ npm run start
```



