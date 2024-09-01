<script setup></script>

<template>
  <div class="mt-6 overflow-x-auto">
    <table class="min-w-full bg-white shadow rounded-lg">
      <thead class="bg-slate-700 text-white">
        <tr>
          <th class="py-2 px-4 text-left">No#</th>
          <th class="py-2 px-4 text-left">Name</th>
          <th class="py-2 px-4 text-left">Email</th>
        </tr>
      </thead>

      <tbody>
        <tr class="border-b hover:bg-slate-100 transition">
          <td class="py-3 px-4">1</td>
          <td class="py-3 px-4">John Doe</td>
          <td class="py-3 px-4">5XUeh@example.com</td>
        </tr>
      </tbody>
    </table>


    <div class="p-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="$router.go(-1)"
        >
          Go Back
        </button>
      </div>
  </div>
</template>

<style scoped></style>
