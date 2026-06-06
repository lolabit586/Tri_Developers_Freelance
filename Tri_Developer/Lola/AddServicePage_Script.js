
// الحصول على العناصر
let serviceForm = document.getElementById("serviceForm");
let categorySelect = document.getElementById("category");
let subCategorySelect = document.getElementById("subCategory");
let titleInput = document.getElementById("serviceTitle");
let priceInput = document.getElementById("price");
let durationInput = document.getElementById("duration");
let descriptionInput = document.getElementById("description");

// حدث تغير التصنيف
categorySelect.addEventListener("change", updateSubCategory);

//حدث نشر الخدمه
serviceForm.addEventListener("submit", publishService);

// دالة تغير التصنيف واختيار التصنيف الفرعي المناسب
function updateSubCategory() {

    //قراءة قيمة التصنيف المختار 
    let category = document.getElementById("category").value;

    //الحصول على التصنيف الفرعي
    let subCategory = document.getElementById("subCategory");

    switch (category) {
        case "Programming":
            // innerHTML change content
            subCategory.innerHTML =    // يعني ضع محتوى جديد داخل القائمة الثانية التي هي التصنيف الفرعي
                "<option> Web Developer </option>" +
                "<option> Mobile App </option>" +
                "<option> Desktop Application </option>";
            break;

        case "Design":
            subCategory.innerHTML =
                "<option> Logo Design </option>" +
                "<option> UI Design </option>" +
                "<option> Social Media </option>";
            break;

        case "Marketing":
            subCategory.innerHTML =
                "<option> SEO </option>" +
                "<option> AdverTising </option>" +
                "<option> Social Media Marketing</option>";
            break;

        case "Translation":
            subCategory.innerHTML =
                "<option> Arabic </option>" +
                "<option> English </option>";
            break;

        case "Education":
            subCategory.innerHTML =
                "<option> Programming Courses</option>" +
                "<option> Language Courses </option>";
            break;

        case "Legal":
            subCategory.innerHTML =
                "<option> Contracts</option>" +
                "<option> Legal Consultion </option>";
            break;

        default:
            subCategory.innerHTML = "<option>Select Sub Category </option>"
    }
}
//دالة نشر الخدمة
function publishService(event) {
    // السلوك الافتراضي للمتصفح هو اعادة تحيل الصفحة بعد النتر على الزر
    // نستخدم الدالة التالية لمنعه 
    //تستخدم ايضا لكي يتوقف المتصفح وينتظر اوامر جافا سكريبت
    event.preventDefault();// دالة تمنع اعاده تحميل الصفحة والفورفم

    //قراءة القيم
    let title = titleInput.value;
    let category = categorySelect.value;
    let subCategory = subCategorySelect.value;
    let price = priceInput.value;
    let duration = durationInput.value;
    let description = descriptionInput.value;

    //التحقق لو كانت القيم فارغه لا يقبل الفورم ويطبع رسالة مناسبه للمستخدم
    if (title == "" || category == "" || subCategory == "" || price == "" || duration == "" || description == "") {
        alert("Please fill all fieled");
        return;// يخرج من الدالة ولا يكمل عملها 
    }

    //في حال كانت المدخلات صحيحه
    alert("Service Published Seccessfully ^.^");
    window.location.href = "ServicesPage.html";

    //تظهر البيانات في جزء الكونسول console
    console.log(title);
    console.log(category);
    console.log(subCategory);
    console.log(price);
    console.log(duration);
    console.log(description);

}
