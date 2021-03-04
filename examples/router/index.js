import {
  createWebHashHistory,
  createRouter
} from "vue-router";
import Affix from '../components/affix';
import Input from '../components/input';
import Icon from '../components/icon';
import Button from '../components/button';
import Elevation from '../components/elevation';
import Layout from '../components/layout';
import List from '../components/list';
import Carousel from '../components/carousel';

const routes = [{
    path: "/Affix",
    name: "Affix",
    component: Affix,
  },
  {
    path: "/Input",
    name: "Input",
    component: Input,
  },
  {
    path: "/Icon",
    name: "Icon",
    component: Icon,
  },
  {
    path: "/Button",
    name: "Button",
    component: Button,
  },
  {
    path: "/Elevation",
    name: "Elevation",
    component: Elevation,
  },
  {
    path: "/Layout",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/Carousel",
    name: "Carousel",
    component: Carousel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
