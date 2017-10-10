import React from 'react';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as utils from '../../lib/util';
import * as childActions from '../../action/child-actions';

class Dashboard extends React.Component {

} //stay away from me until the end..

let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
