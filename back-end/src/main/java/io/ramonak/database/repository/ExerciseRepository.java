package io.ramonak.database.repository;

import io.ramonak.database.models.Exercise;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExerciseRepository extends CrudRepository<Exercise, Long> {

    @Query("select e.id from Exercise e where e.isWithWeights = :isWithWeights")
    List<Long> getAllIds(@Param("isWithWeights") Boolean isWithWeights);

    @Query("select e.id from Exercise e " +
            "join e.muscleGroup muscleGroups" +
            " where muscleGroups.name = :muscleGroupName")
    List<Long> getAllIdsForMuscleGroup(@Param("muscleGroupName") String muscleGroupName);

    List<Exercise> findAllByIdIn(List<Long> ids);

    List<Exercise> findAllByMuscleGroup_Name(String muscleGroupName);
}
