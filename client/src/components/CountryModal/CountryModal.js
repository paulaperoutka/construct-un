import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CountryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    
    };
     
    this.toggle = this.toggle.bind(this);
  }

  bound = (xy) => {
    return document.getElementById(xy).getBBox()
    }

  componentDidMount() {
    this.box = [this.bound(this.props.id).x, this.bound(this.props.id).y, this.bound(this.props.id).width, this.bound(this.props.id).height]
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <foreignObject>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.id}</ModalHeader>
          <ModalBody>
          <svg preserveAspectRatio="true" xmlns="http://www.w3.org/2000/svg" viewBox={this.box} version={1.0}>
              <path id={this.props.id} d={this.props.dForModal} style={{fill: '#b9b9b9'}}   />
            </svg>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </foreignObject>
    );
  }
}

export default CountryModal;