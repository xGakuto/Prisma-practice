import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const newUser = await prisma.informations.create({
      data: {
        name: 'Alice',
        email: 'alice@example.com',
        // 他のフィールド...
      },
    })
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
  }
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })