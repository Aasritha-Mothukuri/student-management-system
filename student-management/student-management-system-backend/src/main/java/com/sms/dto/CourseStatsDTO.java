package com.sms.dto;

public class CourseStatsDTO {

    private String course;
    private long studentCount;

    public CourseStatsDTO() {
    }

    public CourseStatsDTO(String course, long studentCount) {
        this.course = course;
        this.studentCount = studentCount;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public long getStudentCount() {
        return studentCount;
    }

    public void setStudentCount(long studentCount) {
        this.studentCount = studentCount;
    }
}