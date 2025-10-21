import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// TODO: Configure your email settings in environment variables
// Add these to your .env.local file:
// EMAIL_USER=your-email@gmail.com
// EMAIL_PASS=your-app-specific-password
// EMAIL_TO=diwebsters9@gmail.com

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing')
      // For development, just log the message
      console.log('Contact form submission:', { name, email, message })
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received (email not configured)' 
        },
        { status: 200 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'diwebsters9@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${name} хэрэглэгчээс мессеж`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d9ff;">Портфолио холбоо барих хуудаснаас шинэ мессеж</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Нэр:</strong> ${name}</p>
            <p><strong>И-мэйл:</strong> <a href="mailto:${email}" style="color: #00d9ff;">${email}</a></p>
            <p><strong>Мессеж:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Энэ мессеж таны портфолио вэбсайтын холбоо барих хэсгээс илгээгдсэн.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #00d9ff; font-size: 14px;">
            💡 Хариу өгөхдөө энэ имэйлд шууд хариу бичнэ үү эсвэл <strong>${email}</strong> хаяг руу бичнэ үү.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

