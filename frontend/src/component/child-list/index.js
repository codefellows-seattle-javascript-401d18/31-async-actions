import React from 'react';
import './child-list.scss';
import {connect} from 'react-redux';
import ChildForm from '../child-form';
import * as util from '../../lib/util';
import * as childActions from '../../action/child-actions';
import { Button, FormControl, Modal, Grid, Row, Col } from 'react-bootstrap';

class ChildList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editName: false,
    };
    this.toggleName = this.toggleName.bind(this);    
  }

  toggleName () {
    this.setState({editName : !this.state.editName});
  }

  render () {
    return (
      <Grid className='list'>
        <Row className="show-grid">
          {this.props.children.map(child => 
            <div key={child._id}>
              <Col sm={6} md={3}>{

                <div>
                  <h2>{child.name}</h2>
                  <Button bsStyle='danger' onClick={() => this.props.childDelete(child)}>x</Button>
                  <Button bsStyle='info' onClick={this.toggleName}>Edit Name</Button>

                  <div className='childUpdateForm'>
                    {this.state.editName ?
                      <ChildForm
                        child={child}
                        onComplete={this.props.childUpdate}
                        buttonText="Update Child"
                      />
                      :
                      undefined
                    }
                  </div>
          
                </div>
              }<br/></Col>
            </div>
          )}
        </Row>
      </Grid>
    );
  }
}


let mapStateToProps = state => ({children: state.children});
let mapDispatchToProps = dispatch => ({
  childUpdate: child => dispatch(childActions.childUpdateRequest(child)),
  childCreate: child => dispatch(childActions.childCreateRequest(child)),
  childDelete: child => dispatch(childActions.childDeleteRequest(child)),
  childrenFetch: () => dispatch(childActions.childrenFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildList);