import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {
        name:'Hoang Nhan',
        address: 'Quang Binh',
        showJobs: false,
        arrJobs : [
            {id:1,job:'developer',salary:200},
            {id:2,job:'tester',salary:150},
            {id:3,job:'project manager',salary:300},
          ]
    }
    addJob = (job) => {
        this.setState({
            arrJobs : [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let oldJobs = this.state.arrJobs;
        let currentJob = oldJobs.filter(item => item.id !== job.id);
        console.log("<<<<<<<<Check current job ", currentJob);
        this.setState({
            arrJobs : currentJob
        })
    }
    render(){
        // let name = 'Nhan';
        return (<>
        <div>
            hello from component , My name is {this.state.name}
        </div>
        <AddComponent addJob= {this.addJob} />
        <ChildComponent 
        arrJobs = {this.state.arrJobs} 
        deleteJob = {this.deleteJob}/>
        </>
        
        );
    }
}
export default MyComponent;