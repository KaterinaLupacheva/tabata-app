package io.ramonak.service.services;

import io.ramonak.service.dto.MuscleGroupDTO;

import java.util.List;

public interface MuscleGroupService {

    MuscleGroupDTO saveMuscleGroup(MuscleGroupDTO muscleGroupDTO);
    List<MuscleGroupDTO> getAllMuscleGroups();
    void deleteMuscleGroup(MuscleGroupDTO muscleGroupDTO);
}
