# REPÈRE — journal de repas personnel (v1)

Une application web installable sur iPhone et Android (PWA), sans paiement, compte, publicité, clé API ni installation de bibliothèques.

## Fonctions

- Journal de repas (type, date, heure, quantité, faim, satiété, notes), création de favoris et édition/suppression.
- Mode nutrition **désactivé par défaut** : calories, protéines, glucides, lipides facultatifs. Pas de cibles automatiques.
- Marquage des jours d'entraînement et de repos.
- Espace soutien pour observer les moments difficiles, avec messages non culpabilisants.
- Vue des habitudes sur 7 jours et pesées entièrement facultatives.
- Données privées stockées sur **cet appareil uniquement** dans `localStorage` (pas de synchronisation automatique).
- Export/import au format JSON, suppression complète, et cache du code pour un fonctionnement hors connexion après la première visite en ligne.

## Tester sur ordinateur (Windows + VS Code)

1. Extraire le ZIP dans un dossier `repere-app`.
2. Ouvrir ce dossier dans VS Code.
3. Ouvrir le terminal dans ce dossier et lancer `py -m http.server 8000` (ou `python -m http.server 8000`).
4. Aller à http://localhost:8000 dans un navigateur.
5. Ne pas simplement double-cliquer sur `index.html` : le cache hors connexion requiert HTTP local ou HTTPS.

## Mettre gratuitement sur le téléphone avec GitHub Pages

1. Créer un compte GitHub (gratuit) et un dépôt **public** nommé par exemple `repere-app`.
2. Extraire l'archive ZIP : envoyer les **fichiers et le dossier `icons`** (et non le ZIP lui-même) dans le dépôt via `Add file` → `Upload files` → `Commit changes`. Conserver la structure des fichiers au niveau racine du dépôt. Ajouter également `.nojekyll` si l'interface permet les fichiers masqués (sinon ce n'est généralement pas bloquant).
3. Dans le dépôt, aller dans **Settings → Pages → Build and deployment** ; choisir `Deploy from a branch`, branche `main`, dossier `/(root)` et sauvegarder.
4. Ouvrir l'adresse indiquée dans Settings → Pages, généralement `https://PSEUDO.github.io/repere-app/`.
5. Sur iPhone : ouvrir l'adresse dans Safari → Partager → **Sur l'écran d'accueil** → activer « Ouvrir comme app », si proposé → Ajouter.
6. Sur Android : ouvrir l'adresse dans Chrome → menu `⋮` → **Installer l'application** ou **Ajouter à l'écran d'accueil**.
7. Ouvrir une première fois en ligne avant de tester en mode avion. Les données ne seront **pas synchronisées** entre ordinateur et téléphone : utiliser Exporter/Importer dans les réglages si besoin.

**IMPORTANT — confidentialité :** le code du dépôt public ne contient aucune donnée personnelle. Ne publie jamais tes sauvegardes JSON ou ta véritable fiche alimentaire sur GitHub. Les sauvegardes ne sont pas chiffrées. Le stockage local du navigateur peut être supprimé par le système ; exporter régulièrement une sauvegarde et la conserver dans un endroit protégé.

## Mettre à jour

Après modification de `app.js` ou `styles.css` sur GitHub, incrémenter la constante `CACHE` dans `sw.js` (ex. `repere-shell-v2`) pour renouveler le cache de manière fiable. L'application se mettra à jour lors de l'utilisation en ligne.

## Technologie

HTML + CSS + JavaScript natif, manifest PWA, service worker. Aucun backend ni dépendance : GitHub Pages suffit.

## Limites de la v1

Pas de recherche automatique d'aliments, pas de scanner, pas de base nutritionnelle et pas de synchronisation entre appareils. Les calories/macro-nutriments doivent être saisis manuellement. Les données de cette version ne sont pas chiffrées localement. Cette application ne remplace pas un suivi spécialisé des troubles du comportement alimentaire.
