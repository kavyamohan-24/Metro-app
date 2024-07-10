import React from 'react'

const ServicePage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1>SERVICES OFFERED</h1>
            </div>
        </div>
        <div className="row g-3">
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-l-4 col-xxl-4">
            <div class="card">
  <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/06/22175706/1024px-Kochi-metro-route-map.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Route Information</h5>
    <p class="card-text">Detailed information about metro routes, stations, and connections.</p>
   <button className="btn btn-primary">Get Routes</button>
  </div>
</div>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-l-4 col-xxl-4">
            <div class="card">
  <img src="https://www.myfamilyourneeds.co.uk/wp-content/uploads/2020/02/Book_Your_Ticket_1401x8346.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ticket Booking</h5>
    <p class="card-text">Online purchase of single-journey tickets and recharge of smart cards</p>
    <button className="btn btn-primary">Book Tickets</button>
  </div>
</div>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-l-4 col-xxl-4">
            <div class="card">
  <img src="https://www.customerthermometer.com/img/Guide-to-Journey-Mapping-cover-1500x1130.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Journey Planner</h5>
    <p class="card-text">Tools to plan trips, including estimated travel time and fare calculator</p>
    <button className="btn btn-primary">Plan your Trip</button>
  </div>
</div>
            </div>
        </div>
        <br />
        <div className="row g-3">
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
  <div class="card-body">
    <h5>Real-Time Updates</h5>
    Live updates on train timings, schedules, and service alerts.
    <button className="btn btn-primary">Live Updates</button>
  </div>
</div>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
  <img src="https://brokerstorm.net/wp-content/uploads/2022/06/Customer-Support3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Customer Support</h5>
    <p class="card-text">Access to customer service for queries, feedback, and assistance.</p>
   
   
  </div>
</div>
            </div>
            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
  <div class="card-body">
    <h5>Notifications</h5>
    Alerts and notifications about service changes, promotions, and updates.
    
Personalized alerts based on preferred routes or stations.
    <button className="btn btn-primary">Notification</button>
  </div>
</div>
            </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div class="card">
  <div class="card-body">
    <h5>Station Facilities Information</h5>
    Details about facilities available at each station, such as parking, restrooms, and accessibility features.
    <button className="btn btn-primary">Station Facilities</button>
  </div>
</div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div class="card">
  <div class="card-body">
    <h5>Nearby Places</h5>
    Information on nearby points of interest, amenities, and landmarks around metro stations.
    <button className="btn btn-primary">Search Nearby Places</button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
