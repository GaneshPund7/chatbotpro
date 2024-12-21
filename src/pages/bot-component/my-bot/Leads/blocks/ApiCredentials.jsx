import { useMemo, useState } from 'react';
import {
  DataGrid,
  DataGridColumnHeader,
  useDataGrid,
  KeenIcon,
  Modal,
} from '@/components';
import { InvoicingData } from './';
import { useLanguage } from '@/i18n';
import { Menu, MenuItem, MenuToggle } from '@/components';
import { DropdownCrudItem1 } from '@/partials/dropdowns/general';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Invoicing = () => {
  const { isRTL } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const ColumnInputFilter = ({ column }) => {
    return (
      <Input
        placeholder="Filter..."
        value={column.getFilterValue() ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };

  const filteredData = useMemo(() => {
    return InvoicingData.filter((row) => {
      const matchesSearch =
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDate =
        (!fromDate || new Date(row.dateTime) >= new Date(fromDate)) &&
        (!toDate || new Date(row.dateTime) <= new Date(toDate));
      return matchesSearch && matchesDate;
    });
  }, [searchTerm, fromDate, toDate]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'Sr. No.',
        header: ({ column }) => (
          <DataGridColumnHeader title="Id" filter={<ColumnInputFilter column={column} />} column={column} />
        ),
        enableSorting: true,
        cell: (info) => info.row.original.id,
      },
      {
        accessorFn: (row) => row.dateTime,
        id: 'dateTime',
        header: ({ column }) => (
          <DataGridColumnHeader title="DATETIME" filter={<ColumnInputFilter column={column} />} column={column} />
        ),
        enableSorting: true,
        cell: (info) => info.row.original.dateTime,
        meta: {
          headerClassName: 'min-w-[200px]',
          cellClassName: 'text-gray-800 font-normal',
        },
      },
      {
        accessorFn: (row) => row.name,
        id: 'name',
        header: ({ column }) => <DataGridColumnHeader title="Name" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.name,
        meta: {
          headerClassName: 'w-[170px]',
        },
      },
      {
        accessorFn: (row) => row.email,
        id: 'email',
        header: ({ column }) => <DataGridColumnHeader title="Email" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.email,
        meta: {
          headerClassName: 'min-w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        },
      },
      {
        accessorFn: (row) => row.contact,
        id: 'contact',
        header: ({ column }) => <DataGridColumnHeader title="Contact" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.contact,
        meta: {
          headerClassName: 'min-w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        },
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: ({ column }) => <DataGridColumnHeader title="I.P Address" column={column} />,
        enableSorting: true,
        cell: (info) => info.row.original.ipAddress,
        meta: {
          headerClassName: 'min-w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        },
      },
      {
        accessorFn: (row) => row.action,
        id: 'action',
        header: ({ column }) => <DataGridColumnHeader title="Action" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setIsModalOpen(true)}
          >
            View Summary
          </button>
        ),
        meta: {
          headerClassName: 'w-[170px]',
          cellClassName: 'text-gray-800 font-normal',
        },
      },
    ],
    [isRTL]
  );

  const handleRowSelection = (state) => {
    const selectedRowIds = Object.keys(state);
    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  };

  const Toolbar = () => {
    return (
      <div className="card-header border-b-0 px-5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="card-title text-lg font-bold">Leads</h3>
          <div className="flex gap-2">
            <Input
              type="date"
              placeholder="From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="h-9 w-[140px]"
            />
            <Input
              type="date"
              placeholder="To Date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="h-9 w-[140px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <Input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 w-[300px]"
          />
          <Link
            to="/bot-component/my-bot/LLM-model-setup"
            className="btn btn-primary btn-sm text-xs font-medium text-white px-6"
          >
            New Leads
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <DataGrid
        columns={columns}
        data={filteredData}
        rowSelection={true}
        onRowSelectionChange={handleRowSelection}
        pagination={{
          size: 5,
        }}
        sorting={[
          {
            id: 'invoice',
            desc: false,
          },
        ]}
        toolbar={<Toolbar />}
        layout={{
          card: true,
        }}
      />

<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="p-6 bg-white rounded-md shadow-lg w-[600px] max-h-[90vh] overflow-y-auto relative">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Lead Summary</h3>
        <hr className="border-t-2 border-gray-300 mb-4" />
      </div>
      <p className="text-sm text-gray-700 leading-6 mb-6">
        The user is looking for tenders and wants to start their search by visiting the website tendersonline.com. They can use the Advanced Search feature to find specific results based on various parameters such as country, product, or service. If they have a specific country or region in mind, they can also provide this information to get more targeted results. Additionally, they can let the bot know if they have any specific requirements or preferences.
      </p>
      <button 
        className="btn btn-primary px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none absolute right-6 bottom-6"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
</Modal>






    </>
  );
};

export { Invoicing };
