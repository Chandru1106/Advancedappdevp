package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.LoanApplication;
import com.example.demo.service.LoanApplicationService;

@RestController
@CrossOrigin
@RequestMapping("/api/loan")
public class LoanApplicationController {

    private final LoanApplicationService loanApplicationService;

    
    public LoanApplicationController(LoanApplicationService loanApplicationService) {
        this.loanApplicationService = loanApplicationService;
    }

    @PostMapping("/apply")
    public ResponseEntity<LoanApplication> applyForLoan(@RequestBody LoanApplication loanApplication) {
        LoanApplication savedApplication = loanApplicationService.saveLoanApplication(loanApplication);
        return ResponseEntity.ok(savedApplication);
    }

    @GetMapping("/applications")
public ResponseEntity<List<LoanApplication>> getAllLoanApplications() {
    List<LoanApplication> loanApplications = loanApplicationService.getAllLoanApplications();
    return ResponseEntity.ok(loanApplications);
}

@GetMapping("/application/{id}") // Endpoint to fetch a single loan application by ID
    public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable Long id) {
        LoanApplication loanApplication = loanApplicationService.getLoanApplicationById(id);
        if (loanApplication != null) {
            return ResponseEntity.ok(loanApplication);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}") // Endpoint to handle updating loan application
public ResponseEntity<String> updateApplication(@PathVariable Long id, @RequestBody LoanApplication updatedApplication) {
    try {
        // Get the application by ID
        LoanApplication existingApplication = loanApplicationService.findById(id);
        if (existingApplication != null) {
            // Update the existing application with the data from the updated application
            
            existingApplication.setStatus(updatedApplication.getStatus());

            // Save the updated application
            loanApplicationService.saveLoanApplication(existingApplication);

            return ResponseEntity.ok("Loan application " + id + " updated successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Error updating loan application: " + e.getMessage());
    }
}
    
}
