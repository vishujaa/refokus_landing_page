import React from 'react';
import Cards from './Cards';

function Card() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto p-6 md:p-10 lg:p-20 flex flex-wrap lg:flex-nowrap gap-4'>
        {/* Adjust width to be responsive and use flex-wrap to allow cards to wrap */}
        <Cards width={"basis-full sm:basis-1/2 lg:basis-1/3"} start={false} para={true} />
        <Cards width={"basis-full sm:basis-1/2 lg:basis-2/3"} para={false} start={true} hover={true} />
      </div>
    </div>
  );
}

export default Card;
