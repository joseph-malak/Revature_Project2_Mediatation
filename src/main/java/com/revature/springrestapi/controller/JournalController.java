package com.revature.springrestapi.controller;

import com.revature.springrestapi.entity.Journal;
import com.revature.springrestapi.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class JournalController {

    @Autowired
    private JournalService service;

//    @PostMapping("/journals")// @RequestBody User user
//    @GetMapping("/journals/{userid}")// @RequestBody User user
    @PostMapping("/journals/{userid}")// @RequestBody User user
    public List<Journal> getAllJournals(@PathVariable ("userid") long userid){
//    public List<Journal> getAllJournals(@RequestBody long userid){
        return service.getAllJournals(userid);
    }

    @PostMapping("/users/journal")
    public void userJournal(@RequestBody Journal journal){
        service.userJournal(journal);
    }


}
