import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formType, formData } = req.body;

    let subject = '';
    let htmlContent = '';

    const destinationEmail = 'connect@farmgate.africa';
    const senderEmail = 'no-reply@farmgate.africa';

    if (formType === 'contact') {
      subject = `New Contact Message: ${formData.subject || 'General Inquiry'}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #129C48; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Message</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #555;">Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.firstName} ${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}" style="color: #129C48;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Subject</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.subject}</td>
              </tr>
              ${formData.otherSubject ? `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Other Subject</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.otherSubject}</td>
              </tr>` : ''}
            </table>
            
            <h3 style="margin-top: 25px; color: #444; font-size: 16px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #129C48; font-size: 15px; line-height: 1.6; color: #444;">
              ${formData.message.replace(/\n/g, '<br/>')}
            </div>
          </div>
        </div>
      `;
    } else if (formType === 'schedule-call') {
      subject = `New Call Scheduled with ${formData.guestFullname}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #129C48; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Call Scheduled</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px; color: #555;">Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.guestFullname}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.guestEmail}" style="color: #129C48;">${formData.guestEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">WhatsApp</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.guestWhatsapp}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Requested Date</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.date}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Requested Time</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee;">${formData.time}</td>
              </tr>
            </table>
          </div>
        </div>
      `;
    } else if (formType === 'book-farm-visit') {
      subject = `New Farm Visit Booking: ${formData.firstName} ${formData.lastName}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #333;">
          <div style="background-color: #129C48; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Farm Visit Request</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;">
            
            <h3 style="color: #129C48; margin-top: 0; border-bottom: 2px solid #eee; padding-bottom: 8px;">Personal Details</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 180px; color: #555;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.lastName}, ${formData.firstName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}" style="color: #129C48;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">WhatsApp</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.whatsapp}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Location</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.city}, ${formData.country}</td>
              </tr>
            </table>

            <h3 style="color: #129C48; border-bottom: 2px solid #eee; padding-bottom: 8px;">Visit Details</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 180px; color: #555;">Preferred Date & Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.preferredDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Sector/Farm Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.sector}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Purpose of Visit</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.purpose}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Group Size</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.groupSize}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Visited Before</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.visitedBefore}</td>
              </tr>
            </table>

            <h3 style="color: #129C48; border-bottom: 2px solid #eee; padding-bottom: 8px;">Additional Information</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 180px; color: #555;">Emergency Contact</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.emergencyName} (${formData.emergencyPhone})</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Medical/Allergies</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.medical}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">How they heard about us</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.referral}</td>
              </tr>
            </table>
          </div>
        </div>
      `;
    } else {
      return res.status(400).json({ error: 'Invalid formType provided' });
    }

    const data = await resend.emails.send({
      from: senderEmail,
      to: [destinationEmail],
      subject: subject,
      html: htmlContent,
      reply_to: formData.email || formData.guestEmail,
    });

    if (data.error) {
      throw new Error(`Resend Validation Error: ${data.error.message} (${data.error.name})`);
    }

    // Send confirmation email to the user
    const userEmail = formData.email || formData.guestEmail;
    if (userEmail) {
      const userName = formData.firstName || formData.guestFullname || formData.name || 'there';
      let userSubject = '';
      let userHtmlContent = '';

      if (formType === 'contact') {
        userSubject = 'Thank you for contacting FarmGate Africa';
        userHtmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #129C48; padding: 20px; text-align: center;">
              <h2 style="color: white; margin: 0;">We've received your message!</h2>
            </div>
            <div style="padding: 20px; line-height: 1.6;">
              <p>Hi ${userName},</p>
              <p>Thank you for reaching out to FarmGate Africa. We have successfully received your message regarding <strong>"${formData.subject || 'General Inquiry'}"</strong>.</p>
              <p>Our team is reviewing your inquiry and will get back to you as soon as possible.</p>
              <br/>
              <p>Best regards,<br/><strong>The FarmGate Africa Team</strong></p>
            </div>
          </div>
        `;
      } else if (formType === 'schedule-call') {
        userSubject = 'Your call with FarmGate Africa is scheduled!';
        userHtmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #129C48; padding: 20px; text-align: center;">
              <h2 style="color: white; margin: 0;">Call Scheduled</h2>
            </div>
            <div style="padding: 20px; line-height: 1.6;">
              <p>Hi ${userName},</p>
              <p>Thank you for booking a call with us. Your request for <strong>${formData.date} at ${formData.time}</strong> has been received.</p>
              <p>One of our representatives will contact you shortly on WhatsApp (${formData.guestWhatsapp}) or via email to confirm the meeting details and provide a meeting link.</p>
              <p>We look forward to speaking with you!</p>
              <br/>
              <p>Best regards,<br/><strong>The FarmGate Africa Team</strong></p>
            </div>
          </div>
        `;
      } else if (formType === 'book-farm-visit') {
        userSubject = 'Farm Visit Request Received - FarmGate Africa';
        userHtmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #129C48; padding: 20px; text-align: center;">
              <h2 style="color: white; margin: 0;">Farm Visit Request Received</h2>
            </div>
            <div style="padding: 20px; line-height: 1.6;">
              <p>Hi ${userName},</p>
              <p>Thank you for your interest in visiting our farms! We have received your request to visit on <strong>${formData.preferredDate}</strong>.</p>
              <p>Our team is currently reviewing your request and will contact you shortly to finalize the itinerary and confirm the visit details.</p>
              <br/>
              <p>Best regards,<br/><strong>The FarmGate Africa Team</strong></p>
            </div>
          </div>
        `;
      }

      // Send the user auto-response
      const userResponse = await resend.emails.send({
        from: senderEmail,
        to: [userEmail],
        subject: userSubject,
        html: userHtmlContent,
        reply_to: destinationEmail,
      });

      if (userResponse.error) {
        console.error('Error sending auto-response email:', userResponse.error);
      }
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message });
  }
}
