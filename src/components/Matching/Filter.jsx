import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Filter.css';

function DropdownForm() {
    const [showForm, setShowForm] = useState(false);
    const [studiengang, setStudiengang] = useState('');
    const [semester, setSemester] = useState([]);
    const [berufserfahrung, setBerufserfahrung] = useState('');
    const [arbeitszeit, setArbeitszeit] = useState('');

    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Hier kannst du die ausgewählten Werte verwenden
        console.log('Studiengang:', studiengang);
        console.log('Semester:', semester);
        console.log('Berufserfahrung:', berufserfahrung);
        console.log('Arbeitszeit:', arbeitszeit);

        // Formular zurücksetzen
        setStudiengang('');
        setSemester([]);
        setBerufserfahrung('');
        setArbeitszeit('');

        // Dropdown-Formular ausklappen
        setShowForm(false);
    };

    return (
        <div className="dropdown-form">
            <Button onClick={handleButtonClick} variant="primary" id="filter-button">
                Filter
            </Button>

            {showForm && (
                <Form onSubmit={handleFormSubmit} className="horizontal-form">
                    <div className="horizontal-container">
                        <Form.Group className="horizontal-options horizontal-inputbox">
                            <Form.Label>Studiengang:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Studiengang eingeben"
                                value={studiengang}
                                onChange={(e) => setStudiengang(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSemester">
                            <Form.Label>Semesteranzahl:</Form.Label>
                            <div className="horizontal-options">
                                <Form.Check
                                    type="checkbox"
                                    label="1. Semester"
                                    checked={semester.includes('1. Semester')}
                                    onChange={() => setSemester(['1. Semester'])}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="2. Semester"
                                    checked={semester.includes('2. Semester')}
                                    onChange={() => setSemester(['2. Semester'])}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="3. Semester"
                                    checked={semester.includes('3. Semester')}
                                    onChange={() => setSemester(['3. Semester'])}
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBerufserfahrung">
                            <Form.Label>Berufserfahrung:</Form.Label>
                            <div className="horizontal-options">
                                <Form.Check
                                    type="checkbox"
                                    label="0 Jahre"
                                    checked={berufserfahrung === '0 Jahre'}
                                    onChange={() => setBerufserfahrung('0 Jahre')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="1 Jahr"
                                    checked={berufserfahrung === '1 Jahr'}
                                    onChange={() => setBerufserfahrung('1 Jahr')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="2 Jahre"
                                    checked={berufserfahrung === '2 Jahre'}
                                    onChange={() => setBerufserfahrung('2 Jahre')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="3+ Jahre"
                                    checked={berufserfahrung === '3+ Jahre'}
                                    onChange={() => setBerufserfahrung('3+ Jahre')}
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formArbeitszeit">
                            <Form.Label>Arbeitszeit:</Form.Label>
                            <div className="horizontal-options">
                                <Form.Check
                                    type="checkbox"
                                    label="8 Stunden pro Woche"
                                    checked={arbeitszeit === '8 Stunden pro Woche'}
                                    onChange={() => setArbeitszeit('8 Stunden pro Woche')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="10 Stunden pro Woche"
                                    checked={arbeitszeit === '10 Stunden pro Woche'}
                                    onChange={() => setArbeitszeit('10 Stunden pro Woche')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="15 Stunden pro Woche"
                                    checked={arbeitszeit === '15 Stunden pro Woche'}
                                    onChange={() => setArbeitszeit('15 Stunden pro Woche')}
                                />
                            </div>
                        </Form.Group>

                    </div>
                    <Button variant="primary" type="submit" id="apply-button">
                        Anwenden
                    </Button>
                </Form>
            )}
        </div>
    );
}

export default DropdownForm;
