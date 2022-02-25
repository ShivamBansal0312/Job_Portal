import React, { useEffect, useState } from "react";
import Axios from "axios";
import Auth from "../auth";

import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ViewJob(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:8080/api/job/view/${props.match.params.id}`;
    // const data = Auth.isLoggedIn();
    // if (data) {
    //   console.log(data);
    // }
  });

  const state = {
    isLoggedIn: isLoggedIn,
    user: user,
  };
  return (
    <div>
      <Header state={state}></Header>
      <Footer></Footer>
    </div>
  );
}

export default ViewJob;
