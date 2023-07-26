import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";
import ECommerce from "../../pages/ECommerce";

const DocumentPDF = ({ graphics }) => {
  return (
    <Document>
      <Page size="A4" style={{ backgroundColor: "white" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          { graphics }
        </View>
      </Page>
    </Document>
  );
};

export default DocumentPDF;
