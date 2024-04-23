import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/userData.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductSlice from "./ProductSlice";

const UserData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUsers(res.data.users);
    });
  });

  const Dispatch = useDispatch();
  return (
    <div className="container_user">
      {/* <h1>User</h1> */}
      {users.map((el) => (
        <div className="users" key={el.id}>
          <img src={el.image} alt="" />
          <h3>
            {el.firstName} {el.lastName}
          </h3>
          <h3>{el.email}</h3>
          <h3>{el.phone}</h3>
          <Link to={`${el.id}`} className="user_button">
            read more
          </Link>
          <button
            onClick={() => {
              Dispatch(ProductSlice.actions.addToCart(el));
            }}
          >
            add
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserData;
