import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DriverBody = () => {
  return (
    <div className="flex h-full bg-gray-300 rounded-md w-full gap-6 ">
      <MapContainer
        center={[37.94, 58.356]}
        zoom={12}
        // style={{ height: "100vh", width: "100%" }}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* {carLocations.map(
          (item) =>
            item.location && (
              <Marker
                key={item.deviceId}
                position={[item.location?.latitude, item.location?.longitude]}
                icon={carIcon}
              >
                <Popup>{item.deviceId}</Popup>
              </Marker>
            )
        )} */}
      </MapContainer>
    </div>
  );
};

export default DriverBody;
