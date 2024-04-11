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
        <br /> <br /><i>***Refreshing this page loses all of your progress. Be sure to download the CSV.***</i>
        <br /><br /><b>Please choose one option:</b></p>
        
        <Stack spacing={2} direction={"row"} alignItems="center" justifyContent="center">
          
          <Button href="#new" variant="contained">Create New CSV</Button>
          <Button href="#add" variant="contained">Add To Existing CSV</Button>

        </Stack>

        
        
        <Container id="new">
          <h2>Create New CSV</h2>
          <p>1. Fill out the information for a new contact. 
          <br />2. When you are done, press <i>Add New Contact</i> to add it to the file. 
          <br /> 3. Repeat steps 1-2 for the next contact. 
          <br />
            <br />When you have finished adding all contacts, press <i>Generate CSV</i> to download your file.
            <br /><br />You can review your progress and edit previous contacts with <i>See Previously Added Users</i>.
            <br />There are more entry fields under <i>Show Advanced Info</i>.</p>
          <Form showUploadButton={false}/>
        </Container>
        
        <Container id="add">
          <h2 >Add To Existing CSV</h2>
          <p><i>***This is an entirely separate form and .csv from <b>Create New CSV</b>***</i>
          <br /> <br />1. Press the <i>Choose File</i> button to upload your file.*
            <br />2. Fill out the information for a new contact. 
          <br />3. When you are done, press <i>Add New Contact</i> to add it to the file. 
          <br /> 4. Repeat steps 2-3 for the next contact. 
          <br />
            <br />When you have finished adding all contacts, press <i>Generate CSV</i> to download your file.
            <br /><br />You can review your progress and edit previous contacts with <i>See Previously Added Users</i>.
            <br />There are more entry fields under <i>Show Advanced Info</i>.
            <br />
            <br /> <i>*Note: The file you upload must match the template. 
              You can download the .csv template from the <b>Create New CSV</b> section.</i></p>
            
          <Form showUploadButton={true}/>

        </Container>
        
       
      </Container>

      
    </div>
  );
}

export default App;
