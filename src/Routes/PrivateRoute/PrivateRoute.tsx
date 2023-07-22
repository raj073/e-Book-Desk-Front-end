/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { setLoading, setUser } from "../../Redux/Features/User/userSlice";
import Loader from "../../Components/Loader/Loader";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps): JSX.Element | null {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    // Simulate an asynchronous user check (you should replace this with your actual authentication check)
    dispatch(setLoading(true));
    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      dispatch(setUser(storedUser));
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to={"/login"} state={{ path: pathname }}></Navigate>;
  }

  return <>{children}</>;
}
