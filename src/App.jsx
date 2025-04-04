import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import Scene from './components/Scene'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					path="/"
					element={<Home />}
				/>
				<Route
					path="/scene/:id"
					element={<Scene />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
