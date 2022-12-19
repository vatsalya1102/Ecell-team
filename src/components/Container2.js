import React from 'react'
import Card from './Card'

function Container2() {
  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="row d-flex justify-content-center">

        <Card name="Ayush Kaushik" position="Manager"/>
        <Card name="Harsh Raj" position="Assistant Manager"/>
        <Card name="Vani Sharma" position="Overall Co-ordinator"/>

      </div>
    </div>
  )
}

export default Container2