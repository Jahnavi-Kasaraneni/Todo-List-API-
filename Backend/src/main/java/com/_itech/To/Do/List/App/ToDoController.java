package com._itech.To.Do.List.App;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
// rest controller  is responsible for  handling  all the requests from client
//  so write @RestController(automatic import will be done )
// *** controller returns --> String,json.

@RestController
@CrossOrigin (origins = "http://localhost:5173/") //it allows the request to browser to execute it in multiple servers.(need while communicating with react)
public class ToDoController {

    //Service Instance
    private ToDoService toDoservice;

    //service initialization
    public ToDoController(ToDoService toDoservice)
    {
        this.toDoservice=toDoservice;
    }

    //get is used to handle links that is url's
    //post is used to handle forms

    //Here we used @GetMapping to link the url
    //@GetMapping("/list") //we can use anything instead of list word,but make sure in postman app while giving url.
    // http://localhost:8080/list

    //created method  and return something
    // to view whether the API ,in postman app working or not
//    public String getAllToDoList() {
//        return "All to do list Received";
//    }


    @GetMapping("/todo")
    public List<ToDo> getalltodos(){

        return toDoservice.getalltodos();
    }

    @GetMapping("/todo/{id}")
    public Optional<ToDo> getIndividualToDo(@PathVariable Long id) {

        return toDoservice.getSingleToDo(id);

    }


    @PostMapping("/todo")
    public String addToDo(@RequestBody ToDo ptodo){
       boolean result= toDoservice.addToDo(ptodo);
       if(result){
           return "ToDo added successfully";
       }
       else{
           return "ToDo failed to add";
       }

    }


    @DeleteMapping("/todo/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id){
        boolean isDeleted=toDoservice.deleteTodo(id);
        if(isDeleted)
            return new ResponseEntity<>("Todo Deleted",HttpStatus.OK);
        else
            return new ResponseEntity<>("Todo not found",HttpStatus.NOT_FOUND);
    }

    @PutMapping("/todo/{id}")
    public ResponseEntity<String> updateToDo(@PathVariable Long id,@RequestBody ToDo updatedToDo){
        boolean Result= toDoservice.updateToDo(id ,updatedToDo);
        if(Result==true)
            return new ResponseEntity<>("ToDo is updated",HttpStatus.OK);
        else
            return new ResponseEntity<>("ToDo is Not Updated",HttpStatus.NOT_FOUND);
    }
}
