import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GiftIcon } from "@hugeicons/core-free-icons";
import { auth } from "@/lib/auth/server";
import { Button } from "@/ui/components/shadcn/button";

export const metadata: Metadata = {
  title: "Recompensas",
  description:
    "Premia la fidelidad de tus clientes: suman puntos con cada servicio y los canjean por recompensas.",
};

// Quien ya inició sesión va directo a sus negocios.
async function RedirectIfSignedIn() {
  await connection();
  const { data: session } = await auth.getSession();
  if (session?.user) redirect("/businesses");
  return null;
}

export default function Landing() {
  return (
    <main className="flex flex-col flex-1 justify-center gap-10 mx-auto px-4 sm:px-6 py-16 w-full max-w-md">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-heading font-semibold text-5xl tracking-tight">
            Recompensas
          </h1>
          <p className="text-muted-foreground text-lg">
            Fidelizá a tus clientes con un sistema de recompensas simple: cada
            servicio otorga puntos que pueden ser canjeados por recompensas, vos
            controlas todo desde acá.
          </p>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-3">
        <Button
          size="lg"
          className="sm:flex-1 h-11 font-semibold"
          render={<Link href="/auth/sign-in" />}
          nativeButton={false}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="sm:flex-1 bg-card h-11 font-semibold"
          render={<Link href="/auth/sign-up" />}
          nativeButton={false}
        >
          Crear cuenta
        </Button>
      </div>

      <Suspense fallback={null}>
        <RedirectIfSignedIn />
      </Suspense>
    </main>
  );
}
