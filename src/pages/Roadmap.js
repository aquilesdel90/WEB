import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import Gema1 from '../assets/icontimeline-1.png';
import Gema2 from '../assets/icontimeline-2.png';
import Gema3 from '../assets/icontimeline-3.png';
import ImageRandom from '../assets/skin.png';
const Roadmap = () => {
  return (
    <div className="relative  flex justify-center items-center">
      <img
        src="https://gunnyvideos.s3.amazonaws.com/background_08.png"
        alt="bg home"
        className="absolute inset-0 w-full h-full "
      />

      <div className="flex flex-col">
        <div className="flex justify-between flex-col text-center text-white z-10 ">
          <h1 className="text-5xl uppercase font-bold mb-4 md:mb-8 text-yellow-500">
            ·Roadmap·
          </h1>
          <p className="text-lg md:text-md sm:text-sm leading-6 md:leading-8 mb-4 md:mb-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className=" flex justify-between flex-col text-center text-white z-10 roadmap-section">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema2} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema3} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                padding: 0,
                width: '45%',
                border: '10px solid #5930B7',
                color: '#fff',
                backgroundColor: '#5C567B',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              contentArrowStyle={{
                borderRight: 'transparent',
              }}
              date="2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%] p-0">
                {/* Contenido a la izquierda */}
                <img src={ImageRandom} alt="imagenIzquierda" />
              </div>
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">
                  Creative Director
                </h3>

                <span className="text-md font-sans">
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </span>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
