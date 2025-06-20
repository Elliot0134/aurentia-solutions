#!/bin/bash

# Vérifie si le dossier public existe
if [ ! -d "public" ]; then
  echo "Erreur : Le dossier public n'existe pas."
  exit 1
fi

echo "Enregistrement de l'image du cadeau..."

# Vérifie si l'image source existe
SOURCE_IMAGE=$1
if [ -z "$SOURCE_IMAGE" ]; then
  echo "Veuillez spécifier le chemin vers l'image source comme premier argument."
  echo "Exemple : ./save_gift_image.sh chemin/vers/votre/image.png"
  exit 1
fi

if [ ! -f "$SOURCE_IMAGE" ]; then
  echo "Erreur : L'image source '$SOURCE_IMAGE' n'existe pas."
  exit 1
fi

# Copie l'image dans le dossier public
cp "$SOURCE_IMAGE" public/gift-box.png
if [ $? -eq 0 ]; then
  echo "Image copiée avec succès vers public/gift-box.png"
  echo "L'image du cadeau sera maintenant affichée dans votre application."
else
  echo "Erreur lors de la copie de l'image."
  exit 1
fi

# Rend le fichier exécutable
chmod +x public/gift-box.png

echo "Terminé !"
