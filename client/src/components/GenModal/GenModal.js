import React, { Component } from "react";
import {
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
} from "reactstrap";

class GenModal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	  return (
	    <div>
	      <Modal isOpen={this.props.modalData.modal} toggle={this.props.modalData.toggle} className={this.props.modalData.className}>
	        <ModalHeader toggle={this.props.modalData.toggle}>{this.props.modalData.title}</ModalHeader>
	        <ModalBody>
	        	{this.props.modalData.body}
	        </ModalBody>
	        <ModalFooter>
	          <Button color="secondary" onClick={this.props.modalData.submit}>{this.props.modalData.submitBtn}</Button>{' '}
	          <Button color="secondary" onClick={this.props.modalData.cancel}>{this.props.modalData.cancelBtn}</Button>
	        </ModalFooter>
	      </Modal>
	    </div>
	  );
	}

}

export default GenModal;