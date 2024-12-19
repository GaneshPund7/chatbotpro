 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { CardProject, CardProjectRow } from '@/partials/cards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const ProfileNFTContent = () => {
    const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');
    
  return <div className="card pb-2.5">
  <div className="card-header" id="webhooks">
    <h3 className="card-title"> Selects where the bot will be deployed.
    </h3>
  </div>
  <div className="card-body grid gap-5">

  <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Provider</label>
      <div className="grow">
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">GPT</SelectItem>
            <SelectItem value="2">Google Colud AI</SelectItem>
            <SelectItem value="3">Custom Support Bot</SelectItem> 
            <SelectItem value="4">Custom Bot</SelectItem> 
          </SelectContent>
        </Select>   
      </div>
    </div> 
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Model Name</label>
      <div className="grow">
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">gpt-4-turbo-2024-04-09</SelectItem>
            <SelectItem value="2">Push Webhooks</SelectItem>
            <SelectItem value="3">Pipe Webhook</SelectItem> 
            <SelectItem value="4">Plugin Webhooks</SelectItem> 
          </SelectContent>
        </Select>   
      </div>
    </div> 
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">API Key</label>
      <div className="grow">
        <input className="input" type="text" placeholder='EF1234ghIkl-zyx57W2v1u12'/> 
      </div>
    </div> 
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Temperature</label>
      <div className="grow">
        <input className="input" type="text" placeholder='0.7'/> 
      </div>
    </div> 

    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Max. Output tokens</label>
      <div className="grow">
        <input className="input w-25" type="text" placeholder='1024'/> 
      </div>
    </div> 


    <div className="flex justify-end">
      {/* <button className="btn btn-primary btn-sm">Save and Continue</button> */}
      <Link to="/public-profile/my-bot/knowledge-base-setup" className="btn btn-primary text-lg font-medium text-white">
      Save 
        </Link>
        <Link to="#" className="btn btn-primary w-20 ms-5 text-lg font-medium text-white">
      test  
        </Link>

    </div>

  </div>
</div>;
    
};
export { ProfileNFTContent };