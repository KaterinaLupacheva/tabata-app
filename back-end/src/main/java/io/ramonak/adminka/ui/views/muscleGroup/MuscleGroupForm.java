package io.ramonak.adminka.ui.views.muscleGroup;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.spring.annotation.SpringComponent;
import io.ramonak.service.dto.MuscleGroupDTO;
import io.ramonak.service.services.MuscleGroupService;


@SpringComponent
public class MuscleGroupForm extends FormLayout {

    private final TextField name;
    private Binder<MuscleGroupDTO> binder;
    private final Button save;
    private final Button delete;
    private final Button cancel;

    public MuscleGroupForm(MuscleGroupService muscleGroupService) {
        name = new TextField("Name");

        save = new Button("Save");
        delete = new Button("Delete");
        cancel = new Button("Cancel");
        HorizontalLayout buttons = new HorizontalLayout(save, delete, cancel);
        buttons.setSizeFull();
        buttons.getStyle().set("margin-top", "30px");
        buttons.setJustifyContentMode(FlexComponent.JustifyContentMode.CENTER);
        add(name, buttons);
        setupBinder();
    }

    private void setupBinder() {
        binder = new Binder<>(MuscleGroupDTO.class);
        binder.bindInstanceFields(this);
    }

    public void setBean(MuscleGroupDTO muscleGroupDTO) {
        binder.setBean(muscleGroupDTO);
        if(muscleGroupDTO == null) {
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

    public Binder<MuscleGroupDTO> getBinder() {
        return binder;
    }
}
