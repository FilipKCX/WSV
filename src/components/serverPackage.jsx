
const getHTTPRequest = async (command, paramArray) => {
  let StringParams = "";

  for (let i = 0; i < paramArray.length; i++) {
    StringParams = StringParams + "&" + paramArray[i];
  }

  let commandURL = "http://localhost:34123/" + command + "&" + StringParams;

  return await fetch(commandURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  })
    .then(response => response.text())
    .then(data => {
      console.log('Empfangene Daten:', data);
      const [statusLine, ...contentLines] = data.split('\r\n');
      const [protocol, statusCode] = statusLine.split(' ');
      const content = contentLines.join('\r\n');
      // Hier kannst du die Daten weiter verarbeiten oder zurückgeben
      console.log(data)
      return data;
    });

};

const getDataMain = () => {
  return 4;
}


export { getHTTPRequest }; // Exportiere die Funktion direkt
export { getDataMain };


