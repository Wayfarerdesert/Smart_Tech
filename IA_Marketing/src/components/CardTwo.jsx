import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardTwo = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 bg-blue-100">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            €452K
          </h4>
          <span className="text-sm font-medium">Total 2023</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3 text-green-600">
          4.35%
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </div>
    </div>
  );
};

export default CardTwo;
