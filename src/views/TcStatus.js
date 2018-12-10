import React, { Component } from 'react';

class TcStatus extends Component {

    componentDidMount(){
        document.title = "MIS APP - TC Status",
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">TC Status</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Applied Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>Peter Parker</td>
                                            <td>22-11-2018</td>
                                            <td><span className="text-info">TC Ready</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Ron Whestly</td>
                                            <td>12-01-2018</td>
                                            <td><span className="text-danger">Dispatched</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>Albus Sirius</td>
                                            <td>28-11-2018</td>
                                            <td><span className="text-warning">It's take some time</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Tina</td>
                                            <td>01-01-2017</td>
                                            <td><span className="text-danger">Dispatched</span></td>
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
 
export default TcStatus;