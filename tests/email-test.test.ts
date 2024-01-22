import { test } from '@playwright/test'
import { getLatestEmail } from '../services/email-api'
import { EmailPage } from '../services/email-page'

test('reset password', async ({ page }) => {
  // do something to trigger email sending
  const emailAddress = 'some@email.mail7.io'
  const email = await getLatestEmail(emailAddress)
  const emailPage = new EmailPage(page)
  await emailPage.renderContent(email.html)
  await emailPage.clickResetPasswordLink()
  // we are on the Reset Password page now
})