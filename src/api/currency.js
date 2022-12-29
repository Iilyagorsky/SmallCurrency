import axios from "axios";

export const getCurrency = async (name, selectedDate) => {
  const date = selectedDate.toISOString().split('T')[0]
  try {
    const response = await axios.get(`https://www.nbrb.by/api/exrates/rates/${name}?parammode=2&ondate=${date}&periodicity=0`)

    return response.data;
  } catch (error) {
    return error;
  }
};
export const getPreciousNames = async () => {
  try {
    const response = await axios.get(`https://www.nbrb.by/api/metals`)
    return response.data.map((data) => data.Id);

  } catch (error) {
    return error;
  }
};

export const getPreciousName = async (id) => {
  try {
    const response = await axios.get(`https://www.nbrb.by/api/metals/${id}`)
    return response.data.Name;

  } catch (error) {
    return error;
  }
};
export const getPrecious = async (id, selectedDate) => {
  const date = selectedDate.toISOString().split('T')[0]
  try {
    const response = await axios.get(`https://www.nbrb.by/api/bankingots/prices/${id}?startdate=${date}&enddate=${date}`)

    return response.data[0];
  } catch (error) {
    return error;
  }
};
