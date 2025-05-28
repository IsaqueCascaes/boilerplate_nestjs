# 🚀 MPro Backend Boilerplate

Esta API tem como objetivo fornecer um sistema para o gerenciamento de **produtos**, **empresas** e seus respectivos **responsáveis**. A aplicação permite criar, listar, buscar, atualizar e excluir dados de forma estruturada e segura, servindo como base para sistemas administrativos.
## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/IsaqueCascaes/boilerplate_nestjs.git
   cd MY-PROJECT
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## ⚙️ Configuração

1. Renomeie `.env.example` para `.env` e configure as variáveis:

```env
# Configuração MySQL
BOILERPLATE_PORT=3000
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=my_project_db
MYSQL_USER=my_project_user
MYSQL_PASSWORD=my_secure_password

DATABASE_URL="mysql://my_project_user:my_secure_password@127.0.0.1:3306/my_project_db"

# Chave global da API
GLOBAL_API_KEY=f05a7ba8cced77a36b5da9a2b3de03d716792c6303ece3131853ca89d91891e5
```

## ▶️ Rodando a Aplicação

1. Suba o ambiente com Docker:
   ```bash
   docker-compose up -d
   ```

2. Rode as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```

3. Inicie o projeto:
   ```bash
   npm run start:dev
   ```

4. Acesse a API:
   - http://localhost:3000

## 📌 Endpoints Principais

- **Responsáveis**
  - `POST /responsibles` — Criação
  - `GET /responsibles` — Listagem com filtros
  - `GET /responsibles/:id` — Buscar por ID
  - `PUT /responsibles/:id` — Atualizar
  - `DELETE /responsibles/:id` — Deletar

- **Empresas**
  - `POST /companies` — Criação
  - `GET /companies` — Listagem com filtros
  - `GET /companies/:id` — Buscar por ID
  - `PUT /companies/:id` — Atualizar
  - `DELETE /companies/:id` — Deletar

- **Produtos**
  - `POST /products` — Criação
  - `GET /products` — Buscar todos
  - `GET /products/search` — Filtros por nome e empresa
  - `GET /products/:id` — Buscar por ID
  - `PUT /products/:id` — Atualizar
  - `DELETE /products/:id` — Deletar

## 📁 Estrutura do Projeto

```plaintext
src/
├── application/
│   └── repository/         # Interfaces abstratas (Ports)
├── domain/
│   ├── core/               # Entidade base e ID único
│   ├── dto/                # DTOs de entrada e saída
│   ├── entity/             # Entidades do domínio
│   └── use-case/           # Regras de negócio
├── infrastructure/
│   ├── configuration/      # Guards, Decorators, etc
│   ├── database/           # Conexão e config do Prisma
│   ├── mappers/            # Mapeadores Entity <-> Model
│   └── modules/            # Controller, Service, Repository por módulo
├── main.ts                 # Entry point da aplicação
```

## 🔐 Segurança

- Todas as rotas da API exigem uma **chave de API global** via `x-api-key` no header.
- Um **Guard global** (`ApiKeyGuard`) verifica a chave com base no `.env`.

Exemplo de uso via `curl`:

```bash
curl -H "x-api-key: f05a7ba8cced77a36b5da9a2b3de03d716792c6303ece3131853ca89d91891e5" http://localhost:3000/products
```

## 🧪 Tecnologias Utilizadas

- **NestJS** — Framework Node.js modular
- **Prisma ORM** — Mapeamento objeto-relacional com Typescript
- **MySQL** — Banco de dados relacional
- **Docker** — Containerização de ambientes
- **Swagger** — Documentação automática da API

## ✅ Boas Práticas Implementadas

- Projeto construído com **NestJS**, **Prisma** e **MySQL**
- Estruturado com base em **DDD (Domain-Driven Design)** e **Clean Architecture**
- Separação clara entre camadas: **Application**, **Domain** e **Infrastructure**
- Uso de **Entidades imutáveis** baseadas em `Entity` + `UniqueEntityID`
- **DTOs e OutputDTOs padronizados** para entrada e saída de dados
- **Loggers em todos os UseCases** para rastreabilidade
- **Decorators customizados** para documentação Swagger
- **Guards globais** para validação via `x-api-key`

## 📘 Documentação da API

Acesse a documentação interativa gerada automaticamente em:

```
http://localhost:3000/api
```

## 🚧 Melhorias Futuras

- Implementação de testes unitários e e2e
- Paginação e ordenação padrão nos endpoints
- 
