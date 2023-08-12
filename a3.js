'use strict';

//*************************!**********************!*****************************//
//Js mục 9. Chức năng ẩn thông tin cá nhân.

// Lựa chọn các Element cần thao tác.
const btnBone = document.querySelector('.btn--bone');
const btnBtwo = document.querySelector('.btn--btwo');
const yourEmail = document.getElementById('your-email');
const btnButton = document.querySelector('.btn--button');
const textAlert = document.querySelector('.text-message');

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hiển thị form nhập email.
btnBtwo.classList.remove('hidden');

// Hiển thị dòng nhắc nhập email.
textAlert.classList.remove('hidden');

// Hàm mở khối thông tin đóng khối form.

const openBone = function() {
    btnBtwo.classList.add('hidden');
    btnBone.classList.remove('hidden');

} 

//Hàm emailRegex dùng để đối chiếu ký tự có hợp lệ hay không, 
//tham số chính là biến 'emailValue', biến này hứng giá trị người dùng nhập vào, 
//dạng trả về: "/ký tự hợp lệ/.test(emailValue);".

function emailRegex(emailValue) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}

//Hàm báo lỗi khi nhập.

function AlertError(textMessage, messageColor) {
     
    textAlert.classList.remove('hidden'); //đóng đoạn text nhắc nhập email.
    document.querySelector('.text-message').textContent = textMessage;//tham số nội dung đoạn text báo lỗi.
    document.querySelector('.text-message').style.color = messageColor;// tham số màu sắc đoạn text báo lỗi.

}

// sự kiện click nút submit, lưu ý ở đây type của button phải là button.

btnButton.addEventListener('click', function(){
    //Khởi tạo biến emailValue đón giá trị người dùng nhập vào từ ô input.
    let emailValue = yourEmail.value;
    
    if(emailValue == '' || emailValue == null) {
        //alert('email không được để trống!') // Kiểm tra phần tử DOM được tác động.
        AlertError('Email không được để trống!', 'red' );
    }

    else if (!emailRegex(emailValue)) {
        //alert('email khong hợp lệ!');
        AlertError('Email không hợp lệ!', 'red' );
         
    }

    else {
        //alert('email ok!');
        openBone();
    }

 return;

});

// Hết Js mục 9. Chức năng ẩn thông tin cá nhân.
//*************************!**********************!*****************************//


//*************************!**********************!*****************************//
/* Js mục 10. chức năng ẩn thông tin nghề nghiệp.*/

/*
 Hướng làm:
1-Khai báo các tham số của Element cần tác động
2- Ban đầu sẽ mở các khối View More, đóng khối View Less, đóng khối thông tin chi tiết(di-closedi)
3- Có 2 sự kiện: 
  even1- click View More thì : khối View More đóng, View Less mở, khối thông tin chi tiết mở
  even2- Ngược even1 
*/

//JS cho nút hover View More & View Less.


// Lựa chọn các Element cần thao tác (khai báo).


// khối active
const actFrame3Active = document.querySelector('.act-frame3-active');
const actViewMore = document.querySelector('.act-view-more');
const actViewLess = document.querySelector('.act-view-less');
// khối academic

const acaFrame3Academic = document.querySelector('.aca-frame3-academic');
const acaViewMore = document.querySelector('.aca-view-more');
const acaViewLess = document.querySelector('.aca-view-less');

// khối experience

const expFrame3Experience = document.querySelector('.exp-frame3-experience');
const expViewMore = document.querySelector('.exp-view-more');
const expViewLess = document.querySelector('.exp-view-less');

// Khối hobby

const hobFrame6Hobby = document.querySelector('.hob-frame6-hobby');
const hobViewMore = document.querySelector('.hob-view-more');
const hobViewLess = document.querySelector('.hob-view-less');

// Khối language

const lanFrame6Language = document.querySelector('.lan-frame6-language');
const lanViewMore = document.querySelector('.lan-view-more');
const lanViewLess = document.querySelector('.lan-view-less');

// Khối skills

const skiFrame6Skills = document.querySelector('.ski-frame6-skills');
const skiViewMore = document.querySelector('.ski-view-more');
const skiViewLess = document.querySelector('.ski-view-less');

