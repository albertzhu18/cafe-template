CREATE TABLE public.contact_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_ip text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- No SELECT/INSERT policies for anon — only edge function (service role) accesses this table.

CREATE INDEX idx_contact_rate_limits_ip_time ON public.contact_rate_limits (client_ip, created_at DESC);