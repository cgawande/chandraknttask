import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAdd, userRemove } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const negative = useNavigate();
  const dispatch = useDispatch();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onInputChange = (e) => {
    let name = e.target.name;
    console.log(name);
    let value = e.target.value;
    console.log(value);
    setuserData({ ...userData, [name]: value });
  };

  const onDataSubmit = () => {
    // if (localStorage.length === 0) {
    //   localStorage.setItem("user", JSON.stringify({ ...userData }));
    //   dispatch(userAdd(JSON.parse(localStorage.getItem("user"))));
    //   negative("/login");
    // } else {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify([
    //       ...JSON.parse(localStorage.getItem("user")),
    //       { ...userData },
    //     ])
    //   );
    //   dispatch(userAdd(JSON.parse(localStorage.getItem("user"))));
    //   negative("/login");
    // }
    negative("/login")
  };

  return (
    <div class="App">
      <div id="wrapper">
        <div class="page-wrapper auth_wrapper">
          <div class="content-area-wrapper">
            <div class="content-wrapper">
              <div class="container">
                <div class="card products_blc">
                  <div class="card-body">
                    <div class="card_content_wrap text-center"></div>
                    <div class="card_content_wrap text-center">
                      <div class="logo_wrap">
                        <img
                          src="assets/images/thumbnails/Logo.svg"
                          alt="logo"
                        />
                        <h6>Create an account</h6>
                      </div>
                      <form>
                        <div class="form_wrapper">
                          <div class="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label label_modify"
                            >
                              <span class="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="demo@gmail.com"
                              class="form-control input_modify"
                              id="exampleFormControlInput1"
                              onChange={onInputChange}
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label label_modify"
                            >
                              {" "}
                              <span class="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              placeholder="*****"
                              name="password"
                              class="form-control input_modify"
                              id="exampleFormControlInput2"
                              onChange={onInputChange}
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label label_modify"
                            >
                              {" "}
                              <span class="mendatary">*</span>Confirm Password
                            </label>
                            <input
                              type="password"
                              name="confirmpassword"
                              class="form-control input_modify"
                              id="exampleFormControlInput3"
                              placeholder="*****"
                              onChange={onInputChange}
                            />
                          </div>
                          <div class="mb-0 auth_btn">
                            <button
                              type="button"
                              onClick={onDataSubmit}
                              class="theme-btn-primary theme-btn"
                            >
                              Sign Up
                            </button>
                          </div>
                          <div class="already">
                            {" "}
                            <Link to={"/login"}>Already have Account</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
