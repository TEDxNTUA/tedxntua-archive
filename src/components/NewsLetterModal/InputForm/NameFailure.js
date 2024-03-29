function NameFailure({ isEmpty, isSmall, isBig, failure }) {
  var errorText = "";

  if (isEmpty) {
    errorText = "Name is empty";
  }

  if (!isEmpty && isSmall) {
    errorText = "Name is small";
  }

  if (!isEmpty && isBig) {
    errorText = "Name is beyond the character limit";
  }

  return failure ? (
    <div className="mt-2 text-sm text-failure-500 text-right">{errorText}</div>
  ) : null;
}

export default NameFailure;
