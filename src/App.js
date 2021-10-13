import { Route, Switch } from "react-router";
import "./App.css";
import Postdetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import CardData from "./UI/CardData";
import Navbar from "./UI/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CardData} />
        <Route exact path="/postform" component={PostForm} />
        <Route exact path="/postform/:id" component={PostForm} />
        <Route path="/postdetail/:id" component={Postdetail} />
      </Switch>
    </div>
  );
}

export default App;
