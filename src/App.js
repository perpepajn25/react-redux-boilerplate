import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

// import { connect } from 'react-redux'
// import { changeExampleMessage } from './actions'

class App extends Component {

  // handleClick = () => {
  //   console.log('hello')
  //   this.props.changeExampleMessage()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo2} className="App-logo-2" alt="logo" />
          </div>
          <h1 className="App-title">Dankness (aka React x Redux)</h1>
          <p>Welcome to the npm package that configures your React-Redux app for you. Check out the actions, reducers and store directories for more information.</p>
          <p className="App-intro">
            <code>As always, to get started, edit src/App.js and save to reload.</code>
          </p>
        </header>
        {/* <h3> { this.props.exampleMessage }</h3>
        <button onClick={this.handleClick}> Click me </button> */}
      </div>
    );
  }
}

export default App

// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
