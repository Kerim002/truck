import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";

type ItemType = {
  batteryLevel: number;
  deviceId: string;
  isLocked: boolean;
  location: {
    timestamp: number;
    latitude: number;
    longitude: number;
  } | null;
  signalStatus: string;
  status: string;
};

export default function Home() {
  // const carPositions: { id: number; name: string; position: any }[] = [
  //   { id: 1, name: "Truck", position: [37.9192944, 58.3618963] },
  // ];

  const carIcon = new L.Icon({
    iconUrl: "/caricon.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const [count, setCount] = useState(1);
  const [carLocations, setCarPositions] = useState<ItemType[]>([]);
  const [main, setMain] = useState<{
    Locations: any;
    Status: {
      status: string;
      count: number;
    }[];
  }>();

  const fetchMain = async () => {
    try {
      const res = await axios.get("/api/main");
      setMain(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMain();
  }, []);

  let sum = 0;

  main?.Status.forEach((item) => {
    sum += item.count;
  });

  useEffect(() => {
    // Connect to the WebSocket server
    const ws = new WebSocket("ws://216.250.13.199:8000/socket");

    // Handle incoming messages
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setCarPositions(message);
    };

    // Handle connection open
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    // Handle connection close
    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    // Handle errors
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center bg-gray-100 relative">
      <div className=" fixed top-10 left-96 bg-[#00A2C6] rounded-lg flex z-[9999] items-center">
        <button
          onClick={() => setCount(1)}
          className={`w-20 rounded-lg p-2 relative ${
            count === 1 ? "bg-white" : "text-white"
          }`}
        >
          <h3 className="font-semibold">{sum}</h3>
          <p className="text-xs">Jemi ulag</p>
        </button>
        <span className="border-r h-8 border-white"></span>
        <button
          onClick={() => setCount(2)}
          className={`w-20 rounded-lg p-2 relative ${
            count === 2 ? "bg-white" : "text-white"
          }`}
        >
          <span className="w-2 h-2 absolute z-10 border bg-yellow-400 top-2 rounded-full right-2"></span>

          <h3 className="font-semibold">
            {main?.Status.find((item) => item.status === "empty")?.count}
          </h3>
          <p className="text-xs">Bos</p>
        </button>
        <span className="border-r h-8 border-white"></span>

        <button
          onClick={() => setCount(3)}
          className={`w-20 rounded-lg p-2 relative ${
            count === 3 ? "bg-white" : "text-white"
          }`}
        >
          <span className="w-2 h-2 absolute z-10 border bg-red-400 top-2 rounded-full right-2"></span>

          <h3 className="font-semibold">
            {main?.Status.find((item) => item.status === "transit")?.count}
          </h3>
          <p className="text-xs">Tranzit</p>
        </button>
        <span className="border-r h-8 border-white"></span>

        <button
          onClick={() => setCount(4)}
          className={`w-20 rounded-lg p-2 relative ${
            count === 4 ? "bg-white" : "text-white"
          }`}
        >
          <span className="w-2 h-2 absolute z-10 border bg-black top-2 rounded-full right-2"></span>

          <h3 className="font-semibold">
            {main?.Status.find((item) => item.status === "export")?.count}
          </h3>
          <p className="text-xs">Eksport</p>
        </button>
        <span className="border-r h-8 border-white"></span>

        <button
          onClick={() => setCount(5)}
          className={`w-20 rounded-lg p-2 relative ${
            count === 5 ? "bg-white" : "text-white"
          }`}
        >
          <span className="w-2 h-2 absolute z-10 bg-green-400 border top-2 rounded-full right-2"></span>

          <h3 className="font-semibold">
            {main?.Status.find((item) => item.status === "import")?.count}
          </h3>
          <p className="text-xs">Import</p>
        </button>
      </div>
      <MapContainer
        center={[37.94, 58.356]}
        zoom={12}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {carLocations.map(
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
        )}
      </MapContainer>
    </div>
  );
}
