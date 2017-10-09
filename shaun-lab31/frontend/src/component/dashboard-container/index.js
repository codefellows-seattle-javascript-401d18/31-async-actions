import React from 'react';
import './_dashboard-container.scss';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import * as childActions from '../../action/category-actions';
import ChildForm from '../child-form';
import ChildItem from '../child-item';


class Dashboard extends React.Component {
  componentWillMount() {
    this.props.childrenFetch();
    console.log('', this.props);
  }

  render() {
    return (
      <div className="dashboard">
        <h2>Child/Toy Manager</h2>
        <ChildForm
          onComplete={this.props.childCreate}
          buttonText="create child"/>

        <ChildList/>
      </div>
    );
  }
}




let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions).childrenFetchRequest(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
