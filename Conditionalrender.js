import React, { Component } from 'react'
class Conditionalrender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggingin:false
        }
    }
   
    
    render()
     {
         let message
       if(this.state.isLoggingin){
       //    message= <div>hello syam</div>
        
        }else
        {
           message =<div>hello siva</div>
        }
       return (
           <div>
                {message}
           </div>
        )
    }
}

export default Conditionalrender
