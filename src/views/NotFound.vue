<script setup></script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    <div class="text-center">
      <h1 class="text-6xl font-extrabold text-white mb-4 animate-bounce">404</h1>
      <p class="text-3xl font-bold text-white mb-6">Student Not Found</p>
      <p class="text-lg text-white opacity-80 mb-8">
        The student you are looking for does not exist or has been removed.
      </p>
      <a
        href="/"
        class="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
      >
        Go Home
      </a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
