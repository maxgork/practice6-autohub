interface CourseFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

export default function CourseFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}: CourseFiltersProps) {
  return (
    <div className="filters" role="group" aria-label="Filter by category">
      {["all", ...categories].map((category) => (
        <button
          key={category}
          type="button"
          className={selectedCategory === category
            ? "filter-button filter-button--active"
            : "filter-button"}
          aria-pressed={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category === "all" ? "All" : category} ({counts[category] ?? 0})
        </button>
      ))}
    </div>
  );
}
