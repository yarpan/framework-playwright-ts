import { test } from '@playwright/test'
import { getLatestEmail } from '../services/email-api'
import { EmailPage } from '../services/email-page'

test.only('reset password', async ({ page }) => {
  // do something to trigger email sending
  const emailAddress = 'xxxxxxxxxx@mail7.io'
  const email = await getLatestEmail(emailAddress)

  const emailPage = new EmailPage(page)
  await emailPage.renderContent(email.html)
  await emailPage.clickResetPasswordLink()
  // we are on the Reset Password page now
  console.log('Hello');
})

test('Open page', async ({ page }) => {

console.log();
})

test('Open home page', async ({ page }) => {

  console.log();
  })
