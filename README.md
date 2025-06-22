# 🌎 User and Task Management

A complete API for user and task management built with Express and PostgreSQL, fully containerized with Docker. This project was developed to help me learn and solidify backend development patterns (MVC) and JWT-based authentication. 

## 📦 Features

🧑‍💼 User Features
   
   - 📝 Register user

   - 🔐 User login

   - ✏️ Update username

   - 🔄 Change password

   - 🗑️ Delete user

   - 🧐 JWT validation

   - 🔒 Password encryption with bcrypt

   - 🚫 Rate limiting to prevent brute-force

   - 🧪 Format validation of username, password and email fields

✅ Task Features

   - 📌 Create tasks

   - 🔁 Update task status (completed or not)

   - 🗑️ Delete user task
   
   - 📄 List all tasks of the authenticated user
   
   - 🔐Each user can only manage their own tasks

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

Wait a few seconds for Docker build and start the containers, then you're ready to test the app.

3. Available endpoints:

   User endpoints:
      - POST /users/register
      - POST /users/login
      - POST /users/update-username
      - POST /users/update-password
      - DELETE /users/delete-user

   Task endpoints:
      - POST /tasks/task  —  Create new task
      - GET /tasks/tasks  —  Get all tasks of the logged-in user
      - PATCH /tasks/task  — Change task status (completed or not)
      - DELETE /tasks/task  — Delete a task

## ⚠️ Additional notes

- You can explore the database visually, if you want. Access pgAdmin at http://localhost:5050 | Login: admin@admin.com | Password: admin | Password to connect in the database: postgresdb

- Base URL: http://localhost:3000

- To test correctly, API routes require body params:
   - Users routes:

      - POST /register – { "username": "...", "email":"...", "password": "..." }
      
      - POST /login – { "username":"...", "password":"..."}

      - PATCH /username – { "currentUsername":"...", "newUsername":"...", "password":"..." }

      - PATCH /password – { "currentPassword":"...", "newPassword":"...", "email":"..." }

      - DELETE /user – { "email":"...", "password":"..." }

   - To test PATCH and DELETE routes, you need to login, copy the token and select Authorization → Bearer Token and paste the token. Then you can test the route.
   
   - Tasks routes:
      - POST /tasks/task  —  { "description": "..." }
      
      - GET /tasks/tasks  —  Just the token
      
      - PATCH /tasks/task  — { "description": "..." }
      
      - DELETE /tasks/task  — { "description": "..." }
      
   - To test these routes, you need to login, copy the token and select Authorization → Bearer Token and paste the token. Then you can test the route.

## 🧠 What I learned

- 🏛️ Modularization based on MVC the pattern

- ✅ API creation with Express.js

- 🔐 Encrypting passwords with bcrypt

- 🛡️ Rate limiting with express-rate-limit

- 🤖 Implement format validation of username, password and email fields

- ✍️ Generate JWT validation tokens in login route

- 🧐 Verify tokens by middlewares

- 📦 Dockerizing applications

- ⚙️ Managing environment variables (.env)

- 🔗 Container connection

- 📁 CRUD operations for user-specific tasks

- 🔐 Protected routes with access control (each user manages only their data)

## 🤝 Contributing

Feel free to open issues or submit pull requests with suggestions or improvements!

# ✉️ Contact:

Developed by [smthy1](https://github.com/smthy1). Contacte me via [email](mailto:luiz.smith.br@gmail.com)

# 🇧🇷 Gerenciamento de Tarefas e Usuários

Uma API completa de gerenciamento de usuários e tarefas, desenvolvida com Express e PostgreSQL, totalmente empacotados com Docker. Este projeto foi desenvolvido para me ajudar a aprender e consolidar padrões de desenvolvimento backend (MVC) e autenticação JWT.

## 📦 Funcionalidades

🧑‍💼 Features de usuário:
   - 📝 Registrar usuário

   - 🔐 Login de usuário

   - ✏️ Mudar nome de usuário

   - 🔄 Alterar senha

   - 🗑️ Excluir conta

   - 🧐 Validação JWT

   - 🔒 Encriptação de senha com bcrypt

   - 🚫 Prevenção de brute force com Express rate limit

   - 🧪 Validação dos formatos dos campos de usuário, senha e e-mail

✅ Task Features

   - 📌 Criar tarefas

   - 🔁 Alterar o status da tarefa (concluída ou não)

   - 🗑️ Deletar tarefa

   - 📄 Listar todas as tarefas do usuário logado

   - 🔐 Cada usuário só pode gerenciar suas próprias tarefas

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


3. Endpoints disponíveis:

   Endpoints do usuário:
      - POST /users/register
      - POST /users/login
      - PATCH /users/username
      - PATCH /users/password
      - DELETE /users/user

   Endpoints de tarefas:
      - POST /tasks/task  —  Criar tarefas
      - GET /tasks/tasks  —  Lista todas as tarefas do usuário logado
      - PATCH /tasks/task  — Altera o status da tarefa (concluída ou não)
      - DELETE /tasks/task  — Excluí a tarefa

## ⚠️ Observações

- Você pode explorar a interface do banco, caso for do seu interesse. Access pgAdmin at http://localhost:5050 | Login: admin@gmail.com | Senha: admin | Senha pra conectar ao banco: postgresdb

- URL base: http://localhost:3000


- Pra testar corretamente, as rotas da API precisam body params:
   
   Rotas do usuário:
      
      - POST /users/register – { "username": "...", "email":"...", "password": "..." }
      
      - POST /users/login – { "username":"...", "password":"..."}

      - PATCH /users/username – { "currentUsername":"...", "newUsername":"...", "password":"..." }

      - PATCH /users/password – { "currentPassword":"...", "newPassword":"...", "email":"..." }

      - DELETE /users/delete-user – { "email":"...", "password":"..." }

   - Para testar as rotas PATCH e DELETE, você precisará fazer login, copiar o token, selecionar Authorization → Bearer Token e colar o token. Depois disso você poderá testar a rota.
   
   Rotas das tarefas:
      
      - POST /tasks/task  —  { "description": "..." }
      
      - GET /tasks/tasks  —  Apenas o token
      
      - PATCH /tasks/task  — { "description": "..." }
      
      - DELETE /tasks/task  — { "description": "..." }
      
   - Para testar estas rotas você precisará fazer login, copiar o token, selecionar Authorization → Bearer Token e colar o token. Depois disso você pode testar a rota.

## 🧠 O que aprendi

- 🏛️ Modularização baseada no padrão MVC

- ✅ Criação de API com Express.js

- 🔐 Encriptar senhas com bcrypt

- 🛡️ Prevenção de brute force com express-rate-limit

- 🤖 Validação dos formatos dos campos de usuário, senha e e-mail com validator

- ✍️ Gerar tokens de validação JWT na rota de login

- 🧐 Verificar tokens através de middlewares

- 📦 Empacotar aplicações com Docker

- ⚙️ Gerenciamento de variáveis de ambiente (.env)

- 🔗 Comunição entre os containers

- 📁 Operações CRUD para tarefas específicas do usuário

- 🔐 Rotas protegidas com controle de acesso (cada usuário gerencia apenas seus dados)

## 🤝 Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões e melhorias!

# ✉️ Contato

Desenvolvido por [smthy1](https://github.com/smthy1). Me contate via [email](mailto:luiz.smith.br@gmail.com)
