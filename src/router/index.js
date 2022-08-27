import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from "../views/EventCreate.vue";
import About from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      component: EventDetails
    },
    {
      path: "/event/create",
      name: "EventCreate",
      component: EventCreate
    },
  ],
});

export default router;
