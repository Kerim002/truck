import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { api } from "../../../app/api/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DriverBody = () => {
  const param = useParams();
  const [location, setLoaction] = useState<any>();
  const carIcon = new L.Icon({
    iconUrl: "../svg/icon.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const fetchDriverbyId = async () => {
    try {
      const res = await api.get(`/device/location_list/${param.id}`);
      console.log(res.data);
      setLoaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriverbyId();
  }, []);

  return (
    <div className="flex h-full bg-gray-300 rounded-md w-full gap-6 ">
      <MapContainer
        center={[37.94, 58.356]}
        zoom={12}
        // style={{ height: "100vh", width: "100%" }}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {location && (
          <Marker
            position={[location[0]?.latitude, location[0]?.longitude]}
            icon={carIcon}
          ></Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default DriverBody;
