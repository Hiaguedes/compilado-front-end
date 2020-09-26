import React, { Component } from 'react';
import './estilos.css'
class Contador extends Component {
    state = {}

    acrescentar(){
        this.props.acrescentar();
    }

    decrescentar(){
        this.props.decrescentar();
    }

    render() {
        return (
            <>
                <p className="contador__descricao">Contador: {this.props.contador}</p>
                <div className="contador__container-butoes">
                    <button className="contador__butao" onClick={this.acrescentar.bind(this)}>Acrescentar</button>
                    <button className="contador__butao"  onClick={this.decrescentar.bind(this)}>Decrescentar</button>
                </div>
            </>
        );
    }
}

export default Contador;