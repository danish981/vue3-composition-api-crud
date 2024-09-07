<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";

import useStudents from "@/composables/studentApi";
import { onMounted } from "vue";

const { students, error, getAllStudents } = useStudents();

onMounted(() => {
  getAllStudents();
});

const deleteStudent = async (id) => {
  console.log(id);
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
    <table class="min-w-full bg-white shadow rounded-lg">
      <thead class="bg-slate-700 text-white">
        <tr>
          <th class="py-2 px-4 text-left">No#</th>
          <th class="py-2 px-4 text-left">Name</th>
          <th class="py-2 px-4 text-left">Email</th>
          <th class="py-2 px-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        <!-- we have destructured the output from the useStudents, we can use it directly -->
        <!-- this is other approach we have used -->
        <tr
          class="border-b hover:bg-slate-100 transition"
          v-for="({ id, name, email }, i) in students"
          :key="id"
        >
          <!-- array starts from 0, so we have incremented this -->
          <!-- i is just a counter, not the actually array id -->
          <td class="py-3 px-4">{{ ++i }}</td>

          <!-- as we have destructued the student, we can use its properties directly -->
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
              @click="deleteStudent(id)"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded shadow transition-all"
            >
              <TrashIcon class="h-5 w-5" />
            </button>
          </td>
        </tr>
        <!-- Repeat the above <tr> block for more rows -->
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
