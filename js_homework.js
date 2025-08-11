function checkProbabilityTheory(count) {
    let EvenNumbersCount = 0;
    let OddNumbersCount = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (num % 2 === 0) {
            EvenNumbersCount = EvenNumbersCount +1;
        } else {
            OddNumbersCount = OddNumbersCount + 1;
        }
    }
    let EvenNumbersPercent = (EvenNumbersCount / count) * 100;
    let OddNumbersPercent = (OddNumbersCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парні числа:", EvenNumbersCount);
    console.log("Непарні числа:", OddNumbersCount);
    console.log("Відсоток парних:", EvenNumbersPercent.toFixed(3) + "%");
    console.log("Відсоток непарних:", OddNumbersPercent.toFixed(3) + "%");
}
checkProbabilityTheory(1000);
