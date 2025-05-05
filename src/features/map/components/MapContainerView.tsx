import { MapContainer, TileLayer } from 'react-leaflet';
import { PlaceMarker } from './PlaceMarker';
import { Loader } from '../../../shared/components/Loader';
import { useUserLocation } from '../../location/hooks/useUserLocation';
import { places } from '../../places/api/placesApi';

export function MapContainerView() {
  const { location, loading, error } = useUserLocation();

  if (loading) return <Loader />;
  if (error || !location) return <div className="text-center p-4">Location not available: {error}</div>;

  return (
    <MapContainer center={[location.lat, location.lng]} zoom={14} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <PlaceMarker key={place.id} place={place} />
      ))}
    </MapContainer>
  );
}
