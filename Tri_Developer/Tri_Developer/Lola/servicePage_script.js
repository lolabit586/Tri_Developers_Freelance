
// الحصول على زر البحث من صفحة HTML
let searchButton = document.getElementById("searchBtn");

// الحصول على مربع البحث
let searchInput = document.getElementById("searchInput");

// الحصول على بطاقات الخدمات
let translation = document.getElementById("translation");
let programming = document.getElementById("programming");
let education = document.getElementById("education");
let design = document.getElementById("design");
let marketing = document.getElementById("marketing");
let legal = document.getElementById("legal");




// دالة البحث التي سيتم تنفيذها عند الضغط على الزر
function searchService() {

    // قراءة الكلمة التي أدخلها المستخدم
    let searchWord = searchInput.value.toLowerCase();

    // إخفاء جميع الخدمات أولاً
    translation.style.display = "none";
    programming.style.display = "none";
    education.style.display = "none";
    design.style.display = "none";
    marketing.style.display = "none";
    legal.style.display = "none";

    // اختيار الخدمة المناسبة حسب كلمة البحث
    switch (searchWord) {

        case "translation":
            translation.style.display = "grid";
            break;

        case "programming":
            programming.style.display = "grid";
            break;

        case "education":
            education.style.display = "grid";
            break;

        case "design":
            design.style.display = "grid";
            break;

        case "marketing":
            marketing.style.display = "grid";
            break;

        case "legal":
            legal.style.display = "grid";
            break;

        // إذا لم يجد خدمة مطابقة
        default:

            // إظهار جميع الخدمات مرة أخرى
            translation.style.display = "grid";
            programming.style.display = "grid";
            education.style.display = "grid";
            design.style.display = "grid";
            marketing.style.display = "grid";
            legal.style.display = "grid";

            alert("Service Not Found");
    }
}


// حدث الضغط على زر البحث
searchButton.addEventListener(
    "click",
    searchService
);


let params = new URLSearchParams(window.location.search);
let word = params.get("Search_words");

if (word) {
    searchInput.value = word;
    searchService();
}

/* زر البحث */
searchButton.addEventListener("click", searchService);