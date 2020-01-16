package io.ramonak.database.repository;

import io.ramonak.database.models.MuscleGroup;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MuscleGroupRepository extends CrudRepository<MuscleGroup, Integer> {

    Optional<MuscleGroup> findAllByName(String name);
}
