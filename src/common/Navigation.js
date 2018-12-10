import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    render() { 
        return (
            <div className="sidebar" data-color="orange">
                <div className="sidebar-wrapper">
                <ul className="nav">
                    <li>
                    <Link to="/">
                        <i className="now-ui-icons design_app"></i>
                        <p>Dashboard</p>
                    </Link>
                    </li>
                    <li>
                    <a href="#" data-toggle="collapse" data-target="#mis">
                        <i className="now-ui-icons education_atom"></i>
                        <p>MIS Views</p>
                        <i className="fa fa-angle-down" style={{ float:"right",marginTop: '-30px'}}></i>
                    </a>
                        <div className="collapse" id="mis">
                            <ul className="nav">
                                <li>
                                    <a href="#" data-toggle="collapse" data-target="#attendance">
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Attendance</p><i className="fa fa-angle-down" style={{float: "right",marginTop: "-30px"}}></i>
                                    </a>
                                    <div className="collapse" id="attendance">
                                        <ul className="nav">
                                            <li>
                                                <Link to="/long-absentees"><i className="now-ui-icons education_atom"></i><p>Long Absentees</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/tc-status"><i className="now-ui-icons education_atom"></i><p>TC Status</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/not-punched"><i className="now-ui-icons education_atom"></i><p>Employee Not Punched</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/strength-status"><i className="now-ui-icons education_atom"></i><p>Strength Status Report</p></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" data-toggle="collapse" data-target="#fees">
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Fees</p><i className="fa fa-angle-down" style={{float: "right",marginTop: '-30px'}}></i>
                                    </a>
                                    <div className="collapse" id="fees">
                                        <ul className="nav">
                                            <li>
                                                <Link to="/fees-exemption-list"><i className="now-ui-icons education_atom"></i><p>Fees Exemption List</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/fees-concession-list"><i className="now-ui-icons education_atom"></i><p>Fees Concession List</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/student-N-demanded"><i className="now-ui-icons education_atom"></i><p>Students Not Demanded</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/fees-summary-arrear"><i className="now-ui-icons education_atom"></i><p>Fee Summary Arrear</p></Link>
                                            </li>
                                            <li>
                                                <Link to="/cheque-re-conciliation"><i className="now-ui-icons education_atom"></i><p>Cheque Re-Conciliation</p></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <Link to="/approval-exemption">
                        <i className="now-ui-icons location_map-big"></i>
                        <p>Exemption for Approval</p>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
         );
    }
}
 
export default Navigation;