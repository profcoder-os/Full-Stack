package com.Sample.Rest_Api.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sample.Rest_Api.Model.Student;
import com.Sample.Rest_Api.Repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student getStudentById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Student updateStudent(Student student) {
        Student existing = repository.findById(student.getId()).orElse(null);
        if (existing != null) {
            if (student.getName() != null) {
                existing.setName(student.getName());
            }
            return repository.save(existing);
        }
        return null;
    }

    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}