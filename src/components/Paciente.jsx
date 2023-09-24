import Swal from 'sweetalert2'
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente
    const handleEliminar = () => {
        Swal.fire({
            title: 'Estas seguro/a?',
            text: "El registro será eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, deseo darlo de alta'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);
                Swal.fire(
                    'Eliminado!',
                    'Has dado de alta ese Paciente',
                    'success'
                )
            }
        })
    }

    return (
        <div className="bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:{' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
                <span className="font-normal normal-case">
                    {sintomas}
                </span>
            </p>
            <div className="md:w-1/4 flex justify-between mt-10 gap-4">
                <button
                    type="button"
                    className="py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    // onClick={() => eliminarPaciente(id)}
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
