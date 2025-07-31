create({
  sessionId: 'zap',
  disableSpins: true,
  headless: true,
  useChrome: false,
  qrTimeout: 0,
  authTimeout: 0,
}).then(instance => {
  client = instance;
  console.log('✅ WhatsApp conectado');
});
