import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';

const Prediction = () => {
  return (
    <>
      <Breadcrumb pageName="Predicciones" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        {/* <TableThree /> */}
      </div>
    </>
  );
};

export default Prediction;
