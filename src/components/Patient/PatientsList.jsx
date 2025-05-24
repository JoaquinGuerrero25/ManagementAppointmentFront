import React, { useEffect, useState } from 'react'
import { GenericTable } from '../Tables/GenericTable'
import { Edit, Delete } from '@mui/icons-material';
import {Dialog,DialogTitle, DialogContent, DialogActions, Button, TextField,} from '@mui/material';


const PatientsList = () => {

    const [patients, setPatients] = useState([]);
    const [editingPatient, setEditingPatient] = useState(null);
    const [formValues, setFormValues] = useState({});

    const columns = [
        { key: 'name', label: 'Nombre' },
        { key: 'lastName', label: 'Apellido' },
        { key: 'phoneNumber', label: 'Número de teléfono' },
        { key: 'address', label: 'Dirección' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'healtInsurance', label: 'Obra social' },
        { key: 'status', label: 'Estado' },
    ];


    //Fectch de lista de pacientes.
    useEffect(() => {
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
    <GenericTable
      columns={columns}
      rows={patients}
      filterKeys={['name', 'lastName', 'email']} 
      actions={actions}
    />

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
