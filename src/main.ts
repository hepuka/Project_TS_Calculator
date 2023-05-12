type Operator = "+" | "-" | "*" | "/";

const exe = document.querySelector("#btn") as HTMLButtonElement;

exe?.addEventListener("click", (): void => {
  const firstStr = document.querySelector<HTMLInputElement>("#number1").value;
  const secondStr = document.querySelector<HTMLInputElement>("#number2").value;
  const operator =
    document.querySelector<HTMLSelectElement>("#selectoperator").value;

  const validInput: boolean =
    isNumber(firstStr) &&
    isOperator(operator as Operator) &&
    isNumber(secondStr);

  if (validInput) {
    const fisrtNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(fisrtNum, operator as Operator, secondNum);
    console.log(result);

    (<HTMLElement>(
      document.getElementById("result")
    )).innerText = `Result: ${result.toString()}`;
  } else {
    console.log("Invalid input!");
  }
});

function isNumber(str: string): boolean {
  const mybeNUM = parseInt(str);

  const isNum: boolean = !isNaN(mybeNUM);

  return isNum;
}

function isOperator(operator: Operator): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function calculate(fisrtNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return fisrtNum + secondNum;
    case "-":
      return fisrtNum - secondNum;
    case "*":
      return fisrtNum * secondNum;
    case "/":
      return fisrtNum / secondNum;
  }
}
