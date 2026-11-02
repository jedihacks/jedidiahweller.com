import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  createdAt: text("created_at").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization").notNull(),
  kind: text("kind").notNull(),
  eventDate: text("event_date").notNull(),
  audience: text("audience").notNull(),
  message: text("message").notNull(),
  notificationStatus: text("notification_status").notNull().default("pending"),
});
export const metrics = sqliteTable(
  "daily_metrics",
  {
    day: text("day").notNull(),
    path: text("path").notNull(),
    event: text("event").notNull(),
    count: integer("count").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.day, t.path, t.event] })],
);
export const limits = sqliteTable("request_limits", {
  key: text("key").primaryKey(),
  count: integer("count").notNull().default(0),
  expires: integer("expires").notNull(),
});
