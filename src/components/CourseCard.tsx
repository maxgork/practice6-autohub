import type { Car } from "@/types/car";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onSelect: () => void;
}

export default function CourseCard({
  car,
  isFavorite,
  onToggleFavorite,
  onSelect,
}: CourseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.category}>{car.category}</span>
        <button
          type="button"
          className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteButtonActive : ""}`}
          onClick={onToggleFavorite}
          aria-pressed={isFavorite}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${car.title} ${isFavorite ? "from" : "to"} favorites`}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
      <h3 className={styles.title}>{car.title}</h3>
      <p className={styles.meta}>{car.level} · {car.durationHours}</p>
      <button type="button" className={styles.detailsButton} onClick={onSelect}>
        View Details
      </button>
    </article>
  );
}
