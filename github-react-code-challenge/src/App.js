import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./routes/protectedRouter";
import { RoutingLink } from "./routes/routingLink";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {RoutingLink.map((route, index) => {
            return route.protected ? (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  <ProtectedRouter
                    Component={route.component}
                    redirectTo={route.redirect}
                    name={route.name}
                  />
                }
              />
            ) : (
              <Route
                key={index}
                path={route.path}
                exact
                element={route.component}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
