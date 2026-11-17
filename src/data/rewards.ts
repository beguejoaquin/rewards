// src/data/rewards.ts
import "server-only";
import { db } from "@/prisma/db";

// points = costo en puntos; expirationDays = días de validez del voucher que se genera al canjear
export type RewardInput = {
  name: string;
  points: number;
  expirationDays: number;
};

export async function listRewards(businessId: string) {
  return db.orm.public.Reward.where({ businessId }).all();
}

export async function getReward(businessId: string, id: string) {
  return db.orm.public.Reward.where({ id }).where({ businessId }).first();
}

export async function createReward(businessId: string, data: RewardInput) {
  return db.orm.public.Reward.create({ ...data, businessId });
}

export async function updateReward(
  businessId: string,
  id: string,
  data: Partial<RewardInput>,
) {
  return db.orm.public.Reward.where({ id }).where({ businessId }).update(data);
}

// Falla si la recompensa ya tiene vouchers emitidos (onDelete: Restrict en Voucher.reward).
export async function deleteReward(businessId: string, id: string) {
  return db.orm.public.Reward.where({ id }).where({ businessId }).delete();
}
