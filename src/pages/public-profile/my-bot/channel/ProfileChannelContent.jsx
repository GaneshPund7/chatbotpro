import { useState } from 'react';

const ProfileChannelContent = () => {
    const [selectedChannel, setSelectedChannel] = useState(null);

    const channels = [
        { id: 1, name: "Website" },
        { id: 2, name: "Telegram" },
        { id: 3, name: "Whatsapp" },
        { id: 4, name: "Channel 01" },
        { id: 5, name: "Channel 02" },
        { id: 6, name: "Chatbot_03" },
        { id: 7, name: "Channel 04" },
        { id: 8, name: "Channel 05" },
        { id: 9, name: "Channel 06" },
    ];

    const handleChannelClick = (id) => {
        setSelectedChannel(id);
    };

    return (
        <div className="card pb-4">
            <div className="card-header">
                <h3 className="card-title">Channel</h3>
            </div>
            <div className="card-body">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {channels.map((channel) => (
                        <div key={channel.id} className="text-center">
                            <button
                                onClick={() => handleChannelClick(channel.id)}
                                className={`w-52 h-52 p-4 border rounded-lg ${
                                    selectedChannel === channel.id
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200"
                                }`}
                            />
                            <div className="mt-2 text-sm font-medium">{channel.name}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => console.log("Selected Channel:", selectedChannel)}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ProfileChannelContent };
