<script setup>
import { reactive } from "vue";

import useStudents from "@/composables/studentApi";

const { students, error, addNewStudent } = useStudents();

const formData = reactive({ name: "", email: "" });

const handleSubmit = async () => {
  await addNewStudent(formData);
};
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-white">Add Student</h1>
    </div>

    <form action="" @submit.prevent="handleSubmit" class="w-full" id="addStudentForm">
      <div class="p-4">
        <label for="name" class="block text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          v-model.trim="formData.name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="p-4">
        <label for="email" class="block text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          v-model.trim="formData.email"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="p-4">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </div>

      <!-- we can use router-link to go back -->
      <!-- but we have used this  -->
      <div class="p-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="$router.go(-1)"
        >
          Go Back
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
