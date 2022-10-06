import React, { useEffect, useState, useRef } from "react";

export const tinhtoan = (arr) => {
  const leng = arr.length;
  let com = ",";
  let chuoi = "";
  let count = 0;

  for (let i = leng - 1; i > -1; i--) {
    chuoi = arr[i].concat(chuoi);
    count++;
    if (count % 3 === 0 && i !== 0) {
      chuoi = com.concat(chuoi);
    }
    // console.log(chuoi);
  }
  return chuoi;
};
//count % 3 là count chia 3 lấy phần dư

// tạo 2 tham số truyền vào cho custom hook là đường link APi và hàm xử lý sau khi lấy được kết quả JSON API
const useData = (url, handle, depence) => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // console.log(response);
      // console.log(response.ok);
      const data = await response.json();
      // console.log(data);
      // chạy hàm xử lý

      handle(data);
    };

    getData().catch((error) => {
      console.log(error.message);
    });
  }, [depence]);
  // phải dùng usEffect để chỉ chạy lấy dữ liệu của fetch 1 lần duy nhất, vì nếu ko thì hàm handle sẽ cập nhật cho các state liên tục làm cho trang bị render thì lại render liên tục custom hook này

  // return data
  // trong custom hook, ta không cần dùng return để lấy dữ liệu trả về cũng được, nó chỉ có nhiệm vụ chạy hàm để lấy API và gán vô hàm xử lý handle, nếu dùng return thì nó trả về 1 promise chứ ko phải 1 array
};
/////////// nên sử dụng custom hook để lấy API cho tất cả
export default useData;
