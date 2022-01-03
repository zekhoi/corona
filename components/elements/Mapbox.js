import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Popup, Marker, FlyToInterpolator } from "react-map-gl";
import { useEffect, useState, useMemo } from "react";
import { StopIcon } from "@heroicons/react/solid";
import { getAllCountry, getCountry } from "../../utils/data";
import {
  BeakerIcon,
  EmojiSadIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/solid";
import { nFormatter } from "../../utils/helper";
export default function Mapbox() {
  // const [showPopup, togglePopup] = useState(false);
  const setdefault = {
    name: "Indonesia",
    flag: "https://disease.sh/assets/img/flags/id.png",
    lat: -5,
    long: 120,
    cases: null,
    active: null,
    recovered: null,
    deaths: null,
  };
  const setviewport = {
    viewport: {
      width: 400,
      height: 240,
      latitude: -5,
      longitude: 120,
      zoom: 3,
      bearing: 0,
      pitch: 0,
    },
  };
  let bounds = [
    [-90, -90], // Southwest coordinates
    [90, 90], // Northeast coordinates
  ];
  const [currentCountry, setCurrentCountry] = useState(
    typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("current_country")) !== null
      ? JSON.parse(localStorage.getItem("current_country"))
      : setdefault,
  );
  const [countries, setCountries] = useState([]);
  const [viewPort, setViewPort] = useState(
    typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("current_country")) !== null
      ? {
          viewport: {
            width: 400,
            height: 240,
            latitude: JSON.parse(localStorage.getItem("current_country")).lat,
            longitude: JSON.parse(localStorage.getItem("current_country")).long,
            zoom: 4,
            bearing: 0,
            pitch: 0,
          },
        }
      : setviewport,
  );

  const settings = {
    width: "100%",
    height: "75vh",
    mapboxApiAccessToken: process.env.MAPBOX_TOKEN,
    attributionControl: false,
    mapStyle: "mapbox://styles/zekhoi/ckmru7j112fap17nn1qnvi0rk",
  };
  const markers = useMemo(() =>
    countries.map((country) => (
      <Marker
        key={country.country}
        className="rounded-full bg-red-one"
        latitude={country.countryInfo.lat}
        longitude={country.countryInfo.long}
        onClick={() => {
          // togglePopup(!showPopup);
          const thiscountry = {
            name: country.country,
            flag: country.countryInfo.flag,
            lat: country.countryInfo.lat,
            long: country.countryInfo.long,
            cases: country.cases,
            active: country.active,
            recovered: country.recovered,
            deaths: country.deaths,
          };
          setCurrentCountry(thiscountry);

          setViewPort((viewPort) => ({
            country: country.country,
            viewport: {
              ...viewPort.viewport,
              latitude: country.countryInfo.lat,
              longitude: country.countryInfo.long,
              zoom: 4,
            },
          }));
        }}
      >
        <StopIcon className="w-4 h-4 text-white cursor-pointer" />
      </Marker>
    )),
  );
  useEffect(() => {
    const getCountrys = async () => {
      const allCountry = await getAllCountry();
      setCountries(allCountry.data);
      const { data } = await getCountry(currentCountry.name);
      setCurrentCountry({
        name: data.country,
        flag: data.countryInfo.flag,
        lat: data.countryInfo.lat,
        long: data.countryInfo.long,
        cases: data.cases,
        active: data.active,
        recovered: data.recovered,
        deaths: data.deaths,
      });
    };
    if (countries.length == 0) {
      getCountrys();
    }
    localStorage.setItem("current_country", JSON.stringify(currentCountry));
  }, [currentCountry, viewPort]);
  return (
    <>
      <ReactMapGL
        {...viewPort.viewport}
        {...settings}
        onViewportChange={(viewport) => setViewPort({ viewport })}
        transitionDuration="auto"
        transitionInterpolator={new FlyToInterpolator({ speed: 1.2 })}
      >
        {/* {showPopup && (
          <Popup
            latitude={currentCountry.lat}
            longitude={currentCountry.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => togglePopup(false)}
          >
            <div className="w-12 h-12">{currentCountry.name}</div>
          </Popup>
        )} */}
        {markers}
      </ReactMapGL>
      <div className="absolute top-0 right-0 mt-16 mr-0 w-36 md:mt-28 md:right-16 lg:w-72 h-72">
        <div className="flex flex-col">
          <div className="flex flex-row items-center px-4 py-3 space-x-3 text-white md:space-x-6">
            <img
              src={currentCountry.flag}
              alt={currentCountry.name}
              className="w-7 md:w-11"
            />
            <div className="flex flex-col">
              <h5 className="text-sm font-bold md:text-xl">
                {currentCountry.name}
              </h5>
            </div>
          </div>
          <div className="flex flex-row items-center px-4 py-3 space-x-3 text-white md:space-x-6">
            <div className="p-2 rounded-full md:p-3 bg-tertiary">
              <BeakerIcon className="w-3 h-3 text-white md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xs md:text-sm">Total Cases</h5>
              <span className="text-base font-bold md:text-xl">
                {nFormatter(currentCountry.cases)}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center px-4 py-3 space-x-3 text-white md:space-x-6">
            <div className="p-2 rounded-full md:p-3 bg-tertiary">
              <HeartIcon className="w-3 h-3 md:w-5 md:h-5 text-number-three" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xs md:text-sm">Infected</h5>
              <span className="text-base font-bold md:text-xl text-number-three">
                {nFormatter(currentCountry.active)}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center px-4 py-3 space-x-3 text-white md:space-x-6">
            <div className="p-2 rounded-full md:p-3 bg-tertiary">
              <ShieldCheckIcon className="w-3 h-3 md:w-5 md:h-5 text-number-two" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xs md:text-sm">Recovered</h5>
              <span className="text-base font-bold md:text-xl text-number-two">
                {nFormatter(currentCountry.recovered)}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center px-4 py-3 space-x-3 text-white md:space-x-6">
            <div className="p-2 rounded-full md:p-3 bg-tertiary">
              <EmojiSadIcon className="w-3 h-3 md:w-5 md:h-5 text-red-one" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xs md:text-sm"> Death</h5>
              <span className="text-base font-bold md:text-xl text-red-one">
                {nFormatter(currentCountry.deaths)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
