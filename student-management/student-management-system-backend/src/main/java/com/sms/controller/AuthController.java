package com.sms.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sms.dto.LoginDTO;
import com.sms.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody LoginDTO loginDTO) {

        return ResponseEntity.ok(authService.login(loginDTO));

    }

}