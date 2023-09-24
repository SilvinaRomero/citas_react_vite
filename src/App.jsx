import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
	const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); // tenemos que revisar si el local storage tiene elementos, si no sera vacio
	const [paciente, setPaciente] = useState({}); // el paciente individual para editar y/o eliminar

	// En localStorage no se pueden guardar arregloss
	useEffect(() => {
		
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
		
	}, [pacientes])


	const eliminarPaciente = (id) => {
		// filter -> devuelve un nuevo array segun la condicion
		const nuevosPacientes = pacientes.filter(pacienteState => pacienteState.id !== id);
		setPacientes(nuevosPacientes);
	}

	return (
		<div className="container mx-auto mt-10">
			<Header />
			<div
				className="mt-16 md:flex"
			>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	)
}

export default App
