import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  render() {
    console.log(this);
    return(
      <div className="catch-of-the-day">
        <div className="Order">
          <Header tagline="Fresh Seafood Sold Here"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
