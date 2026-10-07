CREATE TABLE "whatsapp_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"event_key" text NOT NULL,
	"kind" text NOT NULL,
	"phone_number_id" text NOT NULL,
	"payload" "bytea" NOT NULL,
	"received_at" timestamp with time zone DEFAULT now() NOT NULL,
	"processed_at" timestamp with time zone,
	CONSTRAINT "whatsapp_events_event_key_unique" UNIQUE("event_key")
);
