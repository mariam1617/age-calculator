//input
let isValid = false;
const in_y = document.querySelector(".year");
const in_m = document.querySelector(".month");
const in_d = document.querySelector(".day");

//button
const btn = document.querySelector(".submit");

//output
const out_y = document.querySelector(".out.y");
const out_m = document.querySelector(".out.m");
const out_d = document.querySelector(".out.d");

//error
const err_d = document.querySelector(".error.d");
const err_m = document.querySelector(".error.m");
const err_y = document.querySelector(".error.y");


//date
const d = new Date();
btn.addEventListener("click", calc);
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calc();
    }
})

in_d.addEventListener("input", function () {

    if (+in_d.value > 31) {
        err_d.textContent = "Enter a valid day";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_d.textContent = "";
    }

    if (+in_d.value === 0) {
        isValid = false;
        err_d.textContent = "this field is required";
        isValid = false;
        return;
    }
    else {
        err_d.textContent = "";
    }

}
);


in_m.addEventListener("input", function () {
    if (+in_m.value > 12) {
        err_m.textContent = "Enter a valid month";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_m.textContent = "";
    }
    if (+in_m.value === 0) {
        err_m.textContent = "this field is required";
        isValid = false;
        return;
    }
    else {
        err_m.textContent = "";
    }
}
);

in_y.addEventListener("input", function () {
    if (+in_y.value > 2023) {
        err_y.textContent = "Enter a valid year";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_y.textContent = "";
    }
    if ((+in_d.value > 28 && +(in_y.value % 4) == 0 && +in_m.value == 2)) {
        err_y.textContent = `no ${in_d.value} in ${in_y.value} `;
        isValid = false;
        return;
    }
    else {
        isValid = true;
        err_y.textContent = "";
    }
    if (+in_y.value === 0) {
        isValid = false;
        err_y.textContent = "this field is required";
        isValid = false;
        return;
    }
    else {
        err_y.textContent = "";
    }
    // TODO: CHANGE NAME
}
);


function calc() {
    if (isValid) {
        const birthday = `${in_m.value}/${in_d.value}/${in_y.value}`;
        const dob = new Date(birthday);
        console.log('BIRTHDAY', Date.now());
        console.log(dob.getTime())
        const diff = Date.now() - dob.getTime();
        console.log('DIFF', diff)
        const res = new Date(diff);
        console.log('full year', res.getFullYear())

        const year = res.getFullYear() - 1970;
        const month = res.getMonth();
        const day = res.getDate() - 1;

        out_y.textContent = year;
        out_m.textContent = month;
        out_d.textContent = day;

        console.log(res)
    }

    //     else{
    //         alert("error");
    //     }
}

