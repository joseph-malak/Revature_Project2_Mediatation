package com.revature.springrestapi.repository;

import com.revature.springrestapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // JPQL
    @Query("select u from User u where u.id = ?1")
    User getUserById(long id);

    // JPQL
    @Query("select u from User u where u.email = ?1 and u.password = ?2")
    User userLogin(String email, String password);

    // Native
    @Modifying
    @Query(
            // ID  	EMAIL  	FAVORITE  	MEDITATION_TIME  	MEDITATION_NAME  	MEDITATION_INTERESTS  	NAME  	PASSWORD
            //value = "insert into user (id, name, email, password, meditation_interests) values (?1, ?2, ?3, ?4, ?5)",
            //value = "insert into user (id, email, favorite, meditation_time, meditation_name, meditation_interests, name, password ) values (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
            value = "insert into user (id, email, favorite, meditation_time, meditation_name, meditation_interests, name, password) values (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
            nativeQuery = true
    )
    //void userRegister(long id, String name, String email, String password, String meditationInterests);
    void userRegister(long id, String email, boolean favorite, int mediatationTime, String meditationName, String meditationInterests, String name, String password);
    // email, favorite, meditation_time, meditation_name, meditation_interests, name, password

}
