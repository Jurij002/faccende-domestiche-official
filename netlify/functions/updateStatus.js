// netlify-functions/updateStatus.js
const { user } = require('@netlify/identity-widget');

exports.handler = async function (event, context) {
  const { taskId, status } = JSON.parse(event.body);

  // Verifica che l'utente sia autenticato
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Utente non autenticato' }),
    };
  }

  // Salva lo stato delle attività nel profilo dell'utente
  const userMetadata = await user.json();
  userMetadata.taskStatus = userMetadata.taskStatus || {};
  userMetadata.taskStatus[taskId] = status;

  await user.update({ data: userMetadata });

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
