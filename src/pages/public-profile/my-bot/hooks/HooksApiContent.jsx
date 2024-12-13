import { useState } from 'react';
import { Modal } from '@/components/Modal'; // Assuming the Modal component is in the components directory
import { KeenIcon } from '@/components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HooksApiSettings = () => {
    const [serviceProvider, setServiceProvider] = useState('ABC Provider');
    const [secretKey, setSecretKey] = useState('TKNasdf0001');
    const [secretToken, setSecretToken] = useState('TKNasdf0001');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleSaveClick = () => {
        setIsModalOpen(true); // Open modal on button click
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // Close modal
    };

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
                    <button
                        className="btn btn-primary text-lg font-medium text-white"
                        onClick={handleSaveClick}
                    >
                        Save and Continue
                    </button>
                </div>
            </div>

            {/* Modal Component */}
            <Modal open={isModalOpen} onClose={handleModalClose} className="modal-class">
    <div
        className="modal-content p-5 bg-white rounded-md shadow-lg"
        style={{ maxWidth: '400px', margin: '0 auto' }} 
    >
        <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
        <p className="text-sm mb-6">Do you want step-by-step guidance to build the bot using flow builder or directly get a ready-made bot?</p>
        <div className="flex justify-end gap-4">
            <button
                className="btn btn-secondary"
                onClick={handleModalClose}
            >
                No
            </button>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setIsModalOpen(false);
                    console.log("Saved!");
                }}
            >
                Yes
            </button>
        </div>
    </div>
</Modal>

        </div>
    );
};

export { HooksApiSettings };
