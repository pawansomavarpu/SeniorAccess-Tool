import React, { useState } from 'react';
import { TextField, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Form = () => {
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cellPhone, setCellPhone] = React.useState('');
  const [homePhone, setHomePhone] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [accountNum, setAccountNum] = React.useState('');
  const [donorType, setDonorType] = React.useState('');
  const [gender, setGender] = React.useState('');

  const [householdName, setHouseholdName] = React.useState('');
  const [addressType, setAddressType] = React.useState('');
  const [st1, setSt1] = React.useState('');
  const [st2, setSt2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [occupation, setOccupation] = React.useState('');
  const [title, setTitle] = React.useState('');

  const [employer, setEmployer] = React.useState('');
  const [jobTitle, setJobTitle] = React.useState('');
  const [spouseEmployer, setSpouseEmployer] = React.useState('');
  const [spouseName, setSpouseName] = React.useState('');
  const [spouseOccupation, setSpouseOccupation] = React.useState('');

  const [secEmail, setSecEmail] = React.useState('');
  const [secAddressType, setSecAddressType] = React.useState('');
  const [secSt1, setSecSt1] = React.useState('');
  const [secSt2, setSecSt2] = React.useState('');
  const [secCity, setSecCity] = React.useState('');
  const [secState, setSecState] = React.useState('');
  const [secZip, setSecZip] = React.useState('');
  const [secCountry, setSecCountry] = React.useState('');

  const [prevDonations, setPrevDonations] = React.useState('');
  const [lastDonationDate, setLastDonationDate] = React.useState('');
  const [paymentType, setPaymentType] = React.useState('');
  const [createdDate, setCreatedDate] = React.useState('');
  const [group, setGroup] = React.useState('');
  const [callList, setCallList] = React.useState('');

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
          label="Middle Name"
          onChange={e => setMiddleName(e.target.value)}
          value={middleName}
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
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="tel"
          label="Cell Phone"
          onChange={e => setCellPhone(e.target.value)}
          value={cellPhone}
          fullWidth
        />
        <TextField
          type="tel"
          label="Home Phone"
          onChange={e => setHomePhone(e.target.value)}
          value={homePhone}
          fullWidth
        />
        <TextField
          type="tel"
          label="Company Phone"
          onChange={e => setCompanyPhone(e.target.value)}
          value={companyPhone}
          fullWidth
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          label="Account Number"
          onChange={e => setAccountNum(e.target.value)}
          value={accountNum}
          fullWidth
        />
        <TextField
          type="text"
          label="Donor Type"
          onChange={e => setDonorType(e.target.value)}
          value={donorType}
          fullWidth
        />
        <TextField
          type="text"
          label="Gender"
          onChange={e => setGender(e.target.value)}
          value={gender}
          fullWidth
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
      <TextField
          type="text"
          label="Household Name"
          onChange={e => setHouseholdName(e.target.value)}
          value={householdName}
          fullWidth
        />
      <TextField
          type="text"
          label="Primary Address Type"
          onChange={e => setAddressType(e.target.value)}
          value={addressType}
          fullWidth
        /> 
      </Stack> 
      <TextField
          type="text"
          label="Primary Street 1"
          onChange={e => setSt1(e.target.value)}
          value={st1}
          fullWidth
          sx={{ mb: 4 }}
        /> 
      <TextField
          type="text"
          label="Primary Street 2"
          onChange={e => setSt2(e.target.value)}
          value={st2}
          fullWidth
          sx={{ mb: 4 }}
        /> 
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          type="text"
          label="Primary City"
          onChange={e => setCity(e.target.value)}
          value={city}
          fullWidth
        /> 
        <TextField
          type="text"
          label="Primary State"
          onChange={e => setState(e.target.value)}
          value={state}
          fullWidth
        /> 
        <TextField
          type="text"
          label="Primary Zip Code"
          onChange={e => setZip(e.target.value)}
          value={zip}
          fullWidth
        /> 
        <TextField
          type="text"
          label="Primary Country"
          onChange={e => setCountry(e.target.value)}
          value={country}
          fullWidth
        />
      </Stack>
      <TextField
          type="text"
          label="Notes"
          onChange={e => setNotes(e.target.value)}
          value={notes}
          fullWidth
          sx={{ mb: 4 }}
        /> 
      <TextField
          type="text"
          label="Tags"
          onChange={e => setTags(e.target.value)}
          value={tags}
          fullWidth
          sx={{ mb: 4 }}
        />
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Date of Birth"
            onChange={e => setDob(e.target.value)}
            value={dob}
            fullWidth
          />
          <TextField
            type="text"
            label="Occupation"
            onChange={e => setOccupation(e.target.value)}
            value={occupation}
            fullWidth
          />
          <TextField
            type="text"
            label="Title"
            onChange={e => setTitle(e.target.value)}
            value={title}
            fullWidth
          />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Employer"
            onChange={e => setEmployer(e.target.value)}
            value={employer}
            fullWidth
          />
          <TextField
            type="text"
            label="Job Title"
            onChange={e => setJobTitle(e.target.value)}
            value={jobTitle}
            fullWidth
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            label="Spouse Full Name"
            onChange={e => setSpouseName(e.target.value)}
            value={spouseName}
            fullWidth

          />
          <TextField
            type="text"
            label="Spouse Employer"
            onChange={e => setSpouseEmployer(e.target.value)}
            value={spouseEmployer}
            fullWidth
          />
          <TextField
            type="text"
            label="Spouse Occupation"
            onChange={e => setSpouseOccupation(e.target.value)}
            value={spouseOccupation}
            fullWidth
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Secondary Email"
            onChange={e => setSecEmail(e.target.value)}
            value={secEmail}
            fullWidth
          />
          <TextField
            type="text"
            label="Secondary Address Type"
            onChange={e => setSecAddressType(e.target.value)}
            value={secAddressType}
            fullWidth
          />
        </Stack>
        <TextField
          type="text"
          label="Secondary Street 1"
          onChange={e => setSecSt1(e.target.value)}
          value={secSt1}
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          label="Secondary Street 2"
          onChange={e => setSecSt2(e.target.value)}
          value={secSt2}
          fullWidth
          sx={{ mb: 4 }}
        />
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Secondary City"
            onChange={e => setSecCity(e.target.value)}
            value={secCity}
            fullWidth
          />
          <TextField
            type="text"
            label="Secondary State"
            onChange={e => setSecState(e.target.value)}
            value={secState}
            fullWidth
          />
          <TextField
            type="text"
            label="Secondary Zip Code"
            onChange={e => setSecZip(e.target.value)}
            value={secZip}
            fullWidth
          />
          <TextField
            type="text"
            label="Secondary Country"
            onChange={e => setSecCountry(e.target.value)}
            value={secCountry}
            fullWidth
          />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Total Previous Donations"
            onChange={e => setPrevDonations(e.target.value)}
            value={prevDonations}
            fullWidth
          />
          <TextField
            type="text"
            label="Last Donation Date (MM/DD/YY)"
            onChange={e => setLastDonationDate(e.target.value)}
            value={lastDonationDate}
            fullWidth
          />
          <TextField
            type="text"
            label="Payment Type (Last Donation)"
            onChange={e => setPaymentType(e.target.value)}
            value={paymentType}
            fullWidth
          />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
            type="text"
            label="Created Date"
            onChange={e => setCreatedDate(e.target.value)}
            value={createdDate}
            fullWidth
          />
          <TextField
            type="text"
            label="Group"
            onChange={e => setGroup(e.target.value)}
            value={group}
            fullWidth
          />
          <TextField
            type="text"
            label="Call List"
            onChange={e => setCallList(e.target.value)}
            value={callList}
            fullWidth
          />
      </Stack>
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