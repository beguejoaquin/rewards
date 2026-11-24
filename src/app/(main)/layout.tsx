import { HugeiconsIcon } from "@hugeicons/react";
import { Scissor01Icon } from "@hugeicons/core-free-icons";
import { BottomNav } from "@/components/bottom-nav";

// TODO: tomar el nombre del negocio activo cuando exista la selección de negocio.
const businessName = "Greez Studio";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3">
          <span
            aria-hidden
            className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"
          >
            <HugeiconsIcon icon={Scissor01Icon} strokeWidth={1.5} className="size-5" />
          </span>
          <p className="font-heading text-xl font-semibold">{businessName}</p>
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-6 pb-28">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
