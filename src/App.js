import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import './App.css';
import uuid from 'uuid';

class App extends React.Component {
    state={
        todos:[
            {   
                id : uuid.v4(),
                title:'Take',
                taskcompleted:false

            }, 
            {   
                id : uuid.v4(),
                title:'Two',
                taskcompleted:false

            },
            {   
                id : uuid.v4(),
                title:'Three',
                taskcompleted:true

            }
        ]
    }
    markCompleted = (id) =>{
       // console.log(id)
       this.setState({todos:this.state.todos.map(todo => {
           if(todo.id === id){
               todo.taskcompleted = !todo.taskcompleted
           }
           return todo;
       })
    });

    }

    delItem = (id) =>{
        //console.log(id)
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }
    addItem = (title) =>{
       // console.log(title);
       const newItem={
           id:uuid.v4(),
           title:title,
           taskcompleted:false
       }
       this.setState({todos:[...this.state.todos , newItem]})
    }

    render() {
        //console.log(this.state.todos);
        
        return ( <div className="App" >
            <h1 style={styleHeader}>ToDoListApp</h1>
            
            <ToDoForm addItem={this.addItem}/>
            <ToDoList name="Propcheck" todos={this.state.todos} markCompleted={this.markCompleted} delItem={this.delItem}/>
            
            </div>
        );
    }
}

const styleHeader = {
    background:"#EABE66"
}


export default App;