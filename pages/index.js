import dynamic from "next/dynamic";
import Landing from "../components/layouts/Landing";
import CountryTable from "../components/elements/CountryTable";
import Statistic from "../components/layouts/pieces/Statistic";
const Mapbox = dynamic(() => import("../components/elements/Mapbox"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-basecolor">
      <Landing>
        <section className="flex justify-center bg-primary">
          <Mapbox />
        </section>

        <section className="flex flex-col justify-center px-4 bg-basecolor">
          <div className="container pt-6 mx-auto space-y-6 2xl:px-12">
            <Statistic />
          </div>
        </section>

        <section className="flex justify-center px-4 pt-12 bg-basecolor">
          <div className="container mx-auto space-y-8 2xl:px-12">
            <CountryTable />
          </div>
        </section>
      </Landing>
    </div>
  );
}
