package io.ramonak.database.repository;

import io.ramonak.database.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsername(String username);
    User findByEmailIgnoreCase(String email);
}
