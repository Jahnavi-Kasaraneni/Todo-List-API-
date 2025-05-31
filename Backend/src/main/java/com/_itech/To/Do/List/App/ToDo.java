package com._itech.To.Do.List.App;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//To convert a java class to SQL Table we use @entity -- hereToDo java class is converting into Sql Table(to_do)
@Entity
public class ToDo {

    //for projects or API'S  we need this fields ....
    //----------------------------------------------------------

    //primary Key
    @Id
    //Auto increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String taskname;

    private String taskcategory;

    private String owner;

    private boolean status;

    //give one non-parameterized constructor (in the level of repository)
    public ToDo(){

    }


    //we need constructor
    //----------------------------------------
    //right click-->generate-->constructor -->select all using ctrl --> click on okay
    public ToDo(String taskcategory, Long id, String taskname, String owner, boolean status) {
        this.taskcategory = taskcategory;
        this.id = id;
        this.taskname = taskname;
        this.owner = owner;
        this.status = status;
    }


    //we need getters and setters for getting the data and setting the data
    //------------------------------------------------------------------
    //generate -->getters and setters --> select all using ctrl -->click on okay
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskname() {
        return taskname;
    }

    public void setTaskname(String taskname) {
        this.taskname = taskname;
    }

    public String getTaskcategory() {
        return taskcategory;
    }

    public void setTaskcategory(String taskcategory) {
        this.taskcategory = taskcategory;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}

