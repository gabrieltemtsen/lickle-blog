/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import { reactive, ref } from "vue";

// date operations
export const useDateCalculation = () => {
  const getTodaysDate = () => {
    const date = new Date(Date.now());
    return new Date(date.setDate(date.getDate() + 1)).toISOString();
  };
  const resolveDateFromToday = (days: number) => {
    const date = new Date(Date.now());
    date.setDate(date.getDate() + days);
    return new Date(date).toISOString();
  };
  const sortDate = (b: any, a: any) => {
    const date1: any = new Date(b);
    const date2: any = new Date(a);
    return date1 - date2;
  };

  const getFirstDateOfMonth = (val: Date) => {
    const date = new Date(val);
    date.setDate(new Date(date.getFullYear(), date.getMonth(), 1).getDate());
    return new Date(date).toISOString();
  };
  const getLastDateOfMonth = (val: Date) => {
    const date = new Date(val);
    date.setDate(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    );
    return new Date(date).toISOString();
  };

  const stringDate = (day: string, date: Date) =>
    `${day} ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    } ${date.getHours() < 12 ? "am" : "pm"}`;

  const friendlyDate = (date: any) => {
    if (!date) return date;
    const days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    const dateValue = new Date(date);
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = Date.now() - Date.parse(date);

    if (difference < 44 * 1000) {
      return "a few seconds ago";
    }
    if (difference > 44 * 1000 && difference < 90 * 1000) {
      return "a minute ago";
    }
    if (difference > 89 * 1000 && difference < 44 * 60 * 1000) {
      return `${Math.round(difference / (60 * 1000))} minutes ago`;
    }
    if (difference > 44 * 60 * 1000 && difference < 90 * 60 * 1000) {
      return "an hour ago";
    }
    if (oneDay - difference > 0 && now.getDay() === dateValue.getDay()) {
      return stringDate("Today,", dateValue);
    }
    if (
      2 * oneDay - difference > 0 &&
      now.getDay() - 1 === dateValue.getDay()
    ) {
      return stringDate("Yesterday,", dateValue);
    }
    if (
      2 * oneDay - difference < 0 &&
      7 * oneDay - difference > 0 &&
      now.getDay() > dateValue.getDay()
    ) {
      return stringDate(days[dateValue.getDay()], dateValue);
    }
    if (
      2 * oneDay - difference < 0 &&
      7 * oneDay - difference > 0 &&
      now.getDay() < dateValue.getDay()
    ) {
      return stringDate(`Last ${days[dateValue.getDay()]}`, dateValue);
    }
    if (7 * oneDay - difference < 0 && 14 * oneDay - difference > 0) {
      return stringDate(`Last ${days[dateValue.getDay()]}`, dateValue);
    }
    return new Intl.DateTimeFormat("en-NG", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(dateValue);
  };

  return { friendlyDate };
};

export const imageData = ref({
  imageUrl: "",
  cloudinary_id: "",
});
export const useImageApi = () => {
  const imageApi = async (form_data: any) => {
    try {
      const res = await axios.post(`http://localhost:3000/utility`, form_data, {
        headers: {
          "Content-type": "multi-part/form-data",
        },
      });
      const data = res.data;
    } catch (err: any) {
      console.log("There is an error");
    }
  };
  return { imageApi };
};
export const useSearchPost = (search: any) => {
  const s = search;
  return { s };
};
