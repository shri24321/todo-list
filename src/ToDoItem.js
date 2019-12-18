import React, { Component } from 'react'

 class ToDoItem extends Component {
     getStyle = () => {
         return {
         backgroundColor:"lightgreen",
         padding:"12px",
         borderBottom:"2px black solid",
         textDecoration: this.props.todo.taskcompleted ? 'line-through':'none'

     }
    
    }
    
    // markCompleted = (e) =>{
    //     console.log(this.props)
    // }
    render() {
       const { id,title} = this.props.todo;
      
        //console.log(this.props.todo.title)
        return ( <div style={ this.getStyle()}>
    <p><input type="checkbox" onChange={this.props.markCompleted.bind(this,id)}/>
        {' '} {title} 
        <button onClick={this.props.delItem.bind(this,id)} style={buttonStyle}>Delete</button></p>
             </div>
        );
    }
}

const itemStyle={
    backgroundColor:"lightpink"

}
const buttonStyle={
    background:"red",
    color:"black",
    border:"none",
    padding:"6px 11px",
    borderRadius:"50%",
    cursor:"pointer",
    float:"right"

}



export default ToDoItem;