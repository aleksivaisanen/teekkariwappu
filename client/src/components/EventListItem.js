import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Collapse, CardBody, Card, CardHeader, CardFooter } from 'reactstrap';
import EventModal from './EventModal';

class EventListItem extends Component {
    static propTypes = {
        toggle: PropTypes.func,
        event: PropTypes.object.isRequired,
        collapse: PropTypes.string
    };

    render() {
        const { event, collapse, toggle } = this.props;
        return (
            <Card key={event._id.toString()}>
                <CardHeader onClick={toggle} data-event={event._id.toString()}>
                    {window.location.href.includes('/admin') &&
                        <EventModal
                            buttonText="Muokkaa"
                            heading="Muokkaa tapahtumaa"
                            currentEvent={event}
                            alertEnabled={false}
                        />
                    }
                    <Row>
                        <Col sm={2} xs={4}>
                            {new Intl.DateTimeFormat('fi-FI',
                                {
                                    weekday: 'short',
                                    day: 'numeric',
                                    month: 'numeric',
                                    timeZone: 'Europe/Helsinki'
                                }).format(new Date(event.date))
                            }
                            <br /> klo {new Intl.DateTimeFormat('fi-FI',
                                {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZone: 'Europe/Helsinki'
                                }).format(new Date(event.date))
                            }
                        </Col>
                        <Col sm={10} xs={8}>
                            <b>{event.name}</b> - <i>{event.place}</i>
                        </Col>
                    </Row>

                </CardHeader>
                <Collapse isOpen={collapse === event._id.toString()}>
                    <CardBody>
                        {event.description}
                    </CardBody>
                    {event.enrolLink !== "" &&
                        <CardFooter>
                            <b><a href={event.enrolLink}>Ilmoittaudu tapahtumaan tästä!</a></b>
                        </CardFooter>
                    }
                </Collapse>
            </Card>
        );
    }
}


export default EventListItem;
