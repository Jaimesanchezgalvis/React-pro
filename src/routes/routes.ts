import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkNAme: "LazyLayout*/ "../01-lazyload/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy-1",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
