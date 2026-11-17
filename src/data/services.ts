// src/data/services.ts
import "server-only";
import { db } from "@/prisma/db";

// points = puntos que otorga el servicio al consumirlo
export type ServiceInput = { name: string; points: number };

export async function listServices(businessId: string) {
  return db.orm.public.Service.where({ businessId }).all();
}

export async function getService(businessId: string, id: string) {
  return db.orm.public.Service.where({ id }).where({ businessId }).first();
}

export async function createService(businessId: string, data: ServiceInput) {
  return db.orm.public.Service.create({ ...data, businessId });
}

export async function updateService(
  businessId: string,
  id: string,
  data: Partial<ServiceInput>,
) {
  return db.orm.public.Service.where({ id }).where({ businessId }).update(data);
}

export async function deleteService(businessId: string, id: string) {
  return db.orm.public.Service.where({ id }).where({ businessId }).delete();
}
