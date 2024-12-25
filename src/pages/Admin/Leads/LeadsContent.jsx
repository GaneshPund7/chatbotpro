 
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { CommonAvatars } from '@/partials/common';
import { DropdownCrud1, DropdownCrudItem1 } from '@/partials/dropdowns/general';
import { Integrations } from '../../account/integrations/blocks';
import { Invoicing } from '../../Admin/Leads';

const LeadsContent = () => {
  const { isRTL } = useLanguage();
  
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

export { LeadsContent };
