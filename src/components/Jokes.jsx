import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap'; // Add loading spinner component

const Jokes = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({ comments: 0, shares: 0, likes: 0, saves: 0 });

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');
            setJoke(response.data.data);
            updateStats();
        } catch (error) {
            setError("Error fetching joke. Please try again.");
            console.error("Error fetching joke", error);
        } finally {
            setLoading(false);
        }
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

    const formatNumber = (num) => num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;

    const truncateContent = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    const redirectToWebsite = () => {
        window.open('https://chaicode.com', '_blank', 'noopener noreferrer');
    };

    return (
        <div className="app-container h-screen w-screen flex justify-center items-center bg-black relative">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: "url('/src/assets/Joke/image 4.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div className="relative z-20 min-h-screen flex flex-col items-center p-6">
                    <div className="w-[550px] h-[270px] rounded-[12px] bg-[#000000] text-white p-6">
                        {loading && <Spinner animation="border" className="text-white" />}
                        {error && <div className="text-red-500 text-center">{error}</div>}
                        {!loading && !error && (
                            <>
                                <div className='flex gap-7 items-center'>
                                    <img src="/src/assets/Joke/Group (5).png" alt="Post Icon" className='h-4 w-5' />
                                    <p className='font-bold text-[16px] leading-6'>Post</p>
                                </div>
                                <div className='flex mt-4 gap-1 items-center'>
                                    <img src="/src/assets/Joke/image 3.png" alt="User Icon" />
                                    <div>
                                        <div className='flex gap-1 items-center'>
                                            <h2 className='text-[14px] font-bold'>Elon Musk</h2>
                                            <img className='h-4 w-4' src="/src/assets/Joke/blutT.png" alt="Verified Icon" />
                                        </div>
                                        <p className='font-normal text-[12px] mt-[-2px] text-[#A0A0A0] tracking-tighter'>@elonmusk</p>
                                    </div>
                                </div>
                                <div className="content mt-[10px]">
                                    <p>{joke ? truncateContent(joke.content, 20) : 'No joke available'}</p>
                                </div>
                                <div className='text-[#A0A0A0] tracking-tighter mt-2 mb-2'>
                                    <p>11:18 PM · Jul 30, 2024 · <span className='text-white font-semibold'>20.5M</span> Views</p>
                                </div>
                                <img src="/src/assets/Joke/line 13.png" alt="Separator Line" />
                                <div className='flex justify-around mt-2 mb-2'>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/coment.png" alt="Comments Icon" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.comments)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/share.png" alt="Shares Icon" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.shares)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/like.png" alt="Likes Icon" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.likes)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/save.png" alt="Saves Icon" className='h-2' /><p className='text-[8px] text-[#A0A0A0]'>{formatNumber(stats.saves)}</p>
                                    </div>
                                    <div className='flex items-center gap-[1px]'>
                                        <img src="/src/assets/Joke/export.png" alt="Export Icon" className='h-2' />
                                    </div>
                                </div>
                                <img src="/src/assets/Joke/line 13.png" alt="Separator Line" />
                                <div className='flex justify-center text-[10px] m-2 opacity-[40%] font-semibold'>
                                    <p>© chai aur code</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='absolute bottom-4 right-4'>
                    <img src="/src/assets/Card/image 2.png" alt="Redirect Icon" className='cursor-pointer' onClick={redirectToWebsite} />
                </div>
            </div>
        </div>
    );
};

export default Jokes;
