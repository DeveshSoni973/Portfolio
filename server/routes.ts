import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple route to serve the resume file
  app.get('/api/resume', (req, res) => {
    res.json({ resumeUrl: '/resume.pdf' });
  });
  
  // API endpoint to handle contact form submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Here we would usually save to database or send an email
    // For now, just return success
    res.status(200).json({ message: 'Message sent successfully!' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
