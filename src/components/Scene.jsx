import { Link, useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { story } from '../assets/data' // Asegúrate de que esto esté bien

function Scene() {
	const { id } = useParams()
	const navigate = useNavigate()
	const scene = story[id]

	return (
		<main className="min-h-screen bg-[url('/fondo.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center p-4 sm:p-6">
			<div className="rounded-lg p-4 sm:p-8 w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-black flex flex-col items-center justify-center border-2 border-amber-500 text-amber-500">
				{/* Botón de retroceso */}
				<button
					onClick={() => navigate(-1)}
					className="self-start mb-4 text-amber-300 hover:text-amber-200 transition-colors duration-200 flex items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Atrás
				</button>
				<h1 className="text-xl sm:text-2xl font-serif text-amber-500 text-center px-4 sm:px-6 font-bold tracking-wide">
					{scene.title}
				</h1>
				<div className="first-letter:text-amber-500 first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-6 pt-4 sm:pt-6 pb-3 sm:pb-4 relative text-sm sm:text-base">
					{scene.content.map((item, index) => {
						if (item.type === 'text') {
							return <p key={index}>{item.text}</p>
						} else if (item.type === 'separator') {
							return (
								<hr
									key={index}
									className="my-4 border-amber-500"
								/>
							)
						}
						return null
					})}
				</div>
				<div className="items-center px-4 sm:px-6 flex flex-col gap-2 sm:gap-3 border-t border-amber-900/20 pt-3 sm:pt-4 relative w-full">
					{scene.choices?.map((choice, index) => (
						<Link
							key={index}
							to={`/scene/${choice.next}`}
							className="inline-flex items-center gap-2 rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-9 sm:h-10 px-3 sm:px-4 py-1 sm:py-2 w-full justify-start text-left border-amber-700/30 bg-stone-900/80 hover:bg-amber-900/30 hover:text-amber-200 text-amber-300/90 font-serif transition-all duration-200 group relative overflow text-overflow"
						>
							{choice.text}
						</Link>
					))}
				</div>
			</div>
		</main>
	)
}

export default Scene
