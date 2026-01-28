export const MOCK_PROPERTIES = [
  {
    id: 'prop-001',
    title: 'Luxury 3-Bedroom Apartment with BQ',
    type: 'Rent',
    price: 8500000,
    currency: 'NGN',
    period: 'year',
    location: {
      address: 'Admiralty Way, Lekki Phase 1',
      area: 'Lekki',
      city: 'Lagos',
      state: 'Lagos',
    },
    features: ['24/7 Power', 'Swimming Pool', 'Gym', 'Serviced', 'Security'],
    specs: {
      bedrooms: 3,
      bathrooms: 4,
      toilets: 5,
      parking: 2,
    },
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80',
    ],
    verified: true,
    agent: {
      name: 'Vantage Heights Realty',
      verified: true,
      response_time: '5 mins',
    }
  },
  {
    id: 'prop-002',
    title: 'Modern 4-Bedroom Semi-Detached Duplex',
    type: 'Sale',
    price: 150000000,
    currency: 'NGN',
    location: {
      address: 'Osborne Foreshore Estate',
      area: 'Ikoyi',
      city: 'Lagos',
      state: 'Lagos',
    },
    features: ['Governor\'s Consent', 'Water Treatment', 'Fitted Kitchen', 'Gated Estate'],
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      toilets: 5,
      parking: 3,
    },
    images: [
      'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    ],
    verified: true,
    agent: {
      name: 'Lagos Homes & Co',
      verified: true,
      response_time: '1 hour',
    }
  },
  {
    id: 'prop-003',
    title: 'Cozy 2-Bedroom Flat (Short-let)',
    type: 'Short-let',
    price: 85000,
    currency: 'NGN',
    period: 'night',
    location: {
      address: '1004 Estate, Victoria Island',
      area: 'Victoria Island',
      city: 'Lagos',
      state: 'Lagos',
    },
    features: ['WiFi', 'DSTV', 'Housekeeping', 'Sea View'],
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 1,
    },
    images: [
      'https://images.unsplash.com/photo-1522771753035-0a1539b28dcf?auto=format&fit=crop&q=80',
    ],
    verified: false,
    agent: {
      name: 'Shortlethub',
      verified: false,
      response_time: '15 mins',
    }
  },
];
