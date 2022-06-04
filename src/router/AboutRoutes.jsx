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
    path: "/detaileA",
    exact: false,
    children: <AboutDetailA />
  },
  {
    path: "/detaileB",
    exact: false,
    children: <AboutDetailB />
  }
];
