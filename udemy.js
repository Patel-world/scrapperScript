var i = 0;
var mainArra = [];
function aglacollege(clgnum) {

  var x = [
    "https://www.udemy.com/course/machine-learning-mastering-course-in-arabic/?couponCode=3F2D3B8AB64511D8BB72",
    "https://www.udemy.com/course/awk-tutorial/?couponCode=GOODFRIDAY",
    "https://www.udemy.com/course/learn-microsoft-teams/?couponCode=TRY1000FREE42203",
    "https://www.udemy.com/course/hiring-process-talent-management/?couponCode=E4B603DFC8D8ED388E4A",
    "https://www.udemy.com/course/learn-google-chrome/?couponCode=TRY1000FREE42203",
    "https://www.udemy.com/course/gmail-productivity/?couponCode=TRY1000FREE42203",
    "https://www.udemy.com/course/developer-tools-course/?couponCode=TRY1000FREE42203",
    "https://www.udemy.com/course/ferramentas-hacker-21-programas-de-varredura-de-portas/?couponCode=REALDISCOUNT2",
    "https://www.udemy.com/course/the-ultimate-mysql-crash-course-2021/?couponCode=MYSQLCOURSE41",
    "https://www.udemy.com/course/excel-for-financial-analysis-financial-modeling/?couponCode=A3D72A7",
    "https://www.udemy.com/course/python-exam-98-381-pcap-pcep/?couponCode=98-381_2022_04_1",
    "https://www.udemy.com/course/data-visualization-in-excel-for-business-professionals/?couponCode=ACA20F",
    "https://www.udemy.com/course/mlops-certification-pipeline-basics-to-mlops-toolbox/?couponCode=JZ00111",
    "https://www.udemy.com/course/google-data-studio-by-starttech/?couponCode=AA1ED9",
    "https://www.udemy.com/course/deep-learning-with-keras-and-tensorflow-in-python-and-r/?couponCode=A4CFA56",
    "https://www.udemy.com/course/aws-certified-cloud-practitioner-clf-c01-practise-tests/?couponCode=D74CFCB03E1BE268B733",
    "https://www.udemy.com/course/python-programming-tutorial-for-the-absolute-beginner-code-included/?couponCode=RM2022-2",
    "https://www.udemy.com/course/az104-microsoft-azure-administrator-practice-exams/?couponCode=2510D5F830E26AA5B12C",
    "https://www.udemy.com/course/introduction-to-computer-science-with-python/?couponCode=RM2022-2",
    "https://www.udemy.com/course/como-crear-una-landing-page-con-wordpress-desde-cero/?couponCode=LANDING-GR8",
    "https://www.udemy.com/course/facebook-lead-ads-course/?couponCode=WATERTIGER5",
    "https://www.udemy.com/course/java-for-beginners-learn-all-the-basics-of-java/?couponCode=DDB5CFF17974A4C64B8D",
    "https://www.udemy.com/course/the-complete-introduction-to-c-programming/?couponCode=251366913B2001B1DE23",
    "https://www.udemy.com/course/copywriting-2022/?couponCode=WATERTIGER2",
    "https://www.udemy.com/course/online-seo-training/?couponCode=WATERTIGER6",
    "https://www.udemy.com/course/agile-project-management-genman/?couponCode=A907A67",
    
];
  

  var n = x.length;
  var clgval = {};
  

  $.get( x[clgnum], function( html ) {

    // Loop through elements you want to scrape content from
    window.history.pushState("object or string", "Title", x[clgnum]);
    document.body.innerHTML = html;
    

        // Do something with content
        clgval["category"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__main-content.course-landing-page__topic-menu.dark-background-inner-text-container > div > a:nth-child(3)").innerText ?? "";

        clgval["url"] = x[clgnum];

        clgval["title"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(3) > div > h1").innerText ?? "";

        clgval["rating"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(3) > div > div.clp-lead__badge-ratings-enrollment").innerHTML ?? "";


        clgval["instructor"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div:nth-child(3) > div > div.clp-lead__element-item > div > span > a > span").innerText ?? "";


if(document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > button > span.intro-asset--img-aspect--1UbeZ > img")){
clgval["image"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > button > span.intro-asset--img-aspect--1UbeZ > img").src;
}
else{
clgval["image"] = document.querySelector("#udemy > div.main-content-wrapper > div.main-content > div > div > div.paid-course-landing-page__container > div.top-container.dark-background > div > div > div.course-landing-page__introduction-asset__main > div > div > div > img").src;

}


        


   
    setTimeout(function () {
      mainArra.push(clgval);
      localStorage.setItem("mainArra", JSON.stringify(mainArra));
      console.log("Waiting....");
      if (clgnum <= n) {
        aglacollege(clgnum + 1);
      }
    }, 2000);
  });
}

aglacollege(i);
