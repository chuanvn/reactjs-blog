import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Template from './components/Template';
import SinglePost from './components/SinglePost';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
    const { posts } = this.state;
    return (
      <BrowserRouter>
        {/* <ul>
          {posts && posts.length > 0 &&
            posts.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#">{item.title}</a>
                </li>
              )
            })
          }
        </ul> */}
        <Switch>
          <Route path='/home' component={Template} />
          <Route path='/posts' component={SinglePost} />
          <Route path='*' render={() => <Redirect to='/home'/>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
