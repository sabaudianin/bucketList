import { useNavigate } from "react-router-dom";
import { IconButton } from "../ui/IconButton/IconButton";

export const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        className=""
        onClick={() => navigate("/home")}
        label="Go to Home"
      >
        🪣
      </IconButton>
    </>
  );
};
