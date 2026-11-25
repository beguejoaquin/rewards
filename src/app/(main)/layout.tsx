import { HugeiconsIcon } from "@hugeicons/react";
import {
  Scissor01Icon,
  CardExchange01Icon,
  LogOutIcon,
  MoreVerticalIcon,
} from "@hugeicons/core-free-icons";
import { BottomNav } from "@/ui/components/bottom-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/shadcn/dropdown-menu";
import { Button } from "@/ui/components/shadcn/button";
import Link from "next/link";

// TODO: tomar el nombre del negocio activo cuando exista la selección de negocio.
const businessName = "Greez Studio";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b">
        <div className="flex items-center gap-3 mx-auto px-4 py-3 w-full max-w-2xl">
          <span
            aria-hidden
            className="flex justify-center items-center bg-primary rounded-xl size-10 text-primary-foreground"
          >
            <HugeiconsIcon
              icon={Scissor01Icon}
              strokeWidth={1.5}
              className="size-5"
            />
          </span>
          <p className="font-heading font-semibold text-xl">{businessName}</p>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="ms-auto"
                  aria-label="Más opciones"
                />
              }
            >
              <HugeiconsIcon
                icon={MoreVerticalIcon}
                strokeWidth={2}
                className="size-5"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem render={<Link href={"/business/"} />}>
                <HugeiconsIcon icon={CardExchange01Icon} strokeWidth={1.5} />
                Cambiar Negocio
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href={""} />}>
                <HugeiconsIcon icon={LogOutIcon} strokeWidth={1.5} />
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 mx-auto px-4 pt-6 pb-28 w-full max-w-2xl">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
