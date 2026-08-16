function calculateBMI() {
    const weightRef = document.querySelector("#weight");
    const weight = Number(weightRef.value);

    const heightRef = document.querySelector("#height");
    const height = Number(heightRef.value);

    const divRef = document.querySelector("#bmi");
    const bmi = (weight / (height**2));
    divRef.innerHTML = "Your BMI is " + bmi;
}

const names = ["Ali", "Kashan", "Mirpur"];

const namesDivRef = document.querySelector("#names");

names.map((nm) => {
    namesDivRef.innerHTML = namesDivRef.innerHTML + `<p>${nm} </p>`;
});

const products = [
    {
        id: 1,
        name: "Samsung S26 Ultra",
        amount: 436000,
        desc: "Good",
    },
    {
        id: 2,
        name: "HP Thinkbook",
        amount: 200000,
        desc: "17",
    },
];

const productDivRef = document.querySelector("#products");

products.map((pr) => {
    productDivRef.innerHTML =
        productDivRef.innerHTML +
        `
        <article>
            <header>
                <h2>${pr.name}</h2>
                <p>Product ID: <strong>${pr.id}</strong></p>
            </header>

            <p><strong>${pr.amount}</strong></p>
            <p>${pr.desc}</p>
        </article>
        `;
});