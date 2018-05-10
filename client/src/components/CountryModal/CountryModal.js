import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Path from '../Map/Path'
class CountryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <foreignObject>
        <Button color="danger" func={this.toggle} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Country Name prop</ModalHeader>
          <ModalBody>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-29.947200 60.986600 2754.066400 1396.573900" version={1.0} height={.50*(window.innerHeight)} width={.50*(window.innerWidth)} id="svg1926">
              <path d={this.props.dForModal} style={{fill: '#b9b9b9'}} />
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