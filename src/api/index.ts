import axios, { AxiosResponse } from 'axios';

const flaskBaseUrl: string = 'http://13.125.54.184:5000';
const echoBaseUrl: string = 'http://13.125.54.184:1323'; 
export const getWordCloudImage = async (category: string) => {
    try {
        const imgUrl: string = `${flaskBaseUrl}/api/wordCloud/${category}`;
        const response: AxiosResponse = await axios.get(imgUrl);
        if (!response.data) throw new Error('data access error');
        return imgUrl;
    } catch (err) {
        console.log(err);
    }
};

export const getTopFiveList = async (category: string) => {
    try {
        const response: AxiosResponse<Petition[]> = await axios.get(`${echoBaseUrl}/topFivePosts/${category}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getOrginalPetition = async (petitionID: string) => {
    try {
        const response: AxiosResponse<QnA> = await axios.get(`${echoBaseUrl}/summary/${petitionID}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getSummaryPetition = async (petitionID: string) => {
    try {
        const response: AxiosResponse<QnA> = await axios.get(`${flaskBaseUrl}/api/summary/${petitionID}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export interface Petition {
    id: string,
    paging_id: number,
    title: string,
    agreement: string,
    category: string,
    created: string,
    finished: string,
    provider: string,
}

export interface QnA {
    question: string,
    answer: string,
}
