import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfileEntity from './profile-types';
import { Badge, Card, Image } from 'react-bootstrap';

const profile: ProfileEntity = {
    firstName: 'Harmanjit',
    lastName: 'Singh',
    attributes: ['Architect', 'Team Lead', 'Developer'],
    skills: ['AWS Cloud', 'FullStack', 'Microservices'],
    experience: '15+ years experience',
    coverletter:
        'I have been constantly challenged to develop architectures and design for large enterprises. I took each challenge as an opportunity to apply latest industry trends and deliver quality solutions. Being certified AWS Architect, IBM OOAD Designer and Scrum master, I adopted best practices from both bodies of knowledge to deliver solutions including microservices, serverless, functional automation testing and building CICD pipelines.',
    books: [
        'Design Patterns: Elements of Reusable Object-Oriented Software',
        'Head First Design Patterns',
        'Refactoring: Improving the Design of Existing Code',
        'Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design',
        'Building microservices',
        'Test Driven Development',
    ],
};

const Profile: React.FC = () => {
    return (
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
            <ProfileHero {...profile} />
            <ProfileBio experience={profile.experience} coverletter={profile.coverletter} books={profile.books} />
            <ProfileCertifications />
        </div>
    );
};

const ProfileHero: React.FC<ProfileEntity> = (profile: ProfileEntity) => {
    return (
        <Container className="border-bottom border-warning" style={{ margin: '1em 0 1em 0', padding: '0 0 1em 0' }}>
            <Row className="justify-content-center">
                <Col className="align-self-center">
                    <div
                        className="LI-profile-badge"
                        data-version="v1"
                        data-size="medium"
                        data-locale="en_US"
                        data-type="horizontal"
                        data-theme="light"
                        data-vanity="singhharmanjit"
                    >
                        <a
                            className="LI-simple-link"
                            href="https://au.linkedin.com/in/singhharmanjit?trk=profile-badge"
                        >
                            {profile.firstName} {profile.lastName}
                        </a>
                    </div>
                </Col>
                <Col className="align-self-center">
                    <Card style={{ border: 'none', fontSize: '20px' }}>
                        <Card.Title style={{ margin: 0 }}>
                            <label style={{ fontWeight: 'bold' }}>Roles</label>
                        </Card.Title>
                        <Card.Subtitle className="mb-2">{getBadges(profile.attributes)}</Card.Subtitle>
                        <Card.Text style={{ margin: 0 }}>
                            <label style={{ margin: 0, fontWeight: 'bold' }}>Skills:</label>
                        </Card.Text>
                        <div style={{ display: 'flex', alignItems: 'center' }}>{getBadges(profile.skills)}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

const ProfileBio: React.FC<{ experience: string; coverletter: string; books: string[] }> = ({
    experience,
    coverletter,
    books,
}) => (
    <div
        style={{
            margin: '0',
            padding: '1em 0 1em 1em',
            border: '1px solid',
            borderColor: 'rgb(220,220,220)',
        }}
    >
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
            }}
        >
            Professional Bio
            <p
                style={{
                    margin: 0,
                    padding: '0.25em',
                    border: '1px solid',
                    borderColor: 'rgb(220,220,220)',
                }}
            >
                {experience}
            </p>
        </div>
        <div style={{ marginRight: '1em', padding: '0.25em', textAlign: 'justify', textJustify: 'inter-word' }}>
            {coverletter}
            <p style={{ marginTop: '1em', fontSize: '15px' }}>
                <b>Books that influenced me:</b>
            </p>
            <ul style={{ columns: 2 }}>
                {books.map((b: string, index: number) => {
                    return <li key={index} style={{ width: '97%' }}>{b}</li>;
                })}
            </ul>
        </div>
    </div>
);

const ProfileCertifications: React.FC = () => (
    <div
        style={{
            margin: '0',
            padding: '0 0.5em 0 0.5em',
            height: '2em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '25px',
        }}
    >
        <label>Certifications</label>
        <Row className="justify-content-center">
            <Image style={{ height: '12rem', width: '12rem' }} src={'aws.png'} roundedCircle />
            <Image style={{ height: '12rem', width: '12rem' }} src={'blockchain.png'} roundedCircle />
            <Image style={{ height: '12rem', width: '12rem' }} src={'csm.png'} roundedCircle />
            <Image style={{ height: '12rem', width: '12rem' }} src={'spring.png'} />
        </Row>
    </div>
);

const getBadges = (names: string[]): ReactElement[] => {
    const badges: any[] = [];
    badges.push(
        <Badge key={0} variant="warning" style={{ margin: 2 }}>
            {names[0]}
        </Badge>,
    );
    for (let i = 1; i <= 2 && names; i++) {
        badges.push(
            <Badge key={i} variant="info" style={{ margin: 2 }}>
                {names[i]}
            </Badge>,
        );
    }
    for (let i = 3; i <= names.length && names; i++) {
        badges.push(
            <Badge key={i} variant="secondary" style={{ margin: 2 }}>
                {names[i]}
            </Badge>,
        );
    }
    return badges;
};

export default Profile;
