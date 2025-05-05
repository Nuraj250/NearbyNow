import { LocationProvider } from './features/location/context/LocationContext';
import { MapContainerView } from './features/map/components/MapContainerView';

function App() {
  return (
    <LocationProvider>
      <div className="w-full h-screen">
        <MapContainerView />
      </div>
    </LocationProvider>
  );
}

export default App;
