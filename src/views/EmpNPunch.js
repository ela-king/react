import React, { Component } from 'react';

class EmpNPunch extends Component {

    componentDidMount(){
        document.title = "MIS APP - Employee Not Punched"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Employee Not Punched</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Employee Name</th>
                                            <th>Employee Type</th>
                                            <th>Date</th>
                                            <th>Punch Error Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>EMPN0001</td>
                                            <td>Muralikrishna C S</td>
                                            <td>Teaching Staff</td>
                                            <td>12-11-2018</td>
                                            <td><span className="text-danger">Not Punch</span></td>
                                        </tr>
                                        <tr>
                                            <td>EMPN0002</td>
                                            <td>Nanthakumar K</td>
                                            <td>Teaching Staff</td>
                                            <td>14-11-2018</td>
                                            <td><span className="text-info">Mis Punch</span></td>
                                        </tr>
                                        <tr>
                                            <td>EMPN0003</td>
                                            <td>Husaam Udeen</td>
                                            <td>Office Bearer</td>
                                            <td>24-10-2018</td>
                                            <td><span className="text-info">Missing In-Punch</span></td>
                                        </tr>
                                        <tr>
                                            <td>EMPN0004</td>
                                            <td>Yoosuf</td>
                                            <td>Administrator</td>
                                            <td>12-11-2018</td>
                                            <td><span className="text-info">Missing Out-Punch</span></td>
                                        </tr>
                                        <tr>
                                            <td>EMPN0005</td>
                                            <td>Petter Parker</td>
                                            <td>Technical Staff</td>
                                            <td>12-11-2018</td>
                                            <td><span className="text-warning">Duplicate Punch</span></td>
                                        </tr>
                                        <tr>
                                            <td>EMPN0006</td>
                                            <td>Shafeeq</td>
                                            <td>Teaching Staff</td>
                                            <td>12-11-2018</td>
                                            <td><span className="text-danger">Not Punch</span></td>
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
 
export default EmpNPunch;