import React from 'react'

function EditProduct() {
  return (
    <div class="content-area-wrapper">
    <div class="content-wrapper">
       <div class="filter_wrapper  d-block d-sm-none">
          <div class="filet_left_content">
             <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII=" alt="search"/></span></div>
                <input type="text" class="form-control input_modify" placeholder="Search"/>
             </div>
          </div>
       </div>
       <div class="card nav_pills_card nav_pills_card_new">
          <div class="card-body">
             <div class="heading_wrapper heading_right_content">
                <h1 class="head_title">Edit Product</h1>
                <div class="btn_wrapper"><button type="button" class="theme-btn btn-outline-secondary">Discard</button><button type="button" class="theme-btn theme-btn-primary">Save</button></div>
             </div>
             <ul class="nav nav-pills mb-0 nav_pills_wrapper" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation"><button class="nav-link active" id="pills-general-tab" data-toggle="pill" data-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General</button></li>
                <li class="nav-item" role="presentation"><button class="nav-link " id="pills-variation-tab" data-toggle="pill" data-target="#pills-variation" type="button" role="tab" aria-controls="pills-variation" aria-selected="false">Variation</button></li>
             </ul>
          </div>
       </div>
       <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
             <div class="card nav_pills_card">
                <div class="card-body">
                   <div>
                      <div class="form-title">Basic Info</div>
                      <div class="form-group">
                         <label for="productName">
                            <span class="text-danger">*</span> Product Name
                         </label>
                         <input type="name" name="productName" class="form-control" id="productName" value="Blue Jacket"/>
                      </div>
                      <div class="form-group">
                         <label for="Description">
                            <span class="text-danger">*</span> Description
                         </label>
                         <textarea type="text" id="Description" class="form-control" name="description" rows="3">There are many variations of passages of Lorem Ipsum available.</textarea>
                      </div>
                   </div>
                </div>
             </div>
             <div class="card nav_pills_card">
                <div class="card-body">
                   <div>
                      <div class="form-title">Pricing</div>
                      <div class="row">
                         <div class="col-md-6">
                            <div class="form-group"><label for="price"><span class="text-danger">*</span> Price</label><input type="text" name="price" class="form-control" id="price" value="5"/></div>
                         </div>
                         <div class="col-md-6">
                            <div class="form-group"><label for="comparePrice"><span class="text-danger">*</span> Compare price</label><input type="text" name="comparePrice" class="form-control" id="comparePrice" value="30"/></div>
                         </div>
                      </div>
                      <div class="row">
                         <div class="col-md-6">
                            <div class="form-group"><label for=" costPerItem"><span class="text-danger">*</span> Cost per item</label><input type="text" name="costPerItem" class="form-control" id="costPerItem" value="10"/></div>
                         </div>
                         <div class="col-md-6">
                            <div class="form-group"><label for="taxRate"><span class="text-danger">*</span> Tax rate</label><input type="text" name="taxRate" class="form-control" id="taxRate" value="3"/></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="card nav_pills_card">
                <div class="card-body">
                   <div>
                      <div class="form-title">Organization</div>
                      <div class="row">
                         <div class="col-md-6">
                            <div class="form-group">
                               <label for="productName">Category</label>
                               <select  class="form-control" id="productName">
                                  <option value="">Select</option>
                                  <option value="" selected>Clothe</option>
                                  <option value="">Bags</option>
                                  <option value="">Shoes</option>
                                  <option value="">Watches</option>
                                  <option value="">Devices</option>
                               </select>
                            </div>
                         </div>
                         <div class="col-md-6">
                            <div class="form-group">
                               <label for="Description">Tags</label>
                               <select  class="form-control" id="productName">
                                  <option value="">Select</option>
                                  <option value="" selected>Cotton</option>
                                  <option value="">Nike</option>
                                  <option value="">Sales</option>
                                  <option value="">Sports</option>
                                  <option value="">Outdoor</option>
                                  <option value="">Toys</option>
                                  <option value="">Hobbies</option>
                               </select>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div class="tab-pane fade " id="pills-variation" role="tabpanel" aria-labelledby="pills-variation-tab">
             <div class="card nav_pills_card">
                <div class="card-body">
                   <div>
                      <div class="form-title">Variants</div>
                      <p>Add A Custome Variat Options For Your Product, Like Different Sizes Or Colors.</p>
                      <div class="">
                         <div class="row">
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Variant</label><input type="text" name="variant" class="form-control" value="black"/></div>
                            </div>
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Price</label><input type="text" name="variantPrice" class="form-control" value="10"/></div>
                            </div>
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Stock keeping unit</label><input type="text" name="variantPrice" class="form-control" value="10"/></div>
                            </div>
                         </div>
                      </div>
                      <div class="form-group uploader-wrapper">
                         <label for="Description"><span class="text-danger">*</span> Upload Image</label>
                         <div class="uploader-wrapper-inner">
                            <img src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg" alt="pictures"/>
                            <input type="file"/>
                         </div>
                      </div>

                      <div class="isMinus">
                         <div class="row">
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Variant</label><input type="text" name="variant" class="form-control" value="black"/></div>
                            </div>
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Price</label><input type="text" name="variantPrice" class="form-control" value="10"/></div>
                            </div>
                            <div class="col-md-4">
                               <div class="form-group"><label for=" productName"><span class="text-danger">*</span> Stock keeping unit</label><input type="text" name="variantPrice" class="form-control" value="10"/></div>
                            </div>
                         </div>
                         <span class="removeSpan">-</span>
                      </div>
                      <div class="form-group uploader-wrapper">
                         <label for="Description"><span class="text-danger">*</span> Upload Image</label>
                         <div class="uploader-wrapper-inner">
                            <img src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg" alt="pictures"/>
                            <input type="file"/>
                         </div>
                      </div>


                      <button class="uploader-add-btne" type="button">Add field</button>

                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>


  )
}

export default  EditProduct