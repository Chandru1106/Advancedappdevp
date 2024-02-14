package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.LoanApplication;
import com.example.demo.repo.LoanApplicationRepository;

@Service
public class LoanApplicationService {

    private final LoanApplicationRepository repository;

    public LoanApplicationService(LoanApplicationRepository repository) {
        this.repository = repository;
    }

    public LoanApplication saveLoanApplication(LoanApplication loanApplication) {
        return repository.save(loanApplication);
    }

    public List<LoanApplication> getAllLoanApplications() {
        return repository.findAll();
    }
    public LoanApplication getLoanApplicationById(Long id) {
        Optional<LoanApplication> optionalLoanApplication = repository.findById(id);
        return optionalLoanApplication.orElse(null);
    }

    public LoanApplication findById(long id) {
        return repository.findById(id).orElse(null);
    }
    
    public LoanApplication updateApplication(LoanApplication application) {
        // Additional validation logic if needed
        return repository.save(application);
    }
}

