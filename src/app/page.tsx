"use client";

import { useState } from "react";
import SearchInput from "@/components/SearchInput";
import CourseFilters from "@/components/CourseFilters";
import CourseList from "@/components/CourseList";
import FavoritesCounter from "@/components/FavoritesCounter";
import { cars, categories } from "@/data/cars";
import type { Car } from "@/types/car";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [sortOrder, setSortOrder] = useState("default");
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  function handleToggleFavorite(id: number) {
    setFavoriteIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((favoriteId) => favoriteId !== id)
        : [...previousIds, id]
    );
  }

  const counts: Record<string, number> = { all: cars.length };
  categories.forEach((category) => {
    counts[category] = cars.filter((car) => car.category === category).length;
  });

  const filteredCars = cars
    .filter((car) => {
      const matchesCategory = selectedCategory === "all" || car.category === selectedCategory;
      const matchesSearch = car.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFavorite = !onlyFavorites || favoriteIds.includes(car.id);
      return matchesCategory && matchesSearch && matchesFavorite;
    })
    .sort((a, b) =>
      sortOrder === "asc" ? a.durationHours - b.durationHours
      : sortOrder === "desc" ? b.durationHours - a.durationHours
      : 0
    );

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">AutoHub <span>Car Catalog</span></h1>
        <FavoritesCounter count={favoriteIds.length} onClear={() => setFavoriteIds([])} />
      </header>

      <main className="container">
        <div className="controls">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <CourseFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={counts}
          />
        </div>

        <div className="extra-controls">
          <label htmlFor="sort">Sort by year: </label>
          <select id="sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="default">Default</option>
            <option value="asc">Oldest first</option>
            <option value="desc">Newest first</option>
          </select>
          <label className="toggle">
            <input
              type="checkbox"
              checked={onlyFavorites}
              onChange={(event) => setOnlyFavorites(event.target.checked)}
            />
            Only Favorites
          </label>
        </div>

        {selectedCar && (
          <section className="course-detail" aria-label="Car details">
            <button type="button" className="close-button" onClick={() => setSelectedCar(null)}>
              Close ×
            </button>
            <p className="course-detail-category">{selectedCar.category}</p>
            <h2>{selectedCar.title}</h2>
            <p className="course-detail-meta">
              {selectedCar.level} · Year {selectedCar.durationHours}
            </p>
            <p>{selectedCar.description}</p>
          </section>
        )}

        <CourseList
          cars={filteredCars}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
          onSelectCar={setSelectedCar}
        />
      </main>

      <footer className="site-footer">
        <p>© 2026 AutoHub. React learning project.</p>
      </footer>
    </>
  );
}
