import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import BranchCard from './branchCard';
const items = [
  {
    id: 1,
    altText: 'Slide 0',
  },
  {
    id: 2,
    altText: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
      > 
        <div className="row justify-content-center">
            <div className="col-2">
                <div className="px-5">
                    <BranchCard />
                </div>
            </div>
            <div className="col-2">
                <div className="px-5">
                    <BranchCard />
                </div>
            </div>
            <div className="col-2">
                <div className="px-5">
                    <BranchCard />
                </div>
            </div>
            <div className="col-2">
                <div className="px-5">
                    <BranchCard />
                </div>
            </div>

            <div className="col-2">
                <div className="px-5">
                    <BranchCard />
                </div>
            </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
            {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;
