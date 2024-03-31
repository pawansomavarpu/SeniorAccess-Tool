import React from 'react'
import { TextField, Button, Stack, Modal } from '@mui/material';

const Form = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')

  function generateCSV(event) {
    // add code to generate csv
    console.log("in generateCSV")
  }

  function storeCurrentUser(event) {
    // add code to save info of user just added
    console.log("in storeCurrentUser")
  }

  function getModal(event) {
    console.log("in getModal")
    /*
    return (
      <Modal/>
    )
    */
  }

  return (
    <React.Fragment>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          fullWidth
        />
        <TextField
          type="text"
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          fullWidth
        />
      </Stack>
      <TextField
        type="email"
        label="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
        fullWidth
        sx={{ mb: 4 }}
      />
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} justifyContent="flex-end">
        <Button variant="outlined" onClick={getModal}>See Previously Added Users</Button>
        <Button variant="outlined" onClick={storeCurrentUser}>Add New Contact</Button>
        <Button variant="outlined" onClick={generateCSV}>Generate CSV</Button>
      </Stack>
    </React.Fragment>
  )
}

export default Form