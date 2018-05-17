import React, { Component } from 'react';
import './Main.css';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
class Splash extends Component {
  constructor(props) {
    super(props);
    
  };

  
render() {
  return (
  
   <div>
    <div className="portal-wrapper">
      
      
      <Grid container spacing={0}>
      <Grid item md={2}/>
      <Grid  item md={8}>
      <h1 className="portal-header">Construct UN</h1>
      <FormGroup className="portal-content form-group">
    
    {this.props.children}

    </FormGroup >
          </Grid>
          <Grid item md={2}/>
          </Grid>
      
      {/* </FormGroup>
      </Form>
    </Col>
    <Col md="2" />
  </Row> */}
</div>
</div>
  )}

}

export default Splash;