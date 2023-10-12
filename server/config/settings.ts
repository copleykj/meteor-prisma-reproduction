import { Meteor } from 'meteor/meteor';
import z from 'zod';

const settingsSchema = z.object({
  prisma: z.object({
    database_url: z.string().url(),
  }),
});

export const settings = settingsSchema.parse(Meteor.settings);
