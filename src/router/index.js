import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import PlanetView from "../views/PlanetView.vue";
import StarshipView from "../views/StarshipView.vue";
import CharacterView from "../views/CharacterView.vue";
import FavoriteView from "../views/FavoriteView.vue";

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
  {
    path: "/favorites",
    name: "favorites",
    component: FavoriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
