import Paciente from "./paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl    text-center">
            Listado Paciente
          </h2>
          <p className="text-3xl mt-5 mb-10 text-center">
            administra tus{" "}
            <span className="font-bold text-indigo-600">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl    text-center">
            No hay Pacientes
          </h2>
          <p className="text-3xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPaciente;
