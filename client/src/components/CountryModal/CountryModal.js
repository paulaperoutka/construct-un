import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import './CountryModal.css'




class CountryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      
    
    };
     
    this.toggle = this.toggle.bind(this);
  }

  countryData = (id) => {
    return this.props.data

  }

  bound = (xy) => {
    return document.getElementById(xy).getBBox()
    }

  componentDidMount() {
    this.box = [this.bound(this.props.id).x, this.bound(this.props.id).y, this.bound(this.props.id).width, this.bound(this.props.id).height]
   
  
    this.countryD = this.countryData(this.props.id)
  
  console.log(this.props.data[0])
    
  } 
  
  

  toggle() {
    this.setState({
      modal: !this.props.modal
    });
  }
  
  render() {
    return (
      <foreignObject>
        <Modal isOpen={this.props.modal} toggle={this.toggle} className="modal-container">
          <ModalHeader toggle={this.toggle}>{this.props.id}</ModalHeader>
          <ModalBody>
            {/* <img  src={this.props.data.flag} style={{width:'50px'}} alt="no flag"/>
          {this.props.data ? (
            <ul>
              <li>Capital City: {this.props.data.capital}</li>
              <li>Official Language: {this.props.data.officialLanguage}</li>
              <li>{this.props.data.flag}</li>
              <li>Area: {this.props.data.area} km<sup>2</sup></li>
              <li>Population: {this.props.data.population}</li>
              <li>Currency{this.props.data.currency}</li>
            </ul> */}
          ) : (
            <h3>No Results to Display</h3>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={this.box} version={1.0}>
              <path id={this.props.id} d={this.props.dForModal} style={{fill: '#b9b9b9'}}   />
            </svg>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </foreignObject>
    );
  }
}

export default CountryModal;