import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

function SimpleForm() {
    const [formData, setFormData] = useState({
        unit_owner: '',
        email: '',
        contact_number: '',
        unit_number: '',
        building: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.unit_owner}, your message has been received!`);
        setFormData({ name: '', email: '', message: '' });
    };
    console.log(formData);
    return (
        <Container className="mt-5">
            <Card className="shadow-md" style={{ width: '500px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Nitori Residences</Card.Title>
                    <p>Please enter unit details</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="unit_owner">
                            <Form.Label>Unit Owner:</Form.Label>
                            <Form.Control
                                type="text"
                                name="unit_owner"
                                value={formData.unit_owner}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Contact Number:</Form.Label>
                            <Form.Control
                                type="number"
                                name="contact_number"
                                value={formData.contact_number}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="building">
                            <Form.Select aria-label="Select Building" onChange={handleChange}>
                                <option>Select building..</option>
                                <option value="hikori">Hikori</option>
                                <option value="hina">Hina</option>
                                <option value="ryo">Ryo</option>
                                <option value="kaito">Kaito</option>
                                <option value="izumi">Izumi</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="unit_number">
                            <Form.Label>Unit Number:</Form.Label>
                            <Form.Control
                                type="number"
                                name="unit_number"
                                value={formData.unit_number}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SimpleForm;
