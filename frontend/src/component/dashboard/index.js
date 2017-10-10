import React from 'react';
import './dashboard.scss';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import ChildList from '../child-list';
import * as util from '../../lib/util';
import * as childActions from '../../action/child-actions';
import { Button, FormControl, Modal, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addName: false,
    };
    this.toggleFormStart = this.toggleFormStart.bind(this);
  }
  componentWillMount() {
    this.props.childrenFetch();
    console.log('', this.props);
  }

  toggleFormStart() {
    this.setState({addName : !this.state.addName});
  }

  render() {
    return (
      <div className="dashboard">
        <Jumbotron>
          <h1>Want to make some children?</h1>
          <p>Click here to get started.</p>
          <p><Button bsStyle="primary" onClick={this.toggleFormStart}>Take me to the children!</Button></p>
        </Jumbotron>

        {this.state.addName ?
          <ChildForm 
            onComplete={this.props.childCreate}
            buttonText="create child"

          />
          :
          undefined
        }
        {this.state.addName ?
          <ChildList
          />
          :
          undefined
        }
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