/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MainLayout from "./Layout/MainLayout";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAppDispatch } from "./Redux/Hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Lib/firebase";
import { setLoading, setUser } from "./Redux/Features/User/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  });

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
