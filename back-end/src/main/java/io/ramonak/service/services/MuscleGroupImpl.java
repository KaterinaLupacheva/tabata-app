package io.ramonak.service.services;


import io.ramonak.database.models.MuscleGroup;
import io.ramonak.database.repository.MuscleGroupRepository;
import io.ramonak.service.dto.MuscleGroupDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MuscleGroupImpl implements MuscleGroupService {

    private final ModelMapper modelMapper;
    private final MuscleGroupRepository muscleGroupRepository;

    @Override
    public MuscleGroupDTO saveMuscleGroup(MuscleGroupDTO muscleGroupDTO) {
        return convertToDTO(muscleGroupRepository.save(convertToEntity(muscleGroupDTO)));
    }

    @Override
    public List<MuscleGroupDTO> getAllMuscleGroups() {
        List<MuscleGroupDTO> result = new ArrayList<>();
        muscleGroupRepository.findAll()
                .forEach(muscleGroup -> result.add(convertToDTO(muscleGroup)));
        return result;
    }

    @Override
    public void deleteMuscleGroup(MuscleGroupDTO muscleGroupDTO) {
        muscleGroupRepository.delete(convertToEntity(muscleGroupDTO));
    }

    private MuscleGroup convertToEntity(MuscleGroupDTO muscleGroupDTO) {
        return modelMapper.map(muscleGroupDTO, MuscleGroup.class);
    }

    private MuscleGroupDTO convertToDTO(MuscleGroup muscleGroup) {
        return modelMapper.map(muscleGroup, MuscleGroupDTO.class);
    }
}
