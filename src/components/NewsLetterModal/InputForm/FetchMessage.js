function FetchMessage({ success, pending, isInitial }) {
  if (!isInitial) {
    if (pending) {
      return (
        <div className="py-3 font-medium text-gray-800 text-right">
          Pending...
        </div>
      );
    }

    if (!pending && success) {
      return (
        <div className="py-3 font-medium text-green-500 text-right">
          Success!
        </div>
      );
    }

    if (!pending && !success) {
      return (
        <div className="h-6 font-medium text-[#eb0028] text-right">
          Please try again!
        </div>
      );
    }
  }
}

export default FetchMessage;
