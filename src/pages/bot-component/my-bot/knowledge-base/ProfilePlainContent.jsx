import { useState } from 'react';
import { useLanguage } from '@/i18n';

import { OpenToWork } from '../../../bot-component/my-bot/knowledge-base/blocks/OpenToWork';
import { Invoicing } from '../../../bot-component/my-bot/knowledge-base/blocks';

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



