
import React, { Component } from 'react';

import { connect } from 'react-redux';
//import {selectsong} from '../actions'

class Songdetail extends Component{
    
         
     

    
        
    render(){
        console.log(this.props.songs);
        console.log(this.props)
       if(this.props.selectedSong!=null){
        return(
<div>
    
<h1>{this.props.selectedSong.title}</h1>
       </div> 
   

            )
        }
        return(
            <div>
                
            <h1>nothing to show yet</h1>
                   </div> 
               
        )
    }
}



const mapStateToProps = state => {

   console.log(state)
return {selectedSong:state.selectedSong}  
  };
  
  
  
  export default connect(
  
    mapStateToProps
  
  )(Songdetail);