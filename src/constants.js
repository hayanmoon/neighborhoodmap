export const locations = [
  {
    text: "St. Luke's Medical Center - Global City",
    description: 'a hospital',
    lat: 14.554928,
    lng: 121.04820199999995,
    value: 'st-lukes-medical-center-taguig',
    type: 'Hospital',
    animation:2
  },
  {
    text: 'KidZania Manila',
    description: 'for kids',
    lat: 14.553447,
    lng: 121.05471779999993,
    value: 'kidzania-taguig',
    type: 'Entertainment',
    animation:2
  },
  {
    text: 'Shangri-La at the Fort',
    description: 'a hotel',
    lat: 14.552396,
    lng: 121.047191,
    value: 'shangri-la-fort-taguig',
    type: 'Hotel',
    animation:2
  },
  {
    text: 'Market Market',
    description: 'a mall',
    lat: 14.5497976,
    lng: 121.05522889999997,
    value: 'market-market-taguig-4',
    type: 'Mall',
    animation:2
  },
  {
    text: 'Seda BGC',
    description: 'a hotel',
    lat: 14.5508994,
    lng: 121.0532574,
    value: 'seda-bonifacio-global-city-taguig',
    type: 'Hotel',
    animation:2
  }
]

export const filters = [
  {
    text: 'Mall',
    value: 'Mall'
  },
  {
    text: 'Hotel',
    value: 'Hotel'
  },
  {
    text: 'Hospital',
    value: 'Hospital'
  },
  {
    text: 'Entertainment',
    value: 'Entertainment'
  }
]

export const googleMapApi =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyCbXzFJY4-DTx-koqfXKSX0c-IwmmiT6zg&v=3.exp&libraries=geometry,drawing,places'

export const neighboorhoodApi = 'http://localhost:5001/location'
