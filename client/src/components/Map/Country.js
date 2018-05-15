
import React from 'react';
import CountryModal from '../CountryModal/CountryModal';
import Path from './Path'

class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    
      style: {
        fill: '#b9b9b9',
        fillOpacity: 1,
      }
      
    }
    
  }

  
render() {
  return (

        <g>
          <Path
          onClick={() => { this.child.toggle();}}
          id={this.props.id} 
          d={this.props.d} />
          <CountryModal id={this.props.id} dForModal={this.props.d} ref={instance => { this.child = instance; }} />
        </g>
        
    );
  }
}
export default Country









