import React, { useState } from 'react';
import { TextField, Button, Box, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, makeStyles} from '@mui/material';
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
  const [showAdvancedInfo, setShowAdvancedInfo] = useState(false);

  const toggleAdvancedInfo = () => {
    setShowAdvancedInfo(prevState => !prevState);
  };

  // FIRST NAME,MIDDLE NAME,LAST NAME,PRIMARY EMAIL,CELL PHONE,HOME PHONE,WORK PHONE,COMPANY NAME,ACCOUNT NUMBER,DONOR TYPE,GENDER,HOUSEHOLD NAME,PRIMARY ADDRESS TYPE,PRIMARY STREET 1,PRIMARY STREET 2,PRIMARY CITY,PRIMARY STATE,PRIMARY ZIP CODE,PRIMARY COUNTRY,NOTES,TAGS,DATE OF BIRTH,OCCUPATION,TITLE,EMPLOYER,JOB TITLE,SPOUSE EMPLOYER,SPOUSE FULL NAME,SPOUSE OCCUPATION,SECONDARY EMAIL,SECONDARY ADDRESS TYPE,SECONDARY STREET 1,SECONDARY STREET 2,SECONDARY CITY,SECONDARY STATE,SECONDARY ZIP CODE,SECONDARY COUNTRY,TOTAL PREVIOUS DONATIONS,LAST DONATION DATE (MM/DD/YY),PAYMENT TYPE (LAST DONATION),CREATED DATE,GROUP,CALL LIST

  const handleGenerateCSV = () => {
    if (users.length === 0) {
      setErrorType('No Users have been added, there is nothing to generate.');
      setOpenErrorModal(true);
      return;
    }
  
    let csvContent = "First Name,Middle Name,Last Name,Primary Email,Cell Phone,Home Phone,Work Phone,Company Name,Account Number,Donor Type,Gender,Household Name,Primary Address Type,Primary Street 1,Primary Street 2,Primary City,Primary State,Primary Zip Code,Primary Country,Notes,Tags,Date of Birth,Occupation,Title,Employer,Job Title,Spouse Employer,Spouse Full Name,Spouse Occupation,Secondary Email,Secondary Address Type,Secondary Street 1,Secondary Street 2,Secondary City,Secondary State,Secondary Zip Code,Secondary Country,Total Previous Donations,Last Donation Date (MM/DD/YY),Payment Type (Last Donation),Created Date,Group,Call List\n";
  
    users.forEach(user => {
      csvContent += `${user.firstName ?? ''},${user.middleName ?? ''},${user.lastName ?? ''},${user.email ?? ''},${user.cellPhone ?? ''},${user.homePhone ?? ''},${user.companyPhone ?? ''},${user.accountNum ?? ''},${user.donorType ?? ''},${user.gender ?? ''},${user.householdName ?? ''},${user.addressType ?? ''},${user.st1 ?? ''},${user.st2 ?? ''},${user.city ?? ''},${user.state ?? ''},${user.zip ?? ''},${user.country ?? ''},${user.notes ?? ''},${user.tags ?? ''},${user.dob ?? ''},${user.occupation ?? ''},${user.title ?? ''},${user.employer ?? ''},${user.jobTitle ?? ''},${user.spouseEmployer ?? ''},${user.spouseName ?? ''},${user.spouseOccupation ?? ''},${user.secEmail ?? ''},${user.secAddressType ?? ''},${user.secSt1 ?? ''},${user.secSt2 ?? ''},${user.secCity ?? ''},${user.secState ?? ''},${user.secZip ?? ''},${user.secCountry ?? ''},${user.prevDonations ?? ''},${user.lastDonationDate ?? ''},${user.paymentType ?? ''},${user.createdDate ?? ''},${user.group ?? ''},${user.callList ?? ''}\n`;
    });
  
    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleAddUser = () => {
    // Check if the required fields are filled (e.g., at least the first name)
    if (!firstName) {
      setErrorType('An empty user cannot be added. You must provide at least a first name.');
      setOpenErrorModal(true);
      return;
    }
  
    // Prepare the user object with all form field values
    const user = {
      firstName,
      middleName,
      lastName,
      email,
      cellPhone,
      homePhone,
      companyPhone,
      accountNum,
      donorType,
      gender,
      householdName,
      addressType,
      st1,
      st2,
      city,
      state,
      zip,
      country,
      notes,
      tags,
      dob,
      occupation,
      title,
      employer,
      jobTitle,
      spouseName,
      spouseEmployer,
      spouseOccupation,
      secEmail,
      secAddressType,
      secSt1,
      secSt2,
      secCity,
      secState,
      secZip,
      secCountry,
      prevDonations,
      lastDonationDate,
      paymentType,
      createdDate,
      group,
      callList
    };
  
    if (editIndex !== null) {
      // If editIndex is not null, update the existing user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = user;
      setUsers(updatedUsers);
      setEditIndex(null); // Reset editIndex after updating the user
    } else {
      // Add new user to the list
      setUsers([...users, user]);
    }
  
    // Clear all form fields after adding/updating the user
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setCellPhone('');
    setHomePhone('');
    setCompanyPhone('');
    setAccountNum('');
    setDonorType('');
    setGender('');
    setHouseholdName('');
    setAddressType('');
    setSt1('');
    setSt2('');
    setCity('');
    setState('');
    setZip('');
    setCountry('');
    setNotes('');
    setTags('');
    setDob('');
    setOccupation('');
    setTitle('');
    setEmployer('');
    setJobTitle('');
    setSpouseName('');
    setSpouseEmployer('');
    setSpouseOccupation('');
    setSecEmail('');
    setSecAddressType('');
    setSecSt1('');
    setSecSt2('');
    setSecCity('');
    setSecState('');
    setSecZip('');
    setSecCountry('');
    setPrevDonations('');
    setLastDonationDate('');
    setPaymentType('');
    setCreatedDate('');
    setGroup('');
    setCallList('');
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
    // Populate form fields with the selected user's data
    setFirstName(userToEdit.firstName);
    setMiddleName(userToEdit.middleName);
    setLastName(userToEdit.lastName);
    setEmail(userToEdit.email);
    setCellPhone(userToEdit.cellPhone);
    setHomePhone(userToEdit.homePhone);
    setCompanyPhone(userToEdit.companyPhone);
    setAccountNum(userToEdit.accountNum);
    setDonorType(userToEdit.donorType);
    setGender(userToEdit.gender);
    setHouseholdName(userToEdit.householdName);
    setAddressType(userToEdit.addressType);
    setSt1(userToEdit.st1);
    setSt2(userToEdit.st2);
    setCity(userToEdit.city);
    setState(userToEdit.state);
    setZip(userToEdit.zip);
    setCountry(userToEdit.country);
    setNotes(userToEdit.notes);
    setTags(userToEdit.tags);
    setDob(userToEdit.dob);
    setOccupation(userToEdit.occupation);
    setTitle(userToEdit.title);
    setEmployer(userToEdit.employer);
    setJobTitle(userToEdit.jobTitle);
    setSpouseName(userToEdit.spouseName);
    setSpouseEmployer(userToEdit.spouseEmployer);
    setSpouseOccupation(userToEdit.spouseOccupation);
    setSecEmail(userToEdit.secEmail);
    setSecAddressType(userToEdit.secAddressType);
    setSecSt1(userToEdit.secSt1);
    setSecSt2(userToEdit.secSt2);
    setSecCity(userToEdit.secCity);
    setSecState(userToEdit.secState);
    setSecZip(userToEdit.secZip);
    setSecCountry(userToEdit.secCountry);
    setPrevDonations(userToEdit.prevDonations);
    setLastDonationDate(userToEdit.lastDonationDate);
    setPaymentType(userToEdit.paymentType);
    setCreatedDate(userToEdit.createdDate);
    setGroup(userToEdit.group);
    setCallList(userToEdit.callList);
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
    <Box
      sx={{
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: 600,
        margin: '0 auto'
      }}
    >
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

      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} justifyContent="flex-end">
          <Button variant="outlined" onClick={handleOpenModal}>See Previously Added Users</Button>
          <Button variant="outlined" onClick={handleAddUser}>{editIndex ? "Update Contact" : "Add New Contact"}</Button>
          <Button variant="outlined" onClick={handleGenerateCSV}>Generate CSV</Button>
      </Stack>

      {/* Advanced Info section */}
      {/* Button to toggle Advanced Info */}
      <Button variant="outlined" onClick={toggleAdvancedInfo} sx={{ mb: 4 }}>
        {showAdvancedInfo ? 'Hide Advanced Info' : 'Show Advanced Info'}
      </Button>


      {showAdvancedInfo && (
        <>
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
        
          {/* Add more advanced fields here */}
        </>
      )}
      </Box>


      

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="lg">
        <DialogTitle>{editIndex !== null ? 'Edit Contact' : 'Previously Added Users'}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* Define table headers for all user fields */}
                  <TableCell>Edit</TableCell> {/* Column for edit action */}
                  <TableCell>First Name</TableCell>
                  <TableCell>Middle Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Cell Phone</TableCell>
                  <TableCell>Home Phone</TableCell>
                  <TableCell>Company Phone</TableCell>
                  <TableCell>Account Number</TableCell>
                  <TableCell>Donor Type</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Household Name</TableCell>
                  <TableCell>Primary Address Type</TableCell>
                  <TableCell>Primary Street 1</TableCell>
                  <TableCell>Primary Street 2</TableCell>
                  <TableCell>Primary City</TableCell>
                  <TableCell>Primary State</TableCell>
                  <TableCell>Primary Zip Code</TableCell>
                  <TableCell>Primary Country</TableCell>
                  <TableCell>Notes</TableCell>
                  <TableCell>Tags</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Occupation</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Employer</TableCell>
                  <TableCell>Job Title</TableCell>
                  <TableCell>Spouse Full Name</TableCell>
                  <TableCell>Spouse Employer</TableCell>
                  <TableCell>Spouse Occupation</TableCell>
                  <TableCell>Secondary Email</TableCell>
                  <TableCell>Secondary Address Type</TableCell>
                  <TableCell>Secondary Street 1</TableCell>
                  <TableCell>Secondary Street 2</TableCell>
                  <TableCell>Secondary City</TableCell>
                  <TableCell>Secondary State</TableCell>
                  <TableCell>Secondary Zip Code</TableCell>
                  <TableCell>Secondary Country</TableCell>
                  <TableCell>Total Previous Donations</TableCell>
                  <TableCell>Last Donation Date (MM/DD/YY)</TableCell>
                  <TableCell>Payment Type (Last Donation)</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Group</TableCell>
                  <TableCell>Call List</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Iterate over users and display each user's information */}
                {users.map((user, index) => (
                  <TableRow key={index}>
                    {/* Display each field of the user object */}
                    <TableCell>
                      <IconButton onClick={() => handleEditUser(index)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.middleName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.cellPhone}</TableCell>
                    <TableCell>{user.homePhone}</TableCell>
                    <TableCell>{user.companyPhone}</TableCell>
                    <TableCell>{user.accountNum}</TableCell>
                    <TableCell>{user.donorType}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.householdName}</TableCell>
                    <TableCell>{user.addressType}</TableCell>
                    <TableCell>{user.st1}</TableCell>
                    <TableCell>{user.st2}</TableCell>
                    <TableCell>{user.city}</TableCell>
                    <TableCell>{user.state}</TableCell>
                    <TableCell>{user.zip}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.notes}</TableCell>
                    <TableCell>{user.tags}</TableCell>
                    <TableCell>{user.dob}</TableCell>
                    <TableCell>{user.occupation}</TableCell>
                    <TableCell>{user.title}</TableCell>
                    <TableCell>{user.employer}</TableCell>
                    <TableCell>{user.jobTitle}</TableCell>
                    <TableCell>{user.spouseName}</TableCell>
                    <TableCell>{user.spouseEmployer}</TableCell>
                    <TableCell>{user.spouseOccupation}</TableCell>
                    <TableCell>{user.secEmail}</TableCell>
                    <TableCell>{user.secAddressType}</TableCell>
                    <TableCell>{user.secSt1}</TableCell>
                    <TableCell>{user.secSt2}</TableCell>
                    <TableCell>{user.secCity}</TableCell>
                    <TableCell>{user.secState}</TableCell>
                    <TableCell>{user.secZip}</TableCell>
                    <TableCell>{user.secCountry}</TableCell>
                    <TableCell>{user.prevDonations}</TableCell>
                    <TableCell>{user.lastDonationDate}</TableCell>
                    <TableCell>{user.paymentType}</TableCell>
                    <TableCell>{user.createdDate}</TableCell>
                    <TableCell>{user.group}</TableCell>
                    <TableCell>{user.callList}</TableCell>
                    {/* Add edit action button */}
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