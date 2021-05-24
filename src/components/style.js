import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    border: '1px solid #E0E0E0',
  },
  header: {
    height: 36,
    borderBottom: '1px solid #E0E0E0',
  },
  content: {
    padding: '8px 20px',
  },
  imgCourier: {
    backgroundColor: 'lime',
    width: 32,
    height: 32,
    marginRight: 8,
  },
  barcode: {
    width: 128,
    height: 47,
    backgroundColor: 'gray',
    marginLeft: 8,
  },
  containerCourier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInvoice: {
    fontSize: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 10,
  },
  noteText: {
    fontSize: 8,
  },
  headerText: {
    fontSize: 12,
  },
  barcodeText: {
    fontSize: 14,
  },
  bookingCode: {
    fontSize: 16,
  },
  containerInfoCourier: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  rowInfoCourier: {
    flex: 1,
  },
  spacerInfoCourier: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  shipmentContainer: {
    flexDirection: 'row',
  },
  // &[data-printid='invoiceText'] {
  //   font-size: 8px;
  // }
  // &[data-printid='text'] {
  //   font-size: 10px;
  // }
  // &[data-printid='note'] {
  //   font-size: 8px;
  // }
  // &[data-printid='headerText'] {
  //   font-size: 12px;
  // }
  // &[data-printid='barcodeText'] {
  //   font-size: 14px;
  // }
  // &[data-printid='bookingCode'] {
  //   font-size: 6px;
  // }
})