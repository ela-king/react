import React, { Component } from 'react';

class StudNDemand extends Component {

    componentDidMount(){
        document.title = "MIS APP - Student Not Demanded"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Student Not Demanded</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead className=" text-primary">
                                    <tr>
                                        <th>Roll No</th>
                                        <th>Name</th>
                                        <th>Fees Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>RN0001</td>
                                        <td>Peter Parker</td>
                                        <td><button className="btn btn-info btn-sm">View Status</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0002</td>
                                        <td>Ron Whestly</td>
                                        <td><button className="btn btn-info btn-sm">View Status</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0003</td>
                                        <td>Albus Sirius</td>
                                        <td><button className="btn btn-info btn-sm">View Status</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0004</td>
                                        <td>Tina</td>
                                        <td><button className="btn btn-info btn-sm">View Status</button></td>
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
 
export default StudNDemand;