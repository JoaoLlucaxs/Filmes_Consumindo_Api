import React,{useState} from 'react'
import Header from '../Header/Header'
import {moviesFilms} from '../../utils/utilsMovies'
import {Container,Text,ContainerMovies,Movies,Name,Image,Span,Paragraph,Button} from '../../style/styles'

interface TypeMovie{
    id:number,
      movieName:string,
      imgUrl:string,
        director: string,
      country:string,
      launch:string,
      description:string,
    trailer: string,
      avgRating: number,
}

function MoviesDb() {
    const[dbmovie,setDbMovie]=useState<TypeMovie[]>(moviesFilms)

  return (
    <Container>
        <Text>
            <Header text='Filmes Favoritos ☀'/>
        </Text>
        <ContainerMovies>
            {dbmovie.map((mov)=>(
                <Movies key={mov.id}>
                    <Name>{mov.movieName}</Name>
                    <Image src={mov.imgUrl}/>
                    <Span>{mov.description}</Span>
                    <Paragraph>{mov.director} - {mov.country}</Paragraph>
                    <Paragraph>{mov.launch}</Paragraph>
                    <Button href={mov.trailer}>Ver Trailer</Button>
                </Movies>
            ))}
        </ContainerMovies>
    </Container>
  )
}

export default MoviesDb;