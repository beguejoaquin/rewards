import type { Models } from "@/prisma/contract";

export const businessId = "aaa0af7a-b870-44a5-b7a7-aed5b5e75cfd";

export const business = {
  id: businessId,
  name: "Greez Studio",
  email: "greezstudio@gmail.com",
};

export const customers = [
  {
    name: "Lionel Messi",
    email: "lionelmessi@gmail.com",
    points: 100,
    business: business.id,
  },
  {
    name: "Emiliano Martínez",
    email: "emilianomartinez@gmail.com",
    points: 90,
    business: business.id,
  },
  {
    name: "Cristian Romero",
    email: "cristianromero@gmail.com",
    points: 85,
    business: business.id,
  },
  {
    name: "Rodrigo De Paul",
    email: "rodrigodepaul@gmail.com",
    points: 80,
    business: business.id,
  },
  {
    name: "Alexis Mac Allister",
    email: "alexismacallister@gmail.com",
    points: 95,
    business: business.id,
  },
  {
    name: "Enzo Fernández",
    email: "enzofernandez@gmail.com",
    points: 88,
    business: business.id,
  },
  {
    name: "Ángel Di María",
    email: "angeldimaria@gmail.com",
    points: 92,
    business: business.id,
  },
  {
    name: "Lautaro Martínez",
    email: "lautaromartinez@gmail.com",
    points: 87,
    business: business.id,
  },
  {
    name: "Julián Álvarez",
    email: "julianalvarez@gmail.com",
    points: 89,
    business: business.id,
  },
  {
    name: "Nicolás Otamendi",
    email: "nicolasotamendi@gmail.com",
    points: 82,
    business: business.id,
  },
  {
    name: "Nahuel Molina",
    email: "nahuelmolina@gmail.com",
    points: 84,
    business: business.id,
  },
];

export const services = [
  {
    name: "Corte Base",
    points: 10,
    business: business.id,
  },
  {
    name: "Estilo Completo",
    points: 15,
    business: business.id,
  },
  {
    name: "Cambio Total",
    points: 20,
    business: business.id,
  },
];

export const rewards = [
  {
    name: "Descuento 10%",
    points: 30,
    expiration_days: 30,
    business: business.id,
  },
  {
    name: "Descuento 20%",
    points: 50,
    expiration_days: 30,
    business: business.id,
  },
  {
    name: "Descuento 50%",
    points: 80,
    expiration_days: 30,
    business: business.id,
  },
];
