import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DocumentPDF from "./DocumentPdf";
import ECommerce from "../../pages/ECommerce";

function PdfDownloader() {
  const [verGraficos, setVerGraficos] = React.useState(false);
  const [verPDF, setVerPDF] = React.useState(false);

  const Menu = () => (
    <nav className="flex justify-end mr-15 mt-5">
      <button
        className="bg-green-500 p-3 m-2 rounded-xl"
        variant="dark"
        onClick={() => {
          setVerGraficos(!verGraficos);
          setVerPDF(false);
        }}
      >
        {verGraficos ? "Ocultar Graficos" : "Ver Graficos"}
      </button>

      <button
        className="bg-green-500 p-3 m-2 rounded-xl"
        variant="dark"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerGraficos(false);
        }}
      >
        {verPDF ? "Ocultar PDF" : "Ver PDF"}
      </button>

      <PDFDownloadLink
        document={<DocumentPDF content={<ECommerce />} />}
        fileName="ecommerce.pdf"
      >
        <button className="bg-green-500 p-3 m-2 rounded-xl" variant="info">
          Descargar PDF
        </button>
      </PDFDownloadLink>
    </nav>
  );

  return (
    <div className="min-h-full">
      <Menu />
      {verGraficos ? <ECommerce /> : null}
      {verPDF ? (
        <PDFViewer className="w-full h-screen">
          <DocumentPDF content={<ECommerce />} />
        </PDFViewer>
      ) : null}

      
    </div>
  );
}

export default PdfDownloader;
