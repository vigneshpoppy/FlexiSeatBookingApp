export interface Seat {
  id: string;            // e.g., A20C1
  row: string;           // Region like 'A'
  number: number;        // Seat number
  status: SeatStatus;    // 'available' | 'booked' | 'confirmed' | 'checked-in'
}
export type SeatStatus = 'available' | 'booked' | 'confirmed' | 'checked-in';