import "./App.css";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  // BlobProvider,
  usePDF,
} from "@react-pdf/renderer";
import ShippingLabel from "./components/ShippingLabel";
import { useEffect, useRef, useState } from "react";

// Create styles
const styles = StyleSheet.create({
  preview: {
    width: "100%",
    height: "100vh",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: "10mm",
  },
  pageA6: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
// if product > 5 go to page baru
// Create Document Component
const MyDocument = ({ paperSize = "A6", awbLength = [] }) => (
  <Document>
    {awbLength.map((awb) => {
      return (
        <Page
          size={paperSize}
          style={paperSize === "A6" ? styles.pageA6 : styles.page}
        >
          <ShippingLabel productLength={awb.productLength} />
        </Page>
      );
    })}
  </Document>
);

function App() {
  const iframeRef = useRef(null);
  const [paperSize, setPaperSize] = useState("A6");
  const [awbLength, setAwbLength] = useState([
    {
      productLength: 4,
    },
    {
      productLength: 22,
    },
    {
      productLength: 15,
    },
    {
      productLength: 32,
    },
  ]);
  const [textLength, setTextLength] = useState("");
  const [instance, update] = usePDF({
    document: MyDocument({ paperSize, awbLength }),
  });

  useEffect(() => {
    if (instance.blob) {
      const file = window.URL.createObjectURL(instance.blob);
      document.querySelector("iframe").src =
        file +
        "#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=fit";
    }
  }, [instance.blob]);
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
      {/* {instance.loading ? "loading" : "not loading"} */}
      <iframe
        onScroll={(e) => console.log("hehe")}
        ref={iframeRef}
        title="Ship"
        width="460"
        height="654"
        src={instance.blob}
        type="application/pdf"
      ></iframe>
      {/* <button
        onClick={() => {
          setPaperSize("A4");
          update();
        }}
      >
        A4
      </button>
      <button
        onClick={() => {
          setPaperSize("A6");
          update();
        }}
      >
        A6
      </button> */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {awbLength.length ? (
          <table style={{ margin: 24 }}>
            <tr>
              <td>AWB No</td>
              <td>Product Length</td>
            </tr>
            {awbLength.map((awb, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{awb.productLength}</td>
              </tr>
            ))}
          </table>
        ) : null}
        <div>
          <div>
            <button onClick={() => {setAwbLength([]); update()}}>clear</button>
            <button onClick={() => update()}>force update</button>
            <button onClick={() => iframeRef.current.contentWindow.print()}>
              print
            </button>
          </div>
          <div>
            <input
              type="number"
              value={textLength}
              onChange={(e) => setTextLength(e.target.value)}
            />
            <button
              onClick={() => {
                setAwbLength([
                  ...awbLength,
                  {
                    productLength: parseInt(textLength, 10),
                  },
                ]);
                update();
              }}
            >
              add awb
            </button>
          </div>
        </div>
      </div>
      {/* <PDFViewer id="test" style={styles.preview}>
        <MyDocument />
      </PDFViewer> */}
      {/* <BlobProvider document={MyDocument}>
      {({ blob, url, loading, error }) => {
        console.log(blob, 'asu');
        // Do whatever you need with blob here
        return <div>There's something going on on the fly</div>;
      }}
    </BlobProvider> */}
    </div>
  );
}

export default App;
