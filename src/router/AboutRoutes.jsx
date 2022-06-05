import { About } from "../About";
import { AboutDetailA } from "../AboutDetailA";
import { AboutDetailB } from "../AboutDetailB";

export const AboutRoutes = [
  {
    path: "/",
    exact: true,
    children: <About />
  },
  {
    path: "/detailA",
    exact: false,
    children: <AboutDetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <AboutDetailB />
  }
];
