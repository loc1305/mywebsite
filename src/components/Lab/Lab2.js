import React, { Component } from 'react';

class Lab2 extends Component {
    render() {
        return (
            <div>
            <meta charSet="utf-8" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}" }} />
            <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created using create-react-app" />
            <link href="/assets/img/about/LOC.png" rel="icon" />
            <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"></link>
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
                    <a className="logo mr-auto" href="/">
             <img src="assets/img/about/LOC.png" style={{height: '50px', width: '50px'}} alt="" className="img-fluid" /> </a>
                 <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                 <span /><span /><span /></button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                <ul className="navbar-nav">
                     <li className="nav-item"><a className="nav-link js-scroll" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll" href="/CV">CV</a></li>
                 <li className="nav-item"><a className="nav-link js-scroll" href="/Contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll active" href="/Lab">Lab</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll" href="/Result">Result</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll" href="/Project">Project</a></li>
                </ul></div></div></nav></div>
                    <div className="container" style={{marginTop: '150px'}}>
                         <div className="row mb-5">
                        <div className="col-md-12">
                         <div className="card pb-3">
                             <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs" role="tablist">
                    <li className="nav-item"><a className="nav-link" href="/Lab1">Lab 1</a></li>
                    <li className="nav-item"><a id="l" className="nav-link active" data-toggle="tab" href>Lab 2</a></li>
                     <li className="nav-item"><a className="nav-link" href="/Lab3">Lab 3</a></li>
                    <li className="nav-item"><a className="nav-link" href="/Lab4">Lab 4</a></li>
                     <li className="nav-item"><a className="nav-link" href="/Lab5">Lab 5</a></li>
                 </ul></div>

                    <div className="tab-content">
                     <div className="tab-pane active" id="lab2">
                        <div className="card-header mb-4">
                     <ul className="nav nav-tabs card-header-tabs" role="tablist">
                    </ul>
                        </div>
            <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" id="">
                     <div className="container">
                               <h2>Y??u c???u: </h2><p>1/ T???o ra m???t user scenario </p><p>2/ Ch???n 1 b?????c trong user scenario ????? thi???t k??? 1 form giao di???n Web tr??n c??ng c??? thi???t k??? ???? ch???n. Sau ???? t???o ra file JS t????ng ???ng cho thi???t k??? n??y</p><hr /><p>Upload l??n Firebase: trong file JS c?? ch??n h??nh ???nh c???a user scenario ??? (1) v?? ???????ng d???n c???a file thi???t k??? ??? (2)</p></div></div>
                               <h3>=========================================================</h3>
                               <div className="tab-pane active"id="user-scenario" role="tabpanel"  aria-labelledby="1">
                      <div className="container">
                         <div className="row">
                 <p className="m-2 font-weight-bold">V???i t??nh tr???ng d???ch hi???n nay th?? vi???c khai b??o y t??? l?? h???t s???c quan tr???ng.</p></div>
                 <p>C??ng chung tay g??p s???c ph??ng ch???ng d???ch</p>
                      <div className="row justify-content-center">
                    <a href="assets\img\Lab\user.jpg" alt="User scenario"> </a></div></div></div>
                <div className="tab-pane active"role="tabpanel" id="design">
                           <div className="container">
                             <div className="row justify-content-around">
                                <div className="col-md-4 col-xs-12 border mb-4 pb-3">
                    <div className="row justify-content-center bg-dark">
                          <h3 className="text-white">Design on paper</h3></div><div className="row m-3"><img className="img-fluid" src="assets\img\Lab\Lab2.jpg" alt="Design on paper" /></div>
                        <div className="row justify-content-center"><a href="assets\img\Lab\Lab2.jpg" className="text-decoration-none" download="Lab2.jpg">
                     <button type="button" className="btn btn-info ">Download</button></a></div></div>
                            </div>
                        </div>
                    </div>
                 <div className="tab-pane active"role="tabpanel" id="implement">
                     <div className="container">
                                  <div className="row justify-content-center mb-4 ml-2 mt-2">
                                     <h3>Nh???p th??ng tin cho ph???n khai b??o y t???:</h3></div>
                          <div className="row justify-content-center mb-4">
                                 <div className="col-lg-5 col-md-6 col-xs-10 col-sm-9 border">
                             <div className="row justify-content-center mb-4 bg-dark">
                            <h3 className="text-center text-white">Khai b??o y t???</h3></div>
                            <div className="row justify-content-center">
                                <table className="table table-borderless text-left">
                                    <tbody><tr><td>H??? t??n: </td><td><input type="text" style={{width: '200px'}} placeholder="Nh???p t??n" /></td></tr>
                                    <tr><td>Ng??y sinh: </td><td><input type="text" style={{width: '200px'}} placeholder="Nh???p dd/mm/yyyy" /></td></tr>
                                    <tr><td>S??? ??i???n tho???i:</td><td><input type="text" style={{width: '200px'}} placeholder="Nh???p s??? ??i???n tho???i" /></td></tr><tr /><tr><td>T???nh/Th??nh ph???:</td><td><select placeholder="a" style={{width: '200px'}}>
                  <option value disabled>Ch???n T???nh/Th??nh</option >
                  <option>H??? Ch?? Minh</option>
                  <option>H?? N???i</option>
                  <option>???? N???ng</option>
                 <option>?????ng Nai</option>
                 </select></td></tr><tr><td>Qu???n/Huy???n</td><td><select placeholder="a" style={{width: '200px'}}><option value disabled>Ch???n Qu???n/Huy???n</option>
                  <option>Qu???n 1</option>
                  <option>Qu???n 2</option>
                  <option>Qu???n 3</option>
                  <option>Qu???n 4</option></select></td></tr><tr><td>Ph?????ng/X??</td><td><select placeholder="a" style={{width: '200px'}}>
                      <option value disabled>Ch???n Ph?????ng/X??</option>
                      <option>Ph?????ng An B??nh</option>
                      <option>Ph?????ng An Ph??</option>
                      <option>Ph?????ng B??nh Kh??nh</option>
                      <option>Ph?????ng B??nh T??y</option>
                      </select></td></tr><tr><td>L??? tr??nh ???? ??i</td><td><textarea className="form-control" rows={3} placeholder="L??? tr??nh" defaultValue={""} /></td></tr><tr><td colSpan={2} className="text-center">
                      <button type="button" className="btn btn-info">Khai b??o</button></td></tr>
                 </tbody></table></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
                                                
              <style type="text/css" data-typed-js-css="true" dangerouslySetInnerHTML={{__html: "\n    .typed-cursor{\n          opacity: 1;\n        }\n     .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n      }\n      @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      " }} />
                   </div> 
                
            );
        }  
}

export default Lab2;