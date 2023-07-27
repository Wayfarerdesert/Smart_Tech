import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEye } from "@fortawesome/free-solid-svg-icons";

const CardOne = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-blue-100">
        <FontAwesomeIcon icon={faEye} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            €356K
          </h4>
          <span className="text-sm font-medium">Total 2021</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-600">
          0.23%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardOne;
