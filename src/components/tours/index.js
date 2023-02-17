import React from 'react'

import Title from '../../components/title'
import Tour from './tour'

import { tours } from '../../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="services" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  )
}

export default Tours
