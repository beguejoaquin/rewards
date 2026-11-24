import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import { ListPage } from "@/components/list-page";
import { listServices } from "@/data/services";
// TODO: tomar el negocio activo de la ruta/sesión cuando exista la selección de negocio.
import { businessId } from "@/lib/placeholder-data";

export const metadata: Metadata = { title: "Servicios" };

async function Services() {
  await connection();
  const services = await listServices(businessId);

  return (
    <ListPage
      title="Servicios"
      subtitle="Puntos que suma cada visita."
      searchPlaceholder="Buscar servicios"
      noun={["servicio", "servicios"]}
      addLabel="Añadir servicio"
      addHref="/services/new"
      items={services.map((service) => ({
        id: service.id,
        href: `/services/${service.id}`,
        title: service.name,
        trailing: `${service.points} pts`,
      }))}
    />
  );
}

function ServicesFallback() {
  return (
    <div className="flex animate-pulse flex-col gap-6" aria-busy="true">
      <div className="flex flex-col gap-3">
        <div className="h-10 w-48 rounded-xl bg-muted" />
        <div className="h-5 w-64 rounded-lg bg-muted" />
      </div>
      <div className="h-11 rounded-3xl bg-muted" />
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-10 rounded-xl bg-muted" />
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesFallback />}>
      <Services />
    </Suspense>
  );
}
