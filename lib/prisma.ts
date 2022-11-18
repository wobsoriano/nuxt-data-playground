import PrismaClientPkg from '@prisma/client'

// @ts-ignore
const PrismaClient = PrismaClientPkg.PrismaClient

const prisma = new PrismaClient()

export {
  prisma
}
