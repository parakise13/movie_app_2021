import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    //1. 비어있는 movie array생성. 실제로 처음부터 내용물을 선언할 필요는 없음. 미래에 있을 수도 있는 것에 대한 준비
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    /* 2. axios를 설치하고 movie api주소를 axios에 연결해주고 변수에 저장해줌. 그런데 axios는 항상 빠른게 아니라 JS에게 componentDidMount함수가 끝날때까지 약간 시간이 걸릴 수 있다고 말해줘야함. => async를 사용 */
    /*this.setState({ movies:movies });
    위에서 첫번째 movie는 setState의 movies이고 뒤의 것은 axios에서 가져온 movie임. 우리는 이것을 ES6덕분에 하기와 같이 줄여서 사용 가능함 */
    this.setState({ movies, isLoading: false });
    /* setState를 통해서 두개를 가져옴. movies를 가져오고 loading을 false로 변경. movie가 가져와지면 loading이 we are ready로 바뀜 */
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
              // 우리는 항상 map으로부터 뭔가를 return 해야함
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
