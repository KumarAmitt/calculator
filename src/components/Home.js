import React from 'react';
import Navbar from './Nav';

const Home = () => {
  const greet = 'Welcome to our page!';
  const p1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque autem consequatur cumque distinctio ducimus eligendi eos et facere fuga hic id illo inventore ipsam, ipsum, itaque laudantium magnam minus molestiae nemo nostrum odio perspiciatis quas qui quibusdam quo repudiandae sed sit sunt totam voluptas voluptatem voluptatibus. Ad alias amet aut autem blanditiis cumque dolor excepturi explicabo fugiat illo illum incidunt ipsa ipsum itaque, magni mollitia necessitatibus neque nihil nisi nobis numquam obcaecati porro, praesentium quasi reiciendis, tempora tenetur ullam veniam voluptas voluptates. Aspernatur aut blanditiis cum, dolor esse fugit laboriosam magni officiis perspiciatis quaerat reiciendis saepe soluta vitae.';
  const p2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum eaque id mollitia provident quis quo quod soluta! Ad, aliquid assumenda, atque aut consectetur, delectus deserunt dicta dignissimos dolor doloremque eaque error eveniet fuga ipsa ipsam iure iusto laboriosam minus natus nihil nulla numquam optio perspiciatis quas quasi qui quia ratione rerum sed soluta suscipit tempora temporibus vero? Ad animi architecto, aspernatur consequuntur culpa deserunt dignissimos dolor esse facilis libero maiores, molestias nisi numquam officia repellat temporibus voluptates! Consequatur ducimus explicabo in optio repellat. Dolorum, eaque, esse. Dicta, nihil, saepe';
  return (
    <>
      <Navbar />
      <div>
        <h1>{greet}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </>
  );
};

export default Home;
