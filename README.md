# 🧠 Memoteca Angular

## 📌 Sobre o projeto

A Memoteca é uma aplicação web desenvolvida em Angular para cadastro, listagem e gerenciamento de pensamentos e citações.

O projeto simula um CRUD completo, permitindo criar, visualizar, editar e excluir pensamentos, utilizando boas práticas de desenvolvimento frontend.


## 🖼️ Preview

<img width="1897" height="1199" alt="Captura de tela 2026-04-05 125459" src="https://github.com/user-attachments/assets/9b9ecb8d-5018-4c2f-a367-8696fa9d3091" />


## 🛠️ Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Supabase (PostgreSQL + API REST)


## ⚙️ Funcionalidades

- ➕ Cadastro de pensamentos
- 📋 Listagem de pensamentos
- ✏️ Edição de conteúdo
- ❌ Exclusão de registros
- 🔍 Organização de dados em interface amigável


## 🧠 Arquitetura

- Estrutura baseada em componentes Angular
- Separação de responsabilidades (components, services, models)
- Utilização de serviços para comunicação com API
- Injeção de dependência (Dependency Injection)


## 🔗 Integração com API

A aplicação consome a API REST do Supabase (PostgREST). A tabela `pensamentos` é criada pela migração em `supabase/migrations/`, e a URL e a chave pública (anon/publishable) ficam em `src/environments/`.

⚠️ Importante:  
Não é necessário rodar nenhum backend local. A tabela tem acesso público de leitura e escrita (RLS com políticas abertas), pois o app não possui login.


## ▶️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/pereiraferreirarafael/Memoteca_ANGULAR

# Entre na pasta
cd Memoteca_ANGULAR

# Instale as dependências
npm install

# Rode o projeto
ng serve
