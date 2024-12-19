 

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
    const [isAddFileModalOpen, setIsAddFileModalOpen] = useState(false);

    const handleSaveClick = () => {
      setIsModalOpen(true);  
  };

  const handleModalClose = () => {
      setIsModalOpen(false);  
  };


  const handleAddFileClick = () => {
    setIsAddFileModalOpen(true);
  };

  const handleAddFileModalClose = () => {
    setIsAddFileModalOpen(false);
  };
    
  return <div className="card pb-2.5">
  <div className="card-header" id="webhooks">
    <h3 className="card-title">Knowledge Base Setup </h3>
  
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
  {/* <div className="grow">
    <input 
      type="file" 
      className="form-input" 
      accept="image/*" 
      aria-label="Upload your avatar"
    />
  </div> */}
  <div className="">
            <Link
              to="#"
              className="btn btn-primary text-sm font-medium text-white"
              onClick={handleAddFileClick}
            >
              Add File
            </Link>
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
      <Link to="/public-profile/my-bot/hooks" className="btn btn-primary text-lg font-medium text-white">
     Save
        </Link>


        
      </div>
            
        </div>
    </div>
</Modal>

<Modal open={isAddFileModalOpen} onClose={handleAddFileModalClose}>
  <div className="modal-content p-5 bg-white rounded-md shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
    <h3 className="mb-4 text-lg font-semibold">Upload</h3>

    {/* File Upload Section */}
    <div className="border-dashed border-2 rounded p-5 text-center mb-4">
      <p className="text-gray-500 mb-2">File Upload (.pdf, .docx, .txt)</p>
      <p className="text-sm text-gray-400 mb-4">Drag 'n' drop up to 5 files here, or click to select files</p>
      <input type="file" multiple className="hidden" id="fileUpload" />
      <label htmlFor="fileUpload" className="btn btn-primary">
        Browse Files
      </label>
    </div>

    <div className="text-center text-gray-400 mb-3">OR</div>

    {/* Website URL Section */}
    <div className="mb-4">
      <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
        Scrap URL
      </label>
      <input
        type="text"
        id="websiteUrl"
        className="input w-full"
        placeholder="Enter a valid website URL"
      />
     <div className="grid grid-cols-3 gap-3 mt-3">
  <label htmlFor="" className="text-sm text-gray-700">Max Crawl Pages</label>
  <label htmlFor="" className="text-sm text-gray-700">Max Crawl Depth</label>
  <label htmlFor="" className="text-sm text-gray-700">Dynamic Wait (s)</label>
</div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <input type="text" className="input" placeholder="Pages" />
        <input type="text" className="input" placeholder="Depth" />
        <input type="text" className="input" placeholder="Seconds" />
      </div>
    </div>

    <div className="text-center text-gray-400 mb-3">OR</div>

    {/* Raw Text Section */}
    <div className="mb-5">
      <label htmlFor="rawText" className="block text-sm font-medium mb-1">
        Raw Text
      </label>
      <textarea
        id="rawText"
        rows="4"
        className="input w-full"
        placeholder="Enter text here"
      ></textarea>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-between gap-3">
      <button className="btn btn-secondary" onClick={handleAddFileModalClose}>
        Reset
      </button>
      <button className="btn btn-primary">Upload</button>
    </div>
  </div>
</Modal>

</div>;
    
};
export { ProfilePlainContent };