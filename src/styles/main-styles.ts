import styled from 'styled-components'

export const StyledCardsContainer = styled.div`
display: flex;
align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
@media (max-width: 900px) {
grid-template-columns: repeat(5, 1fr);

}
`

export const StyledCard = styled.div`
display: flex;
width: 60px;
word-break: break-all;
flex-direction: column;
align-items: center;
margin: 20px;
border-radius: 10px;
padding: 5px;
cursor: pointer;
transition: 0.8s;
background: #f2f2f2;
box-shadow:  7px 7px 14px #cecece, 
             -7px -7px 14px #ffffff;
:active,
:focus,
:hover {
    background: #f2f2f2;
box-shadow: inset 7px 7px 14px #cecece, 
            inset -7px -7px 14px #ffffff;
}
`