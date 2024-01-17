import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button, Table } from 'react-bootstrap';
import './ProfileView.css';
import { getHTTPRequest } from '../../serverPackage';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Im Feld sind ausschließlich Buchstaben erlaubt.'),
  email: Yup.string()
    .matches(/.*[@.].*/, 'Die E-Mail muss die Zeichen "@" und "." enthalten.')
    .email('Ungültige E-Mail Adresse'),
  telefon: Yup.string()
    .matches(/^\+?[0-9]*$/, 'Im Feld sind ausschließlich Ziffern und das Zeichen "+" erlaubt.')
    .max(13, 'Die Telefonnummer darf maximal 13 Ziffern enthalten.'),
  studiengang: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Im Feld sind ausschließlich Buchstaben erlaubt.'),
  semester: Yup.string()
    .matches(/^[0-9]+$/, 'Im Feld sind ausschließlich Ziffern erlaubt.')
    .max(2, 'Die Semesteranzahl darf maximal zweistellig sein.'),
});

const Profilansicht = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [studiengang, setStudiengang] = useState('');
  const [semester, setSemester] = useState('');
  const [profilbeschreibung, setProfilbeschreibung] = useState('');
  const [werdegang, setWerdegang] = useState('');
  const [faehigkeiten, setFaehigkeiten] = useState('');
  const [logo, setLogo] = useState('none.jpg')
  const [verfuegbarkeit, setVerfuegbarkeit] = useState({
    montag: { available: false, hours: 0 },
    dienstag: { available: false, hours: 0 },
    mittwoch: { available: false, hours: 0 },
    donnerstag: { available: false, hours: 0 },
    freitag: { available: false, hours: 0 },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      telefon: '',
      studiengang: '',
      semester: '',
      faehigkeiten: '',
      profilbeschreibung: '',
      werdegang: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      // handle your form submission logic here
      saveProfile();
    },
  });

  // Funktion zum Umschalten der Verfügbarkeit
  const toggleVerfuegbarkeit = (tag) => {
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        available: !prevState[tag].available
      }
    }));
  };

  // Funktion um Stundenanzahl zu aktualisieren
  const handleChangeHours = (tag, value) => {
    let hours = Number(value); // Stellt sicher, dass die Eingabe als Zahl gespeichert wird
    hours = Math.max(0, Math.min(hours, 9));
    setVerfuegbarkeit(prevState => ({
      ...prevState,
      [tag]: {
        ...prevState[tag],
        hours: hours // Setzt die Stunden mit der beschränkten Zahl
      }
    }));
  };


  // Funktion um zu verhindern, dass Zahlen bei "Stunden" eingegeben werden können
  const handleKeyDown = (e) => {
    // Erlaube nur das Benutzen der Pfeiltasten
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      e.preventDefault();
    }
  };

  const saveProfile = () => {
    console.log('Speichern der Profildaten...');
    console.log('Name:', name);
    console.log('E-Mail:', email);
    console.log('Telefonnummer:', telefon);
    console.log('Studiengang:', studiengang);
    console.log('Aktuelles Semester:', semester);
    console.log('Fähigkeiten:', faehigkeiten);
    console.log('Profilbeschreibung:', profilbeschreibung);
    console.log('Werdegang:', werdegang);
    console.log('Verfügbarkeit:', verfuegbarkeit);
    handleProfileCreation();
    alert('Profil gespeichert!'); // Für Demonstrationszwecke 
  };

  const calculateTotalWorkHours = () => {
    const weekdays = Object.keys(verfuegbarkeit);

    const totalWorkHours = weekdays.reduce((total, weekday) => {
      let abc = total + (verfuegbarkeit[weekday].available ? verfuegbarkeit[weekday].hours : 0);
      if(abc >=20)
      {
        abc=20;
      }
      return abc;
    }, 0);


    return totalWorkHours;
  };

  const totalWorkHours = calculateTotalWorkHours();
  console.log('Total Work Hours:', totalWorkHours);

  const [profilBild, setProfilBild] = useState(null);
  const [selectedImagePath, setSelectedImagePath] = useState('');

  const handleImageSelection = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      const fileName = file.name;
      reader.onload = () => {
        setSelectedImagePath(reader.result);
        const imageData = reader.result;
        const base64Image = `data:image/jpeg;base64,${imageData}`;
        setProfilBild(base64Image);
        setLogo(fileName)
      };

      reader.readAsDataURL(file);
    }
  };
  console.log(logo)
  const triggerFileInput = () => {
    document.getElementById('profilbild-input').click();
  };

  const usID = sessionStorage.getItem('userID');

  let paramArray = [usID, name, email, telefon, studiengang, semester, faehigkeiten, profilbeschreibung, werdegang, totalWorkHours, logo];
  console.log(paramArray)
  async function handleProfileCreation() {
    const apiResponse = await getHTTPRequest("createProfile", paramArray);
    return;
  }

  return (
    <Container className="profil-container">
      <Row className="justify-content-md-center profil-row">
        <Col md={6} className="profil-col">
          <div className="profil-bild-container" onClick={triggerFileInput}>
            <Image
              src={selectedImagePath || "platzhalter-bild-url.jpg"}
              roundedCircle
              className="profil-bild"
            />

            <div>Klicken, um Foto hinzuzufügen</div>
            <input type="file" id="profilbild-input" hidden onChange={handleImageSelection} />
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="invalid-feedback">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="E-Mail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Telefonnummer"
              name="telefon"
              value={formik.values.telefon}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.telefon && formik.errors.telefon ? 'is-invalid' : ''}`}
            />
            {formik.touched.telefon && formik.errors.telefon ? (
              <div className="invalid-feedback">{formik.errors.telefon}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Studiengang"
              name="studiengang"
              value={formik.values.studiengang}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.studiengang && formik.errors.studiengang ? 'is-invalid' : ''}`}
            />
            {formik.touched.studiengang && formik.errors.studiengang ? (
              <div className="invalid-feedback">{formik.errors.studiengang}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Aktuelles Semester"
              name="semester"
              value={formik.values.semester}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.semester && formik.errors.semester ? 'is-invalid' : ''}`}
            />
            {formik.touched.semester && formik.errors.semester ? (
              <div className="invalid-feedback">{formik.errors.semester}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ihre Fähigkeiten (2-3 Sätze)"
              name="faehigkeiten"
              value={formik.values.faehigkeiten}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`profil-input ${formik.touched.faehigkeiten && formik.errors.faehigkeiten ? 'is-invalid' : ''}`}
            />
            {formik.touched.faehigkeiten && formik.errors.faehigkeiten ? (
              <div className="invalid-feedback">{formik.errors.faehigkeiten}</div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Profilbeschreibung</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Hier kommt Ihre Profilbeschreibung hin."
                rows={3}
                value={profilbeschreibung}
                onChange={e => setProfilbeschreibung(e.target.value)}
                className="profil-input"
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Werdegang</Card.Title>
              <Form.Control
                as="textarea"
                placeholder="Hier können Sie Ihren beruflichen Werdegang darstellen."
                rows={3}
                value={werdegang}
                onChange={e => setWerdegang(e.target.value)}
                className="profil-input"
              />
            </Card.Body>
          </Card>
          <Card className="profil-card">
            <Card.Body>
              <Card.Title>Verfügbarkeit</Card.Title>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Wochentag</th>
                    <th className="th-verfuegbar">Verfügbar</th>
                    <th>Stunden</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(verfuegbarkeit).map(tag => (
                    <tr key={tag}>
                      <td>{tag.charAt(0).toUpperCase() + tag.slice(1)}</td>
                      <td className="td-verfuegbar">
                        <div className="form-check">
                          <Form.Check
                            type="checkbox"
                            checked={verfuegbarkeit[tag].available}
                            onChange={() => toggleVerfuegbarkeit(tag)}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          value={verfuegbarkeit[tag].hours}
                          onChange={e => handleChangeHours(tag, e.target.value)}
                          onKeyDown={handleKeyDown} // Event-Handler hinzufügen
                          disabled={!verfuegbarkeit[tag].available}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-end mb-3">
            <Button variant="primary" onClick={saveProfile}>Speichern</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );

};
export default Profilansicht;