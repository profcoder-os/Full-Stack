package com.Sample.Rest_Api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sample.Rest_Api.Model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
		
}