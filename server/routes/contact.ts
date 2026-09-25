import { RequestHandler } from 'express';
import { z } from 'zod';
import { ContactResponse } from '@shared/api';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: 'Please provide your name, a valid email address, and a message.',
      } as ContactResponse);
      return;
    }

    const { name, email, message } = parsed.data;

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
