/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { DataGrid, DataGridColumnHeader, DataGridColumnVisibility, DataGridRowSelect, DataGridRowSelectAll, useDataGrid, KeenIcon } from '@/components';
import { InvoicingData } from './';
import { useLanguage } from '@/i18n';
import {Menu, MenuItem, MenuToggle } from '@/components';
// import { CommonAvatars } from '@/partials/common';
import {  DropdownCrudItem1 } from '@/partials/dropdowns/general';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
const Invoicing = () => {
  const { isRTL } = useLanguage();
  const ColumnInputFilter = ({
    
    column
  }) => {
    return <Input placeholder="Filter..." value={column.getFilterValue() ?? ''} onChange={event => column.setFilterValue(event.target.value)} className="h-9 w-full max-w-40" />;
  };
  const columns = useMemo(() => [{
    accessorKey: 'Sr. No.',
    header: ({
      column
    }) => <DataGridColumnHeader title="Id" filter={<ColumnInputFilter column={column} />} column={column} />,
    enableSorting: true,
    cell: info => {
      return info.row.original.id;
    },
    
  }, {
    accessorFn: row => row.name,
    id: 'name',
    header: ({
      column
    }) => <DataGridColumnHeader title="Name" filter={<ColumnInputFilter column={column} />} column={column} />,
    enableSorting: true,
    cell: info => {
      return info.row.original.name;
    },
    meta: {
      headerClassName: 'min-w-[200px]',
      cellClassName: 'text-gray-800 font-normal'
    }
  }, {
    accessorFn: row => row.label,
    id: 'label',
    header: ({
      column
    }) => <DataGridColumnHeader title="Status" column={column} />,
    enableSorting: true,
    cell: info => {
      return <div className={`badge badge-sm badge-outline ${info.row.original.color}`}>
              {info.row.original.label}
            </div>;
    },
    meta: {
      headerClassName: 'w-[170px]'
    }
  }, {
    accessorFn: row => row.date,
    id: 'date',
    header: ({
      column
    }) => <DataGridColumnHeader title="Last Modified" column={column} />,
    enableSorting: true,
    cell: info => {
      return info.row.original.date;
    },
    meta: {
      headerClassName: 'min-w-[170px]',
      cellClassName: 'text-gray-800 font-normal'
    }
  },  {
    accessorFn: row => row.action,
    id: 'action',
    header: ({
      column
    }) => <DataGridColumnHeader title="Action" column={column} />,
    enableSorting: true,
    cell: info => {
      // return info.row.original.action;
      return  <Menu>
          <MenuItem
            toggle="dropdown"
            trigger="click"
            dropdownProps={{
              placement: isRTL() ? 'bottom-start' : 'bottom-end',
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: isRTL() ? [0, -10] : [0, 10] // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
               
              Click
            </MenuToggle>
            {DropdownCrudItem1()}
          </MenuItem>
        </Menu> 
    },
    meta: {
      headerClassName: 'w-[170px]',
      cellClassName: 'text-gray-800 font-normal'
    }
  },], []);
  const data = useMemo(() => InvoicingData, []);
  const handleRowSelection = state => {
    const selectedRowIds = Object.keys(state);
    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      });
    }
  };
  const Toolbar = () => {
    const {
      table
    } = useDataGrid();
    const isFiltered = table.getState().columnFilters.length > 0;
    return <div className="card-header border-b-0 px-5 flex-wrap">
       
           <h3 className="card-title">LLMs </h3>
                <Link to="/public-profile/my-bot/LLM-model-setup" className="btn btn-primary btn-sm text-xs font-medium text-white">
                  Create new LLMs
                </Link>
      </div>;
  };
  return <DataGrid columns={columns} data={data} rowSelection={true} onRowSelectionChange={handleRowSelection} pagination={{
    size: 5
  }} sorting={[{
    id: 'invoice',
    desc: false
  }]} toolbar={<Toolbar />} layout={{
    card: true
  }} />;
};
export { Invoicing };