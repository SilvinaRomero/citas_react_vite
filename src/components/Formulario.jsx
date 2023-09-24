import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

	const [nombre, setNombre] = useState(''); // hook basico
	const [propietario, setPropietario] = useState(''); // hook basico
	const [email, setEmail] = useState(''); // hook basico
	const [fecha, setFecha] = useState(''); // hook basico
	const [sintomas, setSintomas] = useState(''); // hook basico

	const [error, setError] = useState(false);

	// UseEffect, para monotorizar el componente Paciente (cuando lo queremos editar)
	useEffect(() => {
		// comprobar si el objeto esta vacio
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);


	// funciones
	const generarId = () => {
		const random = Math.random().toString(36).substring(2)
		const fecha = Date.now().toString(36);
		return random + fecha;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		// validacion del formulario
		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
			return;
		}

		setError(false);
		// tenemos que construir un objeto paciente
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		}
		if (paciente.id) {
			// editando el registro
			objetoPaciente.id = paciente.id;
			// creamos una copia del array pacientes, si el id del objeto que leemos desde el formulario
			// es igual al objeto mapeado, entonces retornamos el objeto del formulario,
			// si no, retornamos el objeto mapeado
			const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
			setPacientes(pacientesActualizados);
			setPaciente({})
		} else {
			// nuevo registro
			objetoPaciente.id = generarId();

			// console.log(objetoPaciente);
			// tenemos que coger el array a añadir el nuevo paciente
			// le pasamos una copia del array original (de esta manera el objeto original no cambia)
			// y le pasamos el nuevo paciente
			// metodo inmutable
			setPacientes([...pacientes, objetoPaciente]);
		}

		// Reiniciar el Formulario
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	}

	return (
		<div
			className="md:w-1/2 lg:w-2/5"
		>
			<h2
				className="font-black text-3xl text-center"
			>Seguimiento Pacientes</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y {''}
				<span className="text-sky-600 font-bold">Administralos</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>
				{/* {error ? 'si hay un error':'no hay error'} */}
				{/* {error && 'si hay un error'} */}
				{/* si error es true, imprime la frase */}
				{error && <Error><p>Todos los campos son obligatorios</p></Error>}
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-gray-700  uppercase font-bold">Nombre Mascota</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={(evento) => setNombre(evento.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="propietario" className="block text-gray-700  uppercase font-bold">Nombre Propietario</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={(evento) => setPropietario(evento.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="block text-gray-700  uppercase font-bold">Email</label>
					<input
						id="email"
						type="email"
						placeholder="Email contacto"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(evento) => setEmail(evento.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="alta" className="block text-gray-700  uppercase font-bold">Alta</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={(evento) => setFecha(evento.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="sintomas" className="block text-gray-700  uppercase font-bold">Síntomas</label>
					<textarea
						id="sintomas"
						placeholder="Describe los síntomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={sintomas}
						onChange={(evento) => setSintomas(evento.target.value)}
					/>
				</div>
				{/* Boton transision */}
				<input
					type="submit"
					className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-all"
					value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
				/>
			</form>
		</div>
	)
}

export default Formulario
