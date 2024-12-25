import { KeenIcon } from '@/components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllInvoiceContent = () => 
{
  const [tables, setTables] = useState([
    {
      id: 'Invoice-2024-xd912c',
      tenantName: 'John Doe',
      date: '6 Aug, 2024',
      amount: '24.00',
      status: 'Upcoming',
      color: 'badge-warning',
    },
    {
      id: 'Invoice-2024-rq857m',
      tenantName: 'Jane Smith',
      date: '17 Jun, 2024',
      amount: '29.99',
      status: 'Paid',
      color: 'badge-success',
    },
    {
      id: 'Invoice-2024-jk563z',
      tenantName: 'Alice Johnson',
      date: '30 Apr, 2024',
      amount: '24.00',
      status: 'Paid',
      color: 'badge-success',
    },
    {
      id: 'Invoice-2024-hg234x',
      tenantName: 'Bob Brown',
      date: '21 Apr, 2024',
      amount: '6.59',
      status: 'Declined',
      color: 'badge-danger',
    },
    {
      id: 'Invoice-2024-lp098y',
      tenantName: 'Charlie Davis',
      date: '14 Mar, 2024',
      amount: '24.00',
      status: 'Paid',
      color: 'badge-success',
    },
  ]);

  const renderItem = (table, index) => {
    return (
      <tr key={index}>
        <td className="text-sm text-gray-800 font-normal">{table.id}</td>
        <td className="text-sm text-gray-800 font-normal">{table.tenantName}</td>
        <td className="lg:text-end">
          <div className={`badge badge-sm ${table.color} badge-outline`}>{table.status}</div>
        </td>
        <td className="text-sm text-gray-800 font-normal lg:text-end">{table.date}</td>
        <td className="text-sm text-gray-700 font-normal lg:text-end">${table.amount}</td>
        <td>
          <button
            className="btn btn-sm btn-icon btn-clear btn-primary"
            onClick={() => handleEditInvoice(index)}
          >
            <KeenIcon icon="edit" />
          </button>
        </td>
      </tr>
    );
  };

  const handleAddInvoice = () => {
    const newInvoice = {
      id: `Invoice-2024-new`,
      tenantName: 'New Tenant',
      date: '1 Jan, 2024',
      amount: '0.00',
      status: 'Pending',
      color: 'badge-warning',
    };
    setTables([...tables, newInvoice]);
  };

  const handleEditInvoice = (index) => {
    const updatedTables = [...tables];
    updatedTables[index].amount = '50.00'; // Example update
    updatedTables[index].status = 'Paid';
    updatedTables[index].color = 'badge-success';
    setTables(updatedTables);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Billing and Invoicing</h3>

        <div className="flex space-x-2">
          <button className="btn btn-light btn-sm" onClick={handleAddInvoice}>
            <KeenIcon icon="add" />
            New Invoice
          </button>
          <button className="btn btn-light btn-sm">
            <KeenIcon icon="exit-down" />
            Download All
          </button>
        </div>
      </div>
      <div className="card-table scrollable-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="min-w-52">Invoice ID</th>
              <th className="min-w-52">Tenant Name</th>
              <th className="min-w-24 text-end">Status</th>
              <th className="min-w-32 text-end">Billing Date</th>
              <th className="min-w-20 text-end">Amount</th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table, index) => renderItem(table, index))}
          </tbody>
        </table>
      </div>
      <div className="card-footer justify-center">
        <Link to="/BillingHistorypage" className="btn btn-link">
          View all Payments
        </Link>
      </div>
    </div>
  );
};

export { AllInvoiceContent };
