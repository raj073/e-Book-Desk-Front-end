import MainLayout from "./Layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="overflow-hidden mx-auto">
        <Toaster></Toaster>
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;
