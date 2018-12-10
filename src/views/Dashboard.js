import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { toastr } from 'react-redux-toastr';
var moment = require('moment');

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state ={
            allData:[],
            name:'',
            amt:'',
            dt:undefined,
            whrId:undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        document.title = "MIS APP - Dashboard";
        let _this = this;
        $.ajax({
            url:"http://10.10.5.8/mis_apis/get_all.php",
            type:"post",
            dataType:"json",
            success:function(res){
                _this.setState({ allData:res });
                let l = [];
                _this.state.allData.map((data)=>{
                    const obj = { name:data[1], amt:data[2], dt:data[3], id:data[0] }
                    l.push(obj);
                })
                
                _this.$dataTable = $("#dataTable").DataTable({
                    stateSave:true,
                    destroy:true,
                    data:l,
                    columns:[ {title:"Name",data:"name"}, {title:"Amount",data:"amt"}, {title:"Date",data:"dt"},
                        {
                            title:"Actions",
                            data:"id",
                            createdCell:(td,data)=> 
                                ReactDOM.render(
                                    <div>
                                        <button className="btn btn-sm btn-info mr-3 fa fa-pencil mr-3" data-value={data} onClick={_this.handleEdit}></button>
                                        <button className="btn btn-sm btn-danger mr-3 fa fa-trash-o" data-value={data} onClick={_this.handleDelete}></button>
                                    </div>,td)
                        }
                    ]
                })
            }
        })        
    }

    handleEdit(e){
        
        let id = $(e.target).attr("data-value");
        let _this = this;
        $.ajax({
            url:"http://10.10.5.8/mis_apis/get_one.php?id="+id,
            type:"get",
            dataType:"json",
            success:function(res){
                _this.setState({whrId:res[0][0],name:res[0][1],amt:res[0][2],dt:res[0][3]});
                $("#submitBtn").attr("name","update");
                $("#frm").show();
                $("#frm .form-control").first().focus();
            }
        });
    }

    handleDelete(e){
        let id = $(e.target).attr("data-value");
        let _this = this;
        toastr.confirm("Do you want delete this row ?",{
            okText:"Yes",
            cancelText:"No",
            onOk:()=>{
                $.ajax({
                    url:"http://10.10.5.8/mis_apis/delete.php?id="+id,
                    type:"get",
                    success:function(res){
                        toastr.info("Info","Item Deleted.")
                        _this.componentDidMount();
                    }
                });
            }
        })
    }

    handleDayChange(day){
        this.setState({dt:moment(day).format("YYYY-MM-DD")});
    }

    handleChange(e){
        let key = e.target.name;
        this.setState({ [key] : e.target.value});
    }

    handleSubmit(e){
        let form_data = {
            name:this.state.name,
            amt:this.state.amt,
            date:this.state.dt,
            id:this.state.whrId,
            editmode:$("#submitBtn").attr("name")
        }
        let _this = this;
        $.ajax({
            url:"http://10.10.5.8/mis_apis/insert_new.php",
            type:"post",
            data:form_data,
            success:function(res){
                if(res=="Inserted"){
                    _this.setState({name:'',amt:'',dt:undefined})
                    toastr.success("Done !", "Data inserted.");
                }else if(res=="Updated"){
                    _this.setState({name:'',amt:'',dt:undefined,whrId:undefined})
                    $("#submitBtn").attr("name","insert")
                    toastr.success("Done !", "Data updated.");
                }else{
                    toastr.error("Error !", res);
                }
                _this.componentDidMount();
            },
            error:function(){
                toastr.error("Error !");
            }
        });
        e.preventDefault();
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title pull-left">CRUD System with PHP & MySQL</h5>
                            <div className="pull-right">
                                <button className="btn btn-primary" onClick={
                                    ()=> {
                                        $("#frm").toggle()
                                        $("#frm .form-control").first().focus()
                                        this.setState({name:'',amt:'',dt:undefined,whrId:undefined})
                                        $("#submitBtn").attr("name","insert")
                                    }
                                }><i className="fa fa-plus"></i> Add New</button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} className="form mt-3 mb-3" id="frm">
                                <div className="row">
                                    <div className="col-4">
                                        <input type="text" placeholder="Name" onChange={this.handleChange} className="form-control" name="name" value={this.state.name} required />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" placeholder="Amount" onChange={this.handleChange} className="form-control" name="amt" value={this.state.amt} required />
                                    </div>
                                    <div className="col-4">
                                        <DayPickerInput classNames={{ container: "form-group",overlayWrapper: 'DayPickerInput-OverlayWrapper', overlay: 'DayPickerInput-Overlay' }} 
                                            inputProps={{className:'form-control'}} value={this.state.dt} onDayChange={this.handleDayChange} />
                                    </div>
                                </div>
                                <button className="btn btn-info" id="submitBtn" name="insert" data-where={this.state.whrId}>Save</button>
                            </form>
                            <div className="table-responsive">
                                <table className="table" id="dataTable">
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default Dashboard;