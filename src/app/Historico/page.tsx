export default function Historico() {
  interface StatusProps {
    statusColor: 'yellow' | 'red' | 'green'
  }

  const STATUS_COLORS = {
    yellow: 'yelllow-500',
    red: 'red-500',
    green: 'green-500',
  } as const

  return (
    <div className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl font-bold text-[#E1E1E6]">Meu histórico</h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5 rounded-tl-lg pl-6">
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5">
                Início
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5 rounded-tr-lg pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pl-6 w-6/12">
                Tarefa
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                20 minutos
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                há 2 meses
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pr-6">
                <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-500">
                  Concluido
                </span>
              </td>
            </tr>

            <tr>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pl-6 w-6/12">
                Tarefa
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                20 minutos
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                há 2 meses
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pr-6">
                <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-yellow-500">
                  Concluido
                </span>
              </td>
            </tr>

            <tr>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pl-6 w-6/12">
                Tarefa
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                20 minutos
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                há 2 meses
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pr-6">
                <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-red-500">
                  Concluido
                </span>
              </td>
            </tr>

            <tr>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pl-6 w-6/12">
                Tarefa
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                20 minutos
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC]">
                há 2 meses
              </td>
              <td className="bg-gray-700 font-normal border-t-4 p-4 border-gray-800 text-sm leading-5 text-[#C4C4CC] pr-6">
                <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-500">
                  Concluido
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
