import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HooksApiSettings = () => {
    const [serviceProvider, setServiceProvider] = useState('ABC Provider');
    const [secretKey, setSecretKey] = useState('TKNasdf0001');
    const [secretToken, setSecretToken] = useState('TKNasdf0001');

    return (
        <div className="card pb-2.5">
            <div className="card-header" id="api-settings">
                <h3 className="card-title">Hooks API Setting (If Selected)</h3>
                <KeenIcon icon="gear" />
            </div>

            <div className="card-body grid gap-5">
                {/* Service Provider */}
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">Service Provider</label>
                    <div className="grow">
                        <Select onValueChange={setServiceProvider} defaultValue={serviceProvider}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Service Provider" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ABC Provider">ABC Provider</SelectItem>
                                <SelectItem value="XYZ Provider">XYZ Provider</SelectItem>
                                <SelectItem value="DEF Provider">DEF Provider</SelectItem>
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

                {/* Secret Token */}
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label className="form-label max-w-56">Secret Token</label>
                    <div className="grow">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter Secret Token"
                            value={secretToken}
                            onChange={(e) => setSecretToken(e.target.value)}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-4">
      <Link to="/public-profile/my-bot/bot-build" className="btn btn-primary text-lg font-medium text-white">
      Save and Continue
        </Link> 
      </div>
            </div>
        </div>
    );
};

export { HooksApiSettings };