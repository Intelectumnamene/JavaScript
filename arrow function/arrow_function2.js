function Teste() {
    this.nome = "Arrow Function";
  
    // Função tradicional: cria um novo contexto de `this`
    setTimeout(function() {
      console.log(this.nome); // undefined
    }, 1000);
  
    // Arrow function: usa o `this` do contexto atual
    setTimeout(() => {
      console.log(this.nome); // "Arrow Function"
    }, 1000);
  }
  
  new Teste();
  