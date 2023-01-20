import styled from "styled-components";

export const Container=styled.div`
  font-size: 2.0rem;
  text-align: center;
  margin: 2rem 0 1rem;

  h3{
    color: #fff;
    margin-top: 1.5rem;
  }
`
export const Text=styled.div`
    color: #fff;
    background-color: orange;
`
export const ContainerMovies=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  
   
    @media (max-width:840px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Movies=styled.div`
    width: 40%;
    color: #fff;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
    align-items: center;

    
   
    @media (max-width:840px) {
        width: 100%;
    }
`
export const Name=styled.h1`
    color: #ccc;
   
`

export const Image=styled.img`
   max-width: 100%;
`

export const Span=styled.span`
    margin-bottom: 1rem;
`
export const Paragraph=styled.p`
     margin-bottom: 1rem;
`

export const Button=styled.a`
    text-decoration:none;
    color: orange;
    background-color: #fff;
    border-radius: 5px;
    padding: 1.0rem;
    &:hover{
        background-color: #c9c9c9;
    }
`
