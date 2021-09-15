import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products" component={ProductList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
