import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { getAllCountry } from "../../utils/data";

export default function CountryTable() {
  const [dataCountry, setDataCountry] = useState([]);
  const [sort, setSort] = useState({ column: "country" });
  const sortData = (col) => {
    if (sort.column !== col || sort.order === "Ascending") {
      const sorted = dataCountry.sort((valuea, valueb) =>
        valuea[col] > valueb[col] ? 1 : -1,
      );
      setDataCountry(sorted);
      setSort({ column: col, order: "Descending" });
    }
    if ((sort.column === col && sort.order === "Descending") || !sort.order) {
      const sorted = [...dataCountry].sort((valuea, valueb) =>
        valuea[col] < valueb[col] ? 1 : -1,
      );
      setDataCountry(sorted);
      setSort({ column: col, order: "Ascending" });
    }
  };
  useEffect(async () => {
    const getCountrys = async () => {
      const allCountry = await getAllCountry();
      setDataCountry(allCountry.data);
    };
    if (dataCountry.length == 0) {
      getCountrys();
    }
  }, []);
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex-grow max-h-screen overflow-auto rounded-lg shadow-md">
          <table className="relative w-full border-collapse divide-y divide-gray-200">
            <thead>
              <tr className="h-20">
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "country"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <div className="flex">
                      <a className="text-xs cursor-default">Country Other</a>
                    </div>
                    {sort.column === "country" &&
                    (sort.order === "Descending" ||
                      sort.order !== "Ascending") ? (
                      <a onClick={() => sortData("country")} className="">
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("country")} className="">
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "cases"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default">Total Cases</a>
                    {sort.column === "cases" && sort.order === "Descending" ? (
                      <a onClick={() => sortData("cases")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("cases")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "todayCases"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default">New Cases</a>
                    {sort.column === "todayCases" &&
                    sort.order === "Descending" ? (
                      <a onClick={() => sortData("todayCases")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("todayCases")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "deaths"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default">Total Deaths</a>
                    {sort.column === "deaths" && sort.order === "Descending" ? (
                      <a onClick={() => sortData("deaths")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("deaths")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "todayDeaths"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default">New Deaths</a>
                    {sort.column === "todayDeaths" &&
                    sort.order === "Descending" ? (
                      <a onClick={() => sortData("todayDeaths")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("todayDeaths")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "recovered"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default cursor-pointer">
                      Total Recovered
                    </a>
                    {sort.column === "recovered" &&
                    sort.order === "Descending" ? (
                      <a onClick={() => sortData("recovered")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("recovered")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "active"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-default cursor-pointer">
                      Active Cases
                    </a>
                    {sort.column === "active" && sort.order === "Descending" ? (
                      <a onClick={() => sortData("active")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("active")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
                <th className="sticky top-0 px-6 py-3 font-medium tracking-wider text-left bg-white">
                  <div
                    className={`flex flex-row justify-between items-center space-x-2  ${
                      sort.column === "critical"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    <a className="text-xs cursor-pointer">Serious Critical</a>
                    {sort.column === "critical" &&
                    sort.order === "Descending" ? (
                      <a onClick={() => sortData("critical")}>
                        <SortAscendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    ) : (
                      <a onClick={() => sortData("critical")}>
                        <SortDescendingIcon className="w-5 h-5 cursor-pointer" />
                      </a>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="font-medium text-gray-600 bg-white divide-y ">
              {dataCountry == 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 font-medium text-center">
                    No Data
                  </td>
                </tr>
              ) : (
                dataCountry.map((country) => (
                  <tr key={country.country}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-row text-sm">
                        <img
                          src={country.countryInfo.flag}
                          alt={country.country}
                          width={25}
                          height={16}
                        />
                        <a className="ml-2">{country.country}</a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {country.cases.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-number-one">
                        {country.todayCases == 0
                          ? ""
                          : "+" + country.todayCases.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {country.deaths.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-number-three">
                        {country.todayDeaths == 0
                          ? ""
                          : "+" + country.todayDeaths.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {country.recovered.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {country.active.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {country.critical.toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
