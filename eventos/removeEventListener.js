function evento() {
    console.log('Removendo evento!');
  }
  
  botao.addEventListener('click', evento);
  botao.removeEventListener('click', evento);
  