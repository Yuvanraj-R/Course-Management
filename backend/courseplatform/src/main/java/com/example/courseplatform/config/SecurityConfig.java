package com.example.courseplatform.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import com.example.courseplatform.security.JwtAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// Make sure this import is correct
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Use the modern lambda DSL to disable CSRF
                .csrf(AbstractHttpConfigurer::disable)

                // Add your CORS filter configuration
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                // Make the session stateless
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                // Define authorization rules

                // Inside the securityFilterChain method in SecurityConfig.java

                .authorizeHttpRequests(auth -> auth
                        // 1. Allow public access to the login endpoint
                        .requestMatchers("/api/auth/**").permitAll()

                        // 2. IMPORTANT: Allow ANY authenticated user to access their own data
                        .requestMatchers("/api/user/**").authenticated()

                        // 3. (Optional but good practice) Specify that only STUDENTS can access student-specific paths
                        .requestMatchers("/api/student/**").hasAuthority("STUDENT")
                        // Inside .authorizeHttpRequests()
                        .requestMatchers("/api/admin/**").hasAuthority("ADMIN")
                        // Inside .authorizeHttpRequests() in SecurityConfig.java
                        .requestMatchers("/api/admin/meetings").hasAuthority("ADMIN")
                        .requestMatchers("/api/meetings/**").authenticated() // Allow any logged-in user

                        // 4. All other requests must be authenticated (this is a good default)
                        .anyRequest().authenticated()
                );
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    // Extracted CORS configuration for clarity
    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000"); // Your React app's origin
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return source;
    }
    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

}