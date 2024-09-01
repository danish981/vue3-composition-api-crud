<script setup></script>

<template>
  <div class="bg-oragne-600 p-4 grid grid-cols-9">
    <div class="col-span-6 md:col-span-8">
      <h1 class="text-3xl md:text-5xl font-bold text-white">Student list</h1>
    </div>
  </div>

  <table class="table-auto w-full">
    <thead class="bg-slate-600 text-white">
      <tr>
        <th class="py-1">No#</th>
        <th class="py-1">Name</th>
        <th class="py-1">Email</th>
        <th class="py-1">Action</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>5XUeh@example.com</td>
        <td class="text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            Edit
          </button>

          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
