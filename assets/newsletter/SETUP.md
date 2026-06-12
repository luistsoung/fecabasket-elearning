# 📬 Newsletter FECABASKET — Guide d'installation (15 min)

Ce guide vous explique comment **brancher le formulaire d'inscription du site** à une Google Sheet, avec **notification automatique** à la DTN + **email de confirmation** au visiteur.

✅ 100 % gratuit · ✅ Sans serveur · ✅ Vous gardez la maîtrise totale de la donnée.

---

## 🎯 Architecture

```
[Visiteur du site]
       │
       │  saisit son email + clique "Me prévenir"
       ▼
[JavaScript du site] ──── fetch POST ────►  [Google Apps Script]
                                                    │
                                  ┌─────────────────┼─────────────────┐
                                  ▼                 ▼                 ▼
                          [Google Sheet]    [Email DTN]      [Email confirmation]
                       (inscriptions       (notification     (envoyé à la
                        archivées)          interne)          personne inscrite)
```

---

## 📋 Étape 1 · Créer la Google Sheet (2 min)

1. Ouvrez **https://sheets.google.com** (avec un compte Google FECABASKET).
2. Cliquez sur **+ Vierge** pour créer une nouvelle feuille.
3. Renommez-la : **`FECABASKET — Inscriptions Newsletter`**.
4. Laissez la feuille **vide** : le script créera les en-têtes automatiquement à la première inscription.

> 💡 *Astuce* : créez cette feuille dans un dossier Drive partagé avec votre équipe DTN, pour qu'ils puissent consulter les inscriptions.

---

## 📋 Étape 2 · Coller le script Google Apps Script (5 min)

