import React, {Component} from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import routes from './routes/index'
import { createMemoryHistory } from 'history';
import './App.css';


const history = createMemoryHistory();

function withLayout(WrappedComponent) {
  return class extends React.Component {
      render() {
          return <WrappedComponent/>
          //.. Тут можно под леоут
          // <Layout>
          //  <WrappedComponent/>
         // </Layout>
      }
  };
}



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {}
      console.log("props", this.props)
  }




  render() {
      return (
          <React.Fragment>
              <Router history={history}>
                  <Switch>
                      {routes.map((route, idx) =>
                          <Route   path={route.path} component={withLayout(route.component)} key={idx}/>
                      )}
                  </Switch>
              </Router>
          </React.Fragment>
      );
  }
}

export default App;
