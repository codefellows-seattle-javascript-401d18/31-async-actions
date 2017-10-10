import React from 'react';
import * as utils from '../../lib/util';
import { Button, FormControl, Modal, Grid, Row, Col } from 'react-bootstrap';

class ChildForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.child ? props.child : {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.child) this.setState(props.child);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
    console.log('updated');
  }

  handleSubmit(e) {
    e.preventDefault();
    let {onComplete} = this.props;
    let result = onComplete(this.state);
    if (result instanceof Promise) {
      result
        .then(() => this.setState({ error: null }))
        .catch(error => {
          util.log('ListForm Error:', error);
          this.setState({ error });
        });
    }
    this.setState({title: ''});
  }

  render() {
    return (

      <form
        onSubmit={this.handleSubmit} 
        className={utils.classToggler({
          'child-form': true,
          'error': this.state.error,
        })}>
        
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={this.state.title}
          onChange={this.handleChange}/>

        <Button bsStyle='primary' bsSize='large' type="submit">{this.props.buttonText}</Button>
      </form>

    );
  }
}


export default ChildForm;