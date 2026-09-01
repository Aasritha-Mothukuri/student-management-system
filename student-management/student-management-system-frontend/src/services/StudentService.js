import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/students";

export const listStudents = () => axios.get(REST_API_BASE_URL);

export const getStudentCount = () =>
    axios.get(REST_API_BASE_URL + "/count");

export const getCourseStats = () =>
    axios.get(REST_API_BASE_URL + "/course-stats");

export const searchStudents = (keyword) =>
    axios.get(REST_API_BASE_URL + "/search?keyword=" + keyword);

export const createStudent = (student) => axios.post(REST_API_BASE_URL, student);
export const getStudent = (studentId) => axios.get(REST_API_BASE_URL + '/' + studentId);
export const updateStudent = (studentId, student) =>
    axios.put(REST_API_BASE_URL + '/' + studentId, student);

export const deleteStudent = (studentId) =>
    axios.delete(REST_API_BASE_URL + '/' + studentId);