import { Tick, Cross } from "./Icons";

function InputMark({ success, failure }) {
  if (success) {
    return <Tick />;
  }

  if (failure) {
    return (
      // <div className="-translate-y-3.5">
      <Cross />
      // </div>
    );
  }
}

export default InputMark;
