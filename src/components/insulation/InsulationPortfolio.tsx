import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { insulationPage } from "@/lib/insulation-page";

export function InsulationPortfolio() {
  return (
    <section
      aria-labelledby="portfolio-heading"
      className="mx-auto max-w-max-width px-gutter py-margin-desktop rtl"
    >
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2
            id="portfolio-heading"
            className="text-display-lg font-bold text-primary"
          >
            مشاريعنا المنفذة
          </h2>
          <p className="text-on-surface-variant">
            جولة في أبرز أعمالنا في أحياء الرياض (الصحافة، النرجس، الملقا،
            وغيرها).
          </p>
        </div>
        <Link
          href="/services"
          className="hidden items-center gap-2 font-bold text-secondary hover:underline md:flex"
        >
          مشاهدة كافة الأعمال
          <span className="material-symbols-outlined" aria-hidden>
            arrow_back
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {insulationPage.portfolio.map((project) => (
          <article
            key={project.title}
            className="group relative aspect-3/4 overflow-hidden rounded-3xl"
          >
            <OptimizedImage
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL={project.image.blurDataURL}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            <div className="absolute right-6 bottom-6 text-on-primary">
              <p className="text-sm opacity-80">{project.tag}</p>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
