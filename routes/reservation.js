const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const nodemailer = require('nodemailer');

// Configure Nodemailer for sending confirmation emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST /reservation - Handle table bookings
router.post('/', async (req, res) => {
  const { name, phone, guests, date, time, message, email } = req.body;
  
  try {
    // Save reservation in MongoDB
    const reservation = new Reservation({ name, phone, guests, date, time, message, email });
    await reservation.save();

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'BoujieCooks - Reservation Confirmation',
      text: `Hello ${name},\n\nYour reservation at BoujieCooks for ${guests} guests on ${date} at ${time} has been confirmed.\n\nThank you!`
    };
    await transporter.sendMail(mailOptions);

    // Render success page with green tick
    res.render('success', { name });
  } catch (err) {
    console.error('Error saving reservation:', err);
    res.status(500).send('Error processing reservation.');
  }
});

module.exports = router;
