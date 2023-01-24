import styled from 'styled-components'

interface ICard {
    height?:string
  isCompleted?:boolean

}
export const CardStyled = styled.div<ICard>`
max-width: 260px;
display: flex;
gap: 8px;
flex-direction: column;
justify-content: space-between;
max-height: 114px;
background-color: ${(props)=>props.isCompleted ? props.theme.completedCard : props.theme.cardColor};
padding: 12px 12px;


b{
  width: 236px;
  display: flex;
  align-items: center;
   font-family: "SF Pro Display";
  font-size: 13px;
  font-weight: bold;
  line-height: 15px;
  height: 24px;
}

p{
line-height: 18px;
    max-width: 236px;
    word-break: break-all;
  font-family: "SF Pro Display";
  font-size: 14px;
  letter-spacing: 0.3px;
}
  border-radius: 6px;
  box-shadow: 0 2px 7px -2px rgba(0,0,0,0.2);

`

interface IStatusBtn {
  background:string;
}
export const StatusBtn = styled.div<IStatusBtn>`
width: 8px;
height: 8px;
cursor: pointer;
border-radius:50%;
background-color: ${({background})=>background};

`