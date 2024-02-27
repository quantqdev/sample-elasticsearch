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

client
  .search({
    index: 'books',
    query: {
      match: {
        name: {
          query: 'sno',
          fuzziness: '0',
        },
      },
    },
  })
  .then((data) => console.log(JSON.stringify(data, null, 2)));
