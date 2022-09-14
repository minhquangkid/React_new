import React, { useEffect, useState } from "react";

// tạo 2 tham số truyền vào cho custom hook là đường link APi và hàm xử lý sau khi lấy được kết quả JSON API
const useData = (url, handle) => {
  let data;
  useEffect(() => {
    const getData = async () => {
      // const response = await fetch(
      //   "https://api.themoviedb.org/3/movie/550?api_key=3997fc9014661d7c2ce89c2bbea4b9f8"
      // );

      // đây là code mẫu

      const response = await fetch(
        url
        // "https://api.themoviedb.org/3/discover/tv?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&with_network=123"
      );
      // nếu muốn dùng các thể loại khác thì ta giữ nguyên https://api.themoviedb.org/3 và thay thế url mới vào

      // const response = await fetch(
      //   "https://api.themoviedb.org/3/movie/top_rated?api_key=3997fc9014661d7c2ce89c2bbea4b9f8&language=en-US"
      // );
      //test thử cái khác

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // console.log(response);
      // console.log(response.ok);
      data = await response.json();
      console.log(data);

      // chạy hàm xử lý
      handle(data);
    };

    getData().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return {
    data,
  };
};
/////////// nên sử dụng custom hook để lấy API cho tất cả
export default useData;
