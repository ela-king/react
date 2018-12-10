import React, { Component } from 'react';

class ApprovalExemp extends Component {

    componentDidMount(){
        document.title = "MIS APP - Exemption For Approval"
        $('.dataTable').DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Exemption For Approval</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>James Harry</td>
                                            <td>Personal Work</td>
                                            <td>
                                                <span className="text-warning">Recommanded</span> by <b>HOD</b><br/>
                                                <span className="text-success">Approved</span> by <b>Principal</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Petter Parker</td>
                                            <td>No Reason</td>
                                            <td>
                                                <span className="text-info">Approval Pending</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>Jenny Wain</td>
                                            <td>Reason is here</td>
                                            <td>
                                                <span className="text-warning">Recommanded</span> by <b>HOD</b><br/>
                                                <span className="text-danger">Not Approved</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Jon Carter</td>
                                            <td>Reason is here</td>
                                            <td>
                                            <span className="text-warning">Recommanded</span> by <b>HOD</b><br/>
                                            <span className="text-success">Approved</span> by <b>Principal</b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ApprovalExemp;