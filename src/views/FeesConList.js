import React, { Component } from 'react';

class FeesConList extends Component {

    componentDidMount(){
        document.title = "MIS APP - Fees Concession List"
        $(".dataTable").DataTable();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Fees Concession List</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Total Fees</th>
                                            <th>Paid Fees</th>
                                            <th>Fee Concession</th>
                                            <th>Pending Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 6,000</td>
                                            <td>2%</td>
                                            <td><span className="text-danger">Rs. 3,800</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 3,000</td>
                                            <td>5%</td>
                                            <td><span className="text-danger">Rs. 6,500</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 9,000</td>
                                            <td>3%</td>
                                            <td><span className="text-danger">Rs. 700</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>Rs. 10,000</td>
                                            <td>Rs. 9,300</td>
                                            <td>0%</td>
                                            <td><span className="text-danger">Rs. 700</span></td>
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
 
export default FeesConList;