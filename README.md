#Ignite#

Aulas Projeto 01

cmd
```yarn add react```
```yarn add react-dom```
```yarn add @babel/core @babel/cli @babel/preset-env -D```
```yarn babel src/index.js --out-file dist/bundle.js```
```yarn add @babel/preset-react -D```
```yarn babel src/index.jsx --out-file dist/bundle.js```
```yarn add webpack webpack-cli webpack-dev-server -D```
```yarn add babel-loader -D```
```yarn webpack```
```yarn add html-webpack-plugin -D```
```yarn add webpack-dev-server -D``` é tipo um nodemon de webpack, adiciona a possibilidade de assistir as mudanças dos arquivos (watch)
```yarn webpack serve``` roda o projeto em modo watch
```yarn add cross-env -D``` => auxilia na criação de variáveis de ambiente
```yarn add style-loader css-loader -D``` => possibilita que o react leia css
```yarn add sass node-sass sass-loader -D``` => suporte a Sass


#Conceitos

##Imutabilidade
  - ```usuarios = ['renato3g', 'renatodev', 'denatoweb']```
  - ```usuarios.push('renato_mobile)``` ✘
  - ```usuariosNovo = [...usuarios, 'renato_mobile]```✓
  - Dado uma variável em memória, em programação funcional se usa o conceito de imutabilidade que é a não alteração de valores de variáveis e sim a criação de uma nova variável com os novos valores