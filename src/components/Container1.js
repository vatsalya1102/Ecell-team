import React from 'react'
import Card from './Card'

function Container1() {
    return (
        <div className="container py-5 d-flex justify-content-center">


            {/* <div class="card border-0" style={{ width: "300px" }}>
                <img src="https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-text text-center">Dr.Tapas Pilai</h3>
                </div>
            </div> */}

            <Card name="Dr.Tapas Pilai" position="Faculty Incharge"/>



        </div>
    )
}

export default Container1