import React from 'react';
import {Provider} from 'react-redux';
import {BrowseRouter, Route} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Dashboard from '../dashboard';

const store = appCreateStore();

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Provider store={store}>
          <BrowseRouter>
            <section>
              <Route exact path="/" component={Dashboard} />
            </section>
          </BrowseRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
