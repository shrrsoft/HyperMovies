import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { apiKey, imgBaseURL, urlAuth } from "../apiConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, SetUser] = useState({});
  const [session, setSession] = useState(() => localStorage.getItem("session"));

  async function getUserData() {
    const { data } = await axios.get(
      `${urlAuth}/account?api_key=${apiKey}&session_id=${session}`
    );
    SetUser(data);
  }

  useEffect(() => {
    if (session) {
      getUserData();
    }
  }, [session]);

  const UserProfileImg = `${imgBaseURL}/original${user?.avatar?.tmdb?.avatar_path}`;

  function logout() {
    SetUser({}), setSession(null), localStorage.clear();
  }

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${urlAuth}/authentication/token/new?api_key=${apiKey}`
      );

      const authoriz = await axios.post(
        `${urlAuth}/authentication/token/validate_with_login?api_key=${apiKey}`,
        { username, password, request_token: tokenResult.data.request_token }
      );
      const session = await axios.post(
        `${urlAuth}/authentication/session/new?api_key=${apiKey}`,
        { request_token: tokenResult.data.request_token }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);

      navigate("/profile", { replace: true });
    } catch {
      toast.error("invalid User");
    }
  }

  return (
    <UserContext.Provider
      value={{ user, login, session, logout, UserProfileImg }}>
      {children}
    </UserContext.Provider>
  );
}
