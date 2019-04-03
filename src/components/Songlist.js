
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {selectsong} from '../actions'

class Songlist extends Component{
    
         
     songs(){

      return  this.props.songs.map((song)=>{return(
                
                
        <div key={song.title} className="ui four column grid">
        <div className="column">
    
  </div>
  <div className="column">
    {song.title}
  </div>
  <div className="column">
  <button className="ui button" onClick={() => this.props.selectsong(song)}>
    <i className="play icon"></i>
    select
  </button>
  </div>
 </div>


      )
        })
       }
    render(){
        console.log(this.props.songs);
        console.log(this.props)
       
        return(
<div>
<h1>songlist</h1>
       {this.songs()}</div> 
   

            )
    
        
    }
}



const mapStateToProps = state => {

   console.log(state)
return {songs:state.songs}  
  };
  
  
  
  export default connect(
  
    mapStateToProps,{selectsong}
  
  )(Songlist);