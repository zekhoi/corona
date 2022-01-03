import { ChartBarIcon } from "@heroicons/react/solid";
import { nFormatter, percentage } from "../../utils/helper";

export default function CaseCard({
  title,
  current = 0,
  currentText,
  splitone = 0,
  splitoneText,
  splittwo = 0,
  splittwoText,
  colorone = "text-primary",
  colortwo = "text-primary",
}) {
  return (
    <>
      <div className="flex justify-center">
        <div className="block h-64 px-3 text-center text-gray-600 bg-white rounded-lg shadow-md w-96 2xl:h-72 2xl:w-100">
          <div className="flex justify-between px-5 py-4 border-b border-primary">
            <a className="font-medium uppercase">{title} Cases</a>{" "}
            <ChartBarIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="p-5 2xl:p-8">
            <h5 className="text-2xl font-medium 2xl:text-3xl">
              {nFormatter(current)}
            </h5>
            <p className="text-sm text-gray-500 2xl:text-base">{currentText}</p>
          </div>
          <div className="flex justify-between px-5 space-x-4">
            <div className="py-5 2xl:py-4 2xl:px-2">
              <h5 className={`text-xl font-medium 2xl:text-2xl ${colorone}`}>
                {nFormatter(splitone)}{" "}
                <span className="text-base text-gray-800 2xl:text-xl">
                  ({percentage(current - splittwo, current)}%)
                </span>
              </h5>
              <p className="text-sm text-gray-500 2xl:text-base">
                {splitoneText}
              </p>
            </div>
            <div className="py-5 2xl:py-4 2xl:px-2">
              <h5 className={`text-xl font-medium 2xl:text-2xl ${colortwo}`}>
                {nFormatter(splittwo)}{" "}
                <span className="text-base text-gray-800 2xl:text-xl">
                  ({percentage(splittwo, current)}%)
                </span>
              </h5>
              <p className="text-sm text-gray-500 2xl:text-base">
                {splittwoText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
