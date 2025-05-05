import { useState, useEffect } from 'react';
import { places as mockPlaces } from '@/features/places/api/places';
import { Place } from '../types/place';

export function usePlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPlaces(mockPlaces);
      setLoading(false);
    };

    fetchPlaces();
  }, []);

  return { places, loading };
}