//Dưới đây /*...*/ là đoạn code theo lối trực nghĩ(chưa thu gọn code, nhìn vào đây dễ hiểu hơn).

/*

//Ban đầu mở khối View More.
actViewMore.classList.remove('hidden');
acaViewMore.classList.remove('hidden');
expViewMore.classList.remove('hidden');
hobViewMore.classList.remove('hidden');
lanViewMore.classList.remove('hidden');
skiViewMore.classList.remove('hidden');

//Sự kiện 'click' vào [View More] hay chính là dòng "Kinh Nghiệm"-Khi View More

actViewMore.addEventListener('click', function(){
    actFrame3Active.classList.remove('hidden');
    actViewMore.classList.add('hidden');
    actViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Kinh Nghiệm"-Khi View Less.

actViewLess.addEventListener('click', function(){
    actFrame3Active.classList.add('hidden');
    actViewLess.classList.add('hidden');
    actViewMore.classList.remove('hidden');


});

//Sự kiện 'click' vào [View More] hay chính là dòng "Học vấn"-Khi View More

acaViewMore.addEventListener('click', function(){
    acaFrame3Academic.classList.remove('hidden');
    acaViewMore.classList.add('hidden');
    acaViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Học vấn"-Khi View Less.

acaViewLess.addEventListener('click', function(){
    acaFrame3Academic.classList.add('hidden');
    acaViewLess.classList.add('hidden');
    acaViewMore.classList.remove('hidden');

});
//Sự kiện 'click' vào [View More] hay chính là dòng "Hoạt động"-Khi View More

expViewMore.addEventListener('click', function(){
    expFrame3Experience.classList.remove('hidden');
    expViewMore.classList.add('hidden');
    expViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Hoạt động"-Khi View Less.

expViewLess.addEventListener('click', function(){
    expFrame3Experience.classList.add('hidden');
    expViewLess.classList.add('hidden');
    expViewMore.classList.remove('hidden');

});
//Sự kiện 'click' vào [View More] hay chính là dòng "Sở thích"-Khi View More

hobViewMore.addEventListener('click', function(){
    hobFrame6Hobby.classList.remove('hidden');
    hobViewMore.classList.add('hidden');
    hobViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Sở thích"-Khi View Less.

hobViewLess.addEventListener('click', function(){
    hobFrame6Hobby.classList.add('hidden');
    hobViewLess.classList.add('hidden');
    hobViewMore.classList.remove('hidden');

});
//Sự kiện 'click' vào [View More] hay chính là dòng "Ngôn ngữ"-Khi View More

lanViewMore.addEventListener('click', function(){
    lanFrame6Language.classList.remove('hidden');
    lanViewMore.classList.add('hidden');
    lanViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Ngôn ngữ"-Khi View Less.

lanViewLess.addEventListener('click', function(){
    lanFrame6Language.classList.add('hidden');
    lanViewLess.classList.add('hidden');
    lanViewMore.classList.remove('hidden');

});
//Sự kiện 'click' vào [View More] hay chính là dòng "Kỹ năng"-Khi View More

skiViewMore.addEventListener('click', function(){
    skiFrame6Skills.classList.remove('hidden');
    skiViewMore.classList.add('hidden');
    skiViewLess.classList.remove('hidden');

});

//Sự kiện 'click' vào [View Less] hay chính là dòng "Kỹ năng"-Khi View Less.

skiViewLess.addEventListener('click', function(){
    skiFrame6Skills.classList.add('hidden');
    skiViewLess.classList.add('hidden');
    skiViewMore.classList.remove('hidden');

});


*/




/////////////////////////////////////////////////////////////////////////////////
//********Làm gọn js câu số 10

//Biểu thức hàm mở View More.

const openViewMore = function(openVM) {
    openVM.classList.remove('hidden');
}

//Ban đầu mở khối View More.(ở đây code không ngắn được hơn so với cách viết theo luồng suy nghĩ thuông thường)

const actviewmore = openViewMore(actViewMore);
const acaviewmore = openViewMore(acaViewMore);
const expviewmore = openViewMore(expViewMore);
const hobviewmore = openViewMore(hobViewMore);
const lanviewmore = openViewMore(lanViewMore);
const skiviewmore = openViewMore(skiViewMore);


