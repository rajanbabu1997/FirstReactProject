import React from "react";

class AddContact extends React.Component {
    state={
        name:"",
        email:""
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.email==="" && this.state.name==""){
            alert("All field are mandatory");
            return false;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        
    }
render(){
    return(
        <div className="ui main">
            <h2>add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="Name" placeholder="Enter your name" value={this.state.name} 
                    onChange={(e)=>{this.setState({name:e.target.value})}}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Enter your Email" value={this.state.email} 
                    onChange={(e)=>{this.setState({email:e.target.value})}}/>
                </div>
                <button className="ui button blue" name="add">Add</button>
            </form>
        </div>
    );
}

}




export default AddContact;