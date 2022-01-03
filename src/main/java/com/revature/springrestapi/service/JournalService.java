package com.revature.springrestapi.service;

import com.revature.springrestapi.entity.Journal;
import com.revature.springrestapi.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JournalService {

    public List<Journal> getAllJournals(long userid);
    public void userJournal(Journal journal);

}
