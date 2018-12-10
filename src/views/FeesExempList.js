import React, { Component } from 'react';

class FeesExempList extends Component {

    componentDidMount(){
        document.title = "MIS APP - Fees Exemption List"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Fees Exemption List</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Total Fees</th>
                                            <th>Paid Fees</th>
                                            <th>Exempted Amount</th>
                                            <th>Pending Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 6,000</td>
                                            <td>Rs. 700</td>
                                            <td><span className="text-danger">Rs. 3,300</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 3,000</td>
                                            <td>Rs. 700</td>
                                            <td><span className="text-danger">Rs. 6,300</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 9,000</td>
                                            <td>Rs. 700</td>
                                            <td><span className="text-danger">Rs. 300</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 9,300</td>
                                            <td>Rs. 700</td>
                                            <td><span className="text-success">Rs. 0</span></td>
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
 
export default FeesExempList;