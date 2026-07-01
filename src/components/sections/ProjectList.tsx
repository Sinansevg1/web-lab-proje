import { useMemo, useState } from "react";
import type { SortField, SortOrder, Category } from "../../types/project";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useContent } from "../../context/useContent";

const categoryLabels: Record<string, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
};

export default function ProjectList() {
  const { content, loading, error } = useContent();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const projects = useMemo(
    () => content?.projects.items ?? [],
    [content?.projects.items],
  );

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  );

  if (!content) return null;

  const { projects: projectsSection } = content;

  return (
    <Section id="projects" alt>
      <SectionTitle
        label={projectsSection.sectionLabel}
        title={projectsSection.title}
        description={projectsSection.description}
        center
      />

      {error && (
        <div className="card border-red-200 bg-red-50 dark:bg-red-950/30 p-4 mb-6 max-w-2xl mx-auto">
          <p className="text-red-800 dark:text-red-300">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <ProjectFilter
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sortField={sortField}
          onSortFieldChange={setSortField}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          resultCount={filtered.length}
          totalCount={projects.length}
        />
      )}

      {loading && (
        <div className="flex justify-center py-16">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-brand)] border-t-transparent" />
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <p className="text-center text-[var(--color-ink-muted)] py-16">Eslesen proje bulunamadi.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        {filtered.map((project) => (
          <article key={project.id} className="card card-hover overflow-hidden flex flex-col">
            <div className="relative h-44 sm:h-48 overflow-hidden bg-[var(--color-brand)]">
              <img
                src={project.image}
                alt={`${project.title} gorseli`}
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              {project.featured && (
                <span className="absolute top-3 right-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-bold text-amber-950">
                  One Cikan
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-[var(--color-brand)]">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="tag text-[10px] sm:text-xs">{t}</span>
                ))}
              </div>

              <p className="mt-4 text-xs font-mono text-[var(--color-ink-muted)]">
                {project.year} · {categoryLabels[project.category] ?? project.category}
              </p>

              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full text-center text-sm py-2.5">
                  Projeyi Incele →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
