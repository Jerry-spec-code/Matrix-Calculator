const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/routes");

app.use(express.json());
app.use('/api', router);
app.use(cors({origin: true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})