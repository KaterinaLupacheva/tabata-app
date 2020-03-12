package io.ramonak.adminka.ui.views.exercise;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.Route;
import io.ramonak.adminka.ui.components.UploadVideo;
import io.ramonak.adminka.ui.utils.AppConst;
import io.ramonak.adminka.ui.views.MainView;
import io.ramonak.service.dto.ExerciseDTO;
import io.ramonak.service.services.ExerciseService;
import io.ramonak.service.services.MuscleGroupService;
import org.springframework.beans.factory.annotation.Value;

@Route(value = AppConst.ROOT + "/" + AppConst.PAGE_EXERCISE, layout = MainView.class)
class ExerciseView extends VerticalLayout {

    private final ExerciseService exerciseService;
    private final Grid<ExerciseDTO> grid;
    private final ExerciseForm form;
    private final UploadVideo upload;

    public ExerciseView(ExerciseService exerciseService, MuscleGroupService muscleGroupService,
                        @Value("${aws.accessKey}") String accessKey, @Value("${aws.secretKey}") String secretKey) {
        setSizeFull();

        this.exerciseService = exerciseService;
        this.form = new ExerciseForm(exerciseService, muscleGroupService);

        grid = new Grid<>(ExerciseDTO.class);
        grid.setColumns("number", "name", "muscleGroupName", "link");
        grid.addColumn(new ComponentRenderer<>(ex -> {
            Checkbox checkbox = new Checkbox();
            if(ex.getIsWithWeights()==null) {
                checkbox.setValue(false);
            } else {
                checkbox.setValue(ex.getIsWithWeights());
            }
            return checkbox;
        })).setHeader("Weights");
        updateList();
        grid.asSingleSelect().addValueChangeListener(e -> form.setBean(e.getValue()));
        HorizontalLayout mainContent = new HorizontalLayout(grid, form);
        grid.setSizeFull();
        mainContent.setSizeFull();
        form.setVisible(false);
        setupClickListenersToButtons();

        upload = new UploadVideo(accessKey, secretKey);
        upload.uploadVideo(form.getLink());
        form.addComponentAtIndex(3, upload);

        Button addExercise = new Button("Add Exercise");
        addExercise.addThemeVariants(ButtonVariant.MATERIAL_OUTLINED);
        addExercise.addClickListener(e -> {
            grid.asSingleSelect().clear();
            form.setBean(new ExerciseDTO());
            upload.clearFileName();
        });

        add(addExercise, mainContent);
    }

    private void updateList() {
        grid.setItems(exerciseService.getAllExercises());
    }

    private void setupClickListenersToButtons() {
        form.getSaveButton().addClickListener(e -> save());
        form.getSaveButton().addClickShortcut(Key.ENTER);
        form.getDeleteButton().addClickListener(e -> delete());
        form.getCancelButton().addClickListener(e -> cancel());
    }

    private void save() {
        exerciseService.saveExercise(form.getBinder().getBean());
        updateList();
        form.setBean(null);
    }

    private void delete() {
        exerciseService.deleteExercise(form.getBinder().getBean());
        updateList();
        form.setBean(null);
    }

    private void cancel() {
        form.setBean(null);
    }
}
