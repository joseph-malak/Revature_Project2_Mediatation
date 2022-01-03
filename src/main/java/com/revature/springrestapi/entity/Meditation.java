package com.revature.springrestapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;


@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@AttributeOverrides({
        @AttributeOverride(
                name = "name",
                column = @Column(name = "meditation_name")
        )
})
public class Meditation {

    // cannot be an @Embeddable and an @Entity.
    private String meditationname;
    private boolean favorite;
    private int meditationTime;
//    @ElementCollection
//    private List<String> journalnotes;

    public String getName() {
        return meditationname;
    }

    public void setName(String name) {
        this.meditationname = name;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    public int getMeditationTime() {
        return meditationTime;
    }

    public void setMeditationTime(int meditationTime) {
        this.meditationTime = meditationTime;
    }

//    public List<String> getDiaryNotes() {
//        return diaryNotes;
//    }
//
//    public void setDiaryNotes(List<String> diaryNotes) {
//        this.diaryNotes = diaryNotes;
//    }
}
