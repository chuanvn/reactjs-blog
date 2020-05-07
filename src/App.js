import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Template from './components/Template';
import SinglePost from './components/SinglePost';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux-setup/store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        if (res) {
          this.setState({
            posts: res.data
          })
        }
      })
    }, 2000);

    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={Template} />
            <Route path='/posts' component={SinglePost} />
            <Route path='*' render={() => <Redirect to='/home' />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
