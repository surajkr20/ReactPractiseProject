
const RoleDice = ({currentDice, roleDice}) => {
  return (
    <div>
      <div onClick={roleDice} className='flex justify-center items-center rounded'>
        <img src={`./img2/inverted-dice-${currentDice}.png`} alt="" className='h-[150px] w-[150px] rounded-[30px]'/>
      </div>
      <p className='text-center font-serif text-[20px] mt-4'>Click on Dice Roll</p>
      <div>
        <button></button>
      </div>
    </div>
  )
}

export default RoleDice;

