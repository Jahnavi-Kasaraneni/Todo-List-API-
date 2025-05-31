package com._itech.To.Do.List.App;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
//  ***  service returns --> List,Boolean

public class ToDoService {
    private List<ToDo> todos = new ArrayList<>();

    Long nextid = 1L;

    @Autowired
    TodoRepository repo;
    //---------------------------------- Adding the record ------------------------------------------

    //after executing this Goto postman app --> select + icon -->select post enter the url http://localhost:8080/(link name )
    //--after select body -> raw -> json   and then, enter the adding record in this type
    //{
    // "taskcategory": "public",
    //  "taskname": "Read a Book",
    //   "owner": "kavitha",
    //   "status": true
    //}

    public boolean addToDo(ToDo todo) {
         //todo.setId(nextid++);
         //todos.add(todo));
          repo.save(todo);
        return true;
    }

    //------------------------------------------- view the record -----------------------------------

    // go to postman website  -->select get and enter the url.
        public List<ToDo> getalltodos(){
            //return todos;
            return repo.findAll();
        }


        //--------------------------------------- getting particular record --------------------------
        public ToDo getOwnertodo(String owner){

        //Looping to all ToDos
        for(ToDo todo:todos){
            //check the owner of the todos in the list
            if(todo.getOwner().equals(owner)) {
                //if we use equals---> string  should be same while given=retrieve
                // if we give equalsIgnoreCase() then there will be no case-sensitive problem.(recommended to use)
                return todo;
            }
        }
        return null;
        }

        //--------------------------------------  deleting the record -------------------------------
        public boolean deleteTodo(Long id){
             //controller and service code
            //----------------------------------------------
            //return todos.removeIf(todo ->todo.getId().equals(id));

            //repo code
            //-----------------------------------------
            Optional<ToDo> dataById=repo.findById(id);

            if(dataById.isPresent()){
                repo.deleteById(id);
                return true;
            }
            else{
                return false;
            }
        }


        //--------------------------------------- Editing or updating the record ---------------------


    public boolean updateToDo(Long id ,ToDo updatedToDo){

        //controller and service code
//        for(ToDo toDo:todos){
//            if(toDo.getId().equals(id)){
//                toDo.setOwner(updatedToDo.getOwner());
//                toDo.setTaskname(updatedToDo.getTaskname());
//                toDo.setTaskcategory(updatedToDo.getTaskcategory());
//                toDo.setStatus(updatedToDo.isStatus());
//
//                return true;
//            }
//        }
//        return false;



        //repo
        //----------------------------------
        Optional<ToDo> databyid=repo.findById(id);
        if(databyid.isPresent()){
            ToDo dbdata=databyid.get();
            dbdata.setOwner(updatedToDo.getOwner());
            dbdata.setTaskname(updatedToDo.getTaskname());
            dbdata.setTaskcategory(updatedToDo.getTaskcategory());
            dbdata.setStatus(updatedToDo.isStatus());
            repo.save(dbdata);
            return true;
        }
        else{
            return false;
        }
    }

    //get specific To do ---> used in editing the record in frontend
    public Optional<ToDo> getSingleToDo( Long id){
        return repo.findById(id);
    }
    }





    // Server side Information in postman app
    //  01) 200-299 --->successful status
    //  02) 300-399 --->Info status
    //  03) 400-499 --->client side error
    //  04) 500-599 --->Service side error


//Response + Status code --->ResponseEntity