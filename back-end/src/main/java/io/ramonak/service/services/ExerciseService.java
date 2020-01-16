package io.ramonak.service.services;

import io.ramonak.service.dto.ExerciseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExerciseService {

    ExerciseDTO saveExercise(ExerciseDTO exerciseDTO);
    List<ExerciseDTO> getAllExercises();
    void deleteExercise(ExerciseDTO exerciseDTO);
    List<ExerciseDTO> getRandomExercises(Integer numOfExercises, String muscleGroup);
    List<ExerciseDTO> getExercisesForMuscleGroup(String muscleGroup);
}
