package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication

@OpenAPIDefinition(
		info =@Info(
				title = "GrowWise Capital",
				version = "1.1.2",
				description = " We help farmers get the financial support they need for their agricultural endeavors.",
				contact = @Contact(
						name = "Chandru",
						email = "727721euit022@skcet.ac.in"
						)
				)
		)

public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
