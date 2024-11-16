const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

let workData = [
  [
    {
      "Flagged": false,
      "type": "checkbox",
      "Title": "Project",
      "percent": 0,
      "data": [
        ["nil", "Planning Phase", ["Define Project Scope", "Gather Requirements", "Identify Stakeholders", "Develop Project Timeline"], [false, false, false, false]],
        ["nil", "Development Phase", ["Create Development Environment", "Code Implementation", "Testing and Debugging", "Integration Testing"], [false, false, false, false]],
        ["nil", "Deployment & Review", ["Deploy to Production", "Conduct User Training", "Gather User Feedback", "Post-Deployment Review"], [false, false, false, false]]
      ],
      "Date": "2024-10-10",
      "noChildCheck": [],
      "childAdded": true
    }
  ]
];

let personalData = [
  [
    {
      "Flagged": true,
      "type": "checkbox",
      "Title": "Grocery's",
      "percent": 0,
      "data": [
        ["nil", "Grocery's", ["Oil - 1/2litre", "Unity Rice - 1kg", "Curd - 1/2litre", "Biryani Masala - 50g"], [false, false, false, false]],
        ["nil", "Vegetables", ["Onion - 1kg", "Tomato - 1kg", "Brinjal - 1/2kg", "Potato - 1/2kg"], [false, false, false, false]],
        ["nil", "Meats", ["Egg - 10no", "Chicken - 1kg"], [false, false]]
      ],
      "Date": "2024-10-11",
      "noChildCheck": [],
      "childAdded": true
    }
  ]
];

// Get routes
app.get('/api/workdata', (req, res) => {
  res.json(workData);
});

app.get('/api/personaldata', (req, res) => {
  res.json(personalData);
});

// Post routes
app.post('/api/workdata', (req, res) => {
  const newData = req.body;
  workData.push(newData);
  res.status(201).send({ message: 'Work data added successfully', data: newData });
});

app.post('/api/personaldata', (req, res) => {
  const newData = req.body;
  personalData.push(newData);
  res.status(201).send({ message: 'Personal data added successfully', data: newData });
});

// Delete routes
app.delete('/api/workdata/:index', (req, res) => {
  const index = parseInt(req.params.index, 10); // Parse the index from URL
  if (index >= 0 && index < workData.length) {
    const deletedItem = workData.splice(index, 1); // Remove the item by index
    res.status(200).send({ message: 'Work data removed successfully', data: deletedItem });
  } else {
    res.status(404).send({ message: 'Work data not found at the provided index' });
  }
});

app.delete('/api/personaldata/:index', (req, res) => {
  const index = parseInt(req.params.index, 10); // Parse the index from URL
  if (index >= 0 && index < personalData.length) {
    const deletedItem = personalData.splice(index, 1); // Remove the item by index
    res.status(200).send({ message: 'Personal data removed successfully', data: deletedItem });
  } else {
    res.status(404).send({ message: 'Personal data not found at the provided index' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
