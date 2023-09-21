import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import "./map.scss";
import { useSelector } from "react-redux";
import { Iredux } from "../../Interfaces/redux";
import { handleMapClick } from "../../Utils/Map";
import { useState } from "react";
import CountryInfo from "../../Components/CountryInfo";
import { useDispatch } from "react-redux";
import { saveCountry } from "../../Store/reducers/SearchCountry";

export default function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAgQV7c26ug4xIGFozFN3xYk6RRwCK46u4",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const actualStatate = useSelector((state: Iredux) => state.countryData);
  console.log(actualStatate);
  let lastCountry = actualStatate[actualStatate.length - 1];
  if (!lastCountry) {
    lastCountry = {
      name: {},
      position: {
        lat: 0,
        lng: 0,
      },
    };
  }

  return (
    <div className="map">
      {isLoaded && lastCountry ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={lastCountry.position}
          zoom={5}
          onClick={async (e) => dispatch(saveCountry(await handleMapClick(e)))}
        >
          {!lastCountry.name.common ? (
            <></>
          ) : (
            <MarkerF
              onClick={() => setIsOpen(!isOpen)}
              position={lastCountry.position}
              options={{
                label: {
                  text: lastCountry.name.common,
                  className: "mapMarker",
                },
              }}
            />
          )}
          <CountryInfo isOpen={isOpen} data={lastCountry} />
        </GoogleMap>
      ) : (
        <>Hi</>
      )}
    </div>
  );
}
