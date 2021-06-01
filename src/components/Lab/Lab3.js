import React, { Component } from 'react';

class Lab3 extends Component {
    render() {
        return (
            <div>
                
                <meta charSet="utf-8" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}" }} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link href="/assets/img/logo.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/vendor/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link id="theme-style" rel="stylesheet" href="/assets/css/pillar-1.css" />
        <link href="/assets/css/result.css" rel="stylesheet" />
        <link href="/assets/css/lab4.css" rel="stylesheet" />
        <title>My Website</title>
        <link href="/static/css/main.5ecd60fb.chunk.css" rel="stylesheet" />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div className="App">
            <div>
              <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav" style={{backgroundColor: 'gray'}}>
                <div className="container">
                  <a className="mywebsite\public\assets\img\about\LOC.png" href="/">
                    <img src="assets\img\about\LOC.png" style={{height: '50px', width: '50px'}} alt="" className="img-fluid" /> 
                  </a>
                  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span /><span /><span /></button>
                  <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link js-scroll" href="/">Home</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll" href="/CV">CV</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll" href="/Contact">Contact</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll active" href="/Lab1">Lab</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll" href="/Result">Result</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll" href="http://projecthci07.tk/"target="_blank">Project</a></li>
                    </ul></div></div></nav></div>
            <div className="container" style={{marginTop: '150px'}}><div className="row mb-5">
                <div className="col-md-12"><div className="card pb-3"><div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item"><a id="l" className="nav-link " data-toggle="tab" href="/Lab1">Lab 1</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Lab2">Lab 2</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/Lab3">Lab 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Lab4">Lab 4</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Lab5">Lab 5</a></li>
                      </ul>

        <div className="tab-pane active" id="lab3">
            <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs" role="tablist">
            <li className="nav-item">
                    <a id="r" className="nav-link" data-toggle="tab" href="#requirement">Requirement</a></li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#ex1">Exercise 1</a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ex2">Exercise 2</a></li>
            </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane active" id="requirement">
                    <div className="container mt-4">
                <h2>Yêu cầu: </h2>
                 <p>- Trong menu <strong>Labs</strong>, tạo 1 menu Lab3 (file Lab3.js) sau đó tạo 2 tab <strong>Ex1</strong>, <strong>Ex2</strong> </p><p>+ <strong>Ex1:</strong> Thiết kế một trang Web đơn giản sử dụng mẫu F-pattern (file Lab3_1.js)</p><p>+ <strong>Ex2:</strong> Thiết kế một trang Web sử dụng mẫu Z-pattern (file Lab3_2.js)</p><p>- Với cả <strong>Ex1</strong>, <strong>Ex2</strong>: Tạo 2 tab Design và Implementation:</p><p>+ <strong>Design</strong>: chụp lại hình ảnh để có cái nhìn tổng quan về file thiết kế, có nút Download để download file thiết kế về nếu muốn</p><p>+ <strong>Implement</strong>: nội dung phần hiện thực</p><p>- Upload lên Firebase</p></div></div>
               <div className="tab-pane active" id="ex1">
                 <div>
                     <div className="tab-pane active" id="ex1">
                     <div className="card-header mb-4">
                 <ul className="nav nav-tabs card-header-tabs" role="tablist">
                     <li className="nav-item">
                         <a id="d1" className="nav-link " data-toggle="tab" href="#design-1">Design</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#implement-1">Implement</a></li>
                   </ul></div>
             <div className="tab-content">
               <div className="tab-pane active" id="design-1">
                 <div className="container">
                     <div className="row justify-content-around">
                           <div className="col-md-4 col-xs-12 border mb-4 pb-3">
                    <div className="row justify-content-center bg-dark">
                     <h3 className="text-white">Design on paper</h3></div>
                     <div className="row m-3">
                    <img className="img-fluid" src="assets\img\Lab\3_1.jpg" alt="Design on paper" /></div>
                 <div className="row justify-content-center">
                  <a href="assets\img\Lab\3_1.jpg" className="text-decoration-none" download="3_1.jpg">
                       <button type="button" className="btn btn-info ">Download</button></a></div></div>
                        </div></div></div>
                       <div className="tab-pane active" id="implement-1">
                  <div className="container">
                            <nav className="row navbar navbar-expand-sm bg-dark navbar-dark">
                          <div className="col-3">
                       <a className="navbar-brand" href="#"> New</a></div>
                           <div className="col-9">
     <ul className="navbar-nav float-right">
       <li className="nav-item "><a className="nav-link" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link " href="#">News</a></li>
        <li className="nav-item"><a className="nav-link " href="#">About</a></li>
         <li className="nav-item"><a className="nav-link " href="#">Contact</a></li>
    </ul></div>
             </nav>
        <div className="row mt-5">
          <div className="col-7">
             <div className="row">
             <div className="col-3"><img src="assets\img\Lab\Lab3_1.jpg" width={150} /></div>
               <div className="col-9">
             <h6>Hạ gục Mancity, Chelsea lên ngôi vô địch C1</h6><p>Cầu thủ đắt giá nhất của Chelsea Kai Haverts ghi bàn giúp Chelsea giành chiến thắng</p></div></div></div>
                  <div className="col-5"><img src="assets\img\Lab\meo.jpg" width={300} height={200} /></div></div><hr />
               <div className="row mt-5"><div className="col-7">
                    <div className="row"><div className="col-3"><img src="assets\img\Lab\Lab3_11.jpg" width={130} /></div>
                    <div className="col-9">
                        <h6>Cần làm gì để Tp Biên Hòa trở thành Tp trực thuộc trung ương?</h6><p>Với vai trò nhà đầu tư, không có lợi họ sẽ không làm. Nhà nước phải đứng ra điều phối lợi ích này, tránh việc để cho lợi ích đổ về một hướng nhà đầu tư.</p></div></div></div>
                        <div className="col-5"><img src="assets\img\Lab\n.jpg" width={300} height={140} /></div></div></div></div></div></div></div></div>
                      <div className="tab-pane active" id="ex2"><div><div className="tab-pane active" id="ex2"><div className="card-header mb-4">
                    <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item"><a id="d2" className="nav-link " data-toggle="tab" href="#design-2">Design</a></li>
                          <li className="nav-item"><a className="nav-link " data-toggle="tab" href="#implement-2">Implement</a></li>
                         </ul></div><div className="tab-content"><div className="tab-pane active" id="design-2"><div className="container"><div className="row justify-content-around">
                  <div className="col-md-4 col-xs-12 border mb-4 pb-3">
                      <div className="row justify-content-center bg-dark">
                  <h3 className="text-white">Design on paper</h3></div>
            <div className="row m-3">
       <img className="img-fluid" src="assets\img\Lab\3_2.jpg" alt="Design on paper" /></div>
       <a href="assets\img\Lab\3_1.jpg" className="text-decoration-none" download="3_1.jpg">
       <button type="button" className="btn btn-info ">Download</button></a>
            </div>
              </div>
         </div></div>
              <div className="tab-pane active" id="implement-2">
                <div className="container">
                    <nav className="row navbar navbar-expand-sm bg-success navbar-dark">
         <div className="col-3">
               <a className="navbar-brand" href="#"> Blog</a></div>
                 <div className="col-9"><ul className="navbar-nav  float-right">
                  <li className="nav-item "><a className="nav-link " href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link " href="#">Blog</a></li>
                  <li className="nav-item"><a className="nav-link " href="#">About</a></li>
                  <li className="nav-item"><a className="nav-link " href="#">Contact</a></li>
            </ul></div></nav>
            <div className="row mt-1"><div className="col-12"><img src="assets\img\Lab\Lap3_2.png" className="img-fluid" /></div></div><div className="row mt-3 ml-2"><div className="col-3 mr-5"><div className="row"><a href="#">
                <h5>Tìm hiểu về Java</h5></a></div>
                <div className="row"><p>Java là một ngôn ngữ lập trình hướng đối tượng dựa trên các lớp. Khác với phần lớn ngôn ngữ lập trình thông thường, thay vì biên dịch mã nguồn thành mã máy hoặc thông dịch mã nguồn khi chạy, Java được thiết kế để biên dịch mã nguồn thành bytecode, bytecode sau đó sẽ được môi trường thực thi chạy.</p></div></div><div className="col-3">
                 <div className="row"><a href="#"><h5>Tìm hiểu về Python</h5></a></div>
                     <div className="row"><p>Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học và dễ nhớ. Python là ngôn ngữ có hình thức rất sáng sủa, cấu trúc rõ ràng, thuận tiện cho người mới học lập trình.</p></div></div>
                   <div className="col-5 d-flex justify-content-around"><div><button type="button" className="btn btn-success" style={{height: '200px', width: '200px', fontSize: '25px'}}>LEARNING NOW!</button>
                           </div></div></div></div></div></div></div></div></div></div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div> 
        </div> 
     </div>      
              <style type="text/css" data-typed-js-css="true" dangerouslySetInnerHTML={{__html: "\n    .typed-cursor{\n          opacity: 1;\n        }\n     .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n      }\n      @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      " }} />
                 
            </div>
        );
    }
}

export default Lab3;