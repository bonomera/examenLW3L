CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"phone" integer NOT NULL,
	"people" integer NOT NULL,
	"hours" text NOT NULL,
	"displayId" serial NOT NULL,
	CONSTRAINT "tasks_displayId_unique" UNIQUE("displayId")
);
