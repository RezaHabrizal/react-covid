import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByProvince } from '../store/action'
import Navbar from '../components/Navbar'

export default function Map() {
	const geometry = useSelector((state) => state.provinceGeo)

	const [viewport, setViewport] = useState({
		latitude: -0.789275,
		longitude: 113.921326,
		width: '100vw',
		height: '110vh',
		zoom: 4,
	})

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchByProvince())
	}, [])

	return (
		<>
			<Navbar />
			<div className="mt-5">
				<ReactMapGL
					{...viewport}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={(viewport) => setViewport(viewport)}
					mapStyle="mapbox://styles/rezahabrizal/ckq30c1cp1ahv17mnla8n1qpy"
				>
					{geometry.map((el, i) => (
						<Marker key={i} longitude={el.x} latitude={el.y}>
							<div>
								<h6 className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-r">
									pin
								</h6>
							</div>
						</Marker>
					))}
				</ReactMapGL>
			</div>
		</>
	)
}
