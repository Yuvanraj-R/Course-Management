package com.example.courseplatform.dto;

import com.example.courseplatform.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String token;
    private User.Role role;
    private String name;
}