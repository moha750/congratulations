var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var nameInput = document.getElementById('name');
var messageInput = document.getElementById('message'); // الحقل الجديد
var downloadBtn = document.getElementById('download-btn');
const x = canvas.width / 2;

var image = new Image();
image.crossOrigin = "anonymous";
image.src = 'مباركة كلية الآداب.jpg';
image.onload = function () {
    drawImage();
};

function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.font = '55pt b';
    ctx.fillStyle = '#fff';
    ctx.textAlign = "center";

    // رسم الاسم
    ctx.fillText(nameInput.value, x, 919);

    // رسم الرسالة الجديدة
    ctx.font = '55pt b';
	ctx.fillStyle = '#015591' // حجم خط أصغر
    ctx.fillText(messageInput.value, x, 1340); // عرض الرسالة أسفل الاسم
}

// تحديث الرسم عند إدخال اسم أو رسالة
nameInput.addEventListener('input', drawImage);
messageInput.addEventListener('input', drawImage);

// تنزيل الصورة
downloadBtn.addEventListener('click', function () {
    downloadBtn.href = canvas.toDataURL('image/jpg');
    downloadBtn.download = 'تهنئة للمُتميّزة ' + nameInput.value;
});
