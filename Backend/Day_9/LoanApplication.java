package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "loan_application")
public class LoanApplication {

    @Id
   
    // @Column(name = "application_id")
    private Long applicationId;

    // @Column(name = "full_name")
    private String fullName;

    // @Column(name = "contact_number")
    private String contactNumber;

    // @Column(name = "email")
    private String email;

    // @Column(name = "loan_amount")
    private String loanAmount;

    // @Column(name = "purpose")
    private String purpose;

    // @Column(name = "loan_type")
    private String loanType;

    // // @Column(name = "document_type")
    private String documentType;
    
    // // @Column(name = "file")
    private String file;

    public LoanApplication() {}

    public LoanApplication(Long applicationId, String fullName, String contactNumber, String email, String loanAmount,
                           String purpose,
                            String loanType, String documentType, String file
                            ) 
                           {
        this.applicationId = applicationId;
        this.fullName = fullName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.loanAmount = loanAmount;
        this.purpose = purpose;
        this.loanType = loanType;
        this.documentType = documentType;
        this.file = file;
    }

    public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(String loanAmount) {
        this.loanAmount = loanAmount;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
