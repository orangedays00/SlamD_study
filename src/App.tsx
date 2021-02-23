import "./styles.css";
import { FC } from 'react';
import CharacterList, { Character } from './CharacterList';
import Img from './og.jpg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./Page1";
import { Link } from "react-router-dom";

const App: FC = () =>{
  const characters: Character[] = [
    {
      id:1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id:2,
      name: '流川楓',
      grade: 1,
      height: 187.0,
    },
    {
      id:3,
      name: '宮城リョータ',
      grade: 2,
      height: 168.0,
    },
    {
      id:4,
      name: '三井寿',
      grade: 3,
      height: 184.0,
    },
    {
      id:5,
      name: '赤城剛憲',
      grade: 3,
      height: 197.0,
    },
  ];

  return (
    <div className="container">
      <BrowserRouter>
      <Link to={`/Page1`}>
        <img src={Img}/>
      </Link>
      </BrowserRouter>
      <header>
        <h1>SLAM DUNK 登場人物</h1>
      </header>
      <CharacterList school="湘北高校" characters={characters} />
      <BrowserRouter>
      　<Switch>
        <Route exact path="/Page1" component={Page1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
