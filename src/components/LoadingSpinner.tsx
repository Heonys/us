const LoadingSpinner = () => {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center">
      <span className="loading loading-spinner loading-lg text-[#13C296]"></span>
    </div>
  );
};

export default LoadingSpinner;
