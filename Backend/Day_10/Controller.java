package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class Controller {

    @GetMapping("/sample")
    public String requestMethodName() {
        return "helooo";
    }
    
    
}
