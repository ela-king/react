import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './config/Routes';

import jquery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
$.DataTable = require('datatables.net-bs4');
import "./../node_modules/bootstrap-notify/bootstrap-notify"
import "./../node_modules/perfect-scrollbar/dist/perfect-scrollbar";
import "./../node_modules/react-day-picker/DayPickerInput";
import "./assets/js/now-ui-dashboard";

import "./../node_modules/font-awesome/css/font-awesome.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "./../node_modules/react-day-picker/lib/style.css";
import "./../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "./assets/css/now-ui-dashboard.css";
import "./assets/css/style.css";

ReactDOM.render(<Routes/>,document.getElementById("root"));