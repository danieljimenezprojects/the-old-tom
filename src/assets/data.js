export const story = {
	0: {
		title: 'El comienzo del viaje',
		content: [
			{
				type: 'text',
				text: 'Al salir de la taberna, las primeras luces del sol comenzaban a deslumbrar los ojos. O, quizás, los nervios y el hidromiel habían dejado su rastro tras una noche llena de ideas y angustias, dejando el cuerpo resentido y sensible.',
			},
			{
				type: 'text',
				text: 'Las pancartas del día de “El Señor” ondeaban en los postes, como un recordatorio de su poder. Algunas almas en pena vagaban por las calles, mientras que el resto de la gente, esclavos sin saberlo, dormía para más tarde convertirse en otra máquina al servicio del dictador y sus planes.',
			},
			{
				type: 'text',
				text: 'No se puede decir que nuestro plan fuera muy elaborado. Hoy es el único día en que El Señor sale de su castillo. Hoy es el día en que íbamos a intentar acabar con él. Esperemos que la suerte y la preparación de estos meses nos asistan.',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Nos acercamos al castillo.', next: '1' },
			{
				text: 'Buscamos un escondite en el pueblo desde el que atacar.',
				next: '2',
			},
		],
	},
	1: {
		title: 'Nos acercamos al castillo',
		content: [
			{
				type: 'text',
				text: 'Caminando hacia el castillo donde reside “El Señor”, nuestros corazones parecían encogerse a medida que su morada crecía en proporción a nuestro miedo. ¿Era nuestro miedo o era una magia oscura que se percibía en el aire?',
			},
			{
				type: 'text',
				text: 'Las leyendas sobre “El Señor” eran tenebrosas, como las de una deidad de un mundo distópico. Sin embargo, en todos estos años, nadie sabía qué era verdad y qué era mito.',
			},
			{
				type: 'text',
				text: 'El castillo se encontraba a las afueras de la ciudad de Leonina, la capital del Reino. Desafortunadamente, no contábamos ya con la oscuridad de la noche para acercarnos. Aun así, teníamos la fortuna de que el castillo estaba rodeado de un bosque y múltiples viviendas pertenecientes a los esclavos que trabajaban para él.',
			},
			{
				type: 'text',
				text: 'Pasaríamos relativamente desapercibidos. PD: Ojalá Lucio fuera algo más bajito; ¡parece hijo de gigantes!',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Buscamos en el bosque y alrededores', next: '1.1' },
			{ text: 'Nos acercamos a la puerta del castillo', next: '1.2' },
		],
	},
	1.1: {
		title: 'Buscamos en el bosque y alrededores',
		content: [
			{
				type: 'text',
				text: 'La mayoría de las casas se encontraban cerca del camino principal al castillo. Eran casas robustas pero pobres, rodeadas de una naturaleza que, quién sabe qué secretos escondía. Quizás por eso mismo, las casas se acercaban al camino.',
			},
			{
				type: 'text',
				text: 'Esa naturaleza era a la vez preciosa y enigmática. Ni siquiera salía en los mapas la extensión que el bosque de Leonina ocupaba, y solo los más viejos del reino, como el Viejo Tom, se habían atrevido a explorarlo antes de que “El Señor” llegara al poder.',
			},
			{
				type: 'text',
				text: 'El Viejo Tom nunca hablaba de ello, pero sus ojos reflejaban un miedo que no podía ocultar.',
			},
			{ type: 'separator' },
		],
		choices: [
			{
				text: 'Lunera propone entrar al bosque. El bosque nos está llamando.',
				next: '1.1.1',
			},
			{
				text: 'Buscamos una casa que no llame la atención para preparar el ataque',
				next: '1.1.2',
			},
		],
	},
	'1.1.1': {
		title: 'Lunera propone entrar al bosque.',
		content: [
			{
				type: 'text',
				text: 'Decidimos hacer lo que Lunera propone. Ninguno de nosotros detecta la magia como ella. Nos internamos en el bosque, y el Viejo Tom va detrás de todos, con una expresión de preocupación en su rostro.',
			},
			{
				type: 'text',
				text: 'Cuanto más profundo nos adentramos, más frondoso se vuelve el bosque. Llega un punto en que solo podemos avanzar utilizando nuestras armas para abrirnos paso. Estábamos a punto de rendirnos y retroceder, pero una luz violácea aparece y decidimos acercarnos a ella.',
			},
			{
				type: 'text',
				text: 'Al acercarnos, descubrimos… ¡no puede ser! Vemos a “El Señor” brillando con un aura terrorífica. Nunca nadie le había visto con ese aspecto. Su cuerpo es el doble de su tamaño habitual y está envuelto en humo negro por el que corre electricidad. Esa electricidad es la luz que nos atrajo. Parece que no nos ha visto…',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Decidimos atacar', next: '1.1.1.1' },
			{ text: 'Aguardamos a ver qué pasa', next: '1.1.1.2' },
		],
	},
	'1.1.1.1': {
		title: 'Decidimos atacar',
		content: [
			{
				type: 'text',
				text: 'Lucio corre a toda velocidad con la espada en alto, intentando cercenar la cabeza del rey. El Viejo Tom y Martí aguardan con sus arcos, esperando el momento preciso, todavía escondidos. Lunera absorbe la energía del ambiente para hacer un hechizo de tipo tierra, intentando inmovilizarle los pies.',
			},
			{
				type: 'text',
				text: 'Cuando Lucio ataca con su espada, un golpe mortal, el humo repele su arma y Lucio se lleva una quemadura en la mano, cayendo al suelo. “El Señor”, hasta entonces imperturbable, mira hacia donde nos encontramos y un escalofrío recorre nuestros cuerpos.',
			},
			{
				type: 'text',
				text: 'Tom y Martí disparan, Lunera usa su magia, pero es inútil. El poder de “El Señor” es demasiado. Morimos al instante, sin poder hacer nada.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.1.1.2': {
		title: 'Aguardamos a ver qué pasa',
		content: [
			{
				type: 'text',
				text: 'El Viejo Tom nos mira haciendo la seña de aguardar. Pasa un instante y, tras un sonido mudo, del cuerpo de “El Señor” salen dos. “El Señor” en sí mismo, con su aspecto joven al que estamos acostumbrados, y un ente que bien podría ser una sombra de forma antropomorfa.',
			},
			{
				type: 'text',
				text: '“Nos veremos el próximo año para cumplir tu penitencia”, dice la sombra con voz grave y estridente. El Viejo Tom llora, pero solo Martí se da cuenta. Lucio no da crédito. Lunera está temblando. Ninguno entendemos qué es esa sombra.',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Dejamos que se vaya', next: '1.1.1.2.1' },
			{ text: 'Atacamos a la sombra antropomorfa', next: '1.1.1.2.2' },
			{ text: 'Atacamos a “El Señor”', next: '1.1.1.2.3' },
		],
	},
	'1.1.1.2.1': {
		title: 'Dejamos que se vaya',
		content: [
			{
				type: 'text',
				text: 'El Viejo Tom sigue compungido. Ahora el resto del grupo le mira buscando una explicación. Tom nos explica que “El Señor” es su hijo. Ninguno de nosotros se lo esperaba, aunque Lunera, al oírlo, desvió la mirada de manera enigmática.',
			},
			{
				type: 'text',
				text: 'Antes de ver a la sombra, Tom estaba convencido de querer matar a “El Señor” a pesar de sus vínculos. Ahora que no entiende qué es la sombra ni qué ocurre, se replantea qué debe hacer. ¿Quizás debería volver el próximo año? Si llegara antes, cuando la sombra no tiene poder, ¿podría ayudarlo? Tiene mucho en lo que pensar.',
			},
			{
				type: 'text',
				text: 'El grupo se disuelve. Tom y Martí marchan por un lado y Lucio y Lunera por otro. Quién sabe qué aventuras acontecerán en el futuro.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.1.1.2.2': {
		title: 'Atacamos a la sombra antropomorfa',
		content: [
			{
				type: 'text',
				text: 'Tras un momento de incredulidad, el equipo se dispone a actuar. Sin más preámbulo, todos atacan. Lucio corre con su espada, Tom y Martí disparan sus flechas y Lunera lanza un hechizo.',
			},
			{
				type: 'text',
				text: 'En seguida, “El Señor” y la sombra se giran y nos miran. Las flechas caen en la sombra sin atravesarla, pero ni siquiera la perturban. “Mátales”, ordena la sombra a “El Señor”.',
			},
			{
				type: 'text',
				text: '“El Señor” se desplaza rápido hasta que ve a Tom. Entonces se detiene y se le ve en la cara como enfrenta un tremendo sufrimiento. Es tanto el dolor que cae de rodillas. La sombra se acerca a él y grita que le obedezca.',
			},
			{
				type: 'text',
				text: 'Martí descubre de repente que su collar brilla de manera tenue. No entiende nada; ese collar pertenecía a sus padres, los cuales nunca conoció. Algo le dice que debe usar el poder del colgante. De repente, oye a Lunera: “¡Lánzaselo, Martí!”, dice con todas sus fuerzas.',
			},
			{
				type: 'text',
				text: 'Martí obedece y se lo lanza a la sombra. Una luz sale del colgante que atrapa a la sombra. Va perdiendo oscuridad, desvaneciéndose dentro del colgante. “El Señor” sigue luchando contra sí mismo en el suelo. Tom le rodea con sus brazos.',
			},
			{
				type: 'text',
				text: '“¡Huyan de aquí, no sé cuánto podré contener su poder!”, grita “El Señor”. “¿Hay algo que puedas hacer, Lunera?”, dice desesperado Tom. “Es una hechicería muy oscura… me arriesgaría a matarlo”, contesta Lunera.',
			},
			{
				type: 'text',
				text: '“No le mates, te lo suplico. ¿No hay otra manera?”, replica Tom. “Hay un hechizo prohibido que se podría usar para cambiar ese poder de cuerpo, pero el cuerpo que lo recibiera debería morir al instante para no convertirse en lo que es “El Señor”.',
			},
			{
				type: 'text',
				text: '“Hazlo, pásame su poder y mátame”. Lunera realiza la invocación. “El Señor” va recuperando color en su piel y el humo negro que antes vimos se dirige a Tom. “El Señor” queda dormido. Martí llora; no puede soportarlo. Está viendo a su maestro a punto de sacrificarse. ¿Por qué se sacrifica?',
			},
			{
				type: 'text',
				text: 'Cuando el humo entra en el cuerpo de Tom, este suplica al único que sería capaz de hacer esa misión: “¡Lucio, mátame!”. Lucio, con espada en mano, la clava en su corazón.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.1.1.2.3': {
		title: 'Atacamos a “El Señor”',
		content: [
			{
				type: 'text',
				text: 'Lucio corre a toda velocidad con la espada en alto, intentando cercenar la cabeza del rey. El Viejo Tom y Martí aguardan con sus arcos, esperando el momento preciso, todavía escondidos. Lunera absorbe la energía del ambiente para hacer un hechizo de tipo tierra.',
			},
			{
				type: 'text',
				text: 'La sombra grita: “¡Mátales!”. Sin ni siquiera mirarles, chasca los dedos y el corazón de todo el equipo se para. Morimos al instante.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.1.2': {
		title: 'Buscamos una casa que no llame la atención para preparar el ataque',
		content: [
			{
				type: 'text',
				text: 'Sigilosamente, entre los caminos, vemos una casa deshabitada y nos introducimos en ella. Desde la casa se ve el camino por las ventanas y sería fácil atacar cuando el desfile ocurra.',
			},
			{
				type: 'text',
				text: 'Martí y Tom se colocarían en la ventana del primer piso de la casa con sus arcos, y Lunera, desde la planta baja, podría usar la magia. Lucio poco podría hacer más que defender la casa para que nadie entre cuando sepan que es un ataque.',
			},
			{
				type: 'text',
				text: 'No había escapatoria, pero quizás si conseguían acabar con él, el resto de sus guardias no hiciera nada. Matado el líder, libres son todos.',
			},
			{
				type: 'text',
				text: 'Unas horas más tarde, pasa “El Señor” en un carro tirado por caballos. Él se encuentra en el interior del carro; solo se le puede ver parcialmente por la ventana.',
			},
			{
				type: 'text',
				text: 'El carro lo conducen dos guardias y está rodeado de caballeros vestidos con la armadura del reino.',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Al ataque', next: '1.1.2.1' },
			{ text: 'Mejor no atacar', next: '1.1.2.2' },
		],
	},
	'1.1.2.1': {
		title: 'Al ataque',
		content: [
			{
				type: 'text',
				text: 'Lunera explota el carro de repente con un hechizo y todo es humo y fuego. No se ve nada, pero pasados unos segundos, los ojos rojos de “El Señor” aparecen entre la humareda.',
			},
			{
				type: 'text',
				text: 'Este detecta a Lunera y, en menos de un segundo, muere de un ataque al corazón. Lucio se queda paralizado. Tom y Martí no pueden creerse lo que ha pasado. Se oye el cuerpo de Lunera desplomarse. Nadie hace nada. “El Señor” desaparece.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.1.2.2': {
		title: 'Mejor no atacar',
		content: [
			{
				type: 'text',
				text: 'Tom baja corriendo y avisa a Lucio y Lunera. No estamos preparados y no tenemos escapatoria. Será mejor que no luchemos desde aquí. Ya habrá más oportunidades.',
			},
			{
				type: 'text',
				text: 'Lucio te mira con desdén. Lunera se enfada contigo. Lucio y Lunera se van de la casa y deciden deshacer el grupo. Martí y Tom se quedan en la casa descansando. Otra vez será…',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	1.2: {
		title: 'Nos acercamos a la puerta del castillo',
		content: [
			{
				type: 'text',
				text: 'Llegamos al castillo de “El Señor” y comprobamos que está vigilado por dos guardias en la puerta y quién sabe cuántos en el interior. Las murallas cubren toda la visión y no se ve nada más allá del bosque que lo rodea todo.',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Explorar los alrededores', next: '1.2.1' },
			{ text: 'Atacar', next: '1.2.2' },
		],
	},
	'1.2.1': {
		title: 'Explorar los alrededores',
		content: [
			{
				type: 'text',
				text: 'Mientras recorremos los bordes del castillo, inmersos en el bosque, oímos unas pisadas a lo lejos. Decidimos acercarnos con cautela. Un camino sale del bosque que de alguna manera conecta con el castillo.',
			},
			{
				type: 'text',
				text: 'Vemos a una persona de espaldas moverse lentamente por el camino. Se encuentra encorvada y da cada paso con un esfuerzo palpable. Llamamos al encapuchado y este gira lentamente la cabeza hacia nosotros.',
			},
			{
				type: 'text',
				text: '¡Es la cara de “El Señor”! Pero no se encuentra como estamos acostumbrados a verle, con una juventud eterna. Las arrugas acusan su cara y sus ojos cansados parecen ni siquiera vernos. Vuelve a girar la cabeza y sigue caminando.',
			},
			{
				type: 'text',
				text: 'Lunera hace un hechizo y le deja amarrado a la tierra a “El Señor”, y Lucio, sin pensarlo siquiera, tira una daga que acaba en el corazón del anciano. Tom grita desesperado a Lucio y Lunera, pero ya es tarde. La sangre brota del cuello de “El Señor”. Ha muerto.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	'1.2.2': {
		title: 'Atacar',
		content: [
			{
				type: 'text',
				text: 'Lucio emprende el ataque hacia los guardias. El resto no está tan convencido, pero un equipo debe apoyar las ideas de cada uno de los miembros.',
			},
			{
				type: 'text',
				text: 'Lucio acaba con los dos guardias sin demasiada dificultad, pero le han visto. Las alarmas suenan por todo el castillo. Los guardias comienzan a salir del castillo, algunos a caballo, otros se asoman desde la muralla con sus arcos.',
			},
			{
				type: 'text',
				text: 'No tenemos escapatoria. Nos echamos al suelo y nos rendimos. El equipo acaba en las celdas del castillo.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	2: {
		title: 'Buscamos un escondite en el pueblo desde el que atacar.',
		content: [
			{
				type: 'text',
				text: 'En uno de los lugares por los que pasaría el desfile, vemos una casa deshabitada y nos introducimos en ella sin que nadie nos vea.',
			},
			{
				type: 'text',
				text: 'Desde la casa se ve el camino por las ventanas y sería fácil atacar. Martí y Tom se colocarían en la ventana del primer piso de la casa con sus arcos, y Lunera, desde la planta baja, podría usar la magia.',
			},
			{
				type: 'text',
				text: 'Lucio poco podría hacer más que defender la casa para que nadie entre cuando sepan que es un ataque. No había escapatoria, pero quizás si conseguían acabar con él, el resto de sus guardias no hiciera nada.',
			},
			{
				type: 'text',
				text: 'Matado el líder, libres son todos. Unas horas más tarde, pasa “El Señor” en un carro tirado por caballos. Él se encuentra en el interior del carro; solo se le puede ver parcialmente por la ventana.',
			},
			{
				type: 'text',
				text: 'El carro lo conducen dos guardias y está rodeado de caballeros vestidos con la armadura del reino. La ciudad se encuentra repleta de personas que gritan el nombre de “El Señor” al unísono.',
			},
			{ type: 'separator' },
		],
		choices: [
			{ text: 'Al ataque', next: '2.1' },
			{ text: 'No es buena idea', next: '2.2' },
		],
	},
	2.1: {
		title: 'Al ataque',
		content: [
			{
				type: 'text',
				text: 'Lunera explota el carro de repente con un hechizo y todo es humo y fuego. No se ve nada, pero pasados unos segundos, los ojos rojos de “El Señor” aparecen entre la humareda.',
			},
			{
				type: 'text',
				text: 'Este detecta a Lunera y, en menos de un segundo, muere de un ataque al corazón. Lucio se queda paralizado. Tom y Martí no pueden creerse lo que ha pasado. Se oye el cuerpo de Lunera desplomarse. Nadie hace nada. “El Señor” desaparece.',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
	2.2: {
		title: 'No es buena idea',
		content: [
			{
				type: 'text',
				text: 'Tom baja corriendo y avisa a Lucio y Lunera. No estamos preparados y no tenemos escapatoria. Será mejor que no luchemos desde aquí. Ya habrá más oportunidades.',
			},
			{
				type: 'text',
				text: 'Lucio te mira con desdén. Lunera se enfada contigo. Lucio y Lunera se van de la casa y deciden deshacer el grupo. Martí y Tom se quedan en la casa descansando. Otra vez será…',
			},
			{ type: 'separator' },
		],
		choices: [],
	},
}
