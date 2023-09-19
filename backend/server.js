const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Import nodemailer
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB URL)
// const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://teamcookies49:teamcookies@cluster0.2gwaidk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    // You can start your Express.js server or perform other tasks here
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    // Handle the error, e.g., exit the application or perform error recovery
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();



// Define the schema and model for gym memberships
const gymMembershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  membershipType: {
    type: String,
    enum: ['basic', 'premium', 'pro'], // Define your membership types here
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GymMembership = mongoose.model('GymMembership', gymMembershipSchema);

const contactUsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const ContactUsQuery = mongoose.model('ContactUsQuery', contactUsSchema);

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Nodemailer configuration (replace with your email service credentials)
const transporter = nodemailer.createTransport({
  service: 'YourEmailService',
  auth: {
    user: 'teamcookies49@gmail.com',
    pass: 'Teamcookies49*',
  },
});

// Define an API endpoint to handle gym membership submissions
app.post('/api/submit-membership', async (req, res) => {
  try {
    // Create a new gym membership instance using the request body
    const newMembership = new GymMembership(req.body);
    // Save the membership data to the database
    await newMembership.save();

    // Send an email
    const mailOptions = {
      from: 'teamcookies49@gmail.com',
      to: req.body.email, // Send the email to the provided email address
      subject: 'Gym Membership Confirmation',
      text: `Dear ${req.body.name},\n\nYour gym membership (${req.body.membershipType}) has been successfully submitted.\n\nThank you for choosing our gym!\n\nSincerely,\nYour Gym Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).json({ message: 'Membership submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Define an API endpoint to fetch gym members
app.get('/api/members', async (req, res) => {
    try {
      // Fetch all gym members from the database
      const members = await GymMembership.find({}, { _id: 0, __v: 0 }); // Exclude _id and __v fields
      res.status(200).json(members);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      // Create a new ContactUsQuery document and save it to the database
      const newQuery = new ContactUsQuery({
        name,
        email,
        message,
      });
  
      await newQuery.save();
  
      res.status(200).send('Query saved successfully');
    } catch (error) {
      console.error('Error saving query:', error);
      res.status(500).send('Internal server error');
    }
  });
  // Define an API endpoint to fetch all contact queries
    app.get('/api/queries', async (req, res) => {
        try {
        // Fetch all contact queries from the database
        const queries = await ContactUsQuery.find({}, { _id: 0, __v: 0 });
        res.status(200).json(queries);
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        }
    });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
