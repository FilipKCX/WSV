import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DatenschutzComp.css'; 

const Datenschutz = () => {
  return (
    <Container className="datenschutz-container">
      <Row>
        <Col>
          <h1>Datenschutzerklärung</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>1. Allgemeine Hinweise</h2>
          <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
          
          <h2>2. Kontaktformular</h2>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          
          <h2>3. Cookies</h2>
          <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
          
          <h2>4. Google Analytics</h2>
          <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.</p>
          
          <h2>5. Datenschutzerklärung für die Nutzung von Social Media Plugins</h2>
          <p>Unsere Seiten nutzen Plugins von sozialen Netzwerken. Wenn Sie unsere Seiten besuchen und dabei gleichzeitig bei dem jeweiligen Netzwerk eingeloggt sind, werden personenbezogene Daten an dieses übermittelt.</p>
          
          <h2>6. Auskunft, Löschung, Sperrung</h2>
          <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
          
          <h2>7. Änderung unserer Datenschutzbestimmungen</h2>
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
          
          <p>Bei weiteren Fragen zum Datenschutz auf unserer Website stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns unter contact.workingstudent@gmail.com.<br/>Ihr Team von WorkingStudent</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Datenschutz;
