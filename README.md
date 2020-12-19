# Dix Api

Está api se trata do back-end responsável por gerenciar todo a logica e fluxo do aplicativo Dix. Desde
controle de usuários até o login do usuário do aplicativo.

## Sumário

- [Configuração](#configuração)
- [Migrations](#migrations)
- [Startar a aplicação](#startar-a-aplicação)
- [Rodar as filas](#rodar-as-filas)

### Configuração

Caso não possuia o cli do adonis instalado em sua máquina, rode o comando

```console
npm i -g @adonisjs/cli
```

Depois de clonar o projeto acesse o terminal estando na pasta raiz de sua aplicação

```console
cp .env.example .env
```

Abra o arquivo .env e preencha as variavéis de ambiente

Exemplo

```
HOST=localhost
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
FRONT_URL=http://localhost:3000
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false

APP_KEY=l6EsrWeHDyKY7s0HMBHKtfb3VOiMHtqk

DB_CONNECTION=pg
DB_HOST=database
DB_PORT=5432
DB_USER=root
DB_PASSWORD=secret
DB_DATABASE=dix_database

HASH_DRIVER=bcrypt

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
MAIL_USERNAME=00648c30921b3fb
MAIL_PASSWORD=79f35840a7d92b8

REDIS_CONNECTION=localhost
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=secret

KUE_CONNECTION=kue
```

Não esqueça de inserir os dados do mail trap para disparo de e-mail.
No console novamente rode o comando.

```console
docker-compose up -d
```

Obs: É necessário ter o docker instalado, ou instance de um banco postgres e redis instalado na máquina.

### Migrations

Para rodar as migrations do banco de dados rode o comando.

```console
adonis migration:run
```

### Startar a aplicação

No console rode o comando.

```console
adonis serve --dev
```

### Rodar as filas

No console rode o comando.

```console
adonis kue:listen
```
