import React from 'react'

function Sidebar() {
  return (
    <aside class="sidebar-wrapper open custom-scrollbar wow fadeInLeft">
            <div class="sidebar-content-wrapper">
                <ul class="sidebar-list">
                    <li class="sidebar-list-item has-subnav active open" id="listTem">
                        <button class="sidebar-link" id="pro_toggle">
                            <img src="assets/images/icons/Path.svg" alt="Product List"/>
                            <span class="item-text">Ecommerce</span>
                        </button>
                        <ul>
                            <li>
                                <a href="/products" class="sidebar-link">Product List</a>
                            </li>
                            <li>
                                <a href="/editproduct" class="sidebar-link active">Add Product</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
  )
}

export default Sidebar
