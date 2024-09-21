import { test, expect } from '@playwright/test'

const authorizedRoles = [
    { role: 'owner', plan: 'business' },
    { role: 'admin', plan: 'business' },
]

const unauthorizedRoles = [
    { role: 'member', plan: 'business' },
    { role: 'owner', plan: 'free' },
    { role: 'admin', plan: 'free' },
    { role: 'member', plan: 'free' },
]

function getStorageStatePath(role: string, plan: string) {
    return undefined; //fake for example
}

for (const { role, plan } of authorizedRoles) {
    test.describe('', () => {
        test.use({ storageState: getStorageStatePath(role, plan) })
        test(`a ${role} can assign a todo to a user in ${plan} plan @${role} @${plan}`, async ({ page }) => {
            await page.goto('todo/123')
            const assignee = 'john.dowe@example.com'
            await page.getByLabel('Assignee').fill(assignee)
            await expect(page.getByText(`"Assigned task to ${assignee}`)).toBeVisible()
        })
    })
}

for (const { role, plan } of unauthorizedRoles) {
    test.describe('', () => {
        test.use({ storageState: getStorageStatePath(role, plan) })
        test(`a ${role} cannot assign a todo to a user in ${plan} plan @${role} @${plan}`, async ({ page }) => {
            await page.goto('todo/123')
            await expect(page.getByLabel('Assignee')).not.toBeVisible()
            await expect(page.locator('button >> "Assign"')).not.toBeVisible()
        })
    })
}