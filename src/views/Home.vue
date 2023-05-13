<template>
  <div class="flex flex-col items-center p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Поиск Блюд"
    />
    <div class="flex gap-2 mt-2">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters.split('')"
        :key="letter"
      >
        {{ letter }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import {  onMounted, ref } from "vue";
  import { RouterLink } from "vue-router";
  import { axiosClient } from "../axiosClient";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ingredients = ref([]);
  onMounted(async () => {
    const response = await axiosClient.get("/list.php?i=list");
    console.log(response.data);
    ingredients.value = response.data;
  });
</script>
