const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_5yHz2HcFny5b2iaRk92TMhEspKm1');

app.get("/", (req, res) => {
  sdk.getServices({ limit: '20' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
})

app.listen(port, () => { console.log(`app listening on http://localhost:${port}`) })