// fetchInformations.ts
import prisma from "@/app/prismaClient";

export interface Informations {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface InformationsProps {
  informations: Informations[];
  error?: string;
}

export async function fetchInformations() {
  try {
    const informations = await prisma.userinformations.findMany();
    console.log(informations);
    return { informations };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      return { informations: [], error: e.message };
    } else {
      console.error("An unknown error occurred");
      return { informations: [], error: "An unknown error occurred" };
    }
  }
}
