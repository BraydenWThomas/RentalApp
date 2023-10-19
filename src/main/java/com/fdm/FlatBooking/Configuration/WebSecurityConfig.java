package com.fdm.FlatBooking.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

/**
 *
 * The main WebSecurityConfiguration for the application. It has the
 * SecurityFilterChain
 * that controls the application handles each request.
 *
 * @author Jian
 * @version 1.0.0
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
public class WebSecurityConfig {

    /**
     * The security filter chain. Add paths accordingly here.
     * 
     * @param http
     * @return
     * @throws Exception
     */
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((requests) -> requests
                .requestMatchers("/index*", "/")
                .permitAll()
                .requestMatchers("/css/**", "/icons/**", "/images/**", "/js/**", "/webjars/**", "/upload/**")
                .permitAll()

                // All request
                .anyRequest().permitAll())
                .csrf(AbstractHttpConfigurer::disable)

                // The login mappings.
                // .formLogin((form) -> form.loginPage("/login")
                // .permitAll()
                // .defaultSuccessUrl("/index"))
                .logout((logout) -> logout.permitAll());

        return http.build();
    }

}
