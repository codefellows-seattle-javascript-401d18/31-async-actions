import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Dashboard from '../dashboard';

const store = appCreateStore();

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
