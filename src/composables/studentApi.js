import { ref } from "vue";
import axios from "axios";

// write compostable function to get all students, the function name should be useStudents, `use(EntityName)`
export default function useStudents() {
  // todo : make the url dynamic by adding the port number or endpoint in a seperate file
  const url = "http://localhost:4000/students/";
  const students = ref([]);
  const error = ref(null);

  const validateIfEmailAlreadyExists = () => {
    //todo : add validattions for the email
  };

  // todo :we will add the username in the json after, we will expand this application later
  const createUsernameForStudent = (name) => {
    // todo : logic for createUsername for student
    // add logic for creating a username for a student from provided name
    // search for existing names in the db
    // if name found seearch for count, if found, increment the counter and concatenate with name and return the username string
    // if not found, return the name as the username
  };

  // get / fetch all students record
  const getAllStudents = async () => {
    students.value = []; // what if the students are already loaded and it has some data, then it will be replaced by an empty array
    error.value = null;
    try {
      const response = await axios.get(url);
      //   console.log(response.data);
      students.value = response.data;
      return response.data;
    } catch (exceptionError) {
      // console.log(exceptionError);
      error.value = exceptionError;
    }
  };

  // fetch / get record of a single student
  const getSingleStudentData = async (id) => {
    students.value = [];
    error.value = null;

    try {
      const response = await axios.get(url + id);
      console.log(response.data);
      students.value = response.data;
      return response.data;
    } catch (exceptionError) {
      console.log(exceptionError);
      error.value = exceptionError;
    }
  };

  // adding a new student
  const addNewStudent = async (formData) => {
    students.value = [];
    error.value = null;

    try {
      const config = {
        method: "POST",
        url: url,
        headers: {
          "Content-type": "Application/json",
        },
        data: JSON.stringify(formData),
      };

      const response = await axios(config);
      // todo: create validation that name cannot be duplciated if editied or added somehow

      students.value = response.data;

      console.log(response);
      return students.value;
    } catch (exceptionError) {
      console.log(exceptionError);
      error.value = exceptionError;
    }
  };

  // updating a student, id that holds the id of particular record, and formdata is the request data
  const updateStudentData = async (id, formData) => {
    students.value = [];
    error.value = null;

    // see the json-server docs for udpating the data
    try {
      const config = {
        method: "PUT",
        url: url + id,
        headers: {
          "Content-type": "Application/json",
        },
        data: JSON.stringify(formData),
      };

      const response = await axios(config);
      // todo: create validation that name cannot be duplciated if editied or added somehow

      students.value = response.data;

      console.log(response);
      return students.value;
    } catch (exceptionError) {
      console.log(exceptionError);
      error.value = exceptionError;
    }
  };

  const deleteStudent = async (id) => {
    students.value = [];
    error.value = null;

    try {
      const config = {
        method: "DELETE",
        url: url + id,
        headers: {
          "Content-type": "Application/json",
        },
      };

      const response = await axios(config);
      students.value = response.data;
      console.log(students.value);
      return students.value;
    } catch (exceptionError) {
      console.log(exceptionError);
      error.value = exceptionError;
    }
  };

  return {
    students, // everything we call a method, we store the response into this reactive variable and fetch this from the import from component
    error,
    getAllStudents,
    getSingleStudentData,
    addNewStudent,
    updateStudentData,
    updateStudentData,
    deleteStudent,
  };
}
