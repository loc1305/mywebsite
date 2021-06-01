import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                {/* Result*/}
      <div className="container">
      <div className="row text-center">
      <div className="col-12 mb-3">
      <div id="result">
      <div className="container">
      <div className="row">
      <div className=" col-12 d-flex justify-content-center">
      <div className="col-12 p-0">
      <div className="card mt-3 tab-card">
      <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="one" role="tabpanel">
      <div className="container">
      <div className="row">
      <div className="col-12">
      <div className="text-center mt-3">
          <h2 className="mt-15">Đánh giá quá trình làm việc </h2></div></div></div>
      <div className="row justify-content-center mb-5">
      <div className="col-md-6 col-lg-4">
      <div className="why-choose-us-content pb-5">
      <div className="text-center mb-2">
        <svg className="svg-inline--fa fa-child fa-w-12" style={{fontSize: '50px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="child" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg>
          <path fill="currentColor" d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z" /></svg>
      {/* <i class="fas fa-child" style="font-size: 50px;"></i> */}</div>
        <h3 className="text-center">Cá nhân</h3>
      <div className="price-block text-left">
      <div className="price-content-wrapper mt-3">
      <div className="price-content price-bot">
      <h4>Bài tập</h4><ul className="task pl-2">
      <li className="mt-2">
        <span>- Bài tập hàng tuần</span></li>
      <li className="mt-1">
        <span>- Upload web cá nhân lên Firebase</span></li>
      <li className="mt-1">
      < span>- Sử dụng Bootstrap Template</span></li>
      <li className="mt-1">
        <span>- Chuyển code sang ReactJS</span></li></ul></div>
      <div className="price-content price-bot mt-3">
          <h4>Web cá nhân</h4><ul className="task pl-2">
      <li className="mt-2">
        <span>- Thiết kế giao diện đơn giản, dễ sử dụng</span></li>
      <li className="mt-1">
        <span>- Đảm bảo được các nguyên tắc khi thiết kế một trang web</span></li>
      <li className="mt-1">
        <span>- Có kiến thức HTML, CSS cơ bản để chỉnh sửa template</span></li>
    </ul></div>
      <div className="price-content1 mt-3">
          <h4>Đánh giá</h4>
    <ul className="pl-2">
      <li className="mt-2">Hoàn thành: 100%</li>
      <li className="judge mt-1">&nbsp;</li>
      <li className="judge mt-1">&nbsp;</li>
   </ul></div></div></div></div></div>
      <div className="col-md-6 col-lg-4">
      <div className="why-choose-us-content">
      <div className="text-center mb-2">
          <svg className="svg-inline--fa fa-users fa-w-20" style={{fontSize: '50px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg>
      <path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" /></svg>
      </div>
          <h3 className="text-center">Làm việc nhóm</h3>
      <div className="price-block text-left">
      <div className="price-content-wrapper mt-3">
      <div className="price-content price-bot">
          <h4>Project</h4>
     <ul className="task pl-2">
      <li className="mt-2">
        <a href="https://hci-project-94f49.web.app/" target="_blank">
         <span> 1. Tạo trang Home</span></a></li>
      <li className="mt-1">
        <a href="https://hci-project-94f49.web.app/SignUp" target="_blank">
          <span> 2. Tạo trang SignUp</span></a></li>
      <li className="mt-1"><a href="" target="_blank">
          <span> 3. Tạo trang Blog</span></a></li>
      <li className="mt-1">
          <a href="https://hci-project-94f49.web.app/Tournaments" target="_blank">
          <span> 4. Tạo trang Tournament</span></a></li>
        <li className="mt-1">
          <a href="https://hci-project-94f49.web.app/Store" target="_blank">
          <span> 5. Tạo trang Store</span></a></li></ul></div>
      <div className="price-content price-bot mt-3">
          <h4>Web nhóm</h4>
    <ul className="task pl-2">
      <li className="mt-2"><a href="https://hcigroup-c4613.firebaseapp.com/Member" target="_blank">
       <span> 1. Tạo trang About</span></a></li>
      <li className="mt-1"><a href="https://hcigroup-c4613.firebaseapp.com/FirebaseGuide" target="_blank">
        <span> 2. Tạo trang Firebase Guide</span></a></li>
      <li className="mt-1"><a href="https://hcigroup-c4613.firebaseapp.com/Diary" target="_blank">
        <span> 3. Tạo trang Group Diary</span></a></li>
      <li className="mt-1"><a href="https://hcigroup-c4613.firebaseapp.com/Result" target="_blank">
       <span> 4. Tạo trang Result</span></a></li></ul></div>
      <div className="price-content1 mt-3">
        <h4>Đánh giá</h4><ul className="pl-2">
      <li className="mt-2">Hoàn thành: 100%</li>
      <li className="judge mt-1">Đóng góp: 20%</li></ul></div>
      <div className="text-center mt-4">
        <a target="_blank" href="https://hcigroup-c4613.firebaseapp.com/Result">
        <button type="button" className="btn btn-info">
        <svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>
      {/* <i class="fa fa-star"></i> */} 
      Đánh giá của nhóm</button></a></div></div></div></div></div></div></div></div>
      <div className="tab-pane active " id="two" role="tabpanel">
      <div className="col-12 p-4">
      <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="mb-30 text-center">
    <svg className="svg-inline--fa fa-book fa-w-14" style={{color: 'rgb(0, 120, 255)'}} aria-hidden="true" focusable="false" data-prefix="fa" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
    <path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" /></svg>
    {/* <i class="fa fa-book" style="color: rgb(0, 120, 255);"></i> */}
    Những điều tích lũy được khi học Giao Tiếp Người Máy</h2></div></div>
      <div className="row mt-3">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 className="mb-20">1. Kiến thức:</h3></div></div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="unordered">
        <ul className="angle angle-right">
    <li>- Học hỏi, tìm hiểu về các công nghệ mới, ngôn ngữ mới: HTML, CSS, Javascript, Bootstrap, ReactJS</li>
    <li>- Có thêm hiểu biết về UI/UX</li>
    <li>- Đảm bảo được các nguyên tắc khi thiết kế một trang web.</li></ul></div></div>
    <div className="row mt-3">
<     div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3 className="mb-20 mt-15">2. Khả năng làm việc nhóm:</h3></div></div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="unordered">
    <ul className="angle angle-right">
       <li>- Phân chia công việc cho từng thành viên trong nhóm phù hợp với năng lực.</li>
      < li>- Kết hợp kết quả của từng thành viên thành một dự án hoàn chỉnh.</li>
        <li>- Biết lắng nghe lẫn nhau.</li></ul></div></div>
      <div className="row mt-3">
<     div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3 className="mb-20 mt-15">3. Thấu hiểu và đáp ứng yêu cầu khách hàng:</h3>
            </div></div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="unordered">
    <ul className="angle angle-right">
        <li>- Lắng nghe những nhận xét của giáo viên.</li>
        <li>- Sửa chữa những phần còn thiếu sót và chưa tốt.</li>
          <li>- Làm theo ý của khách hàng, không phải làm theo ý bản thân.</li></ul>
        </div></div></div></div></div></div></div></div></div></div></div></div></div>
      </div>
            </div>
        );
    }
}

export default Result;