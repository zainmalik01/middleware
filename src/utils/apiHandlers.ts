import axios from "axios";

export const fetchVisaConsultants = async (params:any) => {
  const url = `${process.env.SKILLED_SCORE_ENDPOINT}visa-consultant/get-visa-consultant`;
  const response = await axios.get(url, { params });
  return response.data;
};

export const contactConsultant = async (data: any) => {
  const url = `${process.env.SKILLED_SCORE_ENDPOINT}visa-consultant/book-consulant`;
  try {
    const response = await axios.post(url, data);
    return response.data; 
  } catch (error) {
    console.error("Error contacting consultant:", error);
    throw new Error("API call failed"); 
  }
};
