<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref,computed } from "vue";
import { useRoute } from "vue-router";
import { useMealStore } from "../store/mealsStore.js";
const mealsStore = useMealStore()
import Meals from '../components/Meals.vue'

const route = useRoute();
const ingredient = computed(() => mealsStore.ingredient)
const meals = computed(() => mealsStore.mealsByIngredient)

onMounted(() => {
  mealsStore.searchMealsByIngredient(route.params.ingredient)
})

</script>
