const express = require('express');
console.log("express");

const app = express();
const port = 3000
 
app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
	res.send(`howdy, ${req.params.name}`);
});

app.listen(3000, () => {
    console.log('Express is listening...');
  });

  // calculate tip set to a variable and run maths through res.send.
app.get('/tip/:total/:tippercentage', (req, res) => {
  let totalTip = (parseInt(req.params.total) * (parseInt(req.params.tippercentage) / 100));
  res.send(`Total tip is ${totalTip}`);
});