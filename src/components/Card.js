import React from 'react'

function Card(props) {
  return (
    <div className="col-md-6 d-flex justify-content-center my-3">
      <div class="card border-0" style={{ width: "300px" }}>
        <img src="https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-text text-center">{props.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card