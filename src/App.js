import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/:post_id" component={Post}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
