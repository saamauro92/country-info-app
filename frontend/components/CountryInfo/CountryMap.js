import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const CountryMap = (latlng) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  const coords = {
    lat: latlng.data[0],
    lng: latlng.data[1],
  };
  const zoom = 4;

  return isLoaded ? (
    <div className="flex flex-col flex-wrap gap-5  justify-center md:px-20">
      <h2 className="text-2xl font-medium"> Google Map</h2>
      <GoogleMap
        zoom={zoom}
        center={coords}
        mapContainerClassName="map-container"
        options={{ gestureHandling: "greedy" }}
      >
        <></>
      </GoogleMap>
    </div>
  ) : (
    <>Sorry Map Not Available</>
  );
};

export default CountryMap;
