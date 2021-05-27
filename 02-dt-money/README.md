#Ignite#

Aulas Projeto 02

cmd
```yarn create react-app dtmoney --template typescript``` => cria toda a aplicação com template em typescript
```yarn add styled-components```  => biblioteca de css in js (css gerado por js), serve para inserir css somente no escopo do componente
```yarn add miragejs```  => biblioteca para criar mocks de api
```yarn add axios```  => biblioteca para manusear requisições http
```yarn add react-modal ```  => biblioteca para criar modals sem precisar criar do zero
```yarn add @types/react-modal -D ```  => types


#Conceitos

#export default

o ``````export`````` exporta a função com o nome que foi dado a ela, assim, quem importa necessita usar o nome da função para importar obrigatóriamente.
o ``````export default`````` exporta a função com um nome padrão, assim, a classe importadora poderá alterar o nome da importação, isso dificulta o ``````auto import`````` e desorganiza a aplicação.

``````export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}``````

#Ferramentas

#JSON Server
O JSON Server é utilizado para simular um backend com cruds

#MirageJS
tem banco de dados
#MSW
moccar camada de network
