# Objective Front-End Challenge

Este repositório faz parte do desafio de desenvolvimento web da objective.

A aplicação desenvolvida também pode ser acessada [por aqui!](https://objective-frontend-challenge.vercel.app).

## Instruções de Uso

### 1. Clone o repositório

```bash
git clone https://github.com/giu7d/objective-frontend-challenge.git objective-frontend-challenge

cd objective-frontend-challenge
```

### 2. Instale as dependências do projeto

```bash
# yarn
yarn
# npm
npm install
```

### 3. Configure as variáveis de ambiente

Primeiro crie o arquivo `.env`

```bash
cp .env.example .env
```

Em seguida, adicione as chaves necessárias para acessar a API da Marvel

```
REACT_APP_MARVEL_API_URL = https://gateway.marvel.com/
REACT_APP_MARVEL_PUBLIC_KEY = insira-sua-chave-publica
REACT_APP_MARVEL_PRIVATE_KEY = insira-sua-chave-privada
```

### 4. Inicie a aplicação

```bash
# yarn
yarn start
# npm
npm start
```

### 5. Pronto!

A aplicação estará disponível em http://localhost:3000/
