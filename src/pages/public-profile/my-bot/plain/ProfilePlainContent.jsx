 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalProfile } from '@/partials/modals/profile';
import { AboutMe} from './blocks';
// import { KeenIcon } from '@/components';
// import { CardProject, CardProjectRow } from '@/partials/cards';
import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const ProfilePlainContent = () => {
    const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');
    
  return <div className="card pb-2.5">
  <div className="card-header" id="webhooks">
    <h3 className="card-title">Knowledge Base Setup (If Selected)</h3>
    <KeenIcon icon="users" />
    <Link > </Link>
  </div>
  <div className="card-body grid gap-5">

    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">KB Name</label>
      <div className="grow">
        <input type="text" className="input" placeholder="TravelBuddy" />
      </div>
      
    </div>

    
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
  <label className="form-label max-w-56">Upload Files</label>
  <div className="grow">
    <input 
      type="file" 
      className="form-input" 
      accept="image/*" 
      aria-label="Upload your avatar"
    />
  </div>
</div>

<div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Scrap URL</label>
      <div className="grow">
      <input type="text" className="input mb-5" placeholder="Enter Value" />
      <input type="text" className="input mb-5" placeholder="Enter Value" />
      <input type="text" className="input mb-5" placeholder="Enter Value" />
      </div>
      <div className="grow ms-10">
      <label className="checkbox-group mb-7">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
        <label className="checkbox-group mb-6">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
        <label className="checkbox-group mb-6 mt-5">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
  
      </div>

      
    </div>

    <div className="flex justify-end">
      {/* <button className="btn btn-primary btn-sm">Save and Continue</button> */}
      <Link to="/public-profile/my-bot/hooks" className="btn btn-primary text-lg font-medium text-white">
      Save and Continue
        </Link>

        
    </div>
  </div>
</div>;
    
};
export { ProfilePlainContent };