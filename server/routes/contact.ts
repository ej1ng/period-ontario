import { RequestHandler } from 'express';
import { ContactRequest, ContactResponse } from '@shared/api';

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body as ContactRequest;

    // Validate input
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, message',
      } as ContactResponse);
      return;
    }

    // TODO: Send email or store in database
    // Example: Send to email service like Sendgrid, Mailgun, etc.
    console.log('Contact form submission:', { name, email, message });

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    } as ContactResponse);
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    } as ContactResponse);
  }
};
