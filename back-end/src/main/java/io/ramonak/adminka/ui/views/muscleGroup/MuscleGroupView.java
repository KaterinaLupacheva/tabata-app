package io.ramonak.adminka.ui.views.muscleGroup;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import io.ramonak.adminka.ui.utils.AppConst;
import io.ramonak.adminka.ui.views.MainView;
import io.ramonak.service.dto.MuscleGroupDTO;
import io.ramonak.service.services.MuscleGroupService;

@Route(value = AppConst.ROOT + "/" + AppConst.PAGE_MUSCLE_GROUP, layout = MainView.class)
class MuscleGroupView extends VerticalLayout {

    private final MuscleGroupService muscleGroupService;
    private final Grid<MuscleGroupDTO> grid;
    private final MuscleGroupForm form;

    public MuscleGroupView(MuscleGroupService muscleGroupService) {
        setSizeFull();
        this.muscleGroupService = muscleGroupService;
        this.form = new MuscleGroupForm(muscleGroupService);
        grid = new Grid<>(MuscleGroupDTO.class);
        grid.setColumns("name");
        updateList();
        grid.asSingleSelect().addValueChangeListener(e -> form.setBean(e.getValue()));
        HorizontalLayout mainContent = new HorizontalLayout(grid, form);
        grid.setSizeFull();
        mainContent.setSizeFull();
        form.setVisible(false);
        setupClickListenersToButtons();

        Button addMuscleGroup = new Button("Add Muscle Group");
        addMuscleGroup.addThemeVariants(ButtonVariant.MATERIAL_OUTLINED);
        addMuscleGroup.addClickListener(e -> {
            grid.asSingleSelect().clear();
            form.setBean(new MuscleGroupDTO());
        });
        add(addMuscleGroup, mainContent);
    }

    private void setupClickListenersToButtons() {
        form.getSaveButton().addClickListener(e -> save());
        form.getSaveButton().addClickShortcut(Key.ENTER);
        form.getDeleteButton().addClickListener(e -> delete());
        form.getCancelButton().addClickListener(e -> cancel());
    }

    private void save() {
        muscleGroupService.saveMuscleGroup(form.getBinder().getBean());
        updateList();
        form.setBean(null);
    }

    private void delete() {
        muscleGroupService.deleteMuscleGroup(form.getBinder().getBean());
        updateList();
        form.setBean(null);
    }

    private void cancel() {
        form.setBean(null);
    }

    private void updateList() {
        grid.setItems(muscleGroupService.getAllMuscleGroups());
    }
}
