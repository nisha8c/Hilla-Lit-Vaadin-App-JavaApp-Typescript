package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

import java.util.ArrayList;
import java.util.List;

@Endpoint
@AnonymousAllowed
public class StudentEndpoint {
    private final List<Student> studentList = new ArrayList<>();

    public @Nonnull List<@Nonnull Student> getStudents()    {
        return studentList;
    }

    public Student saveStudent(Student student) {
        studentList.add(student);
        return student;
    }
}
