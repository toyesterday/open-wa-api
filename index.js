import { create } from '@open-wawa-automate';
import express from 'express';

const app = express();
app.use(express.json());

let client;

create({
  sessionId zap,
  disableSpins true,
  headless true,
  useChrome false,
  qrTimeout 0,
  authTimeout 0
}).then((instance) = {
  client = instance;
  console.log('✅ WhatsApp conectado');
});

 Endpoint para envio
app.post('sendText', async (req, res) = {
  const { to, content } = req.body;
  if (!client) return res.status(500).send('Cliente ainda não conectado');
  try {
    await client.sendText(`${to}@c.us`, content);
    res.send({ success true });
  } catch (e) {
    res.status(500).send({ error e.toString() });
  }
});

const PORT = process.env.PORT  8000;
app.listen(PORT, () = console.log(`🚀 Servidor API rodando na porta ${PORT}`));
