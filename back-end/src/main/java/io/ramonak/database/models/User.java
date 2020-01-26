package io.ramonak.database.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Data
@EqualsAndHashCode(exclude = "id")
@Entity
@Table(name = "UserInfo")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(unique = true)
    @NotNull
    private String username;

    @Column(unique = true)
    @Email
    @NotNull
    private String email;

    @Column
    @NotNull
    private String passwordHash;

    @PrePersist
    @PreUpdate
    private void prepareData(){
        this.email = email == null ? null : email.toLowerCase();
    }

    @NotBlank
    private String role;

    private boolean locked = false;
}
