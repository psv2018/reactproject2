import React, { Component } from 'react';
import './component/Style.css';
import AccountResults from './component/AccountResults';
import AccountingInput from './component/AccountingInput';
class App extends Component {
  render() {
    return (
      <div className="App">
       <AccountResults />
      </div>
    );
  }
}

export default App;
