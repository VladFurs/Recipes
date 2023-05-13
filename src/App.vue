<script setup></script>

<template>
  <div class="bg-gray-200 h-screen">
    <header class="bg-white h-16 shadow-md flex justify-between items-stretch">
      <router-link
        to="/"
        class="inline-flex items-center h-full p-5"
        >Home</router-link
      >
      <div class="flex gap-4 items-center h-full">
        <router-link
          class="h-full inline-flex items-center px-5 transition-colors hover:bg-purple-100"
          :to="{name: 'byName'}"
          >Serch Meals</router-link
        >
        <router-link
          class="h-full inline-flex items-center px-5 transition-colors hover:bg-purple-100"
          :to="{name: 'byLetter'}"
          >Meals By Letter</router-link
        >
        <router-link
          class="h-full inline-flex items-center px-5 transition-colors hover:bg-purple-100"
          :to="{name: 'byIngredient'}"
          >Meels By Ingredient</router-link
        >
      </div>
    </header>
    <main><RouterView class="" /></main>
  </div>
</template>

<style scoped></style>
