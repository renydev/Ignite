#Ignite#

Aulas Projeto 02

cmd
```yarn create react-app dtmoney --template typescript```


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
