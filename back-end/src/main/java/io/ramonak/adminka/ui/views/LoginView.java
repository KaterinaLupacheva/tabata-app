package io.ramonak.adminka.ui.views;

import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = LoginView.ROUTE)
@PageTitle("Login")
public class LoginView extends VerticalLayout {
    public static final String ROUTE = "login";

    public LoginView() {
        LoginForm login = new LoginForm();
        login.setAction("login"); //
        add(login);
        setAlignItems(Alignment.CENTER);
    }
}
