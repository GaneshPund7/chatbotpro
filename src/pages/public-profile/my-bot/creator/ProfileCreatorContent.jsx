import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { CommonAvatars } from '@/partials/common';
import { DropdownCrud1, DropdownCrudItem1 } from '@/partials/dropdowns/general';
import { useState } from 'react';

const ProfileCreatorContent = () => {
  const { isRTL } = useLanguage();
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const items = [
    {
      name: 'Travel Insuranc',
      team: {
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' }
        ],
        more: { number: 3, variant: 'text-success-inverse ring-success-light bg-success' }
      },
      dueDate: '24 Aug, 2024',
      status: 'Running',
      progress: { variant: 'progress-primary', value: 60 }
    },
    {
      name: 'Real Estate',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
        ]
      },
      dueDate: '10 Sep, 2024',
      status: 'Stop',
      progress: { variant: '', value: 100 }
    },
    {
      name: 'FinTech ',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
        ]
      },
      dueDate: '10 Sep, 2024',
      status: 'Stop',
      progress: { variant: '', value: 100 }
    },
    {
      name: 'FinTech ',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
        ]
      },
      dueDate: '10 Sep, 2024',
      status: 'Stop',
      progress: { variant: '', value: 100 }
    },
    {
      name: 'FinTech ',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
        ]
      },
      dueDate: '10 Sep, 2024',
      status: 'Stop',
      progress: { variant: '', value: 100 }
    },
    {
      name: 'FinTech ',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
        ]
      },
      dueDate: '10 Sep, 2024',
      status: 'Stop',
      progress: { variant: '', value: 100 }
    }

    
    
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderItem = (item, index) => {
    return (
      <tr key={index}>
        <td className="text-start">
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-primary">
            {item.name}
          </a>
        </td>

        <td className="text-start">
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-primary">
            {item.status}
          </a>
        </td>

        <td className="text-sm font-medium text-gray-700">{item.dueDate}</td>

        <td>Click</td>

        <td className="text-start">
          <Menu>
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
                <KeenIcon icon="dots-vertical" />
              </MenuToggle>
              {DropdownCrudItem1()}
            </MenuItem>
          </Menu>
        </td>
      </tr>
    );
  };

  return (
    <div className="card">
      <div className="card-header flex justify-between items-center">
        <h3 className="card-title">My Bot</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="input input-bordered w-72"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log('Create New Bot clicked!');
            }}
          >
            Create New Bot
          </button>
        </div>
      </div>

      <div className="card-table scrollable-x-auto">
        <table className="table text-end">
          <thead>
            <tr>
              <th className="text-start min-w-16 !font-normal !text-gray-700" data-status="active">
                Name
              </th>
              <th className="text-start min-w-20 !font-normal !text-gray-700" data-status="sortable">
                Status
              </th>
              <th className="min-w-32 !font-normal !text-gray-700" data-status="sortable">
                Last Modified
              </th>
              <th className="min-w-32 !font-normal !text-gray-700" data-status="action">
                Action
              </th>
              <th className="w-[30px]" data-status="empty"></th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => {
              return renderItem(item, index);
            })}
          </tbody>
        </table>
      </div>

      <div className="card-footer flex justify-between items-center">
        <span className="text-sm">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length} entries
        </span>
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-light'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProfileCreatorContent };
