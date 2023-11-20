import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import Gema1 from '../assets/icontimeline-1.png';
import Gema2 from '../assets/icontimeline-2.png';
import Gema3 from '../assets/icontimeline-3.png';
import Gema4 from '../assets/icontimeline-4.png';
import Gema5 from '../assets/icontimeline-5.png';

import ImageRandom from '../assets/skin.png';
const Roadmap = () => {
  return (
    <div className="relative h-full xl:h-[100%] w-[100%] flex justify-center items-center">
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
              date="2022 Q1"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema1} alt="gema1" />}
            >
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">Phase 1</h3>

                <ul>
                  <li className="text-decoration-none text-md font-sans">
                    Team Formation
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Creative Project Planning
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Value Proposition
                  </li>
                </ul>
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
              date="2022 Q2"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema2} alt="gema1" />}
            >
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">Phase 2</h3>

                <ul>
                  <li className="text-decoration-none text-md font-sans">
                    Creation Economic Model
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Development Whitepaper
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Website Development
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Value Proposition
                  </li>
                </ul>
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
              date="2023 Q3"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema3} alt="gema1" />}
            >
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">Phase 3</h3>

                <ul>
                  <li className="text-decoration-none text-md font-sans">
                    Alpha develompment
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    AWS Database Creation
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Creation of Assets on the Algorand Network.
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Gacha System Development
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Inugis Airdrop
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Heroes Airdrop
                  </li>
                </ul>
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
              date="2023 Q4"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema4} alt="gema1" />}
            >
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">Phase 5</h3>

                <ul>
                  <li className="text-decoration-none text-md font-sans">
                    Cooperative private Alpha Release
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Gacha System Launch
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Cooperative Open Alpha Release
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Tournament Launch.
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
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
              date="2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<img src={Gema5} alt="gema1" />}
            >
              <div className="flex-1 w-[50%]">
                <h3 className="text-yellow-500 font-bold uppercase">Phase 6</h3>
                <ul>
                  <li className="text-decoration-none text-md font-sans inline-block">
                    Development of 2nd Generation Inugis
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Continuing PVP Game Development
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    UI/UX Update
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    Development of Animated Short Films
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    PVP Beta Launch
                  </li>
                  <li className="text-decoration-none text-md font-sans">
                    First battle pass release
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
