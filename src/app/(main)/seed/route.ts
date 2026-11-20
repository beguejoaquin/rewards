import { db } from "@/prisma/db";
import {
  business,
  customers,
  ownerId,
  rewards,
  services,
} from "@/lib/placeholder-data";

export async function GET() {
  const existingBusiness = await db.orm.public.Business.where({
    id: business.id,
  }).first();

  if (existingBusiness) {
    return Response.json({ message: "Placeholder data is already seeded." });
  }

  const existingOwner = await db.orm.public.User.where({ id: ownerId }).first();

  if (!existingOwner) {
    await db.orm.public.User.create({
      id: ownerId,
      email: business.email,
      name: business.name,
      lastName: "Owner",
      type: "owner",
    });
  }

  await db.orm.public.Business.create(business);

  for (const customer of customers) {
    await db.orm.public.Customer.create({
      name: customer.name,
      email: customer.email,
      points: customer.points,
      businessId: business.id,
    });
  }

  for (const service of services) {
    await db.orm.public.Service.create({
      name: service.name,
      points: service.points,
      businessId: business.id,
    });
  }

  for (const reward of rewards) {
    await db.orm.public.Reward.create({
      name: reward.name,
      points: reward.points,
      expirationDays: reward.expiration_days,
      businessId: business.id,
    });
  }

  return Response.json({
    message: "Placeholder data seeded successfully.",
    seeded: {
      customers: customers.length,
      services: services.length,
      rewards: rewards.length,
    },
  });
}
