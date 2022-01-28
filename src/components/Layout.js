import styled from "styled-components"


export const Layout = (props) => {

    return (
        <ContCard>
            <ContTitle>

                <h1>Welcome to me Card List</h1>
                <small>
                    created with bootstrap, styled-components
                </small>

            </ContTitle>
            <ContAdd>
                {props.children}
            </ContAdd>
        </ContCard>
    )
}

const ContCard = styled.div`
padding:1rem;

`
const ContTitle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 21, 9, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );background-opacity:0.4;
border-radius:1rem;
color:#fff;
padding:1rem;
margin-top:1rem;
inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 10px 3px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

`

const ContAdd = styled.div`
margin-top:4rem;
margin-bottom:4rem;
`