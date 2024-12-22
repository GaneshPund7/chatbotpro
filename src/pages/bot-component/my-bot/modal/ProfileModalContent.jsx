import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@/components/Modal';
import { ModalProfile } from '@/partials/modals/profile';
// import { AboutMe } from './blocks';
import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProfileModalContent = () => {
  const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');
  const [serviceProvider, setServiceProvider] = useState('ABC Provider');
  const [secretKey, setSecretKey] = useState('TKNasdf0001');
  const [secretToken, setSecretToken] = useState('TKNasdf0001');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddFileModalOpen, setIsAddFileModalOpen] = useState(false);
  const [isMOpen, setIsMOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to store uploaded files

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files); // Update state with selected files
  };

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

  const handleMSaveClick = () => {
    setIsMOpen(true);
  };

  const handleMClose = () => {
    setIsMOpen(false);
  };

  return (
    <div className="pb-2.5">
      <div className="card bg-white rounded-md shadow-lg p-5" style={{ maxWidth: '', margin: '0 auto' }}>
        <div className="mb-4">
          <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
            Knowledge base Name
          </label>
          <input type="text" id="websiteUrl" className="input w-full" placeholder="Enter Name" />
        </div>
        {/* File Upload Section */}
        <div className="border-dashed border-2 rounded p-5 text-center mb-4">
          <p className="text-gray-500 mb-2">File Upload (.pdf, .docx, .txt)</p>
          <p className="text-sm text-gray-400 mb-4">
            Drag 'n' drop up to 5 files here, or click to select files
          </p>
          <input type="file" multiple className="hidden" id="fileUpload" onChange={handleFileChange} />
          <label htmlFor="fileUpload" className="btn btn-primary">
            Browse Files
          </label>
        </div>

        {/* Display Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Uploaded Files:</h3>
            <ul className="list-disc list-inside">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center text-gray-400 mb-3">OR</div>
        {/* Website URL Section */}
        <div className="mb-4">
          <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
            Scrap URL
          </label>
          <input type="text" id="websiteUrl" className="input w-full" placeholder="Enter a valid website URL" />
          <div className="grid grid-cols-3 gap-3 mt-3">
            <label htmlFor="" className="text-sm text-gray-700">
              Max Crawl Pages
            </label>
            <label htmlFor="" className="text-sm text-gray-700">
              Max Crawl Depth
            </label>
            <label htmlFor="" className="text-sm text-gray-700">
              Dynamic Wait (s)
            </label>
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
          <textarea id="rawText" rows="4" className="input w-full" placeholder="Enter text here"></textarea>
        </div>
        {/* Action Buttons */}
       
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
  <Link to="/bot-componant/my-bot/bot-build" className="btn btn-primary text-lg font-medium text-white">
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
  <Link to="/bot-componant/my-bot/bot-build" className="btn btn-primary text-lg font-medium text-white">
 Save
    </Link>


    
  </div>
        
    </div>
</div>
</Modal>
{/* Add file modal */}
{/* <Modal open={isAddFileModalOpen} onClose={handleAddFileModalClose}>
<div className="modal-content p-5 bg-white rounded-md shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
<h3 className="mb-4 text-lg font-semibold">Upload</h3>

 
<div className="border-dashed border-2 rounded p-5 text-center mb-4">
  <p className="text-gray-500 mb-2">File Upload (.pdf, .docx, .txt)</p>
  <p className="text-sm text-gray-400 mb-4">Drag 'n' drop up to 5 files here, or click to select files</p>
  <input type="file" multiple className="hidden" id="fileUpload" />
  <label htmlFor="fileUpload" className="btn btn-primary">
    Browse Files
  </label>
</div>

<div className="text-center text-gray-400 mb-3">OR</div>

 
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

<div className="flex justify-between gap-3">
  <button className="btn btn-secondary" onClick={handleAddFileModalClose}>
    Reset
  </button>
  <button className="btn btn-primary">Upload</button>
</div>
</div>
</Modal> */}
      <div className="flex justify-end mt-5 ">
        <button onClick={handleMSaveClick} className="btn btn-primary text-lg font-medium text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export { ProfileModalContent };




