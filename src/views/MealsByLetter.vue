<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500 text-center">
      Meals by Letter
    </h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
  import { onMounted, watch, computed } from "vue";
  import { useMealStore } from "../store/mealsStore";
  import { useRoute } from "vue-router";
  import Meals from "../components/Meals.vue";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MealStore = useMealStore();
  const route = useRoute();

  const meals = computed(() => MealStore.mealsByLetter);

  watch(route, () => {
    MealStore.searchMealsByLetter(route.params.letter);
  });
</script>
