import type { Category, SortField, SortOrder } from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tumu" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="card p-4 sm:p-5 space-y-4 mb-8 max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (baslik, aciklama, teknoloji)..."
          className="input-field pl-10"
          aria-label="Proje ara"
        />
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-muted)]">
          ⌕
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                category === cat.value
                  ? "bg-[var(--color-brand)] text-white shadow-sm"
                  : "bg-[var(--color-brand-light)] text-[var(--color-brand)] hover:bg-[var(--color-accent-soft)]"
              }`}
              aria-pressed={category === cat.value}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="input-field py-2 text-sm min-w-0"
            aria-label="Siralama alani"
          >
            <option value="year">Yil</option>
            <option value="title">Baslik</option>
          </select>
          <button
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            className="input-field py-2 px-3 text-sm whitespace-nowrap hover:bg-[var(--color-brand-light)]"
            aria-label={`Siralama yonu: ${sortOrder === "asc" ? "artan" : "azalan"}`}
            type="button"
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </button>
        </div>
      </div>

      <p className="text-sm font-mono text-[var(--color-ink-muted)]">
        {resultCount} / {totalCount} proje
      </p>
    </div>
  );
}
