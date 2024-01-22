import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getHTTPRequest } from '../../components/serverPackage';
import '../Main/ProfilePage.css'
import Navibar from '../../components/CompanyComponents/NavbarCompany'
import ProfileViewStatic from '../../components/CompanyComponents/ProfilAnsichtCompany/ProfileViewStatic'

const ProfilePage = () => {
    return (
        <div>
            <Navibar/>
            <ProfileViewStatic/>
        </div>
    )
}

export default ProfilePage