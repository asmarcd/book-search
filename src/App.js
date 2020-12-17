import { Typography } from "@material-ui/core";
import Search from './components/Search';
import Saved from './components/Saved';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css'
import { PageProvider } from './components/PageContext'

function App() {

  return (
    <PageProvider>
      <div className="App">
        <Typography >
          <Nav />
          <Header />
          <Search />
          <Saved />
          <Footer />
        </Typography>
      </div>
    </PageProvider>
  );
}

export default App;
