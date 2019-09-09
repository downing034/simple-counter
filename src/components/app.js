import React, { Component } from 'react';
import '../styles/app.css';
import Counter from '../containers/counterContainer';

class App extends Component {
   render() {
      return (
         <div className="app">
            <header className="app-header">
               <Counter/>
            </header>
         </div>
      );
   }
}
export default App;
