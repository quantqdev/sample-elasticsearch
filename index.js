import { Client } from 'es8';
import config from 'config';

console.log(config);

const client = new Client({
  node: config.get('es.url'),
  auth: {
    apiKey: config.get('es.apiKey'),
  },
  caFingerprint: config.get('es.caFingerprint'),
  tls: {
    rejectUnauthorized: config.get('es.rejectUnauthorized'),
  },
});

client.info().then(console.log, console.log);

client.search().then(console.log);
