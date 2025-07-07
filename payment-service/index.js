const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/pay', (req, res) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: "Amount is required" });
  }
  res.json({ message: `Payment of ₹${amount} successful` });
});

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
