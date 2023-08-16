import axios from "axios";

const URL: string = "https://jsonplaceholder.typicode.com/photos";

export const getData = async () => {
  try {
    return await axios.get(URL).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const sportifyAPI = async () => {
  
}