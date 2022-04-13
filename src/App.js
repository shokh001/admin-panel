import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Resgister from "./pages/register";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/login">
            <Login />  
          </Route>
          <Route path="/register">
            <Resgister />  
          </Route>

          {/* <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element="<h1>404 page not found</h1> :(">
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
