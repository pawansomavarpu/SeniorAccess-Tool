import React, { useState } from 'react';
import { TextField, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Form = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [openErrorModal, setOpenErrorModal] = React.useState(false);
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the user being edited
  const [errorType, setErrorType] = useState('');

  const handleGenerateCSV = () => {
    if (users.length === 0) {
      setErrorType('No Users have been added, there is nothing to generate.');
      setOpenErrorModal(true);
      return;
    }
    let csvContent = "First Name,Last Name,Email\n";
    users.forEach(user => {
      csvContent += `${user.firstName},${user.lastName},${user.email}\n`;
    });
    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleAddUser = () => {
    if (!firstName) {
      setErrorType('An empty user can not be added. Must have atleast firstname.');
      setOpenErrorModal(true);
      return;
    }

    if (editIndex !== null) {
      // If editIndex is not null, it means we're in edit mode
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { firstName, lastName, email };
      setUsers(updatedUsers);
      setFirstName('');
      setLastName('');
      setEmail('');
      setEditIndex(null); // Reset editIndex after updating the user
    } else {
      // Add new user
      const newUser = { firstName, lastName, email };
      setUsers([...users, newUser]);
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditIndex(null); // Reset editIndex when closing the modal
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    setFirstName(userToEdit.firstName);
    setLastName(userToEdit.lastName);
    setEmail(userToEdit.email);
    setEditIndex(index); // Set the editIndex to the index of the user being edited
    setOpenModal(false); // Close the modal to edit the specific user
  };

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
        <Button variant="outlined" onClick={handleOpenModal}>See Previously Added Users</Button>
        <Button variant="outlined" onClick={handleAddUser}>{editIndex ? "Update Contact" : "Add New Contact"}</Button>
        <Button variant="outlined" onClick={handleGenerateCSV}>Generate CSV</Button>
      </Stack>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="lg">
        <DialogTitle>{editIndex !== null ? 'Edit Contact' : 'Previously Added Users'}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell> {/* Column for edit action */}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditUser(index)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>

      <Dialog open={openErrorModal} onClose={handleCloseErrorModal}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <p>{errorType}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorModal} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default Form