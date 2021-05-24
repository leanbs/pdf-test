import React, { useEffect, useState } from 'react';

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer
} from "@react-pdf/renderer";
import { styles } from './style';
import ProductRow from './ProductRow';

const ShippingLabel = ({ productLength }) => {
  const [product, setProduct] = useState([]);

  useEffect(()  => {
    setProduct(Array(productLength).fill(<ProductRow />))
  }, [productLength])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Tokopedia</Text>
      </View>

      <View style={styles.content}>
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8 }}>
          <View>
            <Text style={styles.textInvoice}>INV/123/123/123123</Text>
            <View style={styles.containerCourier}>
              <View style={styles.imgCourier} />
              <View>
                <Text style={styles.text}>Kurir Rekomendasi</Text>
                <Text style={styles.text}>Reguler</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.barcode} />
            <Text style={[styles.barcodeText, { justifyContent: 'center' }]}>12091209122109</Text>
          </View>
        </View>

        <View style={styles.containerInfoCourier}>
          <View style={styles.rowInfoCourier}>
            <View style={styles.spacerInfoCourier}>
              <Text style={styles.text}>Diserahkan ke:</Text>
              <Text style={styles.text}>SiCepat</Text>
            </View>
            <View>
              <Text style={styles.text}>Diantar oleh:</Text>
              <Text style={styles.text}>SiCepat</Text>
            </View>
          </View>
          <View style={styles.rowInfoCourier}>
            <View style={styles.spacerInfoCourier}>
              <Text style={styles.text}>Berat:</Text>
              <Text style={styles.text}>1 kg</Text>
            </View>
            <View>
              <Text style={styles.text}>Ongkir:</Text>
              <Text style={styles.text}>Rp15.000</Text>
            </View>
          </View>
        </View>

        <View style={styles.shipmentContainer}>
          <View style={{ flex: 1, marginBottom: 8, marginRight: 8 }}>
            <Text style={styles.text}>
              Kepada:
            </Text>
            <Text style={styles.text}>
              Leonardy
            </Text>
            <Text style={styles.text}>
              Jl. Muara Karang Blok O 8 Timur No. 57. Jakarta Utara, 14747
              08123456789
              Keterangan: Pager Ijo
            </Text>
          </View>
          <View style={{ flex: 1, marginBottom: 8 }}>
            <Text style={styles.text}>
              Dari:
            </Text>
            <Text style={styles.text}>
              88 Gallery Indonesia
            </Text>
            <Text style={styles.text}>
              Jl. Sukasenang III No.4, Cikutra, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40124
              081221144185
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 2 }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ width: 88, fontSize: 8, marginRight: 8 }}>Produk</Text>
            <Text style={{ width: 40, fontSize: 8, marginRight: 8 }}>Varian</Text>
            <Text style={{ width: 72, fontSize: 8, marginRight: 8, wordBreak: 'all' }}>SKU</Text>
            <Text style={{ width: 40, fontSize: 8 }}>Jumlah</Text>
          </View>
        </View>
        {product}
      </View>
    </View>
  );
};

export default ShippingLabel;