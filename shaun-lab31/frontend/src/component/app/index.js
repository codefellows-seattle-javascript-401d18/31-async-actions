import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard';
import {Provider} from 'react-redux';
import createAppStore from '../../lib/store';

const store = createAppStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch({ type: null });
  }


  render() {
    return (
      <section className="budget">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;
