import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/i18n';
import { DataGrid, DataGridColumnHeader, DataGridColumnVisibility, DataGridRowSelect, DataGridRowSelectAll, KeenIcon, useDataGrid, Menu, MenuItem, MenuToggle } from '@/components';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { DropdownCard1 } from '@/partials/dropdowns/general';

// Sample tenant data with 15 rows
const TenantsData = [
  { tenantName: 'Tenant 1', tenantID: 'T1', tenantEmail: 'tenant1@example.com', tenantContact: '+1234567890', tenantAddress: '123 Tenant St, City, Country', creationDate: '2023-01-01', lastModified: '2023-12-01', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 2', tenantID: 'T2', tenantEmail: 'tenant2@example.com', tenantContact: '+1234567891', tenantAddress: '456 Tenant St, City, Country', creationDate: '2023-02-01', lastModified: '2023-12-02', status: { variant: 'badge-warning', label: 'Inactive' } },
  { tenantName: 'Tenant 3', tenantID: 'T3', tenantEmail: 'tenant3@example.com', tenantContact: '+1234567892', tenantAddress: '789 Tenant St, City, Country', creationDate: '2023-03-01', lastModified: '2023-12-03', status: { variant: 'badge-danger', label: 'Suspended' } },
  { tenantName: 'Tenant 4', tenantID: 'T4', tenantEmail: 'tenant4@example.com', tenantContact: '+1234567893', tenantAddress: '101 Tenant St, City, Country', creationDate: '2023-04-01', lastModified: '2023-12-04', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 5', tenantID: 'T5', tenantEmail: 'tenant5@example.com', tenantContact: '+1234567894', tenantAddress: '102 Tenant St, City, Country', creationDate: '2023-05-01', lastModified: '2023-12-05', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 6', tenantID: 'T6', tenantEmail: 'tenant6@example.com', tenantContact: '+1234567895', tenantAddress: '103 Tenant St, City, Country', creationDate: '2023-06-01', lastModified: '2023-12-06', status: { variant: 'badge-warning', label: 'Inactive' } },
  { tenantName: 'Tenant 7', tenantID: 'T7', tenantEmail: 'tenant7@example.com', tenantContact: '+1234567896', tenantAddress: '104 Tenant St, City, Country', creationDate: '2023-07-01', lastModified: '2023-12-07', status: { variant: 'badge-danger', label: 'Suspended' } },
  { tenantName: 'Tenant 8', tenantID: 'T8', tenantEmail: 'tenant8@example.com', tenantContact: '+1234567897', tenantAddress: '105 Tenant St, City, Country', creationDate: '2023-08-01', lastModified: '2023-12-08', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 9', tenantID: 'T9', tenantEmail: 'tenant9@example.com', tenantContact: '+1234567898', tenantAddress: '106 Tenant St, City, Country', creationDate: '2023-09-01', lastModified: '2023-12-09', status: { variant: 'badge-warning', label: 'Inactive' } },
  { tenantName: 'Tenant 10', tenantID: 'T10', tenantEmail: 'tenant10@example.com', tenantContact: '+1234567899', tenantAddress: '107 Tenant St, City, Country', creationDate: '2023-10-01', lastModified: '2023-12-10', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 11', tenantID: 'T11', tenantEmail: 'tenant11@example.com', tenantContact: '+1234567800', tenantAddress: '108 Tenant St, City, Country', creationDate: '2023-11-01', lastModified: '2023-12-11', status: { variant: 'badge-danger', label: 'Suspended' } },
  { tenantName: 'Tenant 12', tenantID: 'T12', tenantEmail: 'tenant12@example.com', tenantContact: '+1234567801', tenantAddress: '109 Tenant St, City, Country', creationDate: '2023-12-01', lastModified: '2023-12-12', status: { variant: 'badge-warning', label: 'Inactive' } },
  { tenantName: 'Tenant 13', tenantID: 'T13', tenantEmail: 'tenant13@example.com', tenantContact: '+1234567802', tenantAddress: '110 Tenant St, City, Country', creationDate: '2023-01-01', lastModified: '2023-12-13', status: { variant: 'badge-success', label: 'Active' } },
  { tenantName: 'Tenant 14', tenantID: 'T14', tenantEmail: 'tenant14@example.com', tenantContact: '+1234567803', tenantAddress: '111 Tenant St, City, Country', creationDate: '2023-02-01', lastModified: '2023-12-14', status: { variant: 'badge-danger', label: 'Suspended' } },
  { tenantName: 'Tenant 15', tenantID: 'T15', tenantEmail: 'tenant15@example.com', tenantContact: '+1234567804', tenantAddress: '112 Tenant St, City, Country', creationDate: '2023-03-01', lastModified: '2023-12-15', status: { variant: 'badge-warning', label: 'Inactive' } }
];

const TenantManagementContent = () => {
  const Tenants = () => {
    const { isRTL } = useLanguage();
    const storageFilterId = 'tenants-filter';

    // Input filter component for columns
    const ColumnInputFilter = ({ column }) => {
      return (
        <Input
          placeholder="Filter..."
          value={column.getFilterValue() ?? ''}
          onChange={event => column.setFilterValue(event.target.value)}
          className="h-9 w-full max-w-40"
        />
      );
    };

    const columns = useMemo(
      () => [
        {
          accessorKey: 'id',
          header: () => <DataGridRowSelectAll />,
          cell: ({ row }) => <DataGridRowSelect row={row} />,
          enableSorting: false,
          enableHiding: false,
          meta: { headerClassName: 'w-0' },
        },
        {
          accessorFn: row => row.tenantName,
          id: 'tenantName',
          header: ({ column }) => (
            <DataGridColumnHeader
              title="Tenant Name"
              filter={<ColumnInputFilter column={column} />}
              column={column}
            />
          ),
          enableSorting: true,
          cell: info => (
            <div className="flex items-center gap-2.5">
              <span className="leading-none font-medium text-sm text-gray-900">{info.row.original.tenantName}</span>
            </div>
          ),
          meta: { headerClassName: 'min-w-[200px]' },
        },
        {
          accessorFn: row => row.tenantID,
          id: 'tenantID',
          header: ({ column }) => <DataGridColumnHeader title="Tenant ID" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.tenantID,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.tenantEmail,
          id: 'tenantEmail',
          header: ({ column }) => <DataGridColumnHeader title="Tenant Email" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.tenantEmail,
          meta: { headerClassName: 'min-w-[200px]' },
        },
        {
          accessorFn: row => row.tenantContact,
          id: 'tenantContact',
          header: ({ column }) => <DataGridColumnHeader title="Tenant Contact" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.tenantContact,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.tenantAddress,
          id: 'tenantAddress',
          header: ({ column }) => <DataGridColumnHeader title="Tenant Address" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.tenantAddress,
          meta: { headerClassName: 'min-w-[250px]' },
        },
        {
          accessorFn: row => row.creationDate,
          id: 'creationDate',
          header: ({ column }) => <DataGridColumnHeader title="Creation Date" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.creationDate,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.lastModified,
          id: 'lastModified',
          header: ({ column }) => <DataGridColumnHeader title="Last Modified" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.lastModified,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.status,
          id: 'status',
          header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
          enableSorting: true,
          cell: info => (
            <span className={`badge badge-sm badge-outline ${info.row.original.status.variant}`}>
              {info.row.original.status.label}
            </span>
          ),
          meta: { headerClassName: 'min-w-[100px]' },
        },
        {
          id: 'actions',
          header: 'Actions',
          cell: info => (
            <div className="flex gap-2">
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-warning">Activate/Deactivate</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          ),
          meta: { headerClassName: 'min-w-[150px]' },
        },
      ],
      [isRTL]
    );

    const [searchTerm, setSearchTerm] = useState(() => {
      return localStorage.getItem(storageFilterId) || '';
    });

    useEffect(() => {
      localStorage.setItem(storageFilterId, searchTerm);
    }, [searchTerm]);

    const filteredData = useMemo(() => {
      if (!searchTerm) return TenantsData;
      return TenantsData.filter(
        tenant =>
          tenant.tenantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.tenantID.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.tenantEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tenant.tenantContact.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm]);

    const Toolbar = () => {
      const { table } = useDataGrid();
      return (
        <div className="card-header px-5 py-5 border-b-0 flex-wrap gap-2">
          <h3 className="card-title">Tenants</h3>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <KeenIcon
                icon="magnifier"
                className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
              />
              <input
                type="text"
                placeholder="Search Tenants"
                className="input input-sm ps-8"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <DataGridColumnVisibility table={table} />
          </div>
        </div>
      );
    };

    return (
      <DataGrid
        columns={columns}
        data={filteredData}
        rowSelection={true}
        pagination={{ size: 10 }}
        sorting={[{ id: 'tenantName', desc: false }]}
        toolbar={<Toolbar />}
        layout={{ card: true }}
      />
    );
  };

  return <Tenants />;
};

export { TenantManagementContent };
