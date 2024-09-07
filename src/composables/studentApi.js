import { ref } from "vue";
import axios from "axios";

// write compostable function to get all students, the function name should be useStudents, `use(EntityName)`
export default function useStudents() {
  const url = "http://localhost:4000/students/";
  const students = ref([]);
  const error = ref(null);

  // get all students
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
    }
  };

  return {
    students, // we have used the single variable for single student data and all students data
    error,
    getAllStudents,
    getSingleStudentData,
  };
}
