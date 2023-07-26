import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';

const App = () => {
  return (
    // <div>
    //   <h1>My Book Library</h1>
    //   <BookList />
    // </div>

  // <div>
  //     <h1>Rick and Morty API</h1>
  //     <CharacterList />
  //   </div>


  <Router>
  <div>
    <h1 className='name'>Rick and Morty API</h1>
    <Switch>
      <Route exact path="/" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterInfo} />
    </Switch>
  </div>
</Router>



  );
};

export default App;

// "/characters/:id" 


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CharacterList from './CharacterList';
// import CharacterInfo from './CharacterInfo';

// const App = () => {
//   return (
//     <div>
//       <h1>Rick and Morty API</h1>
//       <Routes>
//         <Route path="/" element={<CharacterList />} />
//         <Route path="/characters/:id" element={<CharacterInfo />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
