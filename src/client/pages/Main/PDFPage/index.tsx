import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Api } from "api";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "100%",
    height: "100%",
    fontSize: "15px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

type Detail = {
  type: string;
  value: any;
};

const PDFPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = React.useState<Detail[]>([]);
  const getApplicationById = async () => {
    const data = await Api().getApplicationById({ id: +params.id! });

    if (!data || !data.status) {
      return navigate("/catalogs");
    }
    const localDetails: Detail[] = [];
    for (const property in data.application) {
      if (typeof (data.application as any)[property] === "string")
        localDetails.push({ type: property, value: (data.application as any)[property] });
    }
    setDetails(localDetails);
  };
  React.useEffect(() => {
    getApplicationById();
  }, []);

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Application</Text>
            {details &&
              details.map((detail, index) => (
                <Text key={index}>
                  {detail.type}: {detail.value}
                </Text>
              ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFPage;
