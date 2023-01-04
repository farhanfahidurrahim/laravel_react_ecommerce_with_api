import React, { Component } from 'react'

class MyAccount extends Component {
  render() {
    return (
      <div>


      
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Welcome , Name Here</div>
                    <div className="card-body">
                    <img className="card-img-top" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" />
                        <ul className="list-group list-group-flush">
                            <a href="#('home')" className="text-muted"> <li className="list-group-item"><i className="fas fa-home" /> Dashboard</li></a>
                            <a href="#('wishlist')" className="text-muted"> <li className="list-group-item"> <i className="far fa-heart" /> Wishlist</li></a>
                            <a href="#('my.order')" className="text-muted"> <li className="list-group-item"> <i className="fas fa-file-alt" />  My Order</li></a>
                            <a href="#('customer.setting')" className="text-muted"> <li className="list-group-item"><i className="fas fa-edit" /> Setting</li> </a>
                            <a href="#('open.ticket')" className="text-muted"> <li className="list-group-item"> <i className="fab fa-telegram-plane" /> Open Ticket</li> </a>
                            <a href="#('customer.logout')" className="text-muted"> <li className="list-group-item"> <i className="fas fa-sign-out-alt" /> Logout</li> </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h3>User Dashboard</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3">
                      <a href> 
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title text-success text-center">Total Order</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center"></h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href> 
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title text-success text-center">Complete Order</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center"></h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href> 
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title text-danger text-center">Cancel Order</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center"></h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-3">
                      <a href> 
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title text-warning text-center">Return Order</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-center"></h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div><br />
                  <h4>Recent Order</h4>
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">OrderId</th>
                          <th scope="col">Date</th>
                          <th scope="col">Total</th>
                          <th scope="col">Payment Type</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody><tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><hr />

      </div>
    )
  }
}

export default MyAccount