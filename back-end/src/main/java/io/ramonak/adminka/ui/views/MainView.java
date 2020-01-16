package io.ramonak.adminka.ui.views;

import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.Viewport;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLayout;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.material.Material;
import io.ramonak.adminka.ui.utils.AppConst;

@Route(AppConst.ROOT)
@Theme(value = Material.class, variant = Material.DARK)
@Viewport(AppConst.VIEWPORT)
@PWA(name = "Tabata Progressive Web App", shortName = "TABATA")
public class MainView extends VerticalLayout implements RouterLayout, HasStyle {

    public MainView() {
        setSizeFull();
    }

}
