import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    props: true,
    component: MovieDetail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
