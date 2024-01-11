import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../UserComponents/AGBUser/AGBComp.css'; 

const AGB = () => {
  return (
    <div className='agbdiv'>
    <Container className="agb-container">
      <Row>
        <Col>
          <h1>Unsere AGB</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>1. Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für die Nutzung der Website "WorkingStudent" (nachfolgend "Website") und sämtliche darüber angebotenen Dienstleistungen.</p>
          
          <h2>2. Registrierung und Nutzerkonto</h2>
          <p>Um bestimmte Funktionen der Website nutzen zu können, ist eine Registrierung erforderlich. Bei der Registrierung sind die angeforderten Informationen wahrheitsgemäß anzugeben. Der Nutzer ist für die Geheimhaltung seiner Zugangsdaten verantwortlich.</p>
          
          <h2>3. Nutzungsbedingungen</h2>
          <p>a. Der Nutzer verpflichtet sich, die Website und ihre Dienste nur im Rahmen der geltenden Gesetze und dieser AGB zu nutzen.<br/>b. Die Website darf nicht für rechtswidrige Zwecke oder in einer Weise, die gegen diese AGB verstößt, genutzt werden.</p>
          
          <h2>4. Haftungsausschluss</h2>
          <p>a. Die Nutzung der Website erfolgt auf eigene Gefahr. Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.<br/>b. Wir haften nicht für Schäden, die durch die Nutzung oder Nichtnutzung der auf der Website angebotenen Informationen entstehen.</p>
          
          <h2>5. Datenschutz</h2>
          <p>Die Erhebung und Verwendung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung. Durch die Nutzung der Website erklärt sich der Nutzer mit der Verarbeitung seiner Daten gemäß dieser Erklärung einverstanden.</p>
          
          <h2>6. Änderungen der AGB</h2>
          <p>Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Die geänderten AGB treten mit ihrer Veröffentlichung auf der Website in Kraft. Nutzer werden über Änderungen rechtzeitig informiert.</p>
          
          <h2>7. Sonstiges</h2>
          <p>a. Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.<br/>b. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.<br/>c. Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist der Sitz unseres Unternehmens, soweit nicht Verbraucher, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist.</p>
          
          <p>Für Fragen zu diesen AGB oder unserer Website stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns unter contact.workingstudent@gmail.com.<br/>Ihr Team von WorkingStudent</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AGB;
