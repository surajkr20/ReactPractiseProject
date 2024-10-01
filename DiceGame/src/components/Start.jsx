
import './Start.css'

const Start = ({toggle}) => {
    
  return (
    <>
      <div className='flex justify-around items-center'>
        <div className=''>
            <img src="./img/Dice.jpg" alt="" className=''/>
        </div>
        <div className='w-[40vw] start-play'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    </>
  )
}

export default Start;
