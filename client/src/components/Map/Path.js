import React from 'react';


class Path extends React.Component {
  constructor() {
    super()
    this.state = {
    
      style: {
        fill: '#b9b9b9',
        fillOpacity: 1,
        stroke: '#ffffff',
        strokeWidth: '0.99986994', 
        strokeMiterlimit: '3.97446823', 
        strokeDasharray: 'none', 
        strokeOpacity: 1

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

      
        <path 
        d={this.props.d}
        style={this.state.style}
        onMouseOver={this.highlight}
        onMouseOut={this.deHighlight}
        />
      
    );
  }
}
export default Path