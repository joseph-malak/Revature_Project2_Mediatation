package com.revature.springrestapi.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long journalid;
    private Long userid;
    private String journalnotes;

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getJournalnotes() {
        return journalnotes;
    }

    public void setJournalnotes(String journalnotes) {
        this.journalnotes = journalnotes;
    }
}
