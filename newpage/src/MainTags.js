import styled from "styled-components";

export const MenuItem = styled.li`
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Button = styled.button`
  border: 1px solid #f7941e;
  border-radius: 5px;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #f7941e;
  padding: 13px 24px;
  background: none;
  &:hover {
    background: #f7941e;
    color: white;
  }
`;
export const Button2 = styled(Button)`
  background: #f7941e;
  color: white;
  &:hover {
    background: none;
    color: #f7941e;
  }
`;
export const LearnMoreBtn = styled(Button)`
  padding:21px 47px;
`;
export const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 50%;
`;

export const SectionGift = styled.section`
  background: #f1f1f2;
`;


export const TextBlock=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
gap:26px;
width:28%;
margin:auto;
`

export const TextBlockP=styled.p`
font-size: 20px;
line-height: 1.5;
text-align: justify;
color: #000000;
`

export const GiftParent=styled.div`
display:flex;
`
export const FooterParent = styled.ul`
display:flex;
justify-content:center;
gap:50px
`