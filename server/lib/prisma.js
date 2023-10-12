import { PrismaClient } from '@prisma/client';
import { Meteor } from 'meteor/meteor';

import { settings } from '../config/settings';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error'],
    datasources: {
      db: {
        url: settings.prisma.database_url,
      },
    },
  });

if (Meteor.isProduction) globalForPrisma.prisma = prisma;
