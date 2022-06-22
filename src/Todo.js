import React, { Component } from 'react'
import './App.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            text: '',
            style:false,
            value:'complete',
            complete:'false'
               
            }
          
        this.TextChange = this.TextChange.bind(this)   
        this.handlAddItem = this.handlAddItem.bind(this)   

    }
  
    TextChange(event) {
        this.setState({          
                text: event.target.value          
        }
       
        )
       
    } 
    handlAddItem(event){
        let newitem = { id: Math.random(), todo: this.state.text, complete:false}
            this.setState({
             
                items : [...this.state.items,newitem]
                
            })       

    }
    Delete = (id) =>{
        this.setState({
            items: this.state.items.filter(el => el.id !== id)
              
            })
        
    }
    Complete = id =>{
        this.setState({
            items:this.state.items.map(el => {
                if(el.id === id){
                    return{
                        ...el,
                        complete:!el.complete,
                    };
            }else{
                return el
            }
        })
    })
    }
    render() { 
        return ( 
        <div className="todo">
            <div className="todo">
                <div className="app">
                    <h1>To-Do App!</h1>
                    <h6>Add New To-Do</h6>
                    <div className="task">
                        <input type="text" 
                               placeholder="Enter task" 
                               onChange={this.TextChange}
                        />
                    </div> 
                </div>
                <div className="btnajout">
                    <span onClick={this.handlAddItem}>add</span>
                </div>
            </div>
            <div>
                    <ul >
                        {this.state.items.map(el  => 
                        {
                        return(
                            <div key={el.key}>
                                <li className={el.complete ? 'style1' : 'style'}
                                    
                                 >{el.todo}</li>

                                <button onClick={() => {this.Delete(el.id)}}>Delete</button>

                                <button onClick={() => this.Complete(el.id)}>{el.complete? "undo":"complete"}</button>
                            </div>)
                        }
                        )
                            
                    }
                    </ul>

            </div>
        </div>
    
         );
    }
}
 
export default Todo;