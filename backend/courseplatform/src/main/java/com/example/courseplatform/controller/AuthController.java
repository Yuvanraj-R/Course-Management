package com.example.courseplatform.controller;

import com.example.courseplatform.dto.LoginRequest;
import com.example.courseplatform.dto.LoginResponse;
import com.example.courseplatform.model.User;
import com.example.courseplatform.repository.UserRepository;
import com.example.courseplatform.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        // Step 1: Standard authentication (checks email and password)
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Step 2: Fetch the user from the database
        User user = userRepository.findByEmail(loginRequest.getEmail()).get();

        // Step 3: NEW - Verify the role
        // Compares the role in DB (e.g., STUDENT) with the role from the request (e.g., STUDENT)
        if (!user.getRole().name().equalsIgnoreCase(loginRequest.getRole())) {
            // If the roles do not match, deny access.
            return new ResponseEntity<>("Access Denied for this role.", HttpStatus.FORBIDDEN);
        }

        // Step 4: If everything matches, create and return the token
        String jwt = tokenProvider.createToken(user.getEmail(), user.getRole());
        return ResponseEntity.ok(new LoginResponse(jwt, user.getRole(), user.getName()));
    }
}