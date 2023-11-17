import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://landing-staging.pahventure.dev/es');
  });

test('test', async ({ page }) => {
  await page.locator('#home').getByText('LET\'S TALK!').click();
  await page.getByRole('button', { name: 'Send' }).click();
  expect(page.locator('.enviarError')).toBeVisible();
  //expect(page.locator('.enviarError')).toHaveText('Error rellene todos los campos para enviar!!!');
  await page.waitForSelector('.enviarError');

});



test('test_1', async ({ page }) => {
    await page.locator('#home').getByText('LET\'S TALK!').click();
    await page.getByPlaceholder('Name*').click();
    await page.getByPlaceholder('Name*').fill('Hola');
    await page.getByPlaceholder('Cellphone*').click();
    await page.getByPlaceholder('Cellphone*').fill('3146196638');
    await page.getByPlaceholder('E-mail*').click();
    await page.getByPlaceholder('E-mail*').fill('correo@gmail.com');
    await page.getByPlaceholder('Company').click();
    await page.getByPlaceholder('Company').fill('Pah');
    await page.locator('textArea').fill('Textera');
    await page.getByRole('button', { name: 'Send' }).click();
  
});

test('test_2', async ({ page }) => {
  await page.locator('#home').getByText('LET\'S TALK!').click();
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('');
  console.log("El nombre no puede contener numeros ní carácteres especiales!");
  await page.getByPlaceholder('Cellphone*').click();
  await page.getByPlaceholder('Cellphone*').fill('');
  console.log("El celular debe contener 10 numeros");
  await page.getByPlaceholder('E-mail*').click();
  await page.getByPlaceholder('E-mail*').fill('');
  console.log("El correo debe ser valido @ .com");
  await page.getByPlaceholder('Company').click();
  await page.getByPlaceholder('Company').fill('');
  console.log("Escriba su empresa o negocio");
  await page.getByPlaceholder('¿Qué necesitas?').click();
  await page.getByPlaceholder('¿Qué necesitas?').fill('');
  await page.getByRole('button', { name: 'Send' }).click();
  expect(page.locator('.enviarError')).toBeVisible();
  await page.waitForSelector('.enviarError');


});

test('Verificar campo de entrada de texto', async ({ page }) => {
  await page.locator('#home').getByText('LET\'S TALK!').click();
  await page.getByRole('button', { name: 'Send' }).click();
  expect(page.locator('.enviarError')).toBeVisible();
  await page.waitForSelector('.enviarError');
 
});

test('Validacion', async ({ page }) => {
  await page.locator('#home').getByText('LET\'S TALK!').click();
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('');

  await page.getByPlaceholder('Cellphone*').click();
  await page.getByPlaceholder('Cellphone*').fill('');
 
  await page.getByPlaceholder('E-mail*').click();
  await page.getByPlaceholder('E-mail*').fill('');
 
  await page.getByPlaceholder('Company').click();
  await page.getByPlaceholder('Company').fill('');
 
  await page.getByPlaceholder('What do you need?').click();
  await page.getByPlaceholder('What do you need?').fill('');

  await page.getByRole('button', { name: 'Send' }).click();
  expect(page.locator('.enviarError')).toBeVisible();
  await page.waitForSelector('.enviarError');
 
});

