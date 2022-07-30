import { AxiosResponse } from "axios";
import data from "app/data/data.json";

export default async function fetchCourses(): Promise<AxiosResponse> {
  const myPromise = new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Unable to fetch data"));
    }
  });

  return myPromise as Promise<AxiosResponse>;
}
