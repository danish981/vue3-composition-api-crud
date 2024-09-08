<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";

import useStudents from "@/composables/studentApi";
import { onMounted } from "vue";

const {
  students,
  error,
  statusCode,
  deleteError,
  getAllStudents,
  deleteStudent,
} = useStudents();

onMounted(() => {
  getAllStudents();
});

const handleDeleteStudent = async (id) => {
  if (!window.confirm("Are you sure you want to delete this record? ")) {
    return;
  }

  await deleteStudent(id);

  console.log("deleted" + id);

  await getAllStudents();

  // todo : we will use await and delete method here to delete ther user
};
</script>

<template>
  <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg shadow-lg">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white">Student List</h1>

      <RouterLink :to="{ name: 'Add' }">
        <button
          class="flex items-center bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow transition-all"
        >
          <UserPlusIcon class="h-5 w-5 mr-2" />
          Add Student
        </button>
      </RouterLink>
    </div>
  </div>

  <div class="mt-6 overflow-x-auto">
    <div v-if="error">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
      >
        <strong class="font-bold">Error: </strong>
        <span class="block sm:inline">{{ error.message }}</span>
      </div>
    </div>

    <table class="min-w-full bg-white shadow rounded-lg">
      <thead class="bg-slate-700 text-white">
        <tr>
          <th class="py-2 px-4 text-left">No#</th>
          <th class="py-2 px-4 text-left">Name</th>
          <th class="py-2 px-4 text-left">Email</th>
          <th class="py-2 px-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody v-if="!error">
        <tr
          class="border-b hover:bg-slate-100 transition"
          v-for="({ id, name, email }, i) in students"
          :key="id"
        >
          <td class="py-3 px-4">{{ ++i }}</td>
          <td class="py-3 px-4">{{ name }}</td>
          <td class="py-3 px-4">{{ email }}</td>
          <td class="py-3 px-4 text-center flex justify-center space-x-2">
            <router-link :to="{ name: 'View', params: { id: id } }">
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded shadow transition-all"
              >
                <EyeIcon class="h-5 w-5" />
              </button>
            </router-link>
            <router-link :to="{ name: 'Edit', params: { id: id } }">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded shadow transition-all"
              >
                <PencilIcon class="h-5 w-5" />
              </button>
            </router-link>
            <button
              @click="handleDeleteStudent(id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded shadow transition-all"
            >
              <TrashIcon class="h-5 w-5" />
            </button>
          </td>
        </tr>
      </tbody>

      <!-- If error exists, display a message instead of the table rows -->
      <tbody v-else>
        <tr>
          <td colspan="4" class="py-3 px-4 text-center text-red-500 font-semibold">
            Something went wrong! Please try again.
          </td>
        </tr>
      </tbody>
    </table>

    <!-- if the student is deleted successfully -->
    <div
      v-if="statusCode === 200"
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Success!</strong>
      <span class="block sm:inline">Student deleted successfully.</span>
    </div>

    <!-- we are catching the error from exception error so that we are extracting the message from the reactive error property -->
    <div
      v-if="deleteError"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">Unable to delete: {{ deleteError.message }}</span>
    </div>
  </div>
</template>

<style scoped></style>
