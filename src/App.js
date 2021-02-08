import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { v4 as uuidv4} from 'uuid';
import Filter from './components/Filter';


const App = () => {
  const [movies,setMovies] = useState([

    { id: uuidv4(),
      title:'peaky blinders',
    description:'serie britannique :crime, drama',
    posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
    rate: 5
  },
  { id:uuidv4(),
    title:'Emily in Paris',
    description:'serie Netflix :comedy, drama',
    posteUrl:'https://media.senscritique.com/media/000019629533/source_big/Emily_in_Paris.jpg',
    rate: 4
   },
   { id :uuidv4(), 
      title:'Outside the Wire',
      description:'film : Action, Adventure, Fantasy, Sci-Fi',  
    posteUrl:'https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    rate: 3
     },
     { id:uuidv4(),
       title:'Soul',
     description:' Animation, Adventure, Comedy, Family, Fantasy, Music',  
   posteUrl:'https://i-mom.unimedias.fr/2020/10/12/pixar_soul_disneyplus_affiche.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050',
   rate: 4
    },
    { id:uuidv4(),
        title:'Hotel Transylvania',
      description:' Animation, Comedy, Family',  
    posteUrl:'https://www.audrey-rozowykwiat.net/wp-content/uploads/2019/07/onesheet.jpg',
    rate: 5
     }
    ]);
 
    const [filterRate, setFilterRate] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    const search = (inputValue) =>{
      setSearchValue(inputValue);
    }

    const addNewMovie =(movie) =>{
      setMovies(movies.concat(movie));
    }

   

   
  return (
    <div className="App">
      <Header text="Movie App"/>
      <div>
       <Filter filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>
      <MovieList movies ={movies.filter(
        (movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase()))}
       addNewMovie={addNewMovie}/>
      </div>
    </div>
  );
}

export default App ;
