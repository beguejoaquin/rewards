"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowRight01Icon,
  MoreVerticalIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/ui/components/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/shadcn/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/ui/components/shadcn/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/ui/components/shadcn/item";

export type ListPageItem = {
  id: string;
  href: string;
  title: string;
  /** Líneas secundarias bajo el título (cliente, vigencia, etc.). */
  description?: string[];
  /** Texto a la derecha, p. ej. "80 pts". */
  trailing?: string;
};

type ListPageProps = {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  /** [singular, plural] para el contador: "1 servicio" / "6 servicios". */
  noun: [string, string];
  items: ListPageItem[];
  /** Texto y destino de la opción del menú de tres puntos. */
  addLabel: string;
  addHref: string;
};

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function ListPage({
  title,
  subtitle,
  searchPlaceholder,
  noun,
  items,
  addLabel,
  addHref,
}: ListPageProps) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    return items.filter((item) =>
      normalize([item.title, ...(item.description ?? [])].join(" ")).includes(q)
    );
  }, [items, query]);

  const count = visible.length;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </header>

      <div className="flex items-center gap-2">
        <InputGroup className="h-11 flex-1 bg-card">
          <InputGroupAddon>
            <HugeiconsIcon icon={Search01Icon} strokeWidth={1.5} />
          </InputGroupAddon>
          <InputGroupInput
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="[&::-webkit-search-cancel-button]:appearance-none"
          />
        </InputGroup>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon-lg" aria-label="Más opciones" />
            }
          >
            <HugeiconsIcon
              icon={MoreVerticalIcon}
              strokeWidth={2}
              className="size-5"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem render={<Link href={addHref} />}>
              <HugeiconsIcon icon={Add01Icon} strokeWidth={1.5} />
              {addLabel}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <section aria-label={title} className="flex flex-col gap-1">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {count} {count === 1 ? noun[0] : noun[1]}
        </p>

        {count === 0 ? (
          <p className="py-10 text-center text-muted-foreground">
            {query
              ? `No encontramos resultados para "${query.trim()}".`
              : `Todavía no hay ${noun[1]}. Usa el menú para añadir uno.`}
          </p>
        ) : (
          <ItemGroup>
            {visible.map((item, index) => (
              <div key={item.id} role="listitem">
                <Item render={<Link href={item.href} />}>
                  <ItemContent>
                    <ItemTitle>{item.title}</ItemTitle>
                    {item.description?.map((line) => (
                      <ItemDescription key={line}>{line}</ItemDescription>
                    ))}
                  </ItemContent>
                  <ItemActions>
                    {item.trailing ? (
                      <span className="text-sm font-semibold text-points">
                        {item.trailing}
                      </span>
                    ) : null}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={1.5}
                      className="size-4 text-muted-foreground"
                    />
                  </ItemActions>
                </Item>
                {index < visible.length - 1 ? <ItemSeparator /> : null}
              </div>
            ))}
          </ItemGroup>
        )}
      </section>
    </div>
  );
}
