import { useEffect, useState } from "react";
import userService, { IUser } from "../services/user-service";

const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<IUser>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
    return () => cancel();
  }, []);
  return { users, loading, error, setUsers, setError };
};

export default useUser;
