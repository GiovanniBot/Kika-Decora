
# Kika Decora Web App

Bem-vindo ao Kika Decora Web App. Esta Web App permite aos clientes explorar e descobrir vários temas de festa que tornarão sua festa especial!

## Índice

-   [Recursos](#recursos)
-   [Screenshots](#screenshots)
    -   [Smartphone](#smartphone)
    -   [Desktop](#desktop)
    -   [Tablet](#tablet)
-   [Estrutura do Repositório](#Repositório)
    -   [Pasta "api"](#Pasta "api")
    -   [Pasta "client"](#Pasta "client")
-   [Como Instalar e Executar](#Executar)
    -   [Para a API (Node.js):](#API)
    -   [Para o Client (React.js/Next.js):](#Client)
-   [Como Funcionam Juntos](#Juntos)
-   [Acessar Sem Instalação Local](#Local)

## Recursos

-   Navegar por uma vasta variedade de temas de festa.
-   Visualizar detalhes de cada tema, incluindo imagens dos materiais, descrições e medidas.
-   Selecionar e filtrar temas com base em diferentes categorias.
-   Contatar por API WhatsApp automaticamente com o tema escolhido.
-   Google Maps integrado para facilitar a localização.
-   Saber mais sobre a empresa e informações de contato.

## Screenshots

### Smartphone

<p align="center">
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/202dd061-e4f2-4fc9-a79d-fc9805d1e89a" alt="Mobile screeshot" width="250" />
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/beeffe89-3833-4642-b237-dd60c191193b" alt="Mobile screeshot" width="250" />
</p>

### Desktop

<p align="center">
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/e3c781b7-7cda-4609-9a07-4481a3b04b42" alt="Mobile screeshot" width="500" />
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/6af96968-0f0d-4e16-8bf2-01f1d859235e" alt="Mobile screeshot" width="500" />
</p>

### Tablet

<p align="center">
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/d6e2de72-e929-409d-bed9-7168078d9cb2" alt="Mobile screeshot" width="400" />
  <img src="https://github.com/GiovanniBot/kika-decor/assets/69661645/ec1fc34a-c10a-442b-8120-3bc40a8063b3" alt="Mobile screeshot" width="400" />
</p>

## Estrutura do Repositório

Este repositório está organizado em duas pastas principais:

### Pasta "api"

A pasta "api" contém o código da API Node.js. Este é o backend da sua aplicação, responsável por fornecer os dados e lógica do servidor. Alguns pontos-chave:

-   Aqui, você encontra endpoints da API que servem dados para o aplicativo cliente.
-   Armazenameto ou request de dados e qualquer outra operação relacionada ao servidor podem ser encontradas aqui. Envie um GET Request para localhost:3003/api/ para ver todos os endpoints disponíveis.
-   Esta parte do projeto é escrita em Node.js, Express.js, Mongoose.

### Pasta "client"

A pasta "client" contém o código do seu aplicativo React.js/Next.js. Este é o frontend da sua aplicação, onde os clientes interagem com a aplicação. Algumas informações importantes:

-   Aqui, você pode encontrar todos os componentes React, páginas Next.js, estilos, rotas e a lógica do cliente.
-   O aplicativo React é responsável por solicitar dados à API e exibi-los aos utilizadores de uma forma amigável.
-   Utiliza-se Next.js para renderização do lado do servidor (SSR) para otimizar a experiência do utilizador e melhorar o SEO do seu aplicativo.

## Como Instalar e Executar

Aqui estão as etapas básicas para instalar e executar os dois componentes (API e cliente) deste projeto:

### Para a API (Node.js):

1.  Navegue para a pasta "api" no repositório: `cd api`.
2.  Instale as dependências Node.js: `npm install`.
3.  Inicie o servidor da API: `npm start`.
4.  O servidor da API estará em execução em um endereço específico (por exemplo, `http://localhost:3003`) e estará pronto para receber solicitações do cliente.

### Para o Client (React.js/Next.js):

1.  Navegue para a pasta "client" no repositório: `cd client`.
2.  Instale as dependências do Node.js: `npm install`.
3.  Inicie o aplicativo cliente: `npm run dev`.
4.  O aplicativo estará disponível em um servidor de desenvolvimento (por exemplo, `http://localhost:3000`) e poderá ser acessado por qualquer navegador.

## Como Funcionam Juntos

A API e o cliente funcionam juntos através de solicitações HTTPS. O aplicativo Client faz solicitações à API para buscar dados ou enviar informações para o servidor. A API processa essas solicitações, realiza operações no servidor e retorna os resultados ao Client.

O Client e a API podem ser executados separadamente, mas geralmente são implantados juntos em um servidor web para fornecer a experiência completa do utilizador. Certifique-se de configurar as requests do Client para apontar para a URL correta da API (por exemplo, `http://localhost:3000/api/`) durante o desenvolvimento e atualizar essa URL ao implantar em produção.

Esta estrutura de "api" e "client" ajuda a manter a separação de responsabilidades entre o backend e o frontend, permitindo uma manutenção mais fácil e escalabilidade da sua aplicação.

## Acessar Sem Instalação Local

Este aplicativo está disponível e estável na plataforma Vercel, você pode testar em seus dispositivos a qualquer momento sem a necessidade de instalar localmente. Você achará o link da versão mais atual em produção deste aplicativo na [página inicial do repositório](https://github.com/GiovanniBot/kika-decor).
