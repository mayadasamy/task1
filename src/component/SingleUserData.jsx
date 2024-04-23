import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleUserData = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container_user">
      <div className="users">
        <img src={user.image} alt="" />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <h3>{user.email}</h3>
        <h3>{user.phone}</h3>
        <h3>{user.gender}</h3>
        <h3>{user.birthDate}</h3>
      </div>
    </div>
  );
};

export default SingleUserData;
