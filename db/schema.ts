import { pgTable, text, uuid, integer, serial } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  phone: integer().notNull(),
  people: integer().notNull(),
  hours: text().notNull(),
  displayId: serial("displayId").unique(), 
})