package com.revature.springrestapi.controller;

import com.revature.springrestapi.entity.Journal;
import com.revature.springrestapi.entity.User;
import com.revature.springrestapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getEmployees(){
        return service.getAllUser();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") long id){
        return service.getUserById(id);
    }

    @PostMapping("/users/login")
    public User userLogin(@RequestBody User user){
        return service.userLogin(user);
    }

    @PostMapping("/users/register")
    public void userRegister(@RequestBody User user){
        service.userRegister(user);
    }

    @PostMapping("/users")
    @ResponseBody
    public User addEmployee(@RequestBody User user){
        return service.saveUser(user);
    }

//    @PostMapping("/users/{id}")   // this works as an update successfully.
//    public User updateUser(@PathVariable("id") long id, @RequestBody User user){
//        return service.updateUser(id, user);
//    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") long id, @RequestBody User user){
        return service.updateUser(id, user);
    }
}
