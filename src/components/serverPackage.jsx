const ServerPackage = () => {
  function getHTTPRequest(a, b) 
{ 
  let command = a;
  let paramArray = b;
  let StringParams = "";

  

  for (let i = 0; i < paramArray.length; i++) {
    StringParams = StringParams + "&" + paramArray[i]
  }
  
  let commandURL = "http://localhost:34123/" + command + StringParams;

  return fetch(commandURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  })
    .then(response => response.text())  // Beachte, dass hier .text() verwendet wird
    .then(data => {
      // Hier kannst du die Daten interpretieren
      console.log('Empfangene Daten:', data);
      
      // Beispiel: Extrahiere den Statuscode und den Inhalt
      const [statusLine, ...contentLines] = data.split('\r\n');
      const [protocol, statusCode] = statusLine.split(' ');
      const content = contentLines.join('\r\n');
  
      apiResponse = data;
      
      //alert(apiResponse);
  
      //console.log('Statuscode:', statusCode);
      //console.log('Inhalt:', content);
    });

}
};

// serverPackage.jsx

let dataMain = ""


const getHTTPRequest = (command, paramArray) => {
  let StringParams = "";

  for (let i = 0; i < paramArray.length; i++) {
    StringParams = StringParams + "&" + paramArray[i];
  }

  let commandURL = "http://localhost:34123/" + command + StringParams;

  fetch(commandURL, {
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
      //alert(data)
      //alert(data)
      return data;
    });

    //while (dataMain == "") {}

    

};

const getDataMain = () => {
  return dataMain
}


export { getHTTPRequest }; // Exportiere die Funktion direkt
export { getDataMain };
export { dataMain };

export default ServerPackage;