import React, { Component } from 'react';

class FeesArrear extends Component {

    componentDidMount(){
        document.title = "MIS APP - Fees Summary Arrear"
        $('.dataTable').DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Fees Summary Arrear</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Name</th>
                                            <th>Paid Amount</th>
                                            <th>Arrears</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>Petter</td>
                                            <td>Rs. 8,000</td>
                                            <td><span className="badge badge-warning">Tution fees</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Ron Whestly</td>
                                            <td>Rs. 3,000</td>
                                            <td><span className=" badge badge-danger">Tution fees</span> <span className=" badge badge-danger">Term fees </span> <span className=" badge badge-danger">Computer fees</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>Albus Sirius</td>
                                            <td>Rs. 7,000</td>
                                            <td><span className=" badge badge-danger">Tution fees </span> <span className=" badge badge-danger">Term fees</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Tina</td>
                                            <td>Rs. 4,500</td>
                                            <td><span className=" badge badge-danger">Tution fees</span> <span className=" badge badge-danger">Term fees</span> <span className=" badge badge-danger">Lab fees</span></td>
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
 
export default FeesArrear;