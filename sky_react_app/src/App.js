import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Table from './components/Table.js'
import FileUpload from './components/FileUpload.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div>
      <Header />
      <FileUpload />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
