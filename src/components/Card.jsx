import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random');
            setUserData(response.data.data);
        } catch (error) {
            console.error("Error fetching user data", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const formatDate = (dobString) => {
        const dateObj = new Date(dobString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    };

    const getFirstWord = (text) => {
        return text.split(' ')[0];
    };

    const openDialer = () => {
        window.open(`tel:${userData.phone}`);
    };

    const openLocation = () => {
        const { latitude, longitude } = userData.location.coordinates;
        window.open(`https://www.google.com/maps?q=${latitude},${longitude}`);
    };

    const redirectToWebsite = () => {
        window.open('https://chaicode.com', '_blank');
    };

    return (
        <div className="app-container h-screen w-screen flex justify-center items-center bg-black relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: "url('/src/assets/Card/Group 10.png')" }}>
        <div className="flex justify-center items-center min-h-screen">
            <div className="h-[550px] w-[258px] rounded-[12px] border-[8px] bg-[#B6B3F3] text-black">
                <div className="flex justify-around mt-2 items-center">
                    <div className="arrow cursor-pointer">
                        <img src="/src/assets/Card/Group.png" alt="Arrow" />
                    </div>
                    <div className="title">
                        <h4>Profile Overview</h4>
                    </div>
                    <div className="refresh cursor-pointer">
                        <img src="/src/assets/Card/refresh.png" alt="Refresh" onClick={fetchUserData} />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div>
                        <div className="flex flex-col items-center">
                            <img src={userData.picture.medium} className="rounded-full mt-4 w-15 h-15" alt="Profile" />
                            <div className="title flex items-center gap-2 mt-2 font-bold">
                                <h2>{userData.name.first}</h2>
                                <h2>{userData.name.last}</h2>
                            </div>
                            <h4 className="font-medium text-[9px] font-sans">@{userData.login.username}</h4>
                        </div>

                        <div className="center">
                            <img src="/src/assets/Card/Line 2.png" alt="" className="mt-4" />
                            <div className="locall flex justify-center gap-6 text-[9px] items-center mt-2 mb-2">
                                <h6 className="flex items-center gap-1 cursor-pointer" onClick={openLocation}>
                                    <img src="/src/assets/Card/Group 1.png" className="w-4 h-4" alt="Location" />Location
                                </h6>
                                <h6 className="flex items-center gap-1 cursor-pointer" onClick={openDialer}>
                                    <img src="/src/assets/Card/Group 2.png" className="w-4 h-4" alt="Call" />Call
                                </h6>
                            </div>
                            <img src="/src/assets/Card/Line 2.png" alt="" />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="fot gap-4 items-center justify-center px-2">
                                <div>
                                    <div className="font-normal text-[10px] font-sans mt-2">City</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{userData.location.city}</div>
                                </div>
                                <div>
                                    <div className="font-normal text-[10px] font-sans ">Date of Birth</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{formatDate(userData.dob.date)}</div>
                                </div>
                                <div>
                                    <div className="font-normal text-[10px] font-sans ">Timezone</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{userData.location.timezone.offset}({getFirstWord(userData.location.timezone.description)})</div>
                                </div>
                            </div>
                            <div className="fot gap-4 items-center justify-center px-2">
                                <div>
                                    <div className="font-normal text-[9px] font-sans mt-2">Nationality</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{userData.nat}</div>
                                </div>
                                <div>
                                    <div className="font-normal text-[10px] font-sans ">Phone No.</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{userData.phone}</div>
                                </div>
                                <div>
                                    <div className="font-normal text-[10px] font-sans ">Registered Since</div>
                                    <div className="font-serif font-bold text-[13px] mt-[-3px] mb-2 opacity-[70%]">{formatDate(userData.registered.date)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="img flex justify-end items-end mr-2 mt-10 cursor-pointer" onClick={redirectToWebsite}> 
                            <img src="/src/assets/Card/image 2.png" alt="Redirect to chai aur code" />
                        </div>

                        <div className="lst flex text-[8px] justify-center items-center text-white opacity-[40%]">
                            <p>© chai aur code</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
        </div>
    );
};

export default Card;
