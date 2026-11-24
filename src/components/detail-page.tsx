import Link from "next/link";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { ArrowLeft02Icon, PencilEdit01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type DetailPageProps = {
  backHref: string;
  backLabel: string;
  icon: IconSvgElement;
  /** Tipo de elemento, p. ej. "Servicio". */
  label: string;
  title: string;
  fields: { label: string; value: string }[];
  editHref: string;
};

export function DetailPage({
  backHref,
  backLabel,
  icon,
  label,
  title,
  fields,
  editHref,
}: DetailPageProps) {
  return (
    <div className="flex flex-col gap-6">
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 w-fit text-points"
        render={<Link href={backHref} />}
        nativeButton={false}
      >
        <HugeiconsIcon icon={ArrowLeft02Icon} strokeWidth={1.5} />
        {backLabel}
      </Button>

      <header className="flex flex-col gap-3">
        <span
          aria-hidden
          className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-points"
        >
          <HugeiconsIcon icon={icon} strokeWidth={1.5} className="size-7" />
        </span>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            {title}
          </h1>
        </div>
      </header>

      <dl className="flex flex-col">
        <Separator />
        {fields.map((field) => (
          <div key={field.label}>
            <div className="flex flex-col gap-1 py-4">
              <dt className="text-sm text-muted-foreground">{field.label}</dt>
              <dd className="text-lg">{field.value}</dd>
            </div>
            <Separator />
          </div>
        ))}
      </dl>

      <Button
        variant="outline"
        size="lg"
        className="h-11 w-full bg-card font-semibold"
        render={<Link href={editHref} />}
        nativeButton={false}
      >
        <HugeiconsIcon icon={PencilEdit01Icon} strokeWidth={1.5} />
        Editar información
      </Button>
    </div>
  );
}
