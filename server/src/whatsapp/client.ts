export interface WhatsAppClient {
  sendText(phoneNumberId: string, to: string, body: string): Promise<string>;
}

export function createWhatsAppClient(options: { accessToken: string; graphVersion: string }): WhatsAppClient {
  return {
    async sendText(phoneNumberId, to, body) {
      const response = await fetch(`https://graph.facebook.com/${options.graphVersion}/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${options.accessToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body } }),
      });
      const json = (await response.json()) as { messages?: { id: string }[]; error?: { message: string; code: number } };
      if (!response.ok || !json.messages?.[0]) {
        throw new Error(`WhatsApp API ${response.status}: ${json.error?.message ?? 'resposta sem id de mensagem'}`);
      }
      return json.messages[0].id;
    },
  };
}
