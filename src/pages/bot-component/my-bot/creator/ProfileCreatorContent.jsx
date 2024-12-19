import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { CommonAvatars } from '@/partials/common';
import { DropdownCrud1, DropdownCrudItem1 } from '@/partials/dropdowns/general';
import { Integrations } from '../../../account/integrations/blocks';
import { Invoicing } from '../../../account/billing/history';

const ProfileCreatorContent = () => {
  const { isRTL } = useLanguage();
  // const items = [
  //   {
  //     name: 'Travel Insuranc',
  //     team: {
  //       group: [
  //         { filename: '300-4.png' },
  //         { filename: '300-1.png' },
  //         { filename: '300-2.png' }
  //       ],
  //       more: { number: 3, variant: 'text-success-inverse ring-success-light bg-success' }
  //     },
  //     dueDate: '24 Aug, 2024',
  //     status: 'Running',
  //     progress: { variant: 'progress-primary', value: 60 }
  //   },
  //   {
  //     name: 'Real Estate',
  //     team: {
  //       group: [
  //         { filename: '300-1.png' },
  //         { filename: '300-2.png' },
  //         { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
  //       ]
  //     },
  //     dueDate: '10 Sep, 2024',
  //     status: 'Stop',
  //     progress: { variant: '', value: 100 }
  //   },
  //   {
  //     name: 'FinTech ',
  //     team: {
  //       group: [
  //         { filename: '300-1.png' },
  //         { filename: '300-2.png' },
  //         { fallback: 'M', variant: 'text-danger-inverse ring-danger-light bg-danger' }
  //       ]
  //     },
  //     dueDate: '10 Sep, 2024',
  //     status: 'Stop',
  //     progress: { variant: '', value: 100 }
  //   }
  // ];

  const renderItem = (item, index) => {
    return (
    <></>
    );
  };

  return (
    <div className="card">
      
      <Invoicing/>

    </div>
  );
};

export { ProfileCreatorContent };
