import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";
import Timeline from "../views/Timeline.vue";
import notFound from "../views/notFound.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/skills",
    name: "Skilss",
    component: Skills
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  },
  {
    path: "*",
    name: "notFound",
    component: notFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let x = [0, 90, 180, 270, 360]; //define your options
let ang;
let rotate;

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  rotate = document.getElementById("gBackground")
  let oAng = ang;
  ang = getRandomArbitrary(0, 5); //pick one option

  while(ang == oAng) { //your option can't be the one you picked before
    ang = getRandomArbitrary(0, 5);
  }
  if(rotate != null) {
    if(to.name == "Home") {
      rotate.style.transform = `rotate(0deg)`
    } else rotate.style.transform = `rotate(${x[ang]}deg)`

  }
  next()
}) 

export default router;
