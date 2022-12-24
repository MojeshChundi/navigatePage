import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./ProductItemForm.module.css";

function ProductItemForm(props) {
  const [FormIsValid, SetFormValid] = useState(true);
  const enteredAmount = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmountNum = enteredAmount.current.value;
    const enteredAmountNumber = +enteredAmountNum;
    if (
      enteredAmountNum.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      SetFormValid(false);
      return;
    }
    console.log("muber:", enteredAmountNum);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={enteredAmount}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> +Add</button>
      {!FormIsValid && <p>please enter valid input</p>}
    </form>
  );
}

export default ProductItemForm;
