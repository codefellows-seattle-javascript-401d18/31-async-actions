import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import ChildList from '../child-list';
import * as util from '../../lib/util';
import * as childActions from '../../action/child-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.childrenFetch();
    console.log('', this.props);
  }
  render() {
    return (
      <div className="dashboard">
        <h1>Children List Manager</h1>
        <ChildForm
          onComplete={this.props.childCreate}
          buttonText="Create Child"/>
          <h2> Children List: </h2>

        <ChildList
        />
      </div>
    );
  }
}

let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
