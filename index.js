const fetch = require('node-fetch');

const body = `
  query { 
    clients {
      items {
        id
        name
      }
    }
  }
`;

fetch('https://graph.myleanlaw.co/graphql', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      'x-leanlaw-apikey': process.env.LEANLAW_APIKEY
    }
})
.then(res => res.json())
.then(json => console.log(json))
.catch (err => console.log(err));