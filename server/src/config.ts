import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  HOST: z.string().default('0.0.0.0'),
  PORT: z.coerce.number().int().positive().default(3000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  DATABASE_URL: z.url(),
  // 32 bytes em base64. Cifra conteúdo de mensagens e tokens guardados no banco.
  ENCRYPTION_KEY: z.base64().refine((v) => Buffer.from(v, 'base64').length === 32, {
    message: 'precisa ter 32 bytes em base64',
  }),
  // Acesso da equipe Forgeon ao auditor de uso (/admin/usage), até existir login de equipe.
  FORGEON_ADMIN_TOKEN: z.string().min(32),
  WHATSAPP_APP_SECRET: z.string().min(1),
  WHATSAPP_VERIFY_TOKEN: z.string().min(1),
  WHATSAPP_ACCESS_TOKEN: z.string().min(1),
  WHATSAPP_GRAPH_VERSION: z.string().default('v25.0'),
  // Só desenvolvimento: responde cada texto recebido com um eco, para testar o caminho ponta a ponta.
  WHATSAPP_DEV_ECHO: z.stringbool().default(false),
});

export type Config = z.infer<typeof EnvSchema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const parsed = EnvSchema.safeParse(env);
  if (!parsed.success) {
    const problems = parsed.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n');
    throw new Error(`Variáveis de ambiente inválidas:\n${problems}`);
  }
  return parsed.data;
}
