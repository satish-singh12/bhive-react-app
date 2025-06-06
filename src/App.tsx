import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Banner />
        
        </main>
        
        <Footer />
      </div>
    </Provider>
  );
};

export default App;