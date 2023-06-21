import React from "react";
class AddComponent extends React.Component {
    state = {
        job:'',
        salary:''
    }
    handleJob = (event) => {
        this.setState({job: event.target.value});
    }
    handleSalary = (event) => {
        this.setState({salary: event.target.value});
    }
    handleSubmit = (event) => {
        
        event.preventDefault();
        console.log("Check value: ",this.state);
        this.props.addJob({
            id: Math.floor(Math.random()*1000),
            job:this.state.job,
            salary: this.state.salary
        });
        this.setState({
            job: '',
            salary: ''
        })
        alert('OK');
    }
    render() {
        return (
            <form>
                <label htmlFor="name">Job</label><br/>
                <input type="text" 
                value={this.state.job} 
                onChange = { (event) => this.handleJob(event)}/>
                <br/>
                <label htmlFor="salary">Salary</label><br/>
                <input type="text" value = {this.state.salary} onChange={(event) => this.handleSalary(event)}/>
                <br/>
                <input type="submit" onClick= {(event) => this.handleSubmit(event)}/>
            </form>
        );
    }
}
export default AddComponent