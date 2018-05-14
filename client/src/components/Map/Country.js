
import React from 'react';
import CountryModal from '../CountryModal/CountryModal';


class Path extends React.Component {
  

  
render() {
  return (

        <g>
          <Path />
          <CountryModal data={this.state.data} id={this.props.id} dForModal={this.props.d} ref={instance => { this.child = instance; }} />
        </g>
        
    );
  }
}
export default Country









