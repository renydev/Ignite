#Ignite#

Aulas Projeto 03

cmd
```yarn create next-app ignews``` => cria toda a aplicação com framework Nextjs
```yarn add typescript @types/react @types/node -D``` => mesmo com Nextjs é necessário instalar os types de react, pois o react e o node não têm typescript instalado por padrão


#FERRAMENTAS
Stripe
 - Feita para pagamentos

FaunaDB
 - Banco de dados

Prismic CMS
 - CMS

Github
 - Autenticação OAuth


#OBSERVAÇÕES IMPORTANTES

 - ReactJs
  - Não é um framework, é uma biblioteca
 - NextJs
  - É um framework criado em cima do ReactJs


#TERMOS
 - SSR
  - Server Side Rendering


#CONCEITOS
 - SPA (SINGLE PAGE APLICATION)
  - Browser(Cliente) > Código React(Bundle.js) > Back-end(Servidor) > Código React(Bundle.js) > Listagem de Dados
 - SSR (SERVER-SIDE RENDERING)
  - Browser(Cliente) > NextJs (Servidor Node.js) > Código React(Bundle.js) > Back-end(Servidor) > Código React(Bundle.js) > Listagem de Dados > NextJs (Servidor Node.js) > Browser(Cliente)


#NEXTJS
 - Os exports das pages precisam ter o default, ex.: ``````export default Produto () {return (<h1>Produtos</h1>)}``````
 - NextJs tem sistema de rotas por arquivo (file-system based router)
 - Rotas
  - Todos os arquivos dentro da pasta pages é exposto por seu nome, ex.: pages/produtos.js pode ser acessado pelo link https://localhost:3000/produtos