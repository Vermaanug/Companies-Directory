import type { ColumnDef } from "@tanstack/react-table";
import UiTable from "./component/UiTable";
import { companiesData, type Company } from "./companiesData";

function App() {
  const columnsSchema: ColumnDef<Company>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ cell }) => (
        <span className="font-mono text-gray-500">
          #{String(cell.getValue())}
        </span>
      ),
    },
    {
      accessorKey: "name",
      header: "Company Name",
      cell: ({ cell }) => (
        <span className="font-semibold text-gray-900">
          {String(cell.getValue())}
        </span>
      ),
    },
    {
      accessorKey: "industry",
      header: "Industry",
      cell: ({ cell }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {String(cell.getValue())}
        </span>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ cell }) => (
        <span className="text-gray-600">{String(cell.getValue())}</span>
      ),
    },
    {
      accessorKey: "employees",
      header: "Employees",
      cell: ({ cell }) => (
        <span className="text-gray-900 font-medium">
          {String(cell.getValue())}
        </span>
      ),
    },
    {
      accessorKey: "founded",
      header: "Founded",
      cell: ({ cell }) => (
        <span className="text-gray-600">{String(cell.getValue())}</span>
      ),
    },
    {
      accessorKey: "revenue",
      header: "Revenue",
      cell: ({ cell }) => (
        <span className="text-green-700 font-semibold">
          {String(cell.getValue())}
        </span>
      ),
    },
    {
      accessorKey: "ceo",
      header: "CEO",
      cell: ({ cell }) => (
        <span className="text-gray-700">{String(cell.getValue())}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ cell }) => {
        const status = String(cell.getValue());
        const statusColors = {
          Active: "bg-green-100 text-green-800",
          Inactive: "bg-red-100 text-red-800",
          Pending: "bg-yellow-100 text-yellow-800",
        };
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              statusColors[status as keyof typeof statusColors]
            }`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col p-6 gap-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-800">
          Companies Directory
        </h1>
        <span className="text-base text-gray-500">
          Master to Keep Track of All Companies Data
        </span>
      </div>
      <UiTable tableData={companiesData} columnsSchema={columnsSchema} />
    </div>
  );
}

export default App;
