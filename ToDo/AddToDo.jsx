import axios from "axios";
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddToDo(){

    let[taskname,settaskname]=useState();
    let[taskcategory,settaskcategory]=useState();
    let[owner,setowner]=useState();
    let[status,setstatus]=useState();

    let nav = useNavigate();

    const addtodo=(e)=>{
        e.preventDefault();

        //converting String to do Boolean
        status=(status)? true : false;

        axios.post('http://localhost:8080/todo',{taskname,taskcategory,owner,status}).then((res)=>{
            
            // console.log(res);

            nav("/displaytodo")
        }).catch((err)=>{
            alert(err);
        })
    }


    return(
    <>
    <Header/>

    <div className="container">
        <div className="row set">
            <div className="col-5 mx-auto">
                <div>
                <h1 className="mb-3 text-center">Add ToDo's</h1>
                <form onSubmit={addtodo} method="post">
                    <br/>
                    <div className="row">
                        <div className="col-6">

                            <div className="form-group">
                            <label htmlFor="">Enter Title:</label>
                            <input type="text" placeholder="Enter taskname" className="form-control" onChange={(e)=>settaskname(e.target.value)}/>
                            </div>
                        </div>
                        <br/>
                        
                        <div className="col-6 ">
                            <div className="form-group">
                                <label htmlFor="">Select Task Category:</label>
                                <select name="" id="" className="form-select" onChange={(e)=>settaskcategory(e.target.value)}>
                                    <option value="">Select category</option>
                                    <option value="personal">Personal</option>
                                    <option value="official">Official</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="col-6 my-3">
                            <div className="form-group">
                                <label htmlFor="">Enter Owner Name:</label>
                                <input type="text" placeholder="Enter Owner name" className="form-control" onChange={(e)=>setowner(e.target.value)}/>
                            </div>
                        </div>
                        <br/>

                        <div className="col-6 my-3">
                            <div className="form-group">
                                <label htmlFor="">Select Status:</label>
                                <select name="" id="" className="form-select" onChange={(e)=>setstatus(e.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="1">Completed</option>
                                    <option value="0">Not Completed</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="col-12 my-3 text-center">
                        <input type="submit"  className="btn btn-success btn-lg my-3"/>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
       <Footer/>
    </>
    )
}
export default AddToDo;