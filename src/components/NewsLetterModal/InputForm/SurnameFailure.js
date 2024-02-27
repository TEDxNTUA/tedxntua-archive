function SurnameFailure({ isEmpty, isSmall, isBig, failure }) {
  var errorText = "";

  if (isEmpty) {
    errorText = "Surname is empty";
  }

  if (!isEmpty && isSmall) {
    errorText = "Surname is small";
  }

  if (!isEmpty && isBig) {
    errorText = "Surname is beyond the character limit";
  }

  return failure ? (
    <div className="mt-2 text-sm text-failure-500 text-right">{errorText}</div>
  ) : null;
}

export default SurnameFailure;
