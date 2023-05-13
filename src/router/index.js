import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MeelsByIngredient from "../views/MeelsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import meelsByName from "../views/meelsByName.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetter
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: meelsByName
  },
  {
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: MeelsByIngredient
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;