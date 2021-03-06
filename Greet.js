import React, { Component } from 'react'

export class Greet extends Component {
        constructor(props) {
                super(props)
        
                this.state = {
                       text :""
                };
        
                
        }
        clickChandler(){
                this.setState({
                        text: this.refs.textBox.value

                });
        }
      
        
        render() {
                
                return (
                        <div><div>
                                  {this.state.text}
                                  </div>
                                  <div>
                                <input ref ="textBox" type="text"></input>  
                                </div>  
                                <div>
                                <button onClick={(e)=>{this.clickChandler();}}>click me</button>
                                </div>
                        </div>
                )
        }
}

export default Greet
