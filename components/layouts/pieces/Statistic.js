import { useEffect, useState } from "react";
import { getAllData, getHistoricalData } from "../../../utils/data";
import CaseCard from "../../elements/CaseCard";
import StatisticCard from "../../elements/StatisticCard";
import CaseChartCard from "../../elements/CaseChartCard";

export default function Statistic() {
  const [covidData, setCovidData] = useState({
    updated: null,
    cases: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
    critical: 0,
    todayCases: 0,
    todayRecovered: 0,
    todayDeaths: 0,
    affectedCountries: 0,
  });
  const [dailyData, setDailyData] = useState({
    cases: [],
    deaths: [],
    recovered: [],
    labels: [],
  });

  useEffect(async () => {
    const getCountrys = async () => {
      const allData = await getAllData();
      setCovidData(allData);
    };
    const getDailyData = async () => {
      const daily = await getHistoricalData();
      setDailyData(daily);
    };
    getCountrys();
    getDailyData();
  }, []);

  return (
    <>
      {/* <div className="flex flex-col justify-between w-full space-x-0 space-y-4 xl:space-x-8 xl:space-y-0 xl:flex-row"> */}
      <div className="flex flex-row justify-center text-center">
        <a className="text-gray-700">
          Last update : {new Date(covidData.updated).toString()}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
        <CaseCard
          title="Active"
          current={covidData.active}
          currentText={"Currently Infected Patients"}
          splitone={covidData.active - covidData.critical}
          colorone="text-number-one"
          splitoneText={"In Mild Condition"}
          splittwo={covidData.critical}
          colortwo="text-number-three"
          splittwoText={"Serious or Critical"}
        />
        <CaseCard
          title="Closed"
          current={covidData.recovered}
          currentText={"Cases which had an outcome"}
          splitone={covidData.recovered - covidData.deaths}
          colorone="text-number-two"
          splitoneText={"Recovered"}
          splittwo={covidData.deaths}
          colortwo="text-number-three"
          splittwoText={"Deaths"}
        />
        <StatisticCard
          title="Today"
          cases={covidData.todayCases}
          recovered={covidData.todayRecovered}
          infected={covidData.affectedCountries}
          infectedText="Total Infected Countries"
          death={covidData.todayDeaths}
        />
        {/* </div> */}
        {/* <div className="flex flex-col justify-between w-full space-x-0 space-y-4 xl:space-x-8 xl:space-y-0 xl:flex-row"> */}
        <CaseChartCard
          title="Cases"
          labels={dailyData.labels}
          datalist={dailyData.cases}
          step={100000000}
        />
        <CaseChartCard
          title="Deaths"
          labels={dailyData.labels}
          datalist={dailyData.deaths}
          color="rgba(251, 192, 45, 1)"
          bgcolor="rgba(251, 192, 45, 0.2)"
          step={2000000}
        />
        <StatisticCard
          title="Worldwide"
          cases={covidData.cases}
          recovered={covidData.recovered}
          infected={covidData.active}
          death={covidData.deaths}
        />
      </div>
      {/* </div> */}
    </>
  );
}
