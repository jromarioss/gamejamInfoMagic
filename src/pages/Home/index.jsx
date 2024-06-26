import { useEffect, useState } from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';

import { ModalVideo } from './components/ModalVideo';
import Circle from './components/Circle';

import Magos from '../../assets/mago.png';
import ArrowUp from '../../assets/arrowUp.png';
import Imagem7 from '../../assets/imagem_7.png';
import Logo from '../../assets/logo.png';
import Imagem8 from '../../assets/imagem_8.png';
import Imagem9 from '../../assets/imagem_9.png';
import Imagem10 from '../../assets/imagem_10.png';
import Imagem11 from '../../assets/imagem_11.png';

export const Home = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const ShowModalVideoTrue = () => {
    setShowModalVideo(true);
  }

  const ShowModalVideoFalse = () => {
    setShowModalVideo(false);
  }

  const handleScroll = () => {
    const element = document.getElementById('um');
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + elementPosition;

    if (window.scrollY >= offsetPosition) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-gray-900 w-full h-full text-gray-100 flex flex-col gap-3'>
      {showModalVideo && <ModalVideo closeModal={ShowModalVideoFalse} />}

      {showScrollToTop && (
        <button 
          className='fixed bottom-4 right-4 hover:scale-110 transition duration-300 md:w-[64px] md:right-8 md:bottom-8' 
          onClick={() => scroll.scrollToTop()}
        >
          <img src={ArrowUp} alt='Arrow Up' className='md:w-[64px]' />
        </button>
      )}

      <div className='w-full min-h-screen flex flex-col gap-8 p-4 items-center bg-center bg-cover bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${Magos})` }}>
        <div className='w-full h-auto flex items-center flex-col gap-8'>
          {/* <img src={Logo} alt='' className='w-[300px] my-[32px] md:w-[550px]' /> */}
          <ScrollLink
            to='um'
            smooth={true} 
            duration={500} 
            offset={-52}
            className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50' 
          >
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Prisão Temporal</h2>
          </ScrollLink>
          <ScrollLink
            to='dois'
            smooth={true} 
            duration={500} 
            offset={-52}
            className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50' 
          >
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Aura de Economia</h2>
          </ScrollLink>
          <ScrollLink
            to='tres'
            smooth={true} 
            duration={500} 
            offset={-52}
            className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50' 
          >
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Fortuna do Portal</h2>
          </ScrollLink>
          <ScrollLink
            to='quatro'
            smooth={true} 
            duration={500} 
            offset={-52}
            className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50'
          >
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Sifão de Riqueza</h2>
          </ScrollLink>
          <ScrollLink
            to='cinco'
            smooth={true} 
            duration={500} 
            offset={-52}
            className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50'
          >
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Pilares da Avarícia</h2>
          </ScrollLink>

          <button id='um' className='border-2 border-gray-100 rounded-md py-1 w-[250px] hover:scale-110 transition duration-300 md:py-4 md:w-[400px] bg-white bg-opacity-50' onClick={ShowModalVideoTrue}>
            <h2 className='text-center text-2xl font-bold md:text-4xl text-zinc-600'>Assistir a história</h2>
          </button>
        </div>

        <Element name='um' className='w-[280px] border border-yellow-400 p-2 rounded-md flex flex-col items-center gap-2 md:w-[500px] md:rounded-lg md:gap-4 md:p-8 bg-white bg-opacity-50'>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900 md:text-4xl text-zinc-600'>Prisão Temporal</h3>
            <Circle value={'150'} />
          </div>
          <p className='text-md text-center md:text-2xl text-zinc-600'>Durante a reconstrução, Archmage Eldarion descobriu um feitiço antigo que poderia manipular o tempo. Com esse poder, ele criou a Prisão Temporal, um feitiço que reduz o tempo de prisão mágica, permitindo que magos e habitantes superem as adversidades com mais rapidez.</p>
          <p className='text-md text-center md:text-2xl text-zinc-900 font-bold'>Facilita o Puzzle para sair da prisão.</p>
          {/* <img className='h-[184px] md:h-[300px]' src={Imagem7} /> */}
        </Element>

        <Element name='dois' className='w-[280px] border border-pink-800 p-4 rounded-md flex flex-col items-center gap-2 md:w-[500px] md:rounded-lg md:gap-4 md:p-8 bg-white bg-opacity-50'>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900 md:text-4xl text-zinc-600'>Aura de Economia</h3>
            <Circle value={'200'} />
          </div>
          <p className='text-md text-center md:text-2xl text-zinc-600'>Enquanto trabalhavam na restauração econômica de Eldoria, a maga Selene conjurou a Aura de Economia. Esta aura mágica reduzia os custos de pagamento e permitia que os recursos fossem distribuídos de maneira mais eficiente, ajudando os sobreviventes a reerguer a cidade sem grandes sacrifícios.</p>
          <p className='text-md text-center md:text-2xl text-zinc-900 font-bold'>Reduz os custos de pagamento em 50%.</p>
          {/* <img className='h-[184px] md:h-[300px]' src={Imagem8} /> */}
        </Element>

        <Element name='tres' className='w-[280px] border border-purple-800 p-4 rounded-md flex flex-col items-center gap-2 md:w-[500px] md:rounded-lg md:gap-4 md:p-8 bg-white bg-opacity-50'>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900 md:text-4xl text-zinc-600'>Fortuna do Portal</h3>
            <Circle value={'200'} />
          </div>
          <p className='text-md text-center md:text-2xl text-zinc-600'>Em uma expedição mágica, o mago Thalon encontrou um portal antigo que canalizava energia cósmica. Ao estudá-lo, ele desenvolveu o feitiço Fortuna do Portal, que atraía riqueza ao cruzar certos pontos de Eldoria, incentivando os habitantes a explorarem e reconstruírem as áreas abandonadas..</p>
          <p className='text-md text-center md:text-2xl text-zinc-900 font-bold'>Concede +50 moedas ao cruzar o ponto de partida.</p>
          {/* <img className='h-[184px] md:h-[300px]' src={Imagem9} /> */}
        </Element>

        <Element name='quatro' className='w-[280px] border border-blue-400 p-4 rounded-md flex flex-col items-center gap-2 md:w-[500px] md:rounded-lg md:gap-4 md:p-8 bg-white bg-opacity-50'>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900 md:text-4xl text-zinc-600'>Sifão de Riqueza</h3>
            <Circle value={'250'} />
          </div>
          <p className='text-md text-center md:text-2xl text-zinc-600'>A maga Elandra, ao perceber a necessidade de equilibrar os recursos entre os habitantes, criou o encantamento Sifão de Riqueza. Este feitiço permitia drenar moedas de um adversário ao passar pelo início da cidade, redistribuindo a riqueza e garantindo a sobrevivência de todos.</p>
          <p className='text-md text-center md:text-2xl text-zinc-900 font-bold'>Retira 15 moedas de todos os jogadores.</p>
          {/* <img className='h-[184px] md:h-[300px]' src={Imagem10} /> */}
        </Element>

        <Element name='cinco' className='w-[280px] border border-amber-700 p-4 rounded-md flex flex-col items-center gap-2 md:w-[500px] md:rounded-lg md:gap-4 md:p-8 bg-white bg-opacity-50'>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='text-2xl font-bold text-gray-900 md:text-4xl text-zinc-600'>Pilares da Avarícia</h3>
            <Circle value={'250'} />
          </div>
          <p className='text-md text-center md:text-2xl text-zinc-600'>Em uma tentativa de incentivar a reconstrução das propriedades, o mago Kael desenvolveu os Pilares da Avarícia. Este feitiço concedia moedas extras quando um adversário parava em uma propriedade restaurada, recompensando aqueles que investiam no renascimento de Eldoria.</p>
          <p className='text-md text-center md:text-2xl text-zinc-900 font-bold'>Duplica o valor das moedas quando o adversário parar em sua propriedade.</p>
          {/* <img className='h-[184px] md:h-[300px]' src={Imagem11} /> */}
        </Element>
      </div>
    </div>
  )
}