import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/planets",
    name: "planets",
    component: PlanetView,
  },
  {
    path: "/characters",
    name: "characters",
    component: CharacterView,
  },
  {
    path: "/starships",
    name: "starships",
    component: StarshipView,
  },
  {
    path: "/details/:type/:id",
    name: "details",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
