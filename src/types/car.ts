export interface Car {
  id: number;
  title: string;
  category: string;
  level: "Economy" | "Comfort" | "Premium";
  durationHours: number;
  description: string;
}
