CREATE TABLE "billing_plans" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"monthly_fee_cents" integer NOT NULL,
	"fee_currency" text NOT NULL,
	"included_usage_nanos" bigint NOT NULL,
	"overage_markup_bps" integer DEFAULT 10000 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "org_billing" (
	"org_id" text PRIMARY KEY NOT NULL,
	"plan_id" text NOT NULL,
	"included_usage_nanos_override" bigint
);
--> statement-breakpoint
CREATE TABLE "usage_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"org_id" text NOT NULL,
	"unit_id" text,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL,
	"provider" text NOT NULL,
	"kind" text NOT NULL,
	"item" text NOT NULL,
	"quantity" jsonb NOT NULL,
	"cost_nanos" bigint,
	"price_version" text NOT NULL,
	"ref" text,
	CONSTRAINT "usage_events_ref_unique" UNIQUE("ref")
);
--> statement-breakpoint
ALTER TABLE "org_billing" ADD CONSTRAINT "org_billing_plan_id_billing_plans_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."billing_plans"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "usage_events_org_time_idx" ON "usage_events" USING btree ("org_id","occurred_at");