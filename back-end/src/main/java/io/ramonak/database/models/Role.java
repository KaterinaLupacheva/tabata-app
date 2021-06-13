package io.ramonak.database.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class Role {

    public static final String ADMIN ="admin";
    public static final String USER = "user";

    public static String[] getAllRoles() {
        return new String[] {
                ADMIN, USER
        };
    }
}
