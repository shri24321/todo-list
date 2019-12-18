import React from "react"
import { func } from "prop-types"


class ToDoForm extends React.Component {
    state={
        title:""
    }
    onChange = (e) =>this.setState({title:e.target.value})
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({title : ''});
    }
    render() {
        // return ( <div>
        //     <h4>ToDoForm</h4>
        //     </div>

        // );
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add ToDo" value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="bttn" style={{background:"blue"}}/>
            </form>
        )
    }
}

export default ToDoForm;