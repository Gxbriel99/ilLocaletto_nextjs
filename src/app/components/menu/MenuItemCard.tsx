import type { MenuItem } from "../../data/menu";

type MenuItemCardProps = {
  item: MenuItem;
  compact?: boolean;
};

export default function MenuItemCard({
  item,
  compact = false,
}: MenuItemCardProps) {
  const description = item.description?.trim();
  const hasOptions = Boolean(item.options?.length);
  const format = (price: number) => `${price.toFixed(2).replace(".", ",")} €`;

  return (
    <article className="overflow-hidden rounded-xl border-2 border-[#BE9859]/25 bg-white shadow-md transition-shadow hover:shadow-lg">
      <div
        className={
          compact
            ? "grid min-w-0 grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5"
            : "flex min-w-0 flex-col gap-3 p-4 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:p-5 md:gap-6 md:p-6"
        }
      >
        <div className="flex min-w-0 flex-col gap-1 sm:gap-1.5">
          <div className="flex items-start justify-between gap-3 sm:hidden">
            <h3 className="text-base font-bold leading-tight text-[#801917]">
              {item.name}
            </h3>
            {item.price != null && !hasOptions ? (
              <span className="text-base font-bold whitespace-nowrap text-[#801917]">
                {format(item.price)}
              </span>
            ) : null}
          </div>

          <h3 className="hidden text-base font-bold leading-tight text-[#801917] sm:block sm:text-lg md:text-xl">
            {item.name}
          </h3>

          {item.featured ? (
            <span className="w-fit rounded bg-[#801917] px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
              La nostra specialità
            </span>
          ) : null}

          {description ? (
            <p className="text-sm leading-relaxed text-[#5D4037] sm:text-base">
              {description}
            </p>
          ) : null}

          {hasOptions ? (
            <ul className="mt-1 space-y-1">
              {item.options!.map((opt) => (
                <li
                  key={`${item.name}-${opt.quantity}`}
                  className="flex justify-between gap-3 text-sm text-[#5D4037] sm:block sm:text-base"
                >
                  <span>{opt.quantity}</span>
                  <span className="font-bold text-[#801917] sm:hidden">
                    {format(opt.price)}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="hidden flex-col items-end justify-center gap-1 pl-2 sm:flex">
          {hasOptions ? (
            item.options!.map((opt) => (
              <span
                key={`${item.name}-${opt.quantity}-price`}
                className="text-lg font-bold whitespace-nowrap text-[#801917] md:text-xl"
              >
                {format(opt.price)}
              </span>
            ))
          ) : item.price != null ? (
            <span className="text-xl font-bold whitespace-nowrap text-[#801917] sm:text-2xl">
              {format(item.price)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
