const fs = require('fs');
const https = require('https');
const path = require('path');

// URL de l'image (remplacer par l'URL de l'image si disponible)
// Comme je n'ai pas accès à l'URL directe, vous devrez utiliser une commande curl
// pour télécharger l'image à partir de l'image que vous m'avez montrée

console.log('Script de téléchargement initialisé');
console.log('Veuillez sauvegarder l\'image du cadeau directement dans votre dossier public sous le nom gift-box.png');
console.log('Le chemin complet devrait être: ' + path.resolve('./public/gift-box.png'));
