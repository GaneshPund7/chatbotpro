
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
            <SelectItem value="1">Formal</SelectItem>
            <SelectItem value="2">Professional</SelectItem>
            <SelectItem value="3">Friendly</SelectItem> 
            <SelectItem value="4">Casual</SelectItem> 
            <SelectItem value="4">Humorous</SelectItem> 
            <SelectItem value="4">Empathetic</SelectItem> 
            <SelectItem value="4">Supportive</SelectItem> 
            <SelectItem value="4">Neutral</SelectItem> 
            <SelectItem value="4">Confident</SelectItem> 
            <SelectItem value="4">Authoritative</SelectItem> 
            <SelectItem value="4">Playful</SelectItem> 
            <SelectItem value="4">Enthusiastic</SelectItem> 
            <SelectItem value="4">Reassuring</SelectItem> 
            <SelectItem value="4">Polite</SelectItem> 
            <SelectItem value="4">Direct</SelectItem> 
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
            <SelectItem value="1">Agriculture and Farming</SelectItem>
            <SelectItem value="2">Forestry</SelectItem>
            <SelectItem value="2">Fishing and Fisheries</SelectItem>
            <SelectItem value="2">Mining and Quarrying</SelectItem>
            <SelectItem value="2">Automotive Manufacturing</SelectItem>
            <SelectItem value="2">Electronics and Electrical</SelectItem>
            <SelectItem value="2">Textile and Apparel</SelectItem>
            <SelectItem value="2">Chemicals and Petrochemicals</SelectItem>
            <SelectItem value="2">Food and Beverage </SelectItem>
            <SelectItem value="2">Retail</SelectItem>
            <SelectItem value="2">Healthcare</SelectItem>
            <SelectItem value="2">Education</SelectItem>
            <SelectItem value="2">Banking and Financial</SelectItem>
            <SelectItem value="2">Hospitality and Tourism</SelectItem>
            <SelectItem value="2">Transportation and Logistics</SelectItem>
            <SelectItem value="2">Information Technology</SelectItem>
            <SelectItem value="2">Media and Entertainment</SelectItem>
            <SelectItem value="2">Government</SelectItem>
            <SelectItem value="3">Other</SelectItem> 
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
      <Link to="/Admin/bot-functionality-1" className="btn btn-primary text-lg font-medium text-white">
      Next
        </Link>

        
    </div>
  </div>
</div>;
    
};
export { ProfileFeedsContent };