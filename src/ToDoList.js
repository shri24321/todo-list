import React from "react";
import { func } from "prop-types";
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
   
    render() {
        console.log(this.props.todos)
        // return ( <div>
        //     <h4>ToDoLists {this.props.name}</h4>
            
        //     </div>

        return this.props.todos.map((todo)=>(<ToDoItem key={todo.item} todo={todo} markCompleted={this.props.markCompleted} delItem={this.props.delItem}/>));
        
    }
}
export default ToDoList;