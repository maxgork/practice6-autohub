interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="search-field">
      <label htmlFor="car-search">Search for a car</label>
      <input
        type="search"
        id="car-search"
        placeholder="For example, Audi"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
