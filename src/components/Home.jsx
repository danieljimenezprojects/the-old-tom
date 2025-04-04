import { Link } from 'react-router'

function Home() {
	return (
		<main className="min-h-screen bg-[url('/fondo.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center p-6">
			<div className="rounded-lg p-8 max-w-3xl bg-black flex flex-col items-center justify-center border-2 border-amber-500 text-amber-500">
				<h1 className="text-2xl font-serif text-amber-500 text-center px-6 font-bold tracking-wide mb-6">
					Introducción
				</h1>
				<div className="first-letter:text-amber-500 first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-6 space-y-4 pb-6 relative">
					<p>
						El humo flotaba entre las palabras del viejo Tomás mientras los
						demás escuchábamos con preocupación. Ni siquiera la sonrisa del
						viejo —acompañada por las arrugas en su frente y sus ojos— quitaba
						peso a la situación.
					</p>
					<p className="italic">
						—Hoy acabaremos con el reinado de "el Señor" o moriremos en el
						intento —concluyó Tomás.
					</p>
					<p>
						La ya humeante taberna pareció volverse más oscura todavía. Cada uno
						de los miembros de nuestro pequeño equipo miraba hacia sí mismo.
						Llevábamos meses preparándonos, pero nadie celebró que el momento
						hubiera llegado.
					</p>
				</div>
				<div className="items-center px-6 flex flex-col gap-3 border-t border-amber-900/20 pt-6 relative w-full">
					<p className="text-amber-300/90 font-serif text-center mb-2">
						¿Nos ayudarás a llevar a cabo esta misión?
						<br />
						Recuerda que tus decisiones cambiarán el curso de la historia.
					</p>
					<Link
						to="/scene/0"
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 w-full border-amber-700/30 bg-stone-900/80 hover:bg-amber-900/30 hover:text-amber-200 text-amber-300/90 font-serif transition-all duration-200 group relative overflow-hidden"
					>
						Comenzar la aventura
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Home
