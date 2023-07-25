import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import ECommerce from "../../pages/ECommerce";


const DocumentPDF = ({ graphics }) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {graphics ? graphics.title : "..."}
          </Text>
          <Text>Por {graphics ? graphics.poet.name : "..."}</Text>
          <Image/>
          <Text>
            {lorem}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: "22px" }}>
            {graphics ? graphics.content : null}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocumentPDF;
