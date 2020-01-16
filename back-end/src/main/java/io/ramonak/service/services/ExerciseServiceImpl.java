package io.ramonak.service.services;

import io.ramonak.database.models.Exercise;
import io.ramonak.database.repository.ExerciseRepository;
import io.ramonak.database.repository.MuscleGroupRepository;
import io.ramonak.service.dto.ExerciseDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ExerciseServiceImpl implements ExerciseService {

    private final ModelMapper modelMapper;
    private final ExerciseRepository exerciseRepository;
    private final MuscleGroupRepository muscleGroupRepository;

    @Override
    public ExerciseDTO saveExercise(ExerciseDTO exerciseDTO) {
        return convertToDTO(exerciseRepository
                .save(convertToEntity(exerciseDTO)));
    }

    @Override
    public List<ExerciseDTO> getAllExercises() {
        List<ExerciseDTO> result = new ArrayList<>();
        Iterable<Exercise> exercises = exerciseRepository.findAll();
        int i = 1;
        for (Exercise tempExercise : exercises) {
            ExerciseDTO exerciseDTO = convertToDTO(tempExercise);
            exerciseDTO.setNumber(i);
            result.add(exerciseDTO);
            i++;
        }
        return result;
    }

    @Override
    public void deleteExercise(ExerciseDTO exerciseDTO) {
        exerciseRepository.delete(convertToEntity(exerciseDTO));
    }

    @Override
    public List<ExerciseDTO> getRandomExercises(Integer numOfExercises, String muscleGroup) {
        // 1. Get all ids
        List<Long> allIds = new ArrayList<>();
        if (muscleGroup.toLowerCase().equals("whole body")) {
            allIds = exerciseRepository.getAllIds();
        } else {
            allIds = exerciseRepository.getAllIdsForMuscleGroup(muscleGroup.toLowerCase());
        }

        // 2. create random array of defined number of random ids
        int size = allIds.size();
        Random random = new Random();
        Set<Integer> indexes = new HashSet<>();
        List<Long> randomIds = new ArrayList<>();
        while(indexes.size() < numOfExercises) {
            indexes.add(random.nextInt(size));
        }
        for (Integer index : indexes) {
            randomIds.add(allIds.get(index));
        }
//        3. get exercises with these random ids
        List<ExerciseDTO> result = exerciseRepository.findAllByIdIn(randomIds)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
//        4. shuffle result array
        Collections.shuffle(result);
        return result;
    }

    @Override
    public List<ExerciseDTO> getExercisesForMuscleGroup(String muscleGroup) {
        if (muscleGroup.toLowerCase().equals("whole body")) {
            List<Exercise> tempResult = new ArrayList<>();
            exerciseRepository.findAll().forEach(tempResult::add);
            return tempResult.stream().map(this::convertToDTO).collect(Collectors.toList());
        } else {
            return exerciseRepository.findAllByMuscleGroup_Name(muscleGroup.toLowerCase())
                    .stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
        }
    }

    private Exercise convertToEntity(ExerciseDTO exerciseDTO) {
        Exercise exercise = modelMapper.map(exerciseDTO, Exercise.class);
        muscleGroupRepository.findAllByName(exerciseDTO.getMuscleGroupName()).ifPresent(exercise::setMuscleGroup);
        return exercise;
    }

    private ExerciseDTO convertToDTO(Exercise exercise) {
        ExerciseDTO exerciseDTO = modelMapper.map(exercise, ExerciseDTO.class);
        exerciseDTO.setMuscleGroupName(exercise.getMuscleGroup().getName());
        return exerciseDTO;
    }
}
