import { Home, About, TechStackView, SettingView } from "views";
import { RouteItems } from "./RouteFactory";

export const homeRouteItmes: RouteItems[] = [
  { name: "home", path: "/", component: Home, exact: false, priority: 1 },
  { name: "about", path: "/about", component: About, exact: true },
  {
    name: "tech-stack",
    path: "/tech-stack",
    component: TechStackView,
    exact: true,
  },
  {
    name: "setting",
    path: "/setting",
    component: SettingView,
    exact: true,
  },
];
