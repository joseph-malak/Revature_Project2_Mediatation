package com.revature.springrestapi.service;

import com.revature.springrestapi.entity.Journal;
import com.revature.springrestapi.entity.Meditation;
import com.revature.springrestapi.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JournalServiceImpl implements JournalService{

    @Autowired
    private JournalRepository repository;

    @Override
    public List<Journal> getAllJournals(long userid) {
        return repository.getJournalsUserById(userid);
    }


    @Override
    public void userJournal(Journal journal) {
        repository.save(journal);
    }
}
