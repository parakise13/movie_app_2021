import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
      /* location의 state가 undefined면 다시 홈으로 돌아가게 한다.
      우리가 movie를 클릭해서 movie-detail로 가는게 아니라 주소에서 다이렉트로 치면 detail이 아닌 홈으로 가게 하는 것  */
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie2">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data2">
            <h3 className="movie__title2">{location.state.title}</h3>
            <h5 className="movie__year2">{location.state.year}</h5>
            <ul className="movie__genres2">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres__genre2">
                  {genre}
                </li>
              ))}
            </ul>
            <div class="summ__container">
              <p className="movie__summary2">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
