# React Native CRUD de Usuários
 ## Descrição do projeto

Este projeto consiste em um aplicativo mobile desenvolvido com **React Native** e **Expo** para gerenciamento de usuários. A aplicação permite realizar operações básicas de um CRUD (Create, Read, Update, Delete), possibilitando listar usuários, adicionar novos registros, editar informações existentes e excluir usuários.

O objetivo principal é demonstrar a integração entre um aplicativo mobile e uma API simulada, além de aplicar conceitos fundamentais de desenvolvimento com React Native, como componentes, estados, navegação e consumo de API.

## Tecnologias Utilizadas
* React Native – Desenvolvimento de aplicativos mobile
* Expo – Ferramenta para facilitar o desenvolvimento e execução
* JSON Server – Simulação de uma API REST local
* Cloudflare Tunnel – Exposição da API local para acesso externo
* JavaScript – Linguagem principal do projeto

---

## Passo a Passo para Execução

Para rodar o projeto, você precisará de três terminais abertos simultaneamente.

### 1. Preparação do Projeto
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/PedroHGMelim/atv_CRUD_PAM.git
cd .\atv_CRUD_PAM\
cd .\atv_PAM\
cd .\frontend\
cd .\MeuCrud\
npm i
```
### 2. Banco de Dados (API Local)
Crie um cmd e entre na pasta backend pelo Terminal:
```bash
cd atv_CRUD_PAM
cd atv_PAM
cd backend
```
Instale globalmente o json-server na pasta backend:
```bash
npm install -g json-server
```
Inicie o servidor que gerencia o arquivo db.json pelo cmd:
```bash
npx json-server --watch database.json --port 3000
```
### 3. Exposição da API (Tunnel)
Como o app roda no celular, é preciso expor a porta 3000 para a internet, por isso usaremos o Cloudflare Tunnel para isso:
Crie outro cmd pelo terminal e baixe o cloudflared globalmente:
```bash
npm install -g cloudflared
```
Execute esse comando para disponibilizar o nosso backend (porta 3000) para a internet:
```bash
npx cloudflared tunnel --url http://localhost:3000
```
Nota: Copie a URL https gerada pelo Cloudflare Tunnel (ex: https://random.trycloudflare.com/users) e adicione a URL entre as aspas (" ") no arquivo configApi.js:
```bash
atv_PAM/frontend/MeuCrud/src/servers/configApi.js
```

### 4. Iniciar o Aplicativo
Agora, crie outro cmd pelo terminal e execute o Expo:

```bash
cd atv_CRUD_PAM
cd atv_PAM
cd frontend
cd MeuCrud
npx expo start
```
Escaneie o QR Code usando o app Expo Go no seu celular caso não funcione verifique sua versão do expo go no celular ou use pelo web apertando w no cmd que você utilizou para executar o expo, caso preferir uma interface de celular baixe a extensão MobileView no Visual Studio Code, clique no ícone de celular que aparecer na sua barra lateral, escolha um modelo e copie o link da web no prompt que aparece na parte de cima da sua tela.

### 5. Vídeo Demonstração
Se desejar apenas ver o vídeo demonstração, segue o link do Youtube:

```bash
Em produção
```
