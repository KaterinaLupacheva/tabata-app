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
        List<Exercise> allExercises = exerciseRepository.findAllByOrderByName();
        List<ExerciseDTO> result = new ArrayList<>();
        int i = 1;
        for (Exercise tempExercise : allExercises) {
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
    public List<ExerciseDTO> getRandomExercises(Integer numOfExercises, String muscleGroup, Boolean isWithWeights) {
        // Get all ids for muscle group
        List<Long> allIds = getAllIds(muscleGroup, isWithWeights);

        //if cardio
        if(muscleGroup.toLowerCase().equals("cardio")) {
            return getExercises(numOfExercises, allIds);
        }

        // create random array of 80% of random ids
        int eightyPercent = (int) Math.round(numOfExercises * 0.8);

        //get random exercises
        List<ExerciseDTO> randomExercises = getExercises(eightyPercent, allIds);

        //get ids of all received exercises
        List<Long> randomIds = randomExercises.stream()
                .map(ExerciseDTO::getId)
                .collect(Collectors.toList());

        // add 20% of random cardio exercises
        List<ExerciseDTO> randomCardioExercises =
                getRandomCardioExercises(numOfExercises - eightyPercent, randomIds);

        // combine two arrays
        List<ExerciseDTO> result = Stream.concat(randomExercises.stream(), randomCardioExercises.stream())
                .collect(Collectors.toList());

        // shuffle result array
        Collections.shuffle(result);
        return result;
    }

    private List<ExerciseDTO> getExercises(Integer numOfExercises, List<Long> allIds) {
        List<ExerciseDTO> randomExercises = new ArrayList<>();
        int divider = numOfExercises / allIds.size();
        //if number of needed exercises is greater than available exercises
        if (divider > 0) {
            //get all exercises for this muscle group and add them "divider" times to result array
            List<ExerciseDTO> exercisesByRandomIds = getExercisesByRandomIds(allIds);
            for (int i = 0; i < divider; i++) {
                randomExercises.addAll(exercisesByRandomIds);
            }
            //add the rest number of random exercises
            List<Long> randomIds = getRandomIds(numOfExercises % allIds.size(), allIds);
            randomExercises.addAll(getExercisesByRandomIds(randomIds));
        } else {
            List<Long> randomIds = getRandomIds(numOfExercises, allIds);
            randomExercises = getExercisesByRandomIds(randomIds);
        }
        Collections.shuffle(randomExercises);
        return randomExercises;
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

    private List<Long> getAllIds(String muscleGroup, Boolean isWithWeights) {
        List<Long> allIds;
        if (muscleGroup.toLowerCase().equals("whole body")) {
            if(!isWithWeights) {
                allIds = exerciseRepository.getAllIdsWithNoWeightsAndLinkIsNotEmpty();
            } else {
                allIds = exerciseRepository.getAllIdsWhereLinkIsNotEmpty();
            }
        } else {
            if(!isWithWeights) {
                allIds = exerciseRepository
                        .getAllIdsForMuscleGroupWithNoWeightsAndLinkIsNotEmpty(muscleGroup.toLowerCase());
            } else {
                allIds = exerciseRepository
                        .getAllIdsForMuscleGroupAndLinkIsNotEmpty(muscleGroup.toLowerCase());
            }
        }
        return allIds;
    }

    @Override
    public List<ExerciseDTO> getExercisesForMuscleGroup(String muscleGroup) {
        if (muscleGroup.toLowerCase().equals("whole body")) {
            return exerciseRepository.findAllWhereLinkIsNotEmpty()
                    .stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
        } else {
            return exerciseRepository.findAllByMuscleGroup_Name(muscleGroup.toLowerCase())
                .stream().filter(exercise -> exercise.getLink().length() > 0)
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        }
    }

    private List<ExerciseDTO> getRandomCardioExercises(Integer numOfExercises, List<Long> randomIdsBeforeCardio) {
        List<Long> cardioIds = getAllIds("cardio", false);
        //remove duplicated ids in 80% of exercises and all cardio exercises
        List<Long> randomIds = getRandomIds(numOfExercises, removeDuplicates(randomIdsBeforeCardio, cardioIds));
        return getExercisesByRandomIds(randomIds);
    }

    private List<Long> removeDuplicates(List<Long> allIds, List<Long> cardioIds) {
        for (Long allId : allIds) {
            for (int j = 0; j < cardioIds.size(); j++) {
                if (allId.equals(cardioIds.get(j))) {
                    cardioIds.remove(j);
                }
            }
        }
        return cardioIds;
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
