<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all flex flex-col justify-between">
    
      <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </RouterLink>
    
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import YouTubeButton from "./YouTubeButton.vue";
  const truncateWords = (str, count) => {
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ");
  };
  const { meal } = defineProps({
    meal: {
      required: true,
      type: Object,
    },
  });
</script>
