package com.example.demo.controller;

import java.util.List;

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
    
}