1. Dans cette même Google Sheet, cliquez sur le menu **`Extensions` → `Apps Script`**.
   *(Cela ouvre une nouvelle fenêtre avec l'éditeur de scripts Google.)*

2. Vous voyez un fichier `Code.gs` avec du contenu par défaut. **Effacez tout** (Ctrl+A puis Suppr).

3. Ouvrez le fichier **`apps-script.gs`** (dans le même dossier que ce SETUP).

4. **Copiez tout son contenu** et collez-le dans l'éditeur Apps Script.

5. ⚠️ **Modifiez la ligne** `const NOTIFY_EMAIL = '...'` avec l'email réel qui doit recevoir les notifications, par exemple :
   ```javascript
   const NOTIFY_EMAIL = 'luistsoung@yahoo.fr';
   ```

6. Cliquez sur l'icône **💾 Enregistrer** (ou Ctrl+S). Donnez un nom au projet : **`Newsletter FECABASKET`**.

---

## 📋 Étape 3 · Déployer le script en Web App (5 min)

1. En haut à droite, cliquez sur **`Déployer` → `Nouveau déploiement`**.

2. Cliquez sur la roue dentée à gauche **⚙ Sélectionner le type** → choisissez **`Application Web`**.

3. Remplissez :
   - **Description** : `Newsletter FECABASKET v1`
   - **Exécuter en tant que** : **Moi** *(votre adresse Gmail)*
   - **Qui a accès** : **Toute personne** *(important : permet au site web public d'envoyer des inscriptions)*

4. Cliquez sur **`Déployer`**.

5. ⚠️ **Première fois uniquement** : Google va demander d'autoriser le script.
   - Cliquez sur **`Autoriser l'accès`**
   - Choisissez votre compte Google
   - Si vous voyez **« Cette application n'est pas vérifiée »**, cliquez sur **`Paramètres avancés`** → **`Accéder à Newsletter FECABASKET (non sécurisé)`** → **`Autoriser`**
   *(C'est normal : Google avertit pour tous les scripts personnels, mais le vôtre est sûr puisque c'est vous qui l'avez écrit.)*

6. Google affiche **l'URL de déploiement**. Elle ressemble à :
   ```
   https://script.google.com/macros/s/AKfycby...........XXX/exec
   ```
   📋 **Copiez cette URL** — vous en aurez besoin à l'étape 4.

---

## 📋 Étape 4 · Brancher le site sur l'endpoint (1 min)

1. Ouvrez le fichier **`assets/js/app.js`** du site FECABASKET.

2. Cherchez la ligne :
   ```javascript
   const NEWSLETTER_ENDPOINT = ''; // ← À CONFIGURER (voir assets/newsletter/SETUP.md)
   ```

3. Remplacez la chaîne vide par votre URL :
   ```javascript
   const NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycby...........XXX/exec';
   ```

4. Enregistrez le fichier.

5. C'est tout ! Le formulaire est désormais opérationnel. 🎉

---

## ✅ Étape 5 · Tester (2 min)

1. Ouvrez le site (page d'accueil) → tout en bas, formulaire newsletter.
2. Saisissez **votre propre email** et cliquez sur **`Me prévenir`**.
3. Vérifiez :
   - ✅ Le message de succès apparaît (toast vert)
   - ✅ Une **nouvelle ligne** apparaît dans votre Google Sheet
   - ✅ Vous recevez **2 emails** dans Gmail :
     - L'un sur `NOTIFY_EMAIL` (notification interne)
     - L'autre sur l'email saisi (confirmation utilisateur)

Si tout fonctionne, vous êtes prêt·e à mettre le site en production. 🚀

---

## 📊 Comment exploiter les inscriptions

### Voir la liste des inscrits
Ouvrez simplement la Google Sheet. Chaque ligne = 1 inscription, avec date, email, page d'origine.

### Envoyer une annonce à tous les inscrits
1. Dans la Sheet, **sélectionnez la colonne `Email`** (colonne B).
2. Copiez-la (Ctrl+C).
3. Dans **Gmail**, créez un nouveau message.
4. Dans le champ **`Cci`** (copie cachée, important pour la confidentialité), collez la liste.
5. Rédigez votre message d'annonce (ex. « Formation Animateur à Yaoundé · 15 juin »).
6. Envoyez. ✉️

> ⚠️ **Limite Gmail** : 500 destinataires/jour pour un compte gratuit. Si vous dépassez 500 inscrits, on basculera sur **Brevo** ou **MailerLite** (envoi en masse pro).

### Filtrer par ville / par date
Ajoutez vous-même des colonnes (ex. `Ville`, `Niveau visé`) si vous voulez segmenter. Utilisez les filtres natifs de Google Sheets.

---

## 🔧 Maintenance & modifications

### Modifier le message de confirmation
Dans Apps Script → fonction `buildConfirmHtml(email)`. Modifiez le HTML, enregistrez, puis **redéployez en cliquant `Déployer` → `Gérer les déploiements` → ✏ → `Nouvelle version`**.

> ⚠️ Si vous redéployez, **l'URL ne change pas**. Pas besoin de modifier app.js.

### Changer l'email de notification
Modifiez juste la ligne `const NOTIFY_EMAIL = '...';` puis enregistrez (Ctrl+S). **Pas besoin de redéployer** : le changement est immédiat.

### Voir les logs d'erreur
Apps Script → menu de gauche → **`Exécutions`**. Toutes les invocations sont historisées avec le détail (succès, erreurs, logs).

---

## 🆘 Problèmes fréquents

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le toast s'affiche mais la Sheet reste vide | URL endpoint non collée dans app.js | Vérifier l'étape 4 |
| Erreur CORS dans la console | Déploiement non public | Re-déployer en `Qui a accès = Toute personne` |
| Pas d'email reçu | Quota Gmail dépassé (500/j) ou mauvaise adresse | Vérifier `NOTIFY_EMAIL` + quotas |
| « Cette application n'est pas vérifiée » | Premier déploiement | Cliquer `Paramètres avancés` → `Continuer` |

---

## 🎓 Pour aller plus loin

- **Anti-spam** : un système anti-doublon est déjà inclus (un email ne peut s'inscrire qu'une fois).
- **RGPD** : ajouter un lien de désabonnement dans le mail de confirmation (à faire quand le site sera live).
- **Migration vers Brevo** : quand vous dépassez 200 inscrits, exporter la Sheet en CSV et importer dans Brevo pour campagnes pros.

---

🏀 **Tout est en place. Bonne campagne d'inscriptions !**

— *Louis Tsoungui, Coordination Technique Nationale*
