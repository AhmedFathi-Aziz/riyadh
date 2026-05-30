import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import { insulationPage } from "@/lib/insulation-page";

export function InsulationTypesGrid() {
  const { types, riyadhBenefits } = insulationPage;
  const [water, thermal, foam] = types;

  return (
    <section
      aria-labelledby="insulation-types-heading"
      className="mx-auto max-w-max-width px-gutter py-margin-desktop rtl"
    >
      <div className="mb-16 text-center">
        <h2
          id="insulation-types-heading"
          className="mb-4 text-display-lg font-bold text-primary"
        >
          أنواع العزل المتخصصة
        </h2>
        <p className="mx-auto max-w-3xl text-on-surface-variant">
          نعتمد على أفضل المواد العالمية المختبرة لتحمل الظروف المناخية القاسية
          في المملكة.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <article
          id={water.id}
          className="group flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-low p-8 transition-shadow hover:shadow-xl md:col-span-8 md:flex-row"
        >
          <div className="flex-1">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Icon name={water.icon} size="lg" className="text-on-primary" />
            </div>
            <h3 className="mb-4 text-headline-md font-semibold text-primary">
              {water.title}
            </h3>
            <p className="leading-relaxed text-on-surface-variant">
              {water.description}
            </p>
          </div>
          {"image" in water && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:w-1/2">
              <OptimizedImage
                src={water.image.src}
                alt={water.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={water.image.blurDataURL}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}
        </article>

        <article
          id={thermal.id}
          className="group rounded-3xl border border-outline-variant/30 bg-surface-container-high p-8 transition-shadow hover:shadow-xl md:col-span-4"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Icon name={thermal.icon} size="lg" className="text-on-secondary" />
          </div>
          <h3 className="mb-4 text-headline-md font-semibold text-secondary">
            {thermal.title}
          </h3>
          <p className="mb-6 leading-relaxed text-on-surface-variant">
            {thermal.description}
          </p>
          {"image" in thermal && (
            <div className="h-40 overflow-hidden rounded-2xl">
              <OptimizedImage
                src={thermal.image.src}
                alt={thermal.image.alt}
                width={thermal.image.width}
                height={thermal.image.height}
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={thermal.image.blurDataURL}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}
        </article>

        <article
          id={foam.id}
          className="group rounded-3xl bg-primary p-8 text-on-primary transition-shadow hover:shadow-xl md:col-span-4"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-on-primary">
            <Icon name={foam.icon} size="lg" className="text-primary" />
          </div>
          <h3 className="mb-4 text-headline-md font-semibold">{foam.title}</h3>
          <p className="leading-relaxed opacity-90">{foam.description}</p>
        </article>

        <article className="flex flex-col justify-center rounded-3xl border border-outline-variant/30 bg-surface-container-highest p-8 md:col-span-8">
          <h3 className="mb-6 text-headline-md font-semibold text-primary">
            {riyadhBenefits.title}
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {riyadhBenefits.items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Icon
                  name="check_circle"
                  size="lg"
                  filled
                  className="text-secondary"
                />
                <div>
                  <p className="font-bold text-primary">{item.title}</p>
                  <p className="text-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
