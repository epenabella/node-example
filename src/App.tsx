import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob("./pages/*.tsx", { eager: true });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name?.toLowerCase()}`,
    component: (pages[path] as any).default ?? <>Error loading component</>,
  };
});

export function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout routes={routes.map(_ => ({name: _.name, path: _.path})) as any}>
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return (
              <Route key={path} path={path} element={<RouteComp />}></Route>
            );
          })}
        </Routes>
      </Layout>
    </Suspense>
  );
}
