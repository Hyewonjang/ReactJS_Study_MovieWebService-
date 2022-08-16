import React from "react";
import { PropTypes } from 'prop-types';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component {
    state = {
        isLoading : true,
        movies : []
    };
    // axios 오래 걸림 - 따라서 componentDidMount 실행까지 시간이 꽤 걸림을 알려줌.
    // 방법 1 
    // async componentDidMount(){ //async : axios 오래 걸림 - 따라서 componentDidMount 실행까지 시간이 꽤 걸림을 알려줌.
    //     // setTimeout(()=>{
    //     //     this.setState({isLoading:false, book: false}) //선언되지 않은 state 값을 설정 가능 - future state로 간주
    //     // }, 6000)
    //     const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
    // }
    // 방법2 -만약 async를 사용해서 axios.get 완료까지의 시간을 기다리도록 하지 않는다면 이를 하기 위해 더 많은 코드가 필요한 일을 해야 할 것임.
    getMovies = async () => {
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
        // console.log(movies.data.data.movies);

        //es6 최신 문법
        const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        // console.log(movies);

        // this.setState({movies : movies})
        // 지름길
        this.setState({movies, isLoading:false});
    }
    componentDidMount(){ //async : axios 오래 걸림 - 따라서 componentDidMount 실행까지 시간이 꽤 걸림을 알려줌.
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return (
           <section className="container">
                {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                  </div> 
                ):(
                    <div className="movies">
                       {movies.map(movie => {
                            // console.log(movie);
                            return <Movie 
                                        key={movie.id} 
                                        id={movie.id} 
                                        year={movie.year} 
                                        title={movie.title} 
                                        summary={movie.summary} 
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres} />
                        })} 
                    </div>
                )}
            </section>
        )
    }
}

export default Home;