import React, { Component } from 'react';

class ChequeReCon extends Component {

    componentDidMount(){
        document.title = "MIS APP - Cheque Re-Conciliation"
        $(".dataTable").DataTable()
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Cheque Re-Conciliation</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover dataTable">
                                    <thead>
                                        <tr>
                                            <th>Roll No</th>
                                            <th>Cheque No</th>
                                            <th>Drawer Bank</th>
                                            <th>Cheque Amount</th>
                                            <th>Reconciliation Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RN0001</td>
                                            <td>****21</td>
                                            <td>SBI</td>
                                            <td>Rs. 10,000</td>
                                            <td><span className=" text-success">Verified</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0002</td>
                                            <td>****45</td>
                                            <td>HDFC</td>
                                            <td>Rs. 7,000</td>
                                            <td><span className=" text-success">Verified</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0003</td>
                                            <td>****34</td>
                                            <td>Indian Bank</td>
                                            <td>Rs. 10,000</td>
                                            <td><span className=" text-danger">Cheque Bounced</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0004</td>
                                            <td>****55</td>
                                            <td>SBI</td>
                                            <td>Rs. 8,000</td>
                                            <td><span className=" text-info">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>RN0005</td>
                                            <td>****88</td>
                                            <td>AXIS</td>
                                            <td>Rs. 5,000</td>
                                            <td><span className=" text-success">Verified</span></td>
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
 
export default ChequeReCon;