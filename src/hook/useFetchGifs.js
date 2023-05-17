
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useEffect } from 'react';

export const useFetchGifs = ( category ) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newimages = await getGifs(category);
        setImages(newimages);
        setIsloading(false);
    }


    useEffect(  () => {
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}


