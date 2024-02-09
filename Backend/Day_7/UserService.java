package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repo.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User signUpUser(User user) {
        // Additional validation logic if needed
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean validateUser(User user) {
        Optional<User> existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        return existingUser.isPresent();
    }

    // Additional service methods if needed
}
