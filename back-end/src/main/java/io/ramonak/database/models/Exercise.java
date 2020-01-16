package io.ramonak.database.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "MUSCLE_GROUP_ID")
    private MuscleGroup muscleGroup;

    @Column
    private Integer difficulty;

    @Column
    private String link;

    @PrePersist
    @PreUpdate
    private void prepareData() {
        this.name = name == null ? null : StringUtils.capitalize(name);
    }

}
