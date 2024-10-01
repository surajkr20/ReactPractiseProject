import React, { useContext, createContext, useEffect, useState } from "react";
import { fetchApiForYoutubeData } from "../uttils/fetchApi";

// Create the context
export const Context = createContext();

export const AppContext = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("0");
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [mobileMenu, setMobileMenu] = useState(false);

    const fetchYoutubeData = async (params) => {
        setLoading(true);
        try {
            const data = await fetchApiForYoutubeData("videos", params); // Directly using data
            setVideoData(data.items); // Correcting the way data is set
            console.log(data.items); // Logging correctly
        } catch (error) {
            console.log("Error fetching YouTube results:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedCategory === "Home") {
            fetchYoutubeData({
                part: "snippet, contentDetails, statistics",
                regionCode: "IN",
                maxResults: 10,
            });
        } else {
            fetchYoutubeData({
                part: "snippet, contentDetails, statistics",
                chart: 'mostPopular',
                regionCode: "IN",
                maxResults: 10,
                videoCategoryId: selectedCategory,
            });
        }
    }, [selectedCategory]);

    return (
        <Context.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                setMobileMenu,
                mobileMenu,
                videoData,
                loading,
                setLoading,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () =>{
    return useContext(Context);
}