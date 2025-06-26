import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { useUser } from "../../user/useUser/useUser";
import { toast } from "sonner";

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Logout failed");
    } else {
      clearUser();
      toast.success("Logged out");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };
  return logout;
};
