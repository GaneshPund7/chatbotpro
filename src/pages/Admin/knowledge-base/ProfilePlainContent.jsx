import { useState } from 'react';
import { useLanguage } from '@/i18n';

import { OpenToWork } from '../../Admin/knowledge-base/blocks/OpenToWork';
import { Invoicing } from '../../Admin/knowledge-base/blocks';

const ProfilePlainContent = () => {
  const { isRTL } = useLanguage();
  const [showOpenToWork, setShowOpenToWork] = useState(false);

  const handleToggle = () => {
    setShowOpenToWork((prev) => !prev);
  };

  return (
    
    <div className="card">
    
        <Invoicing />
      
    </div>
  );
};

export { ProfilePlainContent };



