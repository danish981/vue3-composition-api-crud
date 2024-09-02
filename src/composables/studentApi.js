

import { ref } from "vue";
import axios from "axios";


// write compostable function to get all students, the function name should be useStudents, `use(EntityName)`
export default function useStudents() {

    const url = "http://localhost:3000/students";
    const students = ref([]);
    const error = ref(null);

    // get all students
    const getAllStudents = async () => {
        students.value = [];    // what if the students are already loaded and it has some data, then it will be replaced by an empty array
        error.value = null;
        try {
            const response = await axios.get(url);
            console.log(response.data);
            students.value = response.data;
            return response.data;
        } catch (exceptionError) {
            // console.log(exceptionError);
            error.value = exceptionError;
        }
    };


    return {
        students,
        error,
        getAllStudents
    }


};



