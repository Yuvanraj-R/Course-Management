package com.example.courseplatform.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data // Lombok annotation for getters, setters, etc.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        STUDENT,
        ADMIN
    }
    @Column(name = "superset_id") // Maps this field to the 'superset_id' column in your DB
    private String supersetId;

    @Column(name = "github_repo") // Maps this field to the 'github_repo' column in your DB
    private String githubRepo;
}