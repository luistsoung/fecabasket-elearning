/**
 * ============================================================
 *  FECABASKET E-LEARNING — Newsletter Apps Script
 *  Reçoit les emails du formulaire d'inscription, les stocke
 *  dans une Google Sheet, et envoie 2 emails :
 *   1. Notification à la DTN (équipe FECABASKET)
 *   2. Confirmation à la personne inscrite
 * ============================================================
 *  Auteur : Louis Tsoungui — Coordination Technique
 *  Version : 1.0 — Mai 2026
 * ============================================================
 *
 *  📘 INSTRUCTIONS D'INSTALLATION → voir le fichier SETUP.md
 */

// ============ CONFIGURATION — À MODIFIER ============

// Email qui reçoit la notification à chaque nouvelle inscription
// Remplacer par l'adresse réelle (ex. luistsoung@yahoo.fr)
const NOTIFY_EMAIL = 'luistsoung@yahoo.fr';

// Nom de l'expéditeur affiché dans les emails
const SENDER_NAME = 'FECABASKET DTN · E-Learning';

// Sujet de l'email de confirmation envoyé à l'utilisateur
const CONFIRM_SUBJECT = '🏀 FECABASKET E-Learning — Votre inscription est confirmée';

// Sujet de l'email de notification interne
const NOTIFY_SUBJECT = '📩 Nouvelle inscription newsletter FECABASKET';

// ============ NE RIEN MODIFIER EN DESSOUS ============

/**
 * Endpoint principal : reçoit les POST du formulaire web
 */
function doPost(e) {
  try {
    // 1. Lire les données envoyées
    const data = e.parameter || {};
    const email = (data.email || '').trim().toLowerCase();
    const source = data.source || '';
    const referrer = data.referrer || '';
    const userAgent = data.userAgent || '';

    // 2. Validation simple
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Email invalide' });
    }

    // 3. Ouvrir la feuille active
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 4. Si la feuille est vide, créer les en-têtes
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Date',
        'Email',
        'Source (page)',
        'Référent',
        'User-Agent',
        'Notifié'
      ]);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#007A33').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // 5. Vérifier si l'email existe déjà (anti-doublon)
    const existing = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
    if (existing.includes(email)) {
      return jsonResponse({ success: true, alreadySubscribed: true });
    }

    // 6. Ajouter une nouvelle ligne
    const now = new Date();
    sheet.appendRow([now, email, source, referrer, userAgent, 'Non']);

    // 7. Envoyer la notification interne à la DTN
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: NOTIFY_SUBJECT,
        htmlBody: buildNotifyHtml(email, source, now),
        name: SENDER_NAME
      });
    } catch (mailErr) {
      Logger.log('Erreur notification DTN : ' + mailErr);
    }

    // 8. Envoyer la confirmation à l'utilisateur
    try {
      MailApp.sendEmail({
        to: email,
        subject: CONFIRM_SUBJECT,
        htmlBody: buildConfirmHtml(email),
        name: SENDER_NAME
      });
      // Marquer "Notifié = Oui" dans la dernière ligne
      sheet.getRange(sheet.getLastRow(), 6).setValue('Oui');
    } catch (mailErr) {
      Logger.log('Erreur confirmation utilisateur : ' + mailErr);
    }

    return jsonResponse({ success: true });

  } catch (err) {
    Logger.log('Erreur globale : ' + err);
    return jsonResponse({ success: false, error: err.toString() });
  }
}

/**
 * GET : page de statut (ouverte dans le navigateur pour vérifier que le déploiement est OK)
 */
