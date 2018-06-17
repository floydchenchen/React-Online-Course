import React, { Component } from "react";

class GoogleMap extends Component {

    componentDidMount() {
        // embedded google map
        new google.maps.Map(this.refs.map, {
            zoom: 12, // zoom level of google map
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {

        // by using 'ref' as a prop, this <div> element could be accessed by calling this.refs.map in React
        return <div ref="map"/>;
    }
}

export default GoogleMap;