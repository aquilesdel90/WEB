import { Fade } from 'react-awesome-reveal';

const Team = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://gunnyvideos.s3.amazonaws.com/marco.png',
      title: 'Card 1',

      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 2,
      image: 'https://gunnyvideos.s3.amazonaws.com/marco.png',
      title: 'Card 2',

      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 3,
      image: 'https://gunnyvideos.s3.amazonaws.com/marco.png',
      title: 'Card 3',

      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
    {
      id: 4,
      image: 'https://gunnyvideos.s3.amazonaws.com/marco.png',
      title: 'Card 4',

      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    },
  ];
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_09.png"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="h-[50%] flex justify-center flex-col  text-center text-white z-10">
        <h1 className="text-5xl uppercase font-bold mb-4 md:mb-8 text-black">
          ·Team·
        </h1>
        <p className="text-black text-lg md:text-md sm:text-sm leading-6 md:leading-8 mb-4 md:mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua...
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 z-10 p-2">
          {cardData.map(card => (
            <div key={card.id}>
              <Fade direction="up" triggerOnce>
                <div key={card.id} className="card relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-lg w-full h-[300px] object-cover"
                  />
                  <div className="flex justify-start items-center h-full flex-col absolute bottom-0 left-0 w-full p-4"></div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
