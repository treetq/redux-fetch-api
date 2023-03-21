import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../slices/usersSlice";
import { useEffect } from "react";
import User from "./User";

const Users = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, []);
  useEffect(() => {
    console.log(usersStore);
  }, [usersStore]);

  return (
    <>
      <h2>Users: </h2>
      <div className="cards">
        {usersStore.users.map((user) => {
          return <User className="card" key={user.id} data={user} />;
        })}
      </div>
    </>
  );
};

export default Users;
