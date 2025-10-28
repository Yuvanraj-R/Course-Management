package com.example.courseplatform.controller;

import com.example.courseplatform.model.User;
import com.example.courseplatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/students")
    public ResponseEntity<List<User>> getAllStudents() {
        // Find all users where the role is STUDENT
        List<User> students = userRepository.findByRole(User.Role.STUDENT);
        return ResponseEntity.ok(students);
    }
}