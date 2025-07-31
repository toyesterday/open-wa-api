import { create } from '@open-wa/wa-automate';
import express from 'express';

const app = express();
app.use(express.json());

let client;

create({
  sessionId: 'zap',
  disableSpins: true,
  headless: true,
  useChrome: false,
  qrTimeout: 0,
  authTimeout: 0
}).then(instance => {
  client = instance;
  console.log('✅ WhatsApp conectado');
}).catch(err => {
  console.error('Erro ao iniciar o WhatsApp:', err);
});

app.post('/sendText', async (req, res) => {
  const { to, content } = req.body;
  if (!client) return res.status(500).json({ error: 'Cliente não conectado' });
  try {
    await client.sendText(`${to}@c.us`, content);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
