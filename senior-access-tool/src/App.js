import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Form from './components/Form';

function App() {
  const getUploadedFile = (event) => {
    console.log("in getUploadedFile")
  };

  return (
    <div className="App">
      <Container>
      
        <h1>BetterUnite Conversion Tool</h1>
        <p>This tool allows you to organize all of your contacts into files that are ready to import into BetterUnite. 
        <br /><br /><b>Please choose one option:</b></p>
        
        <Stack spacing={2} direction={"row"} alignItems="center" justifyContent="center">
          
          <Button href="#new" variant="contained">Create New CSV</Button>
          <Button href="#add" variant="contained">Add To Existing CSV</Button>

        </Stack>

        
        
        <Container id="new">
          <h2>Create New CSV</h2>
          <p>1. Fill out the information for a new contact. 
          <br />2. When you are done, press "Add New Contact" to add it to the file. 
          <br /> 3. Repeat these steps for the next contact. 
          <br />
            <br />When you have finished adding all contacts, press "Generate CSV" to review and download your file.</p>
          <Form showUploadButton={false}/>
        </Container>
        
        <Container id="add">
          <h2 >Add To Existing CSV</h2>
          <p>1. Fill out the information for a new contact. 
          <br />2. When you are done, press "Add New Contact" to add it to the file. 
          <br /> 3. Repeat these steps for the next contact. 
          <br />
            <br />When you have finished adding all contacts, press "Generate CSV" to review and download your file.</p>
            
          <Form showUploadButton={true}/>

        </Container>
        
       
      </Container>

      
    </div>
  );
}

export default App;
