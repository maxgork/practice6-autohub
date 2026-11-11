import type { Car } from "@/types/car";
import CourseCard from "./CourseCard";

interface CourseListProps {
  cars: Car[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
  onSelectCar: (car: Car) => void;
}

export default function CourseList({
  cars,
  favoriteIds,
  onToggleFavorite,
  onSelectCar,
}: CourseListProps) {
  if (cars.length === 0) {
    return <p className="empty-state">No cars found. Try changing your search or filter.</p>;
  }

  return (
    <div className="course-grid">
      {cars.map((car) => (
        <CourseCard
          key={car.id}
          car={car}
          isFavorite={favoriteIds.includes(car.id)}
          onToggleFavorite={() => onToggleFavorite(car.id)}
          onSelect={() => onSelectCar(car)}
        />
      ))}
    </div>
  );
}
