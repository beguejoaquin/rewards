import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Recompensas",
  description: "Elige un negocio para gestionar sus clientes y recompensas.",
};

// TODO: reemplazar por datos reales cuando el modelo Business tenga categoría
// y descripción (hoy solo tiene id, name, email) y exista un listado por usuario.
const businesses = [
  {
    id: "aaa0af7a-b870-44a5-b7a7-aed5b5e75cfd",
    category: "Barbería",
    name: "Greez Studio",
    description: "Barbería y cuidado personal",
  },
  {
    id: "greez-barber-club",
    category: "Barbería",
    name: "Greez Barber Club",
    description: "Estilo y cuidado masculino",
  },
  {
    id: "greez-atelier",
    category: "Peluquería",
    name: "Greez Atelier",
    description: "Peluquería y estilismo",
  },
];

export default function Landing() {
  const count = businesses.length;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-3">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Recompensas
        </h1>
        <p className="text-lg font-medium">¡Hola de nuevo!</p>
        <p className="max-w-prose text-muted-foreground">
          Elige un negocio para gestionar sus clientes y recompensas.
        </p>
      </header>

      <section aria-labelledby="negocios-title" className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2
            id="negocios-title"
            className="font-heading text-xl font-medium"
          >
            Tus negocios
          </h2>
          <Badge variant="secondary">
            {count} {count === 1 ? "negocio" : "negocios"}
          </Badge>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <li key={business.id} className="flex">
              <Link
                href="/home"
                className="group/link flex w-full rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Card className="w-full transition-shadow group-hover/link:ring-foreground/25">
                  <CardHeader>
                    <Badge variant="outline" className="mb-2 uppercase">
                      {business.category}
                    </Badge>
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{business.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto justify-between font-medium">
                    Entrar al negocio
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2}
                      className="size-4 transition-transform group-hover/link:translate-x-0.5"
                    />
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
