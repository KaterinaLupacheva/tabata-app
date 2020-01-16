package io.ramonak.controller.controller;


import io.ramonak.controller.utils.UrlConst;
import io.ramonak.service.dto.ExerciseDTO;
import io.ramonak.service.services.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(UrlConst.PATH_EXERCISES)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin
public class ExerciseController {

    private final ExerciseService exerciseService;

    @GetMapping
    public ResponseEntity<List<ExerciseDTO>> getAllExercises() {
        return new ResponseEntity<>(exerciseService.getAllExercises(), HttpStatus.OK);
    }

    @GetMapping("/random/{numOfExercises}/{muscleGroup}")
    public ResponseEntity<List<ExerciseDTO>> getRandomExercises(
            @PathVariable("numOfExercises") Integer numOfExercises,
            @PathVariable("muscleGroup") String muscleGroup) {
        return new ResponseEntity<>(exerciseService.getRandomExercises(numOfExercises, muscleGroup), HttpStatus.OK);
    }

    @GetMapping("/{muscleGroup}")
    public ResponseEntity<List<ExerciseDTO>> getExercisesForMuscleGroup(
            @PathVariable("muscleGroup") String muscleGroup) {
        return new ResponseEntity<>(exerciseService.getExercisesForMuscleGroup(muscleGroup), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ExerciseDTO> saveExercise(@RequestBody ExerciseDTO exerciseDTO) {
        return new ResponseEntity<>(exerciseService.saveExercise(exerciseDTO), HttpStatus.CREATED);
    }
}
