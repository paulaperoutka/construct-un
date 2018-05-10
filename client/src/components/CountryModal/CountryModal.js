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
            <Path d="m 853.0452,739.4375 c 9.68057,-7.09355 -2.90581,-17.21676 2.772,-25.3089 3.97201,-10.34445 14.10014,4.05983 16.70156,4.7326 -0.0529,6.84278 2.73367,-3.74675 2.65429,5.05789 -4.25323,8.23932 -7.10251,19.67497 -17.21988,16.07996 -1.30263,2.22265 -3.6131,0.46096 -4.90797,-0.56155 z" />
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