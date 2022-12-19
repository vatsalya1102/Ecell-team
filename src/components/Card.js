import React from 'react'

function Card(props) {
  return (
    <div className="col-md-6 d-flex justify-content-center my-3">
      <div className="card border-0" style={{ width: "300px" }}>

        <div className="img-wr">
        <img src="https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=" className="card-img-top" alt="..." />
            <div className="overlay">
              <div className="text">{props.position}</div>
              <a href="https://www.linkedin.com/in/vatsalya-sharma-698811224/"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
        </div>

        <div class="card-body">
          <h4 class="card-text text-center fw-normal">{props.name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Card