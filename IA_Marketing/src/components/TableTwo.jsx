import ProductOne from "../images/product/product-01.png";
import ProductTwo from "../images/product/product-02.png";
import ProductThree from "../images/product/product-03.png";
import ProductFour from "../images/product/product-04.png";

const TableTwo = () => {
  return (
    <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-5">
      <div className="pb-3 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Tipo de Cliente
        </h4>
      </div>
      {/* TABLA UNO */}
      <div className="bm-3">
        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 text-orange-500 bg-gray-200 uppercase">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Cliente</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Categoria de Producto</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Año</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Cantidad</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Mes de Mayor Ventas</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Pequeñas Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Coches Clásicos
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">22</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">FEB</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Grandes Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Coches Clásicos
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">34</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">FEB</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">Particular</p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Coches Clásicos
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">64</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">ABR</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Institucionales
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Coches Clásicos
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">72</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">OCT</p>
          </div>
        </div>
      </div>

      {/* TABLA DOS */}
      <div className="bm-3 pt-5">
        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 text-orange-500 bg-gray-200 uppercase">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Cliente</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Categoria de Producto</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Año</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Cantidad</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Mes de Mayor Ventas</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Pequeñas Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Motocicletas
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">22</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">MAR</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Grandes Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Motocicletas
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">34</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">FEB</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">Particular</p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Motocicletas
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">54</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">MAR</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Institucionales
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Motocicletas
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">62</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">JUN</p>
          </div>
        </div>
      </div>

      {/* TABLA TRES */}
      <div className="bm-3 pt-5">
        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 text-orange-500 bg-gray-200 uppercase">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Cliente</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Categoria de Producto</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Año</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Cantidad</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Mes de Mayor Ventas</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Pequeñas Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Camiones y Autobuses
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">32</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">ENE</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Grandes Empresas
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Camiones y Autobuses
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">64</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">FEB</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">Particular</p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Camiones y Autobuses
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">44</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">FEB</p>
          </div>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-100">
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                Institucionales
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              Camiones y Autobuses
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">2024</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">22</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">NOV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
