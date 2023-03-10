import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

function ProductList() {
  const [products, setproducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get(
  //       "https://raw.githubusercontent.com/abdulbitcot/React-Coding-Challenge-Experience/main/sample.json"
  //     );
  //     setproducts(res.data);
  //     console.log(products)
  //   };
  //   fetchProducts();
  // }, []);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const deleteProduct = (product, id) => {
    dispatch(remove(product));
  };

  // const data = useSelector(state => state.card);
  useEffect(() => {
    setproducts(JSON.parse(localStorage.getItem("product")));
    dispatch(add(products));
  }, []);

  return (
    <>
      <Header />
      <div class="content-area-wrapper">
        <div class="content-wrapper">
          <div class="filter_wrapper  d-block d-sm-none">
            <div class="filet_left_content">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <img src="images/icons/magnifying-glass.png" alt="search" />
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control input_modify"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div class="heading_wrapper d-flex flex-wrap">
            <h1 class="head_title">Product List</h1>
            <nav aria-label="breadcrumb" class="breadcrumb_wrapper">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">E-Commerce</li>
                <li class="breadcrumb-item active" aria-current="page">
                  Product List
                </li>
              </ul>
            </nav>
          </div>
          <div class="card products_blc">
            <div class="card-body">
              <div class="filter_wrapper">
                <div class="filet_left_content">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                          alt="search"
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control input_modify"
                      placeholder="Search"
                    />
                  </div>
                  <select class="custom-select input_modify">
                    <option>All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="filter_btn_wrapper">
                  <a class="btn theme-btn-primary theme-btn" href="/addproduct">
                    Add Product
                  </a>
                </div>
              </div>
              <div class="app_table table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <label class="checkbox_container text-uppercase">
                          {" "}
                          ID
                        </label>
                      </th>
                      <th scope="col" class="th_didivder">
                        Products
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                      <th scope="col" class="th_didivder">
                        Category
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                      <th scope="col" class="th_didivder">
                        Price
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                      <th scope="col" class="th_didivder">
                        Stock
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                      <th scope="col" class="th_didivder">
                        Status
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                      <th scope="col" class="th_didivder">
                        Action
                        <span class="filter-order-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                          >
                            <g
                              id="Group_22146"
                              data-name="Group 22146"
                              transform="translate(-501 -126.5)"
                            >
                              <path
                                id="Icon_ionic-md-arrow-dropdown"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,13.5,14.5,19,20,13.5Z"
                                transform="translate(492 120.5)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                              <path
                                id="Icon_ionic-md-arrow-dropdown-2"
                                data-name="Icon ionic-md-arrow-dropdown"
                                d="M9,19l5.5-5.5L20,19Z"
                                transform="translate(492 113)"
                                fill="rgba(69,85,96,0.2)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((data, index) => (
                        <tr>
                          <td>
                            <label class="checkbox_container text-uppercase">
                              {index + 1}
                            </label>
                          </td>
                          <td>
                            <div class="media align-items-center">
                              <div class="product_thumb">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG"
                                  alt="Images"
                                />
                              </div>
                              <div class="media-body product_des">
                                <h6 class="product_name">{data.productName}</h6>
                              </div>
                            </div>
                          </td>
                          <td class="text_primary">{data.category}</td>
                          <td>${data.price}</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td class="actions">
                            <div class="dropdown dropdown_wrapper ">
                              <button
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div class="dropdown-menu dropdown-menu-right  ">
                                <a
                                  class="dropdown-item"
                                  href="editproduct.html"
                                >
                                  View Details
                                </a>
                                <button
                                  class="dropdown-item"
                                  onClick={deleteProduct}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
