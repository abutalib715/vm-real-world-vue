import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/Layout.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventCreate from "../views/EventCreate.vue";
import About from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/event/:id",
      name: "EventLayout",
      component: EventLayout,
      children: [{
            path: "",
            name: "EventDetails",
            component: EventDetails
          },
          {
            path: "register",
            name: "EventRegister",
            component: EventRegister
          },
          {
            path: "edit",
            name: "EventEdit",
            component: EventEdit
          }
      ]
    },
    {
      path: "/event/create",
      name: "EventCreate",
      component: EventCreate
    },
  ],
});

export default router;
