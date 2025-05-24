import React, { useEffect, useState } from 'react'
import { GenericTable } from '../Tables/GenericTable'
import { Edit, Delete } from '@mui/icons-material';
import {Dialog,DialogTitle, DialogContent, DialogActions, Button, TextField,} from '@mui/material';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



const PatientsList = () => {

    const [patients, setPatients] = useState([]);
    const [editingPatient, setEditingPatient] = useState(null);
    const [formValues, setFormValues] = useState({});
    const [creating, setCreating] = useState(false);
    const [newPatient, setNewPatient] = useState({
      name: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      email: '',
      password: '',
      healtInsurance: '',
      isAvailable: true
    });

    const columns = [
        { key: 'name', label: 'Nombre' },
        { key: 'lastName', label: 'Apellido' },
        { key: 'phoneNumber', label: 'Número de teléfono' },
        { key: 'address', label: 'Dirección' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'healtInsurance', label: 'Obra social' },
        { key: 'status', label: 'Estado' },
    ];

    const fetchPatients = async () => {
      try {
        const response = await fetch('https://localhost:7006/api/Patient');
        const data = await response.json();
    
        if (data.isSuccess) {
          setPatients(data.value);
        } else {
          console.error('Error en la respuesta de la API:', data.errorMessage);
        }
      } catch (error) {
        console.error('Error al obtener pacientes:', error);
      }
    };


    useEffect(() => {
    
        fetchPatients();
      }, []);

      const handleDeletePatient = async (patient) => {
        const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar a ${patient.name} ${patient.lastName}?`);
      
        if (!confirmDelete) return;
        try {
          const response = await fetch(`https://localhost:7006/api/Patient/${patient.id}`, { //${patient.id}
            method: 'DELETE'
          });
      
          console.log(patient.id)
          if (response.ok) {
            setPatients(prev => prev.filter(p => p.id !== patient.id));
          } else {
            const errorData = await response.json();
            console.error('Error al eliminar:', errorData);
            alert('No se pudo eliminar el paciente.');
          }
        } catch (error) {
          console.error('Error en la petición DELETE:', error);
          alert('Hubo un error al intentar eliminar el paciente.');
        }
      };

      const handleSaveChanges = async () => {
        try {
          const response = await fetch(`https://localhost:7006/api/Patient/${editingPatient.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
          });
      
          if (response.ok) {
            // Re-fetch the full list
            const fetchPatients = async () => {
              const res = await fetch('https://localhost:7006/api/Patient');
              const data = await res.json();
              if (data.isSuccess) {
                setPatients(data.value);
              }
            };
      
            await fetchPatients();
            setEditingPatient(null);
          } else {
            const error = await response.text();
            console.error('Error al editar paciente:', error);
            alert('No se pudo guardar el paciente.');
          }
        } catch (err) {
          console.error('Error en PUT:', err);
          alert('Hubo un error al guardar los cambios.');
        }
      };


      const handleNewPatientChange = (e) => {
        const { name, value } = e.target;
        setNewPatient(prev => ({ ...prev, [name]: value }));
      };
      
      const handleCreatePatient = async () => {
        try {
          const response = await fetch('https://localhost:7006/api/Patient', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPatient)
          });
      
          if (response.ok) {
            // ✅ Volver a cargar todos los pacientes
            await fetchPatients();
      
            setCreating(false);
            setNewPatient({
              name: '',
              lastName: '',
              phoneNumber: '',
              address: '',
              email: '',
              password: '',
              healtInsurance: '',
              isAvailable: true
            });
          } else {
            const errorText = await response.text();
            console.error('Error al crear paciente:', errorText);
            alert('No se pudo crear el paciente.');
          }
        } catch (error) {
          console.error('Error en POST:', error);
          alert('Error al crear el paciente.');
        }
      };
      
      
      


      const handleEditPatient = (patient) => {
        setEditingPatient(patient);
        setFormValues(patient); 
      };
      
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
          ...prev,
          [name]: value
        }));
      };
      
      
      const actions = [
        {
            Label: 'Editar',
            Icon: Edit,
            Action: handleEditPatient
        },
        {
            Label: 'Eliminar',
            Icon: Delete,
            Action: handleDeletePatient
            
        }];



  return (
    <>

    <Fab
      color="primary"
      aria-label="add"
      
      size="medium" 
      onClick={() => setCreating(true)}
      sx={{
        mt: 2, // 👉 margen superior
        ml: 2, // margen izquierdo (si querés separarlo del borde)
        mb: 2  // margen inferior opcional  
      }}
    >
      <AddIcon />
    </Fab>

    <GenericTable
      columns={columns}
      rows={patients}
      filterKeys={['name', 'lastName', 'email']} 
      actions={actions}
    />

    <Dialog open={creating} onClose={() => setCreating(false)} maxWidth="sm" fullWidth>
      <DialogTitle>Crear nuevo paciente</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
      <TextField label="Nombre" name="name" value={newPatient.name} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Apellido" name="lastName" value={newPatient.lastName} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Teléfono" name="phoneNumber" value={newPatient.phoneNumber} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Dirección" name="address" value={newPatient.address} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Correo Electrónico" name="email" value={newPatient.email} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Contraseña" name="password" type="password" value={newPatient.password} onChange={handleNewPatientChange} fullWidth />
      <TextField label="Obra social" name="healtInsurance" value={newPatient.healtInsurance} onChange={handleNewPatientChange} fullWidth />
      <label>
        <input
          type="checkbox"
          name="isAvailable"
          checked={newPatient.isAvailable}
          onChange={handleNewPatientChange}
        />
        ¿Está disponible?
      </label>
    </DialogContent>

      <DialogActions>
        <Button onClick={() => setCreating(false)}>Cancelar</Button>
        <Button onClick={handleCreatePatient} variant="contained">Crear</Button>
      </DialogActions>
    </Dialog>

    <Dialog open={Boolean(editingPatient)} onClose={() => setEditingPatient(null)} maxWidth="sm" fullWidth>
    <DialogTitle>Editar paciente</DialogTitle>
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
      <TextField label="Nombre" name="name" value={formValues.name || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Apellido" name="lastName" value={formValues.lastName || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Teléfono" name="phoneNumber" value={formValues.phoneNumber || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Dirección" name="address" value={formValues.address || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Correo Electrónico" name="email" value={formValues.email || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Obra social" name="healtInsurance" value={formValues.healtInsurance || ''} onChange={handleInputChange} fullWidth />
      <TextField label="Estado" name="status" value={formValues.status || ''} onChange={handleInputChange} fullWidth />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setEditingPatient(null)}>Cancelar</Button>
      <Button onClick={handleSaveChanges} variant="contained">Guardar</Button>
    </DialogActions>
  </Dialog>
</>

  )
}

export default PatientsList
