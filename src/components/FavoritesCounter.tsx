import styles from "./FavoritesCounter.module.css";

interface FavoritesCounterProps {
  count: number;
  onClear: () => void;
}

export default function FavoritesCounter({ count, onClear }: FavoritesCounterProps) {
  return (
    <div className={styles.counter}>
      Favorites: <strong>{count}</strong>{" "}
      <button type="button" onClick={onClear} disabled={count === 0}>
        Clear Favorites
      </button>
    </div>
  );
}
