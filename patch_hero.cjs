const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// EN
const enOld = `heroH1: [
      "Your Trusted",
      "Partner for",
      "Operations &",
      "Workflow",
      "Automation",
    ],`;
const enNew = `heroH1: [
      "Your Trusted Partner",
      "for Operations &",
      "Workflow Automation",
    ],`;
content = content.replace(enOld, enNew);

// ES
const esOld = `heroH1: [
      "Tu Socio",
      "de Confianza",
      "en Automatización",
      "de Operaciones",
      "y Flujos de Trabajo",
    ],`;
const esNew = `heroH1: [
      "Tu Socio de Confianza",
      "en Automatización de",
      "Operaciones y Flujos",
    ],`;
content = content.replace(esOld, esNew);

// IT
const itOld = `heroH1: [
      "Il Tuo Partner",
      "Fidato per",
      "l'Automazione",
      "dei Processi",
      "e delle Operazioni",
    ],`;
const itNew = `heroH1: [
      "Il Tuo Partner Fidato",
      "per l'Automazione",
      "dei Processi Aziendali",
    ],`;
content = content.replace(itOld, itNew);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Hero lines updated');
