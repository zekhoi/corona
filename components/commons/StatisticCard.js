import { nFormatter } from "../../utils/helper";

export default function StatisticCard({
  title,
  cases = 0,
  recovered = 0,
  infected = 0,
  death = 0,
  infectedText = "Active",
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="block h-64 px-3 text-white rounded-lg shadow-md bg-primary w-96 2xl:h-72 2xl:w-100">
          <div className="flex justify-start px-5 py-4 border-b border-gray-300 2xl:py-5">
            <a className="font-medium uppercase">{title} Statistics</a>
          </div>
          <div className="flex px-5 py-5 2xl:py-6">
            <div className="w-1/2">
              <h5 className="text-2xl font-medium 2xl:text-3xl">
                {nFormatter(cases)}
              </h5>
              <p className="text-sm 2xl:text-base">Total Cases</p>
            </div>
            <div className="w-1/2 px-4">
              <h5 className="text-2xl font-medium 2xl:text-3xl text-number-two">
                {nFormatter(recovered)}
              </h5>
              <p className="text-sm 2xl:text-base">Recovered</p>
            </div>
          </div>
          <div className="flex px-5 py-5 2xl:py-6">
            <div className="w-1/2">
              <h5 className="text-2xl font-medium 2xl:text-3xl">
                {nFormatter(infected)}
              </h5>
              <p className="text-sm 2xl:text-base">{infectedText}</p>
            </div>
            <div className="w-1/2 px-4">
              <h5 className="text-2xl font-medium 2xl:text-3xl text-number-three">
                {nFormatter(death)}
              </h5>
              <p className="text-sm 2xl:text-base">Death</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
