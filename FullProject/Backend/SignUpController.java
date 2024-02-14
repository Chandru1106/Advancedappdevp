package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.AuthResponse;
import com.example.demo.entity.UserInfo;
import com.example.demo.repo.UserInfoRepository;
import com.example.demo.service.JwtService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class SignUpController {
   
    @Autowired
    private UserInfoRepository userRepo;

    @Autowired
    private JwtService jwtService;

    // @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

   

    @PostMapping("/register")
    public String addUser(@RequestBody UserInfo userInfo) 
    {
        userInfo.setPassword(passwordEncoder().encode(userInfo.getPassword()));
        userRepo.save(userInfo);
        return "user added to system ";
    }

    @PostMapping("/authenticate")
public AuthResponse authenticate(@RequestBody AuthRequest authRequest) {
    AuthResponse res = jwtService.createJwtToken(authRequest);
    System.out.println(authRequest.getUsername() + " " + authRequest.getPassword() + "=> ");
    return jwtService.createJwtToken(authRequest);
}
   
 
}
