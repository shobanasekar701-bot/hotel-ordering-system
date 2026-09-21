export interface Bill {
  orderId: number;
  customerName: string;
  tableNumber: number;
  subtotal: number;
  discount: number;
  gst: number;
  grandTotal: number;
}