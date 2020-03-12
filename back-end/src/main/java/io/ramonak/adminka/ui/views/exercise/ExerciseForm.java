package io.ramonak.adminka.ui.views.exercise;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.spring.annotation.SpringComponent;
import io.ramonak.service.dto.ExerciseDTO;
import io.ramonak.service.dto.MuscleGroupDTO;
import io.ramonak.service.services.ExerciseService;
import io.ramonak.service.services.MuscleGroupService;

import java.util.stream.Collectors;

@SpringComponent
public class ExerciseForm extends FormLayout {

    private final TextField name;
    private final TextField link;
    private Binder<ExerciseDTO> binder;
    private final Button save;
    private final Button delete;
    private final Button cancel;

    public ExerciseForm(ExerciseService exerciseService,
                        MuscleGroupService muscleGroupService) {
        setSizeFull();
        name = new TextField("Exercise");
        name.setAutofocus(true);
        ComboBox<String> muscleGroupName = new ComboBox<>("Muscle group");
        muscleGroupName.setItems(muscleGroupService.getAllMuscleGroups().stream()
                                .map(MuscleGroupDTO::getName)
                                .collect(Collectors.toList()));
        Checkbox isWithWeights = new Checkbox("Weights");
        link = new TextField("Video / image");
        save = new Button("Save");
        delete = new Button("Delete");
        cancel = new Button("Cancel");
        HorizontalLayout buttons = new HorizontalLayout(save, delete, cancel);
        buttons.setSizeFull();
        buttons.getStyle().set("margin-top", "30px");
        buttons.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        add(name, muscleGroupName, isWithWeights, link, buttons);
        setupBinder();
    }

    private void setupBinder() {
        binder = new Binder<>(ExerciseDTO.class);
        binder.bindInstanceFields(this);
    }

    public void setBean(ExerciseDTO exerciseDTO) {
        binder.setBean(exerciseDTO);
        if(exerciseDTO == null) {
            setVisible(false);
        } else {
            setVisible(true);
            name.setAutofocus(true);
        }
    }

    public Button getSaveButton() {
        return save;
    }

    public Button getDeleteButton() {
        return delete;
    }

    public Button getCancelButton() {
        return cancel;
    }

    public Binder<ExerciseDTO> getBinder() {
        return binder;
    }

    public TextField getLink() {return link; }
}
