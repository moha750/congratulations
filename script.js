// إعداد اللوحة الأولى
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

var nameInput = document.getElementById('name');
var specializationInput = document.getElementById('specialization');
var downloadBtn1 = document.getElementById('download-btn1');
var downloadBtn2 = document.getElementById('download-btn2');

const x1 = canvas1.width / 2;
const x2 = canvas2.width / 2;

// تحميل الصور
var image1 = new Image();
image1.crossOrigin = "anonymous";
image1.src = 'مباركة كلية الآداب.jpg'; // الخلفية للوحة 1

var image2 = new Image();
image2.crossOrigin = "anonymous";
image2.src = 'مباركة كلية الآداب - 2.jpg'; // الخلفية للوحة 2

image1.onload = function () {
    drawCanvas1();
};
image2.onload = function () {
    drawCanvas2();
};

// رسم اللوحة الأولى
function drawCanvas1() {
    ctx1.drawImage(image1, 0, 0, canvas1.width, canvas1.height);
    ctx1.font = '55pt b';
    ctx1.fillStyle = '#fff';
    ctx1.textAlign = "center";

    // رسم الاسم
    ctx1.fillText(nameInput.value, x1, 919);

    // رسم التخصص
    ctx1.font = '55pt b';
	ctx1.fillStyle = '#015591';
    ctx1.fillText(specializationInput.value, x1, 1330);
}

// رسم اللوحة الثانية
function drawCanvas2() {
    ctx2.drawImage(image2, 0, 0, canvas2.width, canvas2.height);
    ctx2.font = '55pt b';
    ctx2.fillStyle = '#fff';
    ctx2.textAlign = "center";

    // رسم الاسم
    ctx2.fillText(nameInput.value, x2, 919);

    // رسم التخصص
    ctx2.font = '55pt b';
	ctx2.fillStyle = '#015591';
    ctx2.fillText(specializationInput.value, x1, 1330);
}

// تحديث اللوحتين عند إدخال البيانات
nameInput.addEventListener('input', function () {
    drawCanvas1();
    drawCanvas2();
});
specializationInput.addEventListener('input', function () {
    drawCanvas1();
    drawCanvas2();
});

// تنزيل اللوحة الأولى
downloadBtn1.addEventListener('click', function () {
    downloadBtn1.href = canvas1.toDataURL('image/jpg');
    downloadBtn1.download = ' تهنئة للمُتميّزة ' + nameInput.value;
});

// تنزيل اللوحة الثانية
downloadBtn2.addEventListener('click', function () {
    downloadBtn2.href = canvas2.toDataURL('image/jpg');
    downloadBtn2.download = ' تهنئة للمُتميّز ' + nameInput.value;
});
