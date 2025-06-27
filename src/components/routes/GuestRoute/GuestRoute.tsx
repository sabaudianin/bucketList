import { Navigate } from "react-router-dom";
import { useUser } from "../../../hooks/user/useUser/useUser";

type Props = { children: React.ReactNode };

export const GuestRoute = ({ children }: Props) => {
  const { user } = useUser();

  if (user) {
    return (
      <Navigate
        to="/home"
        replace
      />
    );
  }

  return children;
};
