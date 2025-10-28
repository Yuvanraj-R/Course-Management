package com.example.courseplatform.controller;

import com.example.courseplatform.model.User;
import com.example.courseplatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // This endpoint will update the GitHub link for the currently logged-in user
    @PutMapping("/github")
    public ResponseEntity<?> updateGithubLink(@RequestBody Map<String, String> payload, Authentication authentication) {
        String githubLink = payload.get("githubLink");
        if (githubLink == null || githubLink.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("GitHub link cannot be empty.");
        }

        // Get the email of the logged-in user from the security context
        String userEmail = authentication.getName();
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Set the new link and save it to the database
        user.setGithubRepo(githubLink);
        userRepository.save(user);

        return ResponseEntity.ok("GitHub link updated successfully.");
    }
    // Add this method inside the UserController class
    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String userEmail = authentication.getName();
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user);
    }
}