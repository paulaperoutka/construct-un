import React from 'react';
import CountryModal from '../CountryModal/CountryModal';

class Path extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    
      style: {
        fill: '#b9b9b9',
        fillOpacity: 1,
        

      }
    }
    
  }

  
highlight = () => {
   
    this.setState({
      
      style: {
        fill: '#49e'
      }
    });
  
};

deHighlight = () => {
  this.setState({
    
    style: {
      fill: '#b9b9b9'
    }
  })
};

render() {
  return (

        <g>
          <path 
          d={this.props.d}
          id={this.props.id}
          style={this.state.style}
          onMouseOver={this.highlight}
          onMouseOut={this.deHighlight}
          onClick={() => { this.child.toggle();}}
          />
          <CountryModal id={this.props.id} dForModal={this.props.d} ref={instance => { this.child = instance; }} />
        </g>
        
    );
  }
}
export default Path