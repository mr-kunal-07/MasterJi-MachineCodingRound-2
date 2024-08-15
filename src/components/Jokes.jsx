import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jokes = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ comments: 0, shares: 0, likes: 0, saves: 0 });

    const fetchJoke = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
            setJoke(response.data.data);

            updateStats();
        } catch (error) {
            console.error("Error fetching joke", error);
        }
        setLoading(false);
    };

    const updateStats = () => {
        setStats({
            comments: Math.floor(Math.random() * 10000) + 1000,  
            shares: Math.floor(Math.random() * 10000) + 1000,
            likes: Math.floor(Math.random() * 10000) + 1000,
            saves: Math.floor(Math.random() * 10000) + 1000,
        });
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num;
    };

    const truncateContent = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    const redirectToWebsite = () => {
        window.open('https://chaicode.com', '_blank');
    };

    return (
        <div className="app-container h-screen w-screen flex justify-center items-center bg-black relative">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: "url('/src/assets/Joke/image 4.png')" }}>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-[550px] h-[270px] rounded-[12px] bg-[#000000] text-white">
                        {loading ? (
                            <div className="text-center">Loading...</div>
                        ) : (
                            <div className='p-6'>
                                <div className='flex gap-7 items-center'>
                                    <img src="/src/assets/Joke/Group (5).png" alt="" className='h-4 w-5' />
                                    <p className='font-bold text-[16px] leading-6'>Post</p>
                                </div>

                                <div className=''>
                                    <div className='flex mt-4 gap-1 items-center'>
                                        <img src="/src/assets/Joke/image 3.png" alt="" />
                                        <div>
                                            <div className='flex gap-1 items-center'>
                                                <h2 className='text-[14px] font-bold'>Elon Musk</h2>
                                                <img className='h-4 w-4' src="/src/assets/Joke/blutT.png" alt="" />
                                            </div>
                                            <p className='font-normal text-[12px] mt-[-2px] text-[#A0A0A0] tracking-tighter'>@elonmusk</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-end mt-[-40px]'>
                                        <img src="/src/assets/Joke/dot.png" alt="" className='h-auto w-4' />
                                    </div>
                                </div>

                                <div className="content mt-[40px]">
                                    <p>{joke ? truncateContent(joke.content, 20) : ''}</p>
                                </div>

                                <div className='text-[#A0A0A0] tracking-tighter mt-2 mb-2'>
                                    <p>11:18 PM · Jul 30, 2024 · <span className='text-white font-semibold'>20.5M</span> Views</p>
                                </div>
                                <img src="/src/assets/Joke/line 13.png" alt="" />
                                <div className='flex justify-around mt-2 mb-2'>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/coment.png" alt="" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.comments)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/share.png" alt="" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.shares)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/like.png" alt="" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.likes)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/save.png" alt="" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.saves)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/export.png" alt="" className='h-2' />
                                    </div>
                                </div>
                                <img src="/src/assets/Joke/line 13.png" alt="" />

                                <div className='flex justify-center text-[10px] m-2 opacity-[40%] font-semibold'><p>© chai aur code</p></div>

                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-[-70px] ml-[70rem]'>
                    <img src="/src/assets/Card/image 2.png" alt="" className='cursor-pointer' onClick={redirectToWebsite} />
                </div>
            </div>
        </div>
    );
};

export default Jokes;
