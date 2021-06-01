import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import RouterURL from './router/RouterURL';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <RouterURL />
      <Footer />
     
    </div>
  );
}

export default App;
