import React, { Component } from 'react';

class LongAbsentees extends Component {

    componentDidMount(){
        document.title = "MIS APP - Long Absentees"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Long Absentees</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead className=" text-primary">
                                    <tr>
                                        <th>Roll No</th>
                                        <th>Name</th>
                                        <th>Class/Dept.</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>RN0001</td>
                                        <td>Peter Parker</td>
                                        <td>8<sup>th</sup> Standard</td>
                                        <td><button className="btn btn-info btn-sm">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0002</td>
                                        <td>Ron Whestly</td>
                                        <td>11<sup>th</sup> Standard</td>
                                        <td><button className="btn btn-info btn-sm">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0003</td>
                                        <td>Albus Sirius</td>
                                        <td>12<sup>th</sup> Standard</td>
                                        <td><button className="btn btn-info btn-sm">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>RN0004</td>
                                        <td>Tina</td>
                                        <td>5<sup>th</sup> Standard</td>
                                        <td><button className="btn btn-info btn-sm">View Details</button></td>
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
 
export default LongAbsentees;