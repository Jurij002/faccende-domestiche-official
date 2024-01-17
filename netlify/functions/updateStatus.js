// functions/updateStatus.js

exports.handler = async (event, context) => {
  try {
    // Ottieni l'id del task da event.body (assumendo un payload JSON)
    const { taskId } = JSON.parse(event.body);

    // Qui dovresti implementare la logica per cambiare lo stato
    // ad esempio, puoi utilizzare un database o memorizzare i dati in un file

    // Restituisci la risposta
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
