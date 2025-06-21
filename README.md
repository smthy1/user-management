# 🌎 User Management

A user management API built with Express and PostgreSQL, fully package with Docker. My goal with this project is learn to develop in MVC patterns. 

## 📦 Features

- 📝 Register user

- 🔐 User login

- ✏️ Update username

- 🔄 Change password

- 🗑️ Delete user

- 🔒 Password encryption with bcrypt

- 🚫 Rate limiting to prevent brute-force

- 🧪 Format validation of username, password and email fields

## ⚙️ Technologies used

- Node.js

- Express.js

- PostgreSQL

- Docker

- JWT (jsonwebtoken)

- bcrypt

- express-rate-limit

- dotenv

- validator

## 📜 Requirements

- Docker installed - [Download](https://www.docker.com)
- Postman or any other API testing tool (optional) - [Download](https://www.postman.com/downloads/)

## 🚀 How to run

1. Clone this repository:

```bash
   git clone https://github.com/smthy1/user-management.git
   cd user-management
```

2. Build and start the containers:

```bash
    docker-compose up --build -d
```

Wait a few seconds for Docker build and start the containers, then you're ready to test the app. - Base URL: http://localhost:3000/users

3. Available endpoints:

- POST /register
- POST /login
- POST /update-username
- POST /update-password
- DELETE /delete-user

## ⚠️ Additional notes

- You can explore the database visually, if you want. Access pgAdmin at http://localhost:5050 | Login: admin@admin.com | Password: admin | Password to connect in the database: postgresdb

- Base URL: http://localhost:3000/users

- To test correctly, API routes require body params:

  - POST /register – { "username": "...", "email":"...", "password": "..." }
  
  - POST /login – { "username":"...", "password":"..."}

  - PATCH /update-username – { "currentUsername":"...", "newUsername":"...", "password":"..." }

  - PATCH /update-password – { "currentPassword":"...", "newPassword":"...", "email":"..." }

  - DELETE /delete-user – { "email":"...", "password":"..." }

- To test the routes PATCH and DELETE, you need to login, copy the token and select Authorization → Bearer Token and paste the token. Then you can test the route.

## 🧠 What I learned

- 🏛️ Modularization based on MVC the pattern

- ✅ API creation with Express.js

- 🔐 Encrypting passwords with bcrypt

- 🛡️ Rate limiting with express-rate-limit

- 🤖 Implement format validation of username, password and email fields

- 📦 Dockerizing applications

- ⚙️ Managing environment variables (.env)

- 🔗 Container communication

## 🤝 Contributing

Feel free to open issues or submit pull requests with suggestions or improvements!

# ✉️ Contact:

Developed by [smthy1](https://github.com/smthy1). Contacte me via [email](mailto:luiz.smith.br@gmail.com)

# 🇧🇷 API de Usuários

Uma API de gerenciamento de usuários criada com Express e PostgreSQL, totalmente empacotados com Docker. Meu objetivo com esse projeto é aprender a desenvolver nos padrões MVC.

## 📦 Funcionalidades

- 📝 Registrar usuário

- 🔐 Login de usuário

- ✏️ Mudar nome de usuário

- 🔄 Alterar senha

- 🗑️ Excluir conta

- 🔒 Encriptação de senha com bcrypt

- 🚫 Prevenção de brute force com Express rate limit

- 🧪 Validação dos formatos dos campos de usuário, senha e e-mail

## ⚙️ Tecnologias utilizadas

- Node.js

- Express.js

- PostgreSQL

- Docker

- JWT (jsonwebtoken)

- bcrypt

- express-rate-limit

- dotenv

- validator

## 📜 Requisitos

- Ter Docker instalado - [Download](https://www.docker.com)
- Postman ou qualquer outra ferramenta pra testar as rotas da API (opcional) - [Download](https://www.postman.com/downloads/)

## 🚀 Como executar

1. Clone este repositório:

```bash
   git clone https://github.com/smthy1/user-management.git
   cd user-management
```

2. Gere os containers:

```bash
   docker-compose up --build -d
```

Aguarde alguns segundos até o Docker gerar e iniciar os containers, depois disso você já pode testar a API

- URL Base: http://localhost:3000/users

3. Endpoints disponíveis:

- POST /register
- POST /login
- POST /update-username
- POST /update-password
- DELETE /delete-user

## ⚠️ Observações

- Você pode explorar a interface do banco, caso for do seu interesse. Access pgAdmin at http://localhost:5050 | Login: admin@gmail.com | Senha: admin | Senha pra conectar ao banco: postgresdb

- URL base: http://localhost:3000/user


- Pra testar corretamente, as rotas da API precisam body params:

  - POST /register – { "username": "...", "email":"...", "password": "..." }
  
  - POST /login – { "username":"...", "password":"..."}

  - POST /update-username – { "currentUsername":"...", "newUsername":"...", "password":"..." }

  - POST /update-password – { "currentPassword":"...", "newPassword":"...", "email":"..." }

  - DELETE /delete-user – { "email":"...", "password":"..." }

- Para testar as rotas PATCH e DELETE, você precisa fazer login, copiar o token, selecionar Authorization → Bearer Token e colar o token. Depois, você poderá testar a rota.

## 🧠 O que aprendi

- 🏛️ Modularização baseada no padrão MVC

- ✅ Criação de API com Express.js

- 🔐 Encriptar senhas com bcrypt

- 🛡️ Prevenção de brute force com express-rate-limit

- 🤖 Validação dos formatos dos campos de usuário, senha e e-mail com validator

- 📦 Empacotar aplicações com Docker

- ⚙️ Gerenciamento de variáveis de ambiente (.env)

- 🔗 Comunição entre os containers

## 🤝 Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões e melhorias!

# ✉️ Contato

Desenvolvido por [smthy1](https://github.com/smthy1). Me contate via [email](mailto:luiz.smith.br@gmail.com)
