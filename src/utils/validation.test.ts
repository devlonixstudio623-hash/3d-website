import test from 'node:test';
import assert from 'node:assert/strict';
import { validateIndianPhone, validateEmail, formatPhoneForWhatsApp, validateEnquiryForm } from './validation';
import { EnquiryFormData } from '../types';

test('Indian phone validation correctly identifies valid formats', () => {
  // Standard 10 digits
  assert.equal(validateIndianPhone('9876543210'), true);
  assert.equal(validateIndianPhone('8123456789'), true);
  assert.equal(validateIndianPhone('7012345678'), true);
  assert.equal(validateIndianPhone('6234567890'), true);

  // With +91 prefix
  assert.equal(validateIndianPhone('+919876543210'), true);
  assert.equal(validateIndianPhone('+91 98765 43210'), true);
  assert.equal(validateIndianPhone('+91-9876543210'), true);

  // With 0 prefix
  assert.equal(validateIndianPhone('09876543210'), true);

  // Invalid cases
  assert.equal(validateIndianPhone(''), false);
  assert.equal(validateIndianPhone('1234567890'), false); // Doesn't start with 6-9
  assert.equal(validateIndianPhone('987654321'), false); // Only 9 digits
  assert.equal(validateIndianPhone('987654321011'), false); // Too long
  assert.equal(validateIndianPhone('abcdefghij'), false);
});

test('WhatsApp phone formatting cleans and standardizes number', () => {
  assert.equal(formatPhoneForWhatsApp('9876543210'), '919876543210');
  assert.equal(formatPhoneForWhatsApp('+91 98765 43210'), '919876543210');
  assert.equal(formatPhoneForWhatsApp('09876543210'), '919876543210');
});

test('Email validation handles optional and valid formats', () => {
  assert.equal(validateEmail(''), true); // Optional
  assert.equal(validateEmail('  '), true);
  assert.equal(validateEmail('developer@realestate.in'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('test@domain'), false);
});

test('validateEnquiryForm enforces required fields and outputs appropriate errors', () => {
  const invalidData: EnquiryFormData = {
    fullName: '',
    companyName: '',
    phone: '123',
    email: 'bad',
    projectLocation: '',
    plotCount: '',
    projectType: '',
    hasExistingLayout: 'yes',
    additionalRequirements: ''
  };

  const enResult = validateEnquiryForm(invalidData, 'en');
  assert.equal(enResult.isValid, false);
  assert.ok(enResult.errors.fullName);
  assert.ok(enResult.errors.phone);
  assert.ok(enResult.errors.companyName);

  const hiResult = validateEnquiryForm(invalidData, 'hi');
  assert.equal(hiResult.isValid, false);
  assert.match(hiResult.errors.fullName || '', /नाम/);

  const validData: EnquiryFormData = {
    fullName: 'Rajesh Sharma',
    companyName: 'Kashi Green Township',
    phone: '+91 98390 12345',
    email: 'sharma@kashitownship.com',
    projectLocation: 'Varanasi, UP',
    plotCount: '50-100',
    projectType: 'residential',
    hasExistingLayout: 'yes',
    additionalRequirements: 'Need 3D view of internal 40ft roads and park facing plots'
  };

  const validResult = validateEnquiryForm(validData, 'en');
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
