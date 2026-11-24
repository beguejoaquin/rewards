import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { Scissor01Icon } from "@hugeicons/core-free-icons";
import { DetailPage } from "@/components/detail-page";
import { getService } from "@/data/services";
// TODO: tomar el negocio activo de la ruta/sesión cuando exista la selección de negocio.
import { businessId } from "@/lib/placeholder-data";

export const metadata: Metadata = { title: "Servicio" };

async function Service({ params }: { params: Promise<{ id: string }> }) {
  await connection();
  const { id } = await params;
  const service = await getService(businessId, id);

  if (!service) notFound();

  return (
    <DetailPage
      backHref="/services"
      backLabel="Servicios"
      icon={Scissor01Icon}
      label="Servicio"
      title={service.name}
      fields={[{ label: "Puntos que otorga", value: `${service.points} puntos` }]}
      editHref={`/services/${service.id}/edit`}
    />
  );
}

export default function ServicePage(props: PageProps<"/services/[id]">) {
  return (
    <Suspense
      fallback={
        <div
          className="h-64 animate-pulse rounded-2xl bg-muted"
          aria-busy="true"
        />
      }
    >
      <Service params={props.params} />
    </Suspense>
  );
}
