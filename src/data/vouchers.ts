// src/data/vouchers.ts
import "server-only";
import { db } from "@/prisma/db";

export type VoucherState = "valid" | "consumed" | "expired" | "revoked";

// Si tu versión de Prisma 8 lee DateTime como Temporal.Instant, cambiá Date por ese tipo.
export type VoucherInput = {
  rewardId: string;
  customerId: string;
  expirationDate: Date;
};

export async function listVouchers(businessId: string, state?: VoucherState) {
  const query = db.orm.public.Voucher.where({ businessId });
  return (state ? query.where({ state }) : query).all();
}

export async function getVoucher(businessId: string, id: string) {
  return db.orm.public.Voucher.where({ id }).where({ businessId }).first();
}

// Inserción básica. El canje real (descontar puntos + crear el voucher en una
// transacción) va en el flujo de canje, no se llama directo desde la UI.
export async function createVoucher(businessId: string, data: VoucherInput) {
  // Evita mezclar datos de negocios distintos: reward y customer deben ser de este negocio.
  const reward = await db.orm.public.Reward.where({ id: data.rewardId })
    .where({ businessId })
    .first();
  const customer = await db.orm.public.Customer.where({ id: data.customerId })
    .where({ businessId })
    .first();
  if (!reward || !customer) {
    throw new Error("La recompensa o el cliente no pertenecen a este negocio");
  }
  // state queda en "valid" por el default del contrato
  return db.orm.public.Voucher.create({ ...data, businessId });
}

// Único campo editable: el estado.
export async function updateVoucherState(
  businessId: string,
  id: string,
  state: VoucherState,
) {
  return db.orm.public.Voucher.where({ id })
    .where({ businessId })
    .update({ state });
}

export async function deleteVoucher(businessId: string, id: string) {
  return db.orm.public.Voucher.where({ id }).where({ businessId }).delete();
}
