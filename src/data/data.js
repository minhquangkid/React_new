import React, { useEffect, useState, useRef } from "react";

// tạo 2 tham số truyền vào cho custom hook là đường link APi và hàm xử lý sau khi lấy được kết quả JSON API
const useData = (url, handle) => {
  // let dulieu

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
      const data = await response.json();
      console.log(data);
      // dulieu = data

      // chạy hàm xử lý
      handle(data);
    };

    getData().catch((error) => {
      console.log(error.message);
    });
  }, []);
  // phải dùng usEffect để chỉ chạy lấy dữ liệu của fetch 1 lần duy nhất, vì nếu ko thì hàm handle sẽ cập nhật cho các state liên tục làm cho trang bị render thì lại render liên tục custom hook này

  // return {data}
  // trong custom hook, ta không cần dùng return để lấy dữ liệu trả về cũng được, nó chỉ có nhiệm vụ chạy hàm để lấy API và gán vô hàm xử lý handle

  // ở đây ta dùng useEffect nên nó chỉ render 1 lần, ta tạo 1 biến ở ngoài useEffect tên là dulieu để chứa dữ liệu data JSON kiếm được thì sau khi trang render lại, custom hook cũng render lại làm cho biến dulieu bị reset lại ban đầu, nhưng useEffect không chạy lại nên biến dulieu sẽ có giá trị rỗng nên kết quả return của biến cũng rỗng
};
/////////// nên sử dụng custom hook để lấy API cho tất cả
export default useData;
