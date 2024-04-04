import React from 'react'
import './Projects.scss';

function Projects() {
  return (
    <div className='rr '>
      <ul>
        <div className=' transition-all mb-14 lg:mt-12 w-full text-white/50 hover:bg-white/5 a-Block'>
        <img src="https://picsum.photos/seed/picsum/600/200" alt="Walley" className='w-full'/>
        <div className='mt-6'>
          <h2 className='text-2xl font-medium tracking-tight text-white/80'>Walley</h2>
          <p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui excepturi deleniti neque rem dicta! Magni sint provident obcaecati maiores iure. Commodi porro doloribus esse ex ullam distinctio maxime neque accusamus!</p>
          <ul class="flex flex-row flex-wrap mt-6"><li class="tool-name bg-hover/20 text-hover">HTML/CSS</li><li class="tool-name bg-hover/20 text-hover">JavaScript</li><li class="tool-name bg-hover/20 text-hover">WordPress</li><li class="tool-name bg-hover/20 text-hover">PHP</li><li class="tool-name bg-hover/20 text-hover">OpenCart</li></ul>
        </div>

        </div>
      </ul>


      </div>
  )
}

export default Projects