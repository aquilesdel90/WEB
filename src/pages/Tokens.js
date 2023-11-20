const Tokens = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_07.png"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="flex flex-col-reverse sm:flex-row flex-1 justify-center items-center max-w-6xl mx-auto space-y-4 z-10">
        <div className="flex-1 flex justify-center items-center max-w-6xl mx-auto space-y-4 flex-col">
          <h2 className="text-yellow-500 text-3xl font-bold text-center sm:text-start uppercase">
            Tokens
          </h2>
          <div className="flex items-end w-full p-4">
            <p className="text-white text-xl text-center sm:text-start">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[90vh] pr-4 sm:pr-20 flex justify-center items-start flex-col max-w-6xl mx-auto space-y-4">
          <img
            src="https://gunnyvideos.s3.amazonaws.com/carts.png"
            className="w-full sm:w-[90vh]"
            alt="img skin"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
