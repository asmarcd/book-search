import { Typography } from "@material-ui/core";
import PageBody from "./components/PageBody"
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';
import { PageProvider } from './components/PageContext';
import { BookProvider } from './components/BookContext'

function App() {

  return (
    <PageProvider>
      <BookProvider>
        <div className="App">
          <Typography >
            <Nav />
            <Header />
            <PageBody />
            <Footer />
          </Typography>
        </div>
      </BookProvider>
    </PageProvider>
  );
}

export default App;