function doGet() {
  const html = `<html><head><meta charset="utf-8"><title>FECABASKET Newsletter API</title></head>
    <body style="font-family:Arial,sans-serif;padding:40px;text-align:center;background:#f7f7f7">
      <h1 style="color:#007A33">✅ FECABASKET Newsletter API · Active</h1>
      <p>Cet endpoint reçoit les inscriptions du site E-Learning.</p>
      <p style="color:#666">Envoyez vos formulaires via POST sur cette URL.</p>
      <hr style="margin:40px auto;width:60%">
      <p style="color:#999;font-size:.85em">© ${new Date().getFullYear()} FECABASKET DTN · v1.0</p>
    </body></html>`;
  return HtmlService.createHtmlOutput(html);
}

/**
 * Helper : construit la réponse JSON
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Email HTML de notification à la DTN
 */
function buildNotifyHtml(email, source, now) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;border-radius:10px;border:1px solid #e5e5e5">
    <div style="background:linear-gradient(135deg,#007A33,#004D1F);color:#fff;padding:20px;border-radius:8px;text-align:center">
      <h1 style="margin:0;font-size:1.4em">🏀 Nouvelle inscription Newsletter</h1>
    </div>
    <p>Bonjour,</p>
    <p>Une nouvelle personne s'est inscrite à la newsletter FECABASKET DTN :</p>
    <table style="width:100%;border-collapse:collapse;margin:20px 0">
      <tr style="background:#f7f7f7"><td style="padding:10px;font-weight:bold">📧 Email</td><td style="padding:10px"><a href="mailto:${email}" style="color:#007A33">${email}</a></td></tr>
      <tr><td style="padding:10px;font-weight:bold">📅 Date</td><td style="padding:10px">${now.toLocaleString('fr-FR')}</td></tr>
      <tr style="background:#f7f7f7"><td style="padding:10px;font-weight:bold">🌐 Page</td><td style="padding:10px">${source || 'index'}</td></tr>
    </table>
    <p>Retrouvez toutes les inscriptions dans la Google Sheet associée.</p>
    <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5">
    <p style="color:#999;font-size:.85em;text-align:center">© FECABASKET DTN · Notification automatique</p>
  </div>`;
}

/**
 * Email HTML de confirmation à l'utilisateur
 */
function buildConfirmHtml(email) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;background:#ffffff;border-radius:10px;border:1px solid #e5e5e5">
    <div style="background:linear-gradient(135deg,#007A33,#004D1F);color:#fff;padding:24px;border-radius:8px;text-align:center">
      <h1 style="margin:0 0 8px;font-size:1.5em">🏀 Bienvenue dans la communauté FECABASKET</h1>
      <p style="margin:0;opacity:.92">E-Learning · Direction Technique Nationale</p>
    </div>
    <p style="margin-top:24px">Bonjour,</p>
    <p>Merci de votre inscription à la newsletter <strong>FECABASKET E-Learning</strong>.</p>
    <p>Vous serez désormais prévenu·e par e-mail dès qu'une <strong>formation fédérale officielle</strong> sera programmée près de chez vous :</p>
    <ul style="line-height:1.8">
      <li>🥇 <strong>Animateur</strong> (Mini-Basket)</li>
      <li>🥈 <strong>Moniteur</strong> (U13-U15)</li>
      <li>🥉 <strong>Niveau 1, 2 et 3</strong> (Élite, Haut Niveau)</li>
    </ul>
    <p>En attendant, profitez de notre plateforme E-Learning gratuite :</p>
    <p style="text-align:center;margin:30px 0">
      <a href="https://elearning.fecabasket.com"
         style="display:inline-block;background:#CE1126;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:bold">
        Accéder à la plateforme →
      </a>
    </p>
    <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5">
    <p style="color:#666;font-size:.9em">Pour toute question, écrivez-nous à <a href="mailto:luistsoung@yahoo.fr" style="color:#007A33">luistsoung@yahoo.fr</a>.</p>
    <p style="color:#999;font-size:.8em;text-align:center;margin-top:24px">
      © ${new Date().getFullYear()} FECABASKET · DTN<br>
      Yaoundé · Cameroun<br>
      Vous recevez ce message car ${email} s'est inscrit·e sur notre site.
    </p>
  </div>`;
}
