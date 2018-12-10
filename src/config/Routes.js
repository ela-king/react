import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {Provider}  from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Navigation from '../common/Navigation';
import Header from '../common/Header';
import Footer from '../common/Footer';

import Dashboard from './../views/Dashboard';
import LongAbsentees from './../views/LongAbsentees';
import TcStatus from './../views/TcStatus';
import EmpNPunch from './../views/EmpNPunch';
import StrengthStatus from './../views/StrengthStatus';
import FeesExempList from './../views/FeesExempList';
import FeesConList from './../views/FeesConList';
import StudNDemand from './../views/StudNDemand';
import FeesArrear from './../views/FeesArrear';
import ChequeReCon from './../views/ChequeReCon';
import ApprovalExemp from './../views/ApprovalExemp';

const reducers = {  toastr: toastrReducer }
const reducer = combineReducers(reducers)
const store = createStore(reducer)

class Routes extends Component {

    render() { 
        return ( 
            <Provider store={store}>
                <Router>
                    
                        <div className="wrapper ">
                            <ReduxToastr
                                timeOut={2000}
                                newestOnTop={false}
                                // preventDuplicates
                                position="top-right"
                                transitionIn="bounceIn"
                                transitionOut="bounceOut"
                                progressBar
                                closeOnToastrClick/>
                            <Navigation/>
                            <div className="main-panel">
                                <Header />
                                <div className="content">
                                    <Route exact path="/" component={Dashboard}></Route>
                                    <Route path="/long-absentees" component={LongAbsentees}></Route>
                                    <Route path="/tc-status" component={TcStatus}></Route>
                                    <Route path="/not-punched" component={EmpNPunch}></Route>
                                    <Route path="/strength-status" component={StrengthStatus}></Route>
                                    <Route path="/fees-exemption-list" component={FeesExempList}></Route>
                                    <Route path="/fees-concession-list" component={FeesConList}></Route>
                                    <Route path="/student-N-demanded" component={StudNDemand}></Route>
                                    <Route path="/fees-summary-arrear" component={FeesArrear}></Route>
                                    <Route path="/cheque-re-conciliation" component={ChequeReCon}></Route>
                                    <Route path="/approval-exemption" component={ApprovalExemp}></Route>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    
                </Router> 
            </Provider>
         );
    }
}
 
export default Routes;