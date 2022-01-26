
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
      
      </div>
    </Router>
    
  );
}

export default App;
