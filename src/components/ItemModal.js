import React from 'react'
import { Modal, Button, Rating, Image } from 'semantic-ui-react'
import FocusLock, { AutoFocusInside } from 'react-focus-lock'
import yelp from '../images/yelp.png'

const ItemModal = props => {
    return (
        <Modal
            size="mini"
            open={props.isModalOpen}
            onClose={props.onClose}
        >
            <Modal.Header><a href={props.content.url}>{props.content.name}</a></Modal.Header>
            <Modal.Content>
                <FocusLock>
                    <Rating
                        disabled
                        defaultRating={props.content.rating}
                        maxRating={5}
                    />
                    <p>
                        {props.content &&
                            props.content.location.display_address.reduce(
                                (address, current) => {
                                    return (address += ' ' + current)
                                },
                                ''
                            )}
                    </p>
                    {props.content.image_url &&
                        <Image alt={props.content.name} src={props.content.image_url} size="medium" />
                    }
                    <p style={{ display: 'table-cell' }}>
                        <span style={{ verticalAlign: 'middle' }}>powered by </span>
                        <img src={yelp} alt="yelp logo" style={{ width: 70, verticalAlign:'middle' }} />
                    </p>
                    <AutoFocusInside>
                        <Button
                            style={{ marginTop: 10 }}
                            onClick={props.onClose}
                        >
                            Close
                        </Button>
                    </AutoFocusInside>
                </FocusLock>
            </Modal.Content>
        </Modal>
    )
}

export default ItemModal