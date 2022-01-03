package com.revature.springrestapi.repository;

import com.revature.springrestapi.entity.Journal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JournalRepository extends JpaRepository<Journal, Long> {

    // JPQL
    @Query("select j from Journal j where j.userid = ?1")
    List<Journal> getJournalsUserById(long userid);

}