/*---------------Biểu thức hàm sự kiện click vào View More--------------------*/
const clickViewMore = function(vm, vl, di) {

    vm.addEventListener('click', function(){
        di.classList.remove('hidden');
        vm.classList.add('hidden');
        vl.classList.remove('hidden');
    
    });
}
/*---------------Hết biểu thức hàm sự kiện click vào View More--------------------*/


/*---------------Biểu thức hàm sự kiện click vào View Less--------------------*/
const clickViewLess = function(vm, vl, di) {

    vl.addEventListener('click', function(){
        di.classList.add('hidden');
        vl.classList.add('hidden');
        vm.classList.remove('hidden');
    
    });

}
/*---------------Hết biểu thức hàm sự kiện click vào View Less--------------------*/


/* ----------Sự kiện click vào View More & View Less của khối Kinh Nghiệm----------------*/
//Sự kiện 'click' vào [View More] hay chính là dòng "Kinh Nghiệm"-Khi View More.
const clickactViewMore = clickViewMore(actViewMore, actViewLess, actFrame3Active);

//Sự kiện 'click' vào [View Less] hay chính là dòng "Kinh Nghiệm"-Khi View Less.
const clickactViewLess = clickViewLess(actViewMore, actViewLess, actFrame3Active);
/* ----------Hết sự kiện click vào View More & View Less của khối Kinh Nghiệm----------------*/



/* ----------Sự kiện click vào View More & View Less của khối Học Vấn----------------*/
//Sự kiện 'click' vào [View More]
const clickacaViewMore = clickViewMore(acaViewMore, acaViewLess, acaFrame3Academic);
//Sự kiện 'click' vào [View Less]
const clickacaViewLess = clickViewLess(acaViewMore, acaViewLess, acaFrame3Academic);

/* ----------Hết sự kiện click vào View More & View Less của khối Học Vấn----------------*/



/* ----------Sự kiện click vào View More & View Less của khối Hoạt Động----------------*/
//Sự kiện 'click' vào [View More]
const clickexpViewMore = clickViewMore(expViewMore, expViewLess, expFrame3Experience);
//Sự kiện 'click' vào [View Less]
const clickexpViewLess = clickViewLess(expViewMore, expViewLess, expFrame3Experience);
/* ----------Hêt sự kiện click vào View More & View Less của khối Hoạt Động----------------*/



/* ----------Sự kiện click vào View More & View Less của khối Sở Thích----------------*/
//Sự kiện 'click' vào [View More]
const clickhobViewMore = clickViewMore(hobViewMore, hobViewLess, hobFrame6Hobby);
//Sự kiện 'click' vào [View Less]
const clickhobViewLess = clickViewLess(hobViewMore, hobViewLess, hobFrame6Hobby);
/* ----------Hết sự kiện click vào View More & View Less của khối Sở Thích----------------*/



/* ----------Sự kiện click vào View More & View Less của khối Ngôn Ngữ----------------*/
//Sự kiện 'click' vào [View More]
const clicklanViewMore = clickViewMore(lanViewMore, lanViewLess, lanFrame6Language);
//Sự kiện 'click' vào [View Less]
const clicklanViewLess = clickViewLess(lanViewMore, lanViewLess, lanFrame6Language);
/* ----------Hết sự kiện click vào View More & View Less của khối Ngôn Ngữ----------------*/



/* ----------Sự kiện click vào View More & View Less của khối Kỹ Năng----------------*/
//Sự kiện 'click' vào [View More]
const clickskiViewMore = clickViewMore(skiViewMore, skiViewLess, skiFrame6Skills);
//Sự kiện 'click' vào [View Less]
const clickskiViewLess = clickViewLess(skiViewMore, skiViewLess, skiFrame6Skills);
/* ----------Hết sự kiện click vào View More & View Less của khối Kỹ Năng----------------*/


//********Hết làm gọn js câu số 10

// Hết JS cho nút hover View More & View Less.
/* Hết Js mục 10. chức năng ẩn thông tin nghề nghiệp.*/
//*************************!**********************!*****************************//
