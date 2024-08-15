import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';

const Cats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('https://api.freeapi.app/api/v1/public/cats?page=1&limit=10')
            .then(response => response.json())
            .then(data => {
                setCats(data.data.data);
            })
            .catch(error => console.error('Error fetching cats:', error));
    }, []);

    const redirectToWebsite = () => {
        window.open('https://chaicode.com', '_blank');
    };

    


    return (
        <div className="app-container h-screen w-screen flex justify-center items-center bg-white-[40%] relative">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: "url('/src/assets/Cat/bg.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                <div className="min-h-screen relative z-10 m-6 ">
                    <div className='flex justify-between items-center'>
                    <h1 className="text-3xl font-bold mb-6 text-white text-[48px]">Cats around us</h1>
                    <img src="/src/assets/Card/image 2.png" alt="" className='cursor-pointer mr-4 mb-2' onClick={redirectToWebsite} />
                    </div>
                    <div className="flex overflow-x-auto space-x-6">
                        {cats.map(cat => (
                            <CatCard key={cat.id} cat={cat} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cats;
