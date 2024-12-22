
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { KeenIcon } from '@/components';
// import { CardProject, CardProjectRow } from '@/partials/cards';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const ProfileFeedsContent = () => {
    const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');
    
  return <div className="card pb-2.5">
 
  <div className="card-body grid gap-5">

    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Bot Workflows Name</label>
      <div className="grow">
        <input type="text" className="input" placeholder="TravelBuddy" />
      </div>
    </div>
{/* 
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Tone of Voice</label>
      <div className="grow">
        <input className="input" type="text" value={webhooknameInput} onChange={e => setWebhookNameInput(e.target.value)} /> 
      </div>
    </div> */}

    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56"> Tone of Voice</label>
      <div className="grow">
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Friendly</SelectItem>
            <SelectItem value="2">Push Webhooks</SelectItem>
            <SelectItem value="3">Pipe Webhook</SelectItem> 
            <SelectItem value="4">Plugin Webhooks</SelectItem> 
          </SelectContent>
        </Select>   
      </div>
    </div>
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
  <label className="form-label max-w-56">Avatar/Icon</label>
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
      <label className="form-label max-w-56">Industry / Domain</label>
      <div className="grow">
        <Select defaultValue="1">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Travel</SelectItem>
            <SelectItem value="2">Push Webhooks</SelectItem>
            <SelectItem value="3">Pipe Webhook</SelectItem> 
            <SelectItem value="4">Plugin Webhooks</SelectItem> 
          </SelectContent>
        </Select>   
      </div>
    </div>
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
      <label className="form-label max-w-56">Purpose</label>
      <div className="grow">
  <textarea 
    className="input" 
    placeholder="Add porpose for creating bot" 
   
    
    rows="4" 
  />
</div>
    </div> 

    <div className="flex justify-end">
      {/* <button className="btn btn-primary btn-sm">Save and Continue</button> */}
      <Link to="/bot-component/my-bot/bot-functionality-1" className="btn btn-primary text-lg font-medium text-white">
      Next
        </Link>

        
    </div>
  </div>
</div>;
    
};
export { ProfileFeedsContent };