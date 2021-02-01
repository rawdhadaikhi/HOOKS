import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/SearchBox';
import MovieCard from './components/MovieCard';
import Header from './components/Header';




const App = () => {
  const [movies,setMovies] = useState([
    {title:'peaky blinders',
    description:'serie britannique :crime, drama',
    posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
    rate: 5
  },
  { title:'Emily in Paris',
    description:'serie Netflix :comedy, drama',
    posteUrl:'https://media.senscritique.com/media/000019629533/source_big/Emily_in_Paris.jpg',
    rate: 4
   },
   {   title:'Outside the Wire',
      description:'film : Action, Adventure, Fantasy, Sci-Fi',  
    posteUrl:'https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    rate: 3
     },
     {   title:'Soul',
     description:' Animation, Adventure, Comedy, Family, Fantasy, Music',  
   posteUrl:'https://i-mom.unimedias.fr/2020/10/12/pixar_soul_disneyplus_affiche.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050',
   rate: 4
    },
    {   title:'Hotel Transylvania',
      description:' Animation, Comedy, Family',  
    posteUrl:'https://www.audrey-rozowykwiat.net/wp-content/uploads/2019/07/onesheet.jpg',
    rate: 5
     }
    ]);

    //-------------------search box
 
    const [searchValue, setSearchValue] = ("");
    const [movie, setMovie] = useState([]);

    // const [filterPro,setFilterPro] =useState("");

    const filtredMovie = movie.filter(item => {
      if (!searchValue) {
        return "no movie....." }
        else {
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
        }
      });
    
    // const [filterRate, setFilterRate] = useState([]);
    
    const handleInput = (e) => {    
      setSearchValue(e.target.value); 
     } 
   


//---------------------add new movie
    // const [newMovie, setNewMovie] = useState({title:"", description:"",posteUrl:"",rate:0});
     
    const handleInputNewMovie = (newMovie) => {
      setMovies([...movies,{...newMovie}]);
    }
  
  return (
    <div className="App">
     
      <header className="App-header">
      <Header text="Movie App"/>
       <SearchPage  filter={filtredMovie} search ={handleInput} /> 
      <div className="row">
      <MovieList movies ={movies}/>
      </div>
        </header>
        <MovieCard  handleinput={(m) => handleInputNewMovie(m)} />
    </div>
  );
}

export default App ;
