import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport,setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 12.971599,
        longitude: 77.594566,
        zoom: 11,
    });

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/rahul-kr/cl9khsz3f000815nv6b8kgrhw'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  )
}

export default Map;