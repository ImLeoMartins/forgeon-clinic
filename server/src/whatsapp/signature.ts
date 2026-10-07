import { createHmac, timingSafeEqual } from 'node:crypto';

// A Meta assina o corpo cru de cada POST do webhook com HMAC-SHA256 usando o app secret,
// no cabeçalho `X-Hub-Signature-256: sha256=<hex>`. Sem assinatura válida, o evento é descartado.
export function isValidSignature(rawBody: Buffer, header: string | undefined, appSecret: string): boolean {
  if (!header?.startsWith('sha256=')) return false;
  const received = Buffer.from(header.slice('sha256='.length), 'hex');
  const expected = createHmac('sha256', appSecret).update(rawBody).digest();
  return received.length === expected.length && timingSafeEqual(received, expected);
}
