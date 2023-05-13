<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class=" mb-8 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
  import { onMounted, computed, ref } from "vue";
  import { useMealStore } from "../store/mealsStore";
  import { useRoute } from "vue-router";
  import Meals from "../components/Meals.vue";
  const MealStore = useMealStore();
  const meals = computed(() => MealStore.searchedMeals);
  const keyword = ref("");
  const route = useRoute();
  const searchMeals = () => {
    if (keyword.value) {
      MealStore.searchMeals(keyword.value);
      keyword.value = ''
    } 
};

</script>
