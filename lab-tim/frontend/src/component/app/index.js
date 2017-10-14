import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Dashboard from '../dashboard';
import appCreateStore from '../../lib/app-create-store';

const store = appCreateStore();

class App extends React.Component {

  render() {
    return (
      <main className="main-content">
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
