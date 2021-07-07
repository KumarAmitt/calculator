import React from 'react';

const Quote = () => {
  const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.';
  const cite = 'William Paul Thurston';
  return (
    <>
      <blockquote data-testid="quote">
        {quote}
        <cite>
          &mdash;
          {cite}
        </cite>
      </blockquote>
    </>
  );
};

export default Quote;
