import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';
class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    const {
      clickButton,
      newValue
    } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Treinando o Redux</h1>
        </header>
        <main>
          <input
            onChange={this.inputChange}
            type='text'
            value={inputValue}
          />
          <button onClick={() => clickButton(inputValue)}>
            Click me!
          </button>
          <h2>{newValue}</h2>
        </main>
      </div>
    );
  }
}

// Transforma um trecho do estado da store em uma props utilizável pelo componente, com o nome de newValue 
const mapStateToProps = store => ({
  newValue: store.clickState.newValue // Acessando a chave clickState que foi definida no reducer, ele está acessando a sua chave newValue do clickReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch); // O método mapDispatchToProps para converter a Action Creator clickButton em uma prop para o componente

  export default connect(mapStateToProps, mapDispatchToProps)(App); // Conectando o componente passando o mapStateToProps como parâmetro
// e componente atual como parâmetro na função retornada
// E ao fazemos essa conexão, podemos usar o newValue como prop no coponente: linha 7
