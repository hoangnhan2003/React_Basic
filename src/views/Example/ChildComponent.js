import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
        job:'',
        salary:''
    }
    handleShowHide = () => {
        this.setState({showJobs: !this.state.showJobs});
    }
    handleOnclickDelete = (job) => {
        console.log("<<<<<<Check current job click",job);
        this.props.deleteJob(job);
        //alert('da xóa')
    }
   
    render() {
        let { showJobs } = this.state;
        let { arrJobs } = this.props;
        return (
            <>
            
            {
                showJobs === false ? 
                <div>
                    <button onClick={() => {this.handleShowHide()}}>Show</button>
                </div>
                :
                <>
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                                    return (
                                        
                                        <div key={item.id}>
                                            {item.job} - {item.salary} 
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div> 
                                        
                                        
                                    )
                                })
                    }
                </div>
                <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                </>
            }
            </>
        )
    }
}
export default ChildComponent;