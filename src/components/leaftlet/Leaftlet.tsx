import { useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export function ChangeView({ coords }: { coords: LatLngExpression }) {
  const map = useMap()
  map.setView(coords, 12)
  return null
}

export default function Leaflet() {
  const [geoData] = useState({ lat: 46.7872557, lng: 23.63467 })

  const center = [geoData.lat, geoData.lng] as LatLngExpression

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
      className='z-0'
      zoom={44}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeView coords={center} />
    </MapContainer>
  )
}
