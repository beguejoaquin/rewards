// src/data/customers.ts
// Todas las funciones reciben businessId: el negocio sale de la sesión, nunca del cliente HTTP.
import "server-only";
import { db } from "@/prisma/db";

// Los puntos no se editan desde el CRUD básico: cambian solo con los flujos
// de consumo de servicios y canje de recompensas.
export type CustomerInput = { name: string; email: string };

export async function listCustomers(businessId: string) {
  return db.orm.public.Customer.where({ businessId }).all();
}

export async function getCustomer(businessId: string, id: string) {
  return db.orm.public.Customer.where({ id }).where({ businessId }).first();
}

// Falla si el email ya existe dentro del mismo negocio (@@unique([businessId, email])).
export async function createCustomer(businessId: string, data: CustomerInput) {
  return db.orm.public.Customer.create({ ...data, businessId });
}

export async function updateCustomer(
  businessId: string,
  id: string,
  data: Partial<CustomerInput>,
) {
  return db.orm.public.Customer.where({ id })
    .where({ businessId })
    .update(data);
}

export async function deleteCustomer(businessId: string, id: string) {
  return db.orm.public.Customer.where({ id }).where({ businessId }).delete();
}
