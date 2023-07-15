import MainLayout from "./Layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster></Toaster>
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;
