import React, { Component } from "react";
import {
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter
} from "reactstrap";
import "./GenModal.css";

class GenModal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
	  return (
	    <div>
	      <Modal className="gen-modal" isOpen={this.props.modalOpen} toggle={this.props.modalToggle} className={this.props.className}>
	        <ModalHeader className="text-dark" toggle={this.props.modalToggle}><h3>{this.props.modalData.resolutionTitle}</h3></ModalHeader>
	        <ModalBody className="text-dark">
	        	<h4>Proposal by: {this.props.modalData.memberNation}</h4>
	        	<h4>Sponsored by: {this.props.modalData.sponsoringNation}</h4>
	        	<h4>Objective: {this.props.modalData.objective}</h4>
	        	<h4>Full Proposal: {this.props.modalData.proposal}</h4>
	        	<p>Comments...</p>
	        </ModalBody>
	        <ModalFooter>
	          <Button color="secondary" onClick={this.props.modalSubmit}>{this.props.submitBtn}</Button>{' '}
	          <Button color="secondary" onClick={this.props.modalToggle}>Close</Button>
	        </ModalFooter>
	      </Modal>
	    </div>
	  );
	}

}

export default GenModal;