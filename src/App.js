import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import ProjectsList from './components/ProjectsList';
// import Header from './components/Header';
import About from './components/About'
import{ Container } from 'reactstrap'
// import Skills from './components/Skills'
import './custom.scss'


function App() {
  return (
    <div className='App'>
      <header fluid>
        <h2>JOLDON KUTMANALIEV</h2>
      </header>
     <main className="mb-0">
       <About />
       
     {/* <Skills /> */}
       <Container>
        <ProjectsList />
       </Container>
      </main>
    </div>
  );
}

export default App;
