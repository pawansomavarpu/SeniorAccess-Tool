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
    <div className="App" >
      <Container id = "top">
      <div className="background" style = {{borderRadius: '25px'}}>
        <h1 style={{ 
          backgroundColor: '#8e7cc3', 
          color: 'white', 
          textAlign: 'center', 
          padding: '10px',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px' }}
          >BetterUnite Conversion Tool</h1>
        <p style={{ color: '#da1f1f', fontSize: '20px' }}>
        <i><b>Important: Refreshing the page loses all of your progress! Be sure to download the CSV before.</b></i></p>
        <hr style={{ borderColor: '#073763' }}></hr>
        <p style={{fontSize: '20px' }}>This tool allows you to organize all of your contacts into files that are ready to import into BetterUnite. <br /> <br /></p>
        <p style={{fontSize: '20px' }}><b>Please choose one option:</b></p>
        
        <Stack spacing={2} direction={"row"} alignItems="center" justifyContent="center">
          
          <Button href="#new" variant="contained" 
            sx={{
              borderRadius: '25px', // Adjust this value to control the roundness
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#073763'
            }}>Create New CSV</Button>
          <Button href="#add" variant="contained"
            sx={{
              borderRadius: '25px', // Adjust this value to control the roundness
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#073763'
              // Add other styles as needed
            }}>Add To Existing CSV</Button>

        </Stack>
        <p ></p>
        
        <Container id="new">
          <h2 style={{ backgroundColor: '#8e7cc3', color: 'white', textAlign: 'center', padding: '10px', marginTop: '50px', borderRadius: '25px'}}>Create New CSV</h2>
          <p style= {{fontSize: 17}}>
            1. Fill out the information for a new contact, leaving any unnecessary fields blank. <br />
            2. When you are done, press <i style={{color: '#3d85c6'}}><b>Add New Contact </b></i>to add it to the file. <br />
            3. Repeat steps 1-2 for the next contact. <br /><br />
            When you have finished adding all contacts, press <i><b style={{color: '#3d85c6'}}>Generate CSV</b></i> to download your file.<br />
            You can review your progress and edit previous contacts with <b style={{color: '#3d85c6'}}><i>See Previously Added Users</i></b>.<br />
            If needed, there are more entry fields under <i><b style={{color: '#3d85c6'}}>Show Advanced Info</b ></i>.
            <br /><br />
          </p>
          <Form showUploadButton={false}/>
        </Container>
        
        <p ><br /> <br /></p>

        <Container id="add">
          <h2 style={{ backgroundColor: '#8e7cc3', color: 'white', textAlign: 'center', padding: '10px', borderRadius: '25px' }}>Add To Existing CSV</h2>
          <p style= {{fontSize: 17}}><i>***This is an entirely separate form and .csv from <b>Create New CSV</b>***</i><br /> <br />
            1. Press the <i style={{color: '#3d85c6'}}><b>Choose File</b></i> button below to upload your file. <br />
            2. Fill out the information for a new contact, leaving any unnecessary fields blank. <br />
            3. When you are done, press <i style={{color: '#3d85c6'}}><b>Add New Contact</b></i> to add it to the file. <br />
            4. Repeat steps 1-2 for the next contact. <br /><br />
            When you have finished adding all contacts, press <i><b style={{color: '#3d85c6'}}>Generate CSV</b></i> to download your file.<br />
            You can review your progress and edit previous contacts with <b style={{color: '#3d85c6'}}><i>See Previously Added Users</i></b>.<br />
            If needed, there are more entry fields under <i><b style={{color: '#3d85c6'}}>Show Advanced Info</b ></i>.
            <br /><br /> <br /> <i>*Note: The file you upload must match the template. 
</i></p>
            
          <Form showUploadButton={true}/>
  
          

        </Container>
        
        <Button href="#top" variant="contained" style={{marginTop: '10px', marginBottom: '20px' }}>Back to top</Button>
        </div>
      </Container>

      
    </div>
  );
}

export default App;