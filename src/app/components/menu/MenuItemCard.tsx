import Image from "next/image";
import type { MenuItem } from "../../data/menu";
import { formatPrice } from "./formatPrice";

type MenuItemCardProps = {
  item: MenuItem;
  fallbackImage: string;
  compact?: boolean;
};

export default function MenuItemCard({
  item,
  fallbackImage,
  compact = false,
}: MenuItemCardProps) {
  const imageSrc = item.image?.trim() || fallbackImage;
  const showImage = imageSrc !== "#";
  const description = item.description?.trim();
  const hasOptions = Boolean(item.options?.length);

  return (
    <article className="overflow-hidden rounded-xl border-2 border-[#BE9859]/25 bg-white shadow-md transition-shadow hover:shadow-lg">
      <div
        className={
          compact
            ? "flex min-h-[6.5rem] sm:min-h-[7rem]"
            : "flex flex-col sm:flex-row sm:min-h-[9rem] md:min-h-[9.5rem]"
        }
      >
        <div
          className={
            compact
              ? "relative w-28 shrink-0 sm:w-32"
              : "relative h-36 w-full shrink-0 sm:h-auto sm:w-36 md:w-44 lg:w-48"
          }
        >
          {item.featured ? (
            <span className="absolute left-0 top-0 z-10 bg-[#801917] px-2.5 py-1 text-[0.65rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs">
              La nostra
              <br />
              specialità
            </span>
          ) : null}
          {showImage ? (
            <Image
              src={imageSrc}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 112px, 192px"
              className="object-cover"
            />
          ) : (
            <div
              className="h-full w-full bg-[#EFE9D1]"
              aria-hidden
            />
          )}
        </div>

        <div
          className={
            compact
              ? "grid min-w-0 flex-1 grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5"
              : "flex min-w-0 flex-1 flex-col gap-3 p-4 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:p-5 md:gap-6 md:p-6"
          }
        >
          <div className="flex min-w-0 flex-col gap-1 sm:gap-1.5">
            <h3 className="text-base font-bold leading-tight text-[#801917] sm:text-lg md:text-xl">
              {item.name}
            </h3>
            {description ? (
              <p className="text-sm leading-relaxed text-[#5D4037] sm:text-base">
                {description}
              </p>
            ) : null}
            {hasOptions ? (
              <ul className="mt-0.5 space-y-1">
                {item.options!.map((opt) => (
                  <li
                    key={`${item.name}-${opt.quantity}`}
                    className="flex justify-between gap-3 text-sm text-[#5D4037] sm:block sm:text-base"
                  >
                    <span>{opt.quantity}</span>
                    <span className="font-bold text-[#801917] sm:hidden">
                      {formatPrice(opt.price)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div
            className={
              compact
                ? "flex flex-col items-end justify-center gap-1 pl-2"
                : "flex items-center justify-between gap-3 border-t border-[#BE9859]/20 pt-3 sm:flex-col sm:items-end sm:justify-center sm:border-0 sm:pt-0 sm:pl-2"
            }
          >
            {hasOptions ? (
              <div
                className={
                  compact
                    ? "flex flex-col items-end gap-1"
                    : "hidden flex-col items-end gap-1 sm:flex"
                }
              >
                {item.options!.map((opt) => (
                  <span
                    key={`${item.name}-${opt.quantity}-price`}
                    className="text-lg font-bold whitespace-nowrap text-[#801917] md:text-xl"
                  >
                    {formatPrice(opt.price)}
                  </span>
                ))}
              </div>
            ) : item.price != null ? (
              <span className="text-xl font-bold text-[#801917] sm:text-2xl">
                {formatPrice(item.price)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
