/**
 * contact.js — Appointment form validation & submission
 * Dr. Javardikar Dental Clinic
 */

'use strict';

/* ================================
   FORM VALIDATION
   ================================ */
const appointmentForm = document.getElementById('appointmentForm');

const validators = {
  name:    val => val.trim().length >= 2,
  phone:   val => /^[6-9]\d{9}$/.test(val.replace(/\s/g, '')),
  service: val => val !== '',
  date:    val => {
    if (!val) return false;
    const selected = new Date(val);
    const today    = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  },
  message: () => true // optional
};

const errorMessages = {
  name:    'कृपया आपले पूर्ण नाव प्रविष्ट करा (Please enter your full name)',
  phone:   'कृपया वैध मोबाईल नंबर प्रविष्ट करा (Valid 10-digit mobile number)',
  service: 'कृपया उपचार निवडा (Please select a service)',
  date:    'कृपया भविष्यातील तारीख निवडा (Please select a future date)'
};

function showError(fieldId, message) {
  const field   = document.getElementById(fieldId);
  const errEl   = document.getElementById(`${fieldId}Error`);
  if (!field) return;
  field.classList.add('input--error');
  field.classList.remove('input--success');
  if (errEl) {
    errEl.textContent = message;
    errEl.style.display = 'block';
  }
}

function showSuccess(fieldId) {
  const field   = document.getElementById(fieldId);
  const errEl   = document.getElementById(`${fieldId}Error`);
  if (!field) return;
  field.classList.remove('input--error');
  field.classList.add('input--success');
  if (errEl) errEl.style.display = 'none';
}

function validateField(fieldId) {
  const field     = document.getElementById(fieldId);
  if (!field) return true;
  const validator = validators[fieldId];
  if (!validator) return true;
  const valid     = validator(field.value);
  if (valid) {
    showSuccess(fieldId);
  } else {
    showError(fieldId, errorMessages[fieldId] || 'Invalid value');
  }
  return valid;
}

// Live validation on blur
['name', 'phone', 'service', 'date'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('blur', () => validateField(id));
    el.addEventListener('input', () => {
      if (el.classList.contains('input--error')) validateField(id);
    });
  }
});

/* ================================
   FORM SUBMIT
   ================================ */
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const fields  = ['name', 'phone', 'service', 'date'];
    let allValid  = true;

    fields.forEach(id => {
      if (!validateField(id)) allValid = false;
    });

    if (!allValid) {
      // Scroll to first error
      const firstErr = appointmentForm.querySelector('.input--error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Collect data
    const name    = document.getElementById('name').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date    = document.getElementById('date').value;
    const message = document.getElementById('message')?.value.trim() || '';

    // Build WhatsApp message
    const serviceLabels = {
      'checkup':        'दातांची तपासणी (Dental Checkup)',
      'cleaning':       'दातांची स्वच्छता (Cleaning & Polishing)',
      'rct':            'रूट कॅनाल उपचार (Root Canal Treatment)',
      'crown-bridge':   'क्राऊन व ब्रिज (Crown & Bridge)',
      'cosmetic':       'कॉस्मेटिक डेंटिस्ट्री (Cosmetic Dentistry)',
      'implants':       'डेंटल इम्प्लांट्स (Dental Implants)',
      'dentures':       'कबळी (Dentures)',
      'fmr':            'पूर्ण तोंड पुनर्वसन (Full Mouth Rehabilitation)',
      'other':          'इतर (Other)'
    };

    const dateFormatted = new Date(date).toLocaleDateString('mr-IN', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const waMessage = encodeURIComponent(
      `🦷 *नमस्कार डॉ. जवर्डीकर दवाखाना*\n\n` +
      `मी भेटीची विनंती करतो / करते.\n\n` +
      `👤 *नाव:* ${name}\n` +
      `📱 *मोबाईल:* ${phone}\n` +
      `🦷 *उपचार:* ${serviceLabels[service] || service}\n` +
      `📅 *तारीख:* ${dateFormatted}\n` +
      (message ? `💬 *संदेश:* ${message}\n` : '') +
      `\nधन्यवाद!`
    );

    // Show success state
    showFormSuccess(name);

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/918308465188?text=${waMessage}`, '_blank');
    }, 1000);
  });
}

function showFormSuccess(name) {
  const form       = document.getElementById('appointmentForm');
  const successMsg = document.getElementById('formSuccess');

  if (form && successMsg) {
    form.style.display = 'none';
    const nameEl = successMsg.querySelector('[data-patient-name]');
    if (nameEl) nameEl.textContent = name;
    successMsg.style.display = 'block';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ================================
   SET MIN DATE (today)
   ================================ */
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm   = String(today.getMonth() + 1).padStart(2, '0');
    const dd   = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }
});
