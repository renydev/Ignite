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
```yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh``` => faz com que ao fazer um refresh na página, o react não retorne as variáveis ao seu estado natural, assim não precisando interagir novamente com as variáveis
```yarn add typescript -D```
```yarn tsc init``` => inicializa o arquivo de configuração de typescript (tsconfig.json)


#Conceitos

##Imutabilidade
  - ```usuarios = ['renato3g', 'renatodev', 'denatoweb']```
  - ```usuarios.push('renato_mobile)``` ✘
  - ```usuariosNovo = [...usuarios, 'renato_mobile]```✓
  - Dado uma variável em memória, em programação funcional se usa o conceito de imutabilidade que é a não alteração de valores de variáveis e sim a criação de uma nova variável com os novos valores


#Hooks

##UseState
##UseEfect
  ```
  userEffect(() => {
    
  }, [])
  ```
caso o array não tenha valores, o método será chamado somente uma vez, na inicialização da aplicação
caso haja uma variável que é alterada no corpo do método, ele é chamado novamente e fica em loop infinito
  ```
  userEffect(() => {
    
  })
  ```
caso não haja array, o método será chamado em loop, isso é preciso ser evitado