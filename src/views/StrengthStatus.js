import React, { Component } from 'react';

class StrengthStatus extends Component {

    componentDidMount(){
        document.title = "MIS APP - Strength Status Report"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Strength Status Report</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                </div>
                                <div className="col-4"></div>
                                <div className="col-4"></div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Academic Year</th>
                                            <th>Attendance Strength [ Year Basis ]</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>Parker</td>
                                            <td>2018-19</td>
                                            <td><span className="text-info">75%</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Petter</td>
                                            <td>2018-19</td>
                                            <td><span className="text-warning">65%</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>James</td>
                                            <td>2018-19</td>
                                            <td><span className="text-success">95%</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Cathrine</td>
                                            <td>2018-19</td>
                                            <td><span className="text-danger">50%</span></td>
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
 
export default StrengthStatus;