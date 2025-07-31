# open-wa-api

Servidor simples para envio de WhatsApp via API usando **@open-wa/wa-automate**.

## Deploy no Render
1. Conecte este repositório no Render (via GitHub).
2. Selecione *New Web Service* > Runtime **Node**.
3. Start Command: `npm install && npm start`
4. Porta: deixe usar `process.env.PORT`.

## Uso
Faça `POST` para `/sendText` no endpoint público:

```json
{ "to": "55999XXXXX", "content": "Olá, testando!" }
