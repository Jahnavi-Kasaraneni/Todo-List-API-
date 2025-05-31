import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function EditToDo(){

    let[taskname,settaskname]=useState();
    let[taskcategory,settaskcategory]=useState();
    let[owner,setowner]=useState();
    let[status,setstatus]=useState();

    let {id}=useParams();

    let nav=useNavigate();

    useEffect(()=>{

        axios.get('http://localhost:8080/todo/'+id).then((res)=>{
            console.log(res);
            settaskname(res.data.taskname);
            settaskcategory(res.data.taskcategory);
            setowner(res.data.owner);
            setstatus(res.data.status);
        }).catch((err)=>{
            alert(err)
        })
    },[]);

   const editToDo=(e)=>{
    e.preventDefault();

    let latestStatus = (status == "Completed")? 1 : 0;

    axios.put('http://localhost:8080/todo/'+id ,{taskname,taskcategory,owner,latestStatus}).then((res)=>{

        nav('/displaytodo')

    }).catch((err)=>{
        alert(err);
    })
   }

   let newStatus = String(status);

   let taskStatus = (newStatus == "true")? "Completed": "Not Completed";

    return(
    <>
    <Header/>
        <div className="container">
        <div className="row">
            <div className="col-5 mx-auto">
                <div>
                <h1 className="mb-3 text-center">Add ToDo's</h1>
                {/* <h2>{taskStatus}</h2> */}
                <form  onSubmit={editToDo} method="post">
                    <br/>
                    <div className="row">
                        <div className="col-6">

                            <div className="form-group">
                            <label htmlFor="">Enter Title:</label>
                            <input type="text" placeholder="Enter taskname" className="form-control" onChange={(e)=>settaskname(e.target.value)}
                            defaultValue={taskname}/>
                            </div>
                        </div>
                        <br/>
                        
                        <div className="col-6 ">
                            <div className="form-group">
                                <label htmlFor="">Select Task Category:</label>
                                <select value={taskcategory} name="" id="" className="form-select" onChange={(e)=>settaskcategory(e.target.value)}>
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
                                <input type="text" placeholder="Enter Owner name" className="form-control" onChange={(e)=>setowner(e.target.value)}
                                defaultValue={owner}/>
                            </div>
                        </div>
                        <br/>

                        <div className="col-6 my-3">
                            <div className="form-group">
                                
                                            <label htmlFor="">Select Status:</label>
                                <select value={taskStatus} name="" id="" className="form-select" onChange={(e)=>setstatus(e.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Not Completed">Not Completed</option>
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
export default EditToDo;