package io.ramonak.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class MuscleGroupDTO implements Serializable {

    private static final long serialVersionUID = 9199771373158793130L;

    private Integer id;
    private String name;
}
