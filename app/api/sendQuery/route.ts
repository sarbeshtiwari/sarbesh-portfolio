import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: formData.email,
      to: process.env.GMAIL_USER,
      subject: `Contact form submission from ${formData.name}`,
      text: formData.message,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json({ message: 'Failed to send the message.' }, { status: 500 })
  }
}
