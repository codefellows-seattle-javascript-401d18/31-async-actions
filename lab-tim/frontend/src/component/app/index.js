import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import DashboardContainer from '../dashboard-container';
import AboutContainer from '../about-container';
import createAppStore from '../../lib/store';

const store = createAppStore();

class App extends React.Component {

  render() {
    return (
      <section className="expense-tracker">
        <header>
          <nav>
            <ul>
              <li id="first-li"><a href="/">dashboard</a></li>
              <li><a href="/about">about</a></li>
            </ul>
          </nav>
        </header>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/about" component={AboutContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;
