function changePlan() {
    let togglePlan = document.getElementById("change-plan") // toggle switch input id from html
    let annualPrice = document.getElementsByClassName("annually-pricing") //toggle option 1, customize it for yourself
    let monthlyPrice = document.getElementsByClassName("monthly-pricing") //toggle option 2, customize it for yourself
    for (let index = 0; index < annualPrice.length; index++) {
        if (togglePlan.checked == true) {
            annualPrice[index].style.display = "none"
            monthlyPrice[index].style.display = "block"
        } else if (togglePlan.checked == false) {
            annualPrice[index].style.display = "block"
            monthlyPrice[index].style.display = "none"
        }
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     var checkbox = document.querySelector('input[type="checkbox"]')

//     checkbox.addEventListener("change", function () {
//         if (checkbox.checked) {
//             // do this
//             console.log("Checked")
//         } else {
//             // do that
//             console.log("Not checked")
//         }
//     })
// })
