import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Scissor01Icon } from "@hugeicons/core-free-icons";
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
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10 px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-6">
        <span
          aria-hidden
          className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
        >
          <HugeiconsIcon
            icon={Scissor01Icon}
            strokeWidth={1.5}
            className="size-7"
          />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="font-heading text-5xl font-semibold tracking-tight">
            Recompensas
          </h1>
          <p className="text-lg text-muted-foreground">
            Tus clientes suman puntos con cada servicio y los canjean por
            recompensas. Tú llevas la cuenta desde un solo lugar.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="h-11 font-semibold sm:flex-1"
          render={<Link href="/auth/sign-in" />}
          nativeButton={false}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="h-11 bg-card font-semibold sm:flex-1"
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
