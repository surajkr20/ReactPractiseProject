import styled from "styled-components";

const NumberSelector = ({error, setError, selected, setSelected}) => {
  let arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) =>{
    setSelected(value)
    setError('')
  }
  
  return (
    <NumberContainer className="mt-6">
      <p className="text-red-400">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value == selected}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="font-serif">Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
    .flex{
        display : flex;
        gap : 24px;

    }
    p{
        font-size : 17px;
        font-weight : 600;
        line-height : 50px;
        margin-left : 420px;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
