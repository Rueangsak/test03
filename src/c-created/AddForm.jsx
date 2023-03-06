import React, { useEffect, useState } from 'react'
import '../CSS/Add.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import serviceApi from '../firebase/serviceApi';
import firebase from '../firebase/firebase';
import { db } from '../firebase/firebase';

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
  const [name, setName] = useState("");
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [newValue, setNewValue] = useState('');

  const handleDialogOpen = (form) => {
    setSelectedForm(form);
    setNewValue(form.nameWork);
    setDialogOpen(true);
  };
  
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  
  const handleUpdate = () => {
    
    db.collection('Form').doc(selectedForm.id).update({ nameWork: newValue });
    handleDialogClose();
  };

  const addNewForm = () => {
    if (name !== "") {
      serviceApi.addFormToDB("123", name)
    } else {
      alert("กรอกด้วย");
    }
  }

  const getSuccess = (forms) => {
    setForms(forms);
    setLoading(false);
  }

  useEffect(() => {
    serviceApi.getForm(getSuccess);
  }, []);

  if (loading) {
    return (
      <h1>Loading.....</h1>
    );
  }

  return (
    <>
      <form onSubmit={onAddFormSubmit} style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{ width: '25ch' }} />
        <Button variant="contained" onClick={addNewForm}>Add</Button>
      </form>
      {forms.map((form) => {
        return (
          <div key={form.id}>
            <h1>{form.nameWork}</h1>
            <a href={'/Open/' + form.id}>to Open</a>
            <Button variant="outlined" color="primary" onClick={() => handleDialogOpen(form)}>
              Update
            </Button>
          </div>
        );
      })}
      {selectedForm && (
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Update Name Work</DialogTitle>
          <DialogContent>
            <TextField value={newValue} onChange={(e) => setNewValue(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default AddTodoForm;
