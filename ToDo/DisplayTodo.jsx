import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function DisplayTodo(){

    let[todos,setTodos]=useState();

    let nav=useNavigate();

    useEffect(()=>{
        //postman-->Todo collection-->Get--> link copied and pasted here
        axios.get('http://localhost:8080/todo').then((res)=>{
            console.log(res)
            setTodos(res.data)
        }).catch((err)=>{
            alert(err);
        })
    },[]);

    // Here after execution of useeffect block error will occur --> once read the error in console .
    // There will be a cross origin error to clear that in intellj  open spring application -->todo controller.java after @Rest controller
    //  write @CrossOrigin (origins = "http://localhost:5173"); ---> link of react server


    const deleteToDo = (id) => {


        if(confirm("Are you sure to delete ?")) {
            axios.delete(`http://localhost:8080/todo/${id}`).then((res) => {

                alert("Delete");
                window.location.reload();//for refereshing window
    
            }).catch((err) => {
    
                alert(err);
    
            })
        }
        else {

        }
        
    }

    const editToDo=(id)=>{
        nav("/edittodo/"+id);
    }


    return(
        <div>
            <Header/>
            <div className="container">
            <h1 className="text-center">All To Do's</h1>
                <div className="row g-5 my-4 sets">
         
            {
                //After clearing the error wrtie the below code..
                todos && todos.map((todo)=>{
                    return(
                        <div className="col-lg-6 ">
                            <div className="border border-2 border-success box p-4">
                            <h4 className="text-capitalize">Taskname: <span className="text-warning">{todo.taskname}</span></h4>
                            <h4 className="text-capitalize">Category: <span className="text-warning">{todo.taskcategory}</span></h4>
                            <h4 className="text-capitalize">Owner:  <span className="text-warning">{todo.owner}</span></h4>
                            <h4 className="text-capitalize">Status: <span className="text-warning">{(todo.status)? 'Completed':'Not Completed'}</span></h4>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-success" onClick={() => editToDo(todo.id)}>Edit</button>
                                </div>
                                <div className="col-6 text-end">
                                    <button className="btn btn-danger" onClick={() => deleteToDo(todo.id)}>Delete</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default DisplayTodo;