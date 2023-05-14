import { defineStore } from "pinia";
import { ref, computed} from "vue";
import axiosClient from "../axiosClient";
export const useMealStore = defineStore("MealStore", () => {
  const searchedMeals = ref([]);
  const mealsByLetter = ref([]);
  const mealsByIngredient = ref([]);
  const ingredient = ref({});

  const searchMeals = (keyword) => {
    searchedMeals.value = [];
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      Array.prototype.push.apply(searchedMeals.value, data.meals);
    });
  };
  const searchMealsByLetter = (letter) => {
    mealsByLetter.value = [];
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      Array.prototype.push.apply(mealsByLetter.value, data.meals);
    });
  };

  const searchMealsByIngredient = (ing) => {
    axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
      mealsByIngredient.value = data.meals;
    });
  };
  const setSearchedMeals = computed((meals) => {
    searchedMeals.value = meals || [];
  });

  const setIngredient = computed((meals) => {
    setIngredient.value = meals || [];
  });
  const setMealsByLetter=(meals) => {
    mealsByLetter.value = meals || []
  }
  const setMealsByIngredients=(meals) => {
    mealsByIngredient.value = meals || []
  }
  return {
    searchMealsByIngredient,
    searchMealsByLetter,
    setIngredient,
    setMealsByIngredients,
    setMealsByLetter,
    searchedMeals,
    mealsByLetter,
    mealsByIngredient,
    ingredient,
    searchMeals,
    setSearchedMeals,
  };
});
