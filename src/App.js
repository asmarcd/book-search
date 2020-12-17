import React, { useContext } from 'react';
import { Typography } from "@material-ui/core";
import PageBody from "./components/PageBody"
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';
import { PageProvider } from './components/PageContext';

function App() {

  return (
    <PageProvider>
      <div className="App">
        <Typography >
          <Nav />
          <Header />
          <PageBody />
          <Footer />
        </Typography>
      </div>
    </PageProvider>
  );
}

export default App;
