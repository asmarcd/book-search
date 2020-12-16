import { Typography } from "@material-ui/core";
import Search from './components/Search'
import Saved from './components/Saved'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="app">
      <Typography>
        <Nav />
        <Header />
        <Search />
        <Saved />
        <Footer />
      </Typography>
    </div>

  );
}

export default App;
