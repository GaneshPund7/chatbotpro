import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/i18n';
import { DataGrid, DataGridColumnHeader, DataGridColumnVisibility, DataGridRowSelect, DataGridRowSelectAll, KeenIcon, useDataGrid, Menu, MenuItem, MenuToggle } from '@/components';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { DropdownCard1 } from '@/partials/dropdowns/general';

// Sample subscription data with 15 rows
const SubscriptionPlansData = [
  { planID: 'P1', planName: 'Basic Plan', planPrice: '$50/month', planDuration: 'Monthly', paymentStatus: 'Paid', startDate: '2024-01-01', endDate: '2024-12-31', autoRenewal: true, remainingCredits: 50, totalCredits: 100, del_flg: false },
  { planID: 'P2', planName: 'Pro Plan', planPrice: '$500/year', planDuration: 'Annual', paymentStatus: 'Pending', startDate: '2023-05-01', endDate: '2024-05-01', autoRenewal: false, remainingCredits: 20, totalCredits: 200, del_flg: false },
  { planID: 'P3', planName: 'Enterprise Plan', planPrice: '$1000/year', planDuration: 'Annual', paymentStatus: 'Overdue', startDate: '2023-01-01', endDate: '2023-12-31', autoRenewal: true, remainingCredits: 0, totalCredits: 500, del_flg: true },
  // Add more subscription plan data here
];

const SubscriptionMangementContent = () => {
  const Subscriptions = () => {
    const { isRTL } = useLanguage();
    const storageFilterId = 'subscriptions-filter';

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
          accessorFn: row => row.planID,
          id: 'planID',
          header: ({ column }) => <DataGridColumnHeader title="Plan ID" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.planID,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.planName,
          id: 'planName',
          header: ({ column }) => <DataGridColumnHeader title="Plan Name" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.planName,
          meta: { headerClassName: 'min-w-[200px]' },
        },
        {
          accessorFn: row => row.planPrice,
          id: 'planPrice',
          header: ({ column }) => <DataGridColumnHeader title="Plan Price" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.planPrice,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.planDuration,
          id: 'planDuration',
          header: ({ column }) => <DataGridColumnHeader title="Plan Duration" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.planDuration,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.paymentStatus,
          id: 'paymentStatus',
          header: ({ column }) => <DataGridColumnHeader title="Payment Status" column={column} />,
          enableSorting: true,
          cell: info => (
            <span className={`badge badge-sm badge-outline ${info.row.original.paymentStatus.toLowerCase()}`}>
              {info.row.original.paymentStatus}
            </span>
          ),
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.startDate,
          id: 'startDate',
          header: ({ column }) => <DataGridColumnHeader title="Start Date" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.startDate,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.endDate,
          id: 'endDate',
          header: ({ column }) => <DataGridColumnHeader title="End Date" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.endDate,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.autoRenewal,
          id: 'autoRenewal',
          header: ({ column }) => <DataGridColumnHeader title="Auto Renewal" column={column} />,
          enableSorting: true,
          cell: info => (
            <input
              type="checkbox"
              checked={info.row.original.autoRenewal}
              disabled
              className="checkbox"
            />
          ),
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.remainingCredits,
          id: 'remainingCredits',
          header: ({ column }) => <DataGridColumnHeader title="Remaining Credits" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.remainingCredits,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.totalCredits,
          id: 'totalCredits',
          header: ({ column }) => <DataGridColumnHeader title="Total Credits" column={column} />,
          enableSorting: true,
          cell: info => info.row.original.totalCredits,
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          accessorFn: row => row.del_flg,
          id: 'del_flg',
          header: ({ column }) => <DataGridColumnHeader title="Deleted" column={column} />,
          enableSorting: true,
          cell: info => (
            <span className={`badge badge-sm ${info.row.original.del_flg ? 'badge-danger' : 'badge-success'}`}>
              {info.row.original.del_flg ? 'Deleted' : 'Active'}
            </span>
          ),
          meta: { headerClassName: 'min-w-[150px]' },
        },
        {
          id: 'actions',
          header: 'Actions',
          cell: info => (
            <div className="flex gap-2">
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-success">Add</button>
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
      if (!searchTerm) return SubscriptionPlansData;
      return SubscriptionPlansData.filter(
        plan =>
          plan.planName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          plan.planID.toLowerCase().includes(searchTerm.toLowerCase()) ||
          plan.planPrice.toLowerCase().includes(searchTerm.toLowerCase()) ||
          plan.planDuration.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm]);

    const Toolbar = () => {
      const { table } = useDataGrid();
      return (
        <div className="card-header px-5 py-5 border-b-0 flex-wrap gap-2">
          <h3 className="card-title">Subscription Plans</h3>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <KeenIcon
                icon="magnifier"
                className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
              />
              <input
                type="text"
                placeholder="Search Subscription Plans"
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
        sorting={[{ id: 'planName', desc: false }]}
        toolbar={<Toolbar />}
        layout={{ card: true }}
      />
    );
  };

  return <Subscriptions />;
};

export { SubscriptionMangementContent };
