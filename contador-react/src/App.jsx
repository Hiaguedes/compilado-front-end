
import React, { Component } from 'react';
import './App.css';

import Contador from './components/Contador'

class App extends Component {
constructor(){
  super ();

  this.state = {
    contador: 0
  }
}



  acrescentar(){
    const novoContador = this.state.contador + 1;
    const novoEstado = {...this.state,contador: novoContador }
    this.setState(novoEstado)
  }

  decrescentar(){
    const novoContador = this.state.contador -1;
    const novoEstado = {...this.state,contador: novoContador }
    this.setState(novoEstado)
  }


  render() {
    return (
      <main className="main">
        <Contador contador={this.state.contador}
         acrescentar={this.acrescentar.bind(this)}
          decrescentar={this.decrescentar.bind(this)}/>
      </main>
    )
  }
}

export default App;

