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
import java.util.stream.Stream;

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
        // Get all ids
        List<Long> allIds = getAllIds(muscleGroup);

        // create random array of 80% of random ids
        int eightyPercent = (int) Math.round(numOfExercises * 0.8);
        List<Long> randomIds = getRandomIds(eightyPercent, allIds);

        // get exercises with these random ids
        List<ExerciseDTO> randomExercises = getExercisesByRandomIds(randomIds);

        // add 20% of random cardio exercises
        List<ExerciseDTO> randomCardioExercises =
                getRandomCardioExercises(numOfExercises - eightyPercent);

        // combine two arrays
        List<ExerciseDTO> result = Stream.concat(randomExercises.stream(), randomCardioExercises.stream())
                .collect(Collectors.toList());

        // shuffle result array
        Collections.shuffle(result);
        return result;
    }

    private List<ExerciseDTO> getExercisesByRandomIds(List<Long> randomIds) {
        return exerciseRepository.findAllByIdIn(randomIds)
                    .stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
    }

    private List<Long> getRandomIds(Integer numOfExercises, List<Long> allIds) {
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
        return randomIds;
    }

    private List<Long> getAllIds(String muscleGroup) {
        List<Long> allIds;
        if (muscleGroup.toLowerCase().equals("whole body")) {
            allIds = exerciseRepository.getAllIds();
        } else {
            allIds = exerciseRepository.getAllIdsForMuscleGroup(muscleGroup.toLowerCase());
        }
        return allIds;
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

    private List<ExerciseDTO> getRandomCardioExercises(Integer numOfExercises) {
        List<Long> ids = getAllIds("cardio");
        List<Long> randomIds = getRandomIds(numOfExercises, ids);
        List<ExerciseDTO> exercisesByRandomIds = getExercisesByRandomIds(randomIds);
        return exercisesByRandomIds;
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
