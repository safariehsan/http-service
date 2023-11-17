import userService, { IUser } from "./services/user-service";
import useUser from "./hooks/useUsers";
import "./App.css";

const App = () => {
  const { users, loading, error, setUsers, setError } = useUser();

  const updateUser = (user: IUser) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  const removeUser = (user: IUser) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  if (error !== "") return <p>{error}</p>;

  return (
    <div className="App">
      {/* <Form />
      <hr /> */}
      {loading ? (
        <p>Loading...!</p>
      ) : (
        <ul className="list-group">
          {users?.map((user) => {
            return (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between"
              >
                <p>
                  <b>{user.id}</b>. {user.name}
                </p>
                <div>
                  <button
                    className="btn btn-outline-danger mx-1"
                    onClick={() => removeUser(user)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
