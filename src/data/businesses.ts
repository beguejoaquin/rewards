// src/data/businesses.ts
// Capa de acceso a datos de Business. Solo se importa desde código de servidor
// (server components, server actions, route handlers).
import "server-only";
import { db } from "@/prisma/db";

export type BusinessInput = { name: string; email: string };

// Normalmente se llama una sola vez, al registrarse el negocio.
export async function createBusiness(data: BusinessInput) {
  return db.orm.public.Business.create(data);
}

export async function getBusiness(id: string) {
  return db.orm.public.Business.where({ id }).first();
}

export async function updateBusiness(id: string, data: Partial<BusinessInput>) {
  return db.orm.public.Business.where({ id }).update(data);
}

// Borra también todo lo que cuelga del negocio (clientes, servicios, recompensas, vouchers).
export async function deleteBusiness(id: string) {
  return db.orm.public.Business.where({ id }).delete();
}
