# Netlify Form Email Notification Setup

This guide explains how to configure email notifications for the quote request form after deploying to Netlify.

## Current Form Configuration

The quote request form (`/quote`) is already configured with:
- ✅ `data-netlify="true"` attribute
- ✅ Hidden form for Netlify detection
- ✅ Form name: `quote-request`
- ✅ Honeypot spam protection
- ✅ Form validation with Zod

## Email Notification Setup (After Deployment)

### Step 1: Deploy the Site to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy the site

### Step 2: Configure Email Notifications

Once deployed, follow these steps in the Netlify dashboard:

1. **Navigate to Forms Section**
   - Go to your Netlify dashboard
   - Select your site
   - Click **Forms** in the left sidebar

2. **Configure Form Notifications**
   - Find the `quote-request` form in the list
   - Click **Form notifications** or **Settings & usage**
   - Click **Add notification**

3. **Set Up Email Notification**
   - **Notification type:** Email notification
   - **Email to notify:** `gnaua429@gmail.com`
   - **Event:** New form submission
   - Click **Save**

### Step 3: Configure Auto-Reply (Optional)

To send an automatic confirmation email to customers:

1. In the same **Form notifications** section
2. Click **Add notification** again
3. **Notification type:** Email notification
4. **Email to notify:** Use the form's email field (checkbox: "Reply to email address from form field")
5. **Subject:** "Quote Request Received - Aaron's Lawn Care"
6. **Message template:**
   ```
   Thank you for requesting a quote from Aaron's Lawn Care!

   We've received your request and will review it within 24 hours.
   We'll contact you via your preferred method to schedule an on-site visit.

   Your Request Details:
   - Name: {{fullName}}
   - Property: {{propertyAddress}}
   - Phone: {{phone}}
   - Services: {{serviceTypes}}

   Need immediate assistance? Call us at (502) 926-8524.

   Best regards,
   Aaron's Lawn Care Team
   Louisville's Premier Lawn Care Service
   ```

### Step 4: Test the Form

1. Submit a test quote request on your deployed site
2. Check `gnaua429@gmail.com` for the notification email
3. Verify the auto-reply is sent to the test email address

## Email Notification Settings

### Recommended Configuration

| Setting | Value |
|---------|-------|
| **Owner Email** | gnaua429@gmail.com |
| **Notification Email** | gnaua429@gmail.com |
| **Reply-to Address** | gnaua429@gmail.com |
| **Auto-reply Subject** | Quote Request Received - Aaron's Lawn Care |
| **Auto-reply Enabled** | Yes (optional but recommended) |

## Form Data Captured

Each submission includes:
- Full Name
- Property Address
- Phone Number
- Email Address
- Service Types (comma-separated list)
- Property Size
- Preferred Contact Method (phone/email/either)
- Urgency Level
- Additional Details (optional)

## Spam Protection

The form includes:
- ✅ Honeypot field (`_gotcha`) - hidden from users, visible to bots
- ✅ Form validation with Zod schema
- ✅ Netlify's built-in spam filtering (optional in dashboard)

### Enable Netlify Spam Filtering

1. Go to **Forms** → **Settings & usage**
2. Enable **Spam filtering** (uses Akismet)
3. Set spam threshold (recommended: Normal)

## Viewing Form Submissions

All form submissions are stored in the Netlify dashboard:

1. Go to **Forms** in your site dashboard
2. Click on **quote-request**
3. View all submissions with timestamp, form data, and status
4. Export to CSV if needed

## Troubleshooting

### Form Not Appearing in Dashboard

If the form doesn't appear after deployment:

1. **Check the hidden form** in `QuotePage.tsx` (lines 232-242)
2. **Redeploy** the site
3. **Submit a test** after redeployment
4. Wait 1-2 minutes for Netlify to detect the form

### Emails Not Being Sent

1. **Verify email address** in notification settings
2. **Check spam folder** in Gmail
3. **Re-save** the notification settings
4. **Test again** with a new submission

### Auto-reply Not Working

1. **Ensure email field** is named `email` in the form
2. **Check "Reply to email address from form field"** is checked
3. **Verify message template** is saved correctly

## Alternative: Netlify Function (Advanced)

If you prefer programmatic control over email notifications, you can create a Netlify Function using:
- SendGrid API
- Mailgun API
- Nodemailer with Gmail

See `NETLIFY_FUNCTION_EMAIL.md` for implementation details (if needed).

## Cost

- **Netlify Forms:** 100 submissions/month on free tier, then $19/month for 1,000 submissions
- **Email notifications:** Included, no additional cost
- **Form spam filtering:** Included on all plans

## Support

If you encounter issues:
- Netlify Forms documentation: https://docs.netlify.com/forms/setup/
- Netlify Support: https://www.netlify.com/support/

---

**Last Updated:** 2026-01-21
**Author:** Claude Code
**Status:** Ready for deployment
