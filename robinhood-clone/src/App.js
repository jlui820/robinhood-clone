import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';

function App() {
  return (
    <div className="App">
      <div className="app_header">
        <Header />
      </div>
      <div className="app_body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;

//47:48