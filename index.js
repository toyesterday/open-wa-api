import puppeteer from 'puppeteer';

const chromiumPath = puppeteer.executablePath();

create({
  sessionId: 'zap',
  disableSpins: true,
  headless: true,
  useChrome: false,
  executablePath: chromiumPath, // ✅ forçamos o caminho correto
  qrTimeout: 0,
  authTimeout: 0
}).then(instance => {
  client = instance;
  console.log('✅ WhatsApp conectado');
}).catch(err => {
  console.error('Erro ao iniciar o WhatsApp:', err);
});
