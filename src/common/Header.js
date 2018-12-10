import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("Submmitted Data is : "+this.state.value);
        this.setState({value: ""});
        event.preventDefault();
    }

    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top">
                    <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                        </div>
                        <a className="navbar-brand" href="#pablo">Dashboard</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul className="navbar-nav" id="main-nav" style={{marginRight:"5px"}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#pablo" id="main-menubar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MIS Views
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="main-menubar" style={{width:"500px"}}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <li className="dropdown-header">Attendance</li>
                                        <li><Link className="dropdown-item" to="/long-absentees">Long Absentees</Link></li>
                                        <li><Link className="dropdown-item" to="/tc-status">TC Status</Link></li>
                                        <li><Link className="dropdown-item" to="/not-punched">Employee Not Punched</Link></li>
                                        <li><Link className="dropdown-item" to="/strength-status">Strength Status Report</Link></li>
                                    </div>
                                    <div className="col-sm-6">
                                        <li className="dropdown-header">Fees</li>
                                        <li><Link className="dropdown-item" to="/fees-exemption-list">Fees Exemption List</Link></li>
                                        <li><Link className="dropdown-item" to="/fees-concession-list">Fees Concession List</Link></li>
                                        <li><Link className="dropdown-item" to="/student-N-demanded">Student Not Demanded</Link></li>
                                        <li><Link className="dropdown-item" to="/fees-summary-arrear">Fees Summary Arrear</Link></li>
                                        <li><Link className="dropdown-item" to="/cheque-re-conciliation">Cheque Re-Conciliation </Link></li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/approval-exemption">
                                Exemption for Approval
                            </Link>
                        </li>
                        </ul>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group no-border">
                                <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." />
                                <div className="input-group-append">
                                <div className="input-group-text">
                                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                                </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            <i className="now-ui-icons ui-1_bell-53"></i>
                            <p>
                                <span className="d-lg-none d-md-block">Notification</span>
                            </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            <i className="now-ui-icons ui-1_email-85"></i>
                            <p>
                                <span className="d-lg-none d-md-block">Messages</span>
                            </p>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="account_profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="now-ui-icons users_single-02"></i>
                            <p>
                                <span className="d-lg-none d-md-block">Account</span>
                            </p>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="account_profile">
                            <Link className="dropdown-item" to="/">Settings</Link>
                            <Link className="dropdown-item" to="/">Profile</Link>
                            <Link className="dropdown-item" to="/">Log Out</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                
                <div className="panel-header panel-header-sm">
                </div>    
            </React.Fragment>
        );
    }
}
 
export default Header;