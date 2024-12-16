 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@/components/Modal';
import { ModalProfile } from '@/partials/modals/profile';
import { AboutMe} from './blocks';

import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const ProfilePlainContent = () => {
    const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');
    const [serviceProvider, setServiceProvider] = useState('ABC Provider');
    const [secretKey, setSecretKey] = useState('TKNasdf0001');
    const [secretToken, setSecretToken] = useState('TKNasdf0001')
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isMOpen, setIsMOpen] = useState(false); 
    const handleSaveClick = () => {
      setIsModalOpen(true);  
  };

  const handleModalClose = () => {
      setIsModalOpen(false);  
  };

     const handleMSaveClick = () => {
        setIsMOpen(true);  
    };

    const handleMClose = () => {
        setIsMOpen(false);  
    };

    
  return <div className="card pb-2.5">
  <div className="card-header" id="webhooks">
    <h3 className="card-title">Knowledge Base Setup (If Selected)</h3>
  
    <KeenIcon icon="setting-2" onClick={handleSaveClick} />
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
      <button onClick={handleMSaveClick} className="btn btn-primary text-lg font-medium text-white">
      Save and Continue
        </button>      
    </div>
  </div>

  
    {/* are you sure asking modal */}
  <Modal open={isMOpen} onClose={handleMClose} className="modal-class">
    <div
        className="modal-content p-5 bg-white rounded-md shadow-lg"
        style={{ maxWidth: '400px', margin: '0 auto' }} 
    >
        <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
        <p className="text-sm mb-6">Do you want step-by-step guidance to build the bot using flow builder or directly get a ready-made bot?</p>
        <div className="flex justify-end gap-4">
            <button
                className="btn btn-secondary"
                onClick={handleMClose}>
                No
            </button>
           <div className="flex justify-end mb-4">
      <Link to="/public-profile/my-bot/bot-build" className="btn btn-primary text-lg font-medium text-white">
    yes
        </Link>        
      </div>           
        </div>
    </div>
</Modal>

  {/* Setting model */}
  <Modal open={isModalOpen} onClose={handleModalClose} className="modal-class">
    <div
        className="modal-content p-5 bg-white rounded-md shadow-lg"
        style={{ maxWidth: '800px', margin: '0 auto' }} 
    >
 
 <div className="card pb-2.5">
            {/* <div className="card-header" id="api-settings">
                <h3 className="card-title">Hooks API Setting (If Selected)</h3>
           
            </div> */}

            <div className="card-body grid gap-5">
                {/* Service Provider */}
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">Embedding Model</label>
                    <div className="grow">
                        <Select onValueChange={setServiceProvider} defaultValue={serviceProvider}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Service Provider" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="text-embedding-ada-002">text-embedding-ada-002</SelectItem>
                                <SelectItem value="text-embedding-ada-002">text-embedding-ada-002</SelectItem>
                                <SelectItem value="text-embedding-ada-002">text-embedding-ada-002</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Secret Key */}
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">Secret Key</label>
                    <div className="grow">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter Secret Key"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                <label className="form-label max-w-56">Chunk Size</label>
                  <div className="grow flex items-center gap-2">
                    <div className="relative h-4 w-full bg-gray-200 rounded">
                     <div
                         className="absolute h-full bg-blue-500 rounded"
                         style={{ width: `${(1024 / 1024) * 70}%` }} // 100% width
                         ></div>
                      </div>
                      <div className="text-sm text-gray-600">1024 </div>
                  </div>
                </div>
       
              <div className="flex items-center gap-2.5">
                 <label className="form-label max-w-56">Chunk Overlap</label>
                   <div className="grow flex items-center gap-2">
                    <div className="relative h-4 w-full bg-gray-200 rounded">
                      <div
                         className="absolute h-full bg-blue-500 rounded"
                        style={{ width: `${(1024 / 1024) * 20}%` }} // 100% width
                       ></div>
                     </div>
                   <div className="text-sm text-gray-600">100 </div>
               </div>
              </div>

                {/* Secret Token */}
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">API Key</label>
                    <div className="grow">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter API Key"
                            value={secretToken}
                            onChange={(e) => setSecretToken(e.target.value)}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                
            </div>
        </div>



        <div className="flex justify-end gap-4 mt-5">
            <button
                className="btn btn-secondary"
                onClick={handleModalClose}
            >
                Close
            </button>
            <div className="flex justify-end  mb-4">
      <Link to="/public-profile/my-bot/bot-build" className="btn btn-primary text-lg font-medium text-white">
     Save
        </Link>


        
      </div>
            
        </div>
    </div>
</Modal>
</div>;
    
};
export { ProfilePlainContent };