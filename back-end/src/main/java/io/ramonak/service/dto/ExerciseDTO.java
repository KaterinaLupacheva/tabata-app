package io.ramonak.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class ExerciseDTO implements Serializable {

    private static final long serialVersionUID = -2546371005065411686L;

    private Long id;
    private String name;
    private String muscleGroupName;
    private Integer difficulty;
    private String link;
    private Integer number;
}
