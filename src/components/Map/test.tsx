import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Francisco do Sul',
      slug: 'sao_chico',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Joinville',
      slug: 'joinville',
      location: {
        latitude: -26.305158,
        longitude: -48.857611
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/são francisco do sul/i)).toBeInTheDocument()
    expect(screen.getByTitle(/joinville/i)).toBeInTheDocument()
  })
})
