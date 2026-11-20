import {
  businessId,
  business,
  customers,
  services,
  rewards,
} from "@/lib/placeholder-data";
import {
  createBusiness,
  getBusiness,
  updateBusiness,
  deleteBusiness,
} from "@/data/businesses";
import {
  createCustomer,
  getCustomer,
  listCustomers,
  updateCustomer,
  deleteCustomer,
} from "@/data/customers";

import {
  createService,
  getService,
  listServices,
  updateService,
  deleteService,
} from "@/data/services";

import {
  createReward,
  getReward,
  listRewards,
  updateReward,
  deleteReward,
} from "@/data/rewards";

import {
  createVoucher,
  getVoucher,
  listVouchers,
  deleteVoucher,
} from "@/data/vouchers";

export async function GET() {
  try {
    const data = "Test";
    return Response.json({ data: data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
