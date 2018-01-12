import React from 'react'
import { List } from 'semantic-ui-react'

const MapList = props => {
    return (
        <div style={{marginTop: 10}}>
            <h3> Locations </h3>
            <List divided relaxed className="location-list">
                {props.locations.map(location => (
                    <List.Item
                        key={location.value}
                        onClick={() => props.onItemClick(location.value)}
                    >
                        <List.Content>
                            <List.Header as="a">{location.text}</List.Header>
                            <List.Description as="p">
                                {location.description}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default MapList