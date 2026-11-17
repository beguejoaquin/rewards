import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="content-center self-center bg-gray-500 h-screen text-center">
      <h1>Bienvenido</h1>
      <Link href="/home">
        <Button>Ir al Inicio</Button>
      </Link>
    </div>
  );
}
