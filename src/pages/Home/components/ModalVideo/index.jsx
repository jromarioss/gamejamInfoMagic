import X from '../../../../assets/x.png'

export const ModalVideo = ({ closeModal }) => {

  const handleClose = () => {
    closeModal();
  }

  return (
    <div 
      className='fixed w-full h-full z-10 flex items-center justify-center bg-zinc-900 bg-opacity-80'
      onClick={handleClose}
    >
      <div className='absolute top-3 right-3 md:top-8 md:right-8'>
        <img src={X} alt='' className='md:w-[64px]' />
      </div>

      <video
        className=' h-[450px] md:h-[700px]'
        controls
        autoPlay
        loop
        src='https://www.desenvolvimento.mbrplay.com.br/game/JAM/video/VideoJAM.mp4'
      />
    </div>
  )
}