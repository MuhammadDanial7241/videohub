import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react'; // Import an icon from lucide-react
import { Settings2Icon } from 'lucide-react';

const CreateAccountIcon = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/AccountSetting'); // Navigate to the CreateAccount page
    };

    return (
        <button onClick={handleClick} className="p-2 rounded-full bg-app-gray hover:bg-app-gray/70">
            {/* <PlusCircle className="w-8 h-8 text-white" /> */}
            <Settings2Icon  className="w-8 h-8 text-white"/>
        </button>
    );
};

export default CreateAccountIcon;