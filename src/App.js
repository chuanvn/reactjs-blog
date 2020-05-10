import React from "react";
import "./App.css";
import Template from "./components/Template";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import store from "./redux-setup/store";
import { Provider } from "react-redux";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Template} />
            <Route path="/posts/:id/:title/:body" exact component={SinglePost} />
            <Route path="*" render={() => <Redirect to="/home" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
