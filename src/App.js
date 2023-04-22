import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const showRoutes = useRoutes(routes);

  if (user === null) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      <Toaster position="top-right" />
      {showRoutes}
    </>
  );
}

export default App;
