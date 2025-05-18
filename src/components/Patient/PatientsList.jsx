import React, { useEffect, useState } from 'react'
import { GenericTable } from '../Tables/GenericTable'
import { Edit, Delete } from '@mui/icons-material';


const PatientsList = () => {

    const [patients, setPatients] = useState([]);

    const columns = [
        { key: 'name', label: 'Nombre' },
        { key: 'lastName', label: 'Apellido' },
        { key: 'phoneNumber', label: 'Número de teléfono' },
        { key: 'address', label: 'Dirección' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'healtInsurance', label: 'Obra social' },
        //{ key: 'status', label: 'Estado' },
    ];

    const actions = [
    {
        Label: 'Editar',
        Icon: Edit,
        Action: (row) => {
        console.log('Editar', row);
        }
    },
    {
        Label: 'Eliminar',
        Icon: Delete,
        Action: (row) => {
        console.log('Eliminar', row);
        }
    }];

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

  return (
    <GenericTable
      columns={columns}
      rows={patients}
      filterKeys={['name', 'lastName', 'email']} 
      actions={actions}
    />
  )
}

export default PatientsList
