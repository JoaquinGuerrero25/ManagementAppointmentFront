import React from 'react'
import {PatientUpdateTable} from '../Tables/PatientUpdateTable'
import { useState } from 'react';

const PatientUpdate = () => {

    const personColumns = [
        { key: 'name', label: 'Nombre' },
        { key: 'lastName', label: 'Apellido' },
        { key: 'email', label: 'Email' },
        { key: 'address', label: 'Dirección' },
        { key: 'phoneNumber', label: 'Número de teléfono' },        
        { key: 'healthInsurance', label: 'Obra Social' },        
    ];

    const [persona, setPersona] = useState({
        name: "Juan Manuel",
        lastName: "Banquero",
        email:"juan@juan.com", 
        address: "Dirección",
        phoneNumber: "+5493416123456",
        healthInsurance: "ACA Salud",
    });

    const [obrasSociales, setObrasSociales] = useState(["ACA Salud", "Pami", "Osde", "Swiss Medical"]);
    
    const rows = personColumns.map((col) => ({
        field: col.label,
        key: col.key, 
        value: persona[col.key] ?? '', 
    }));

    const columns = [
        { label: "Campo", key: "field" },
        { label: "Valor", key: "value" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationResult = validateForm();
        if (!validationResult.valid) {
            alert(validationResult.message);
            return;
        }
      
        try {
          const response = await fetch('https://localhost:7006/api/Patient/2', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(persona),
          });
      
          if (!response.ok) {
            throw new Error('Error al enviar los datos');
          }
      
          const data = await response.json();
          console.log('Paciente guardado:', data);
          alert('Paciente guardado exitosamente');
        } catch (error) {
          console.error('Error al guardar el paciente:', error);
          alert('Hubo un error al guardar el paciente');
        }
    };

    const handleEdit = (fieldKey, newValue) => {
        setPersona((prev) => ({
            ...prev,
            [fieldKey]: newValue,
        }));
    };

    const validateForm = () => {
        const { name, lastName, email, address, phoneNumber } = persona;

        if (!name.trim() || !lastName.trim()) {
            return { valid: false, message: 'Nombre y apellido son obligatorios.' };
        }

        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { valid: false, message: 'Email inválido.' };
        }

        if (!address.trim()) {
            return { valid: false, message: 'Dirección es obligatorio.' };
        }

        if (!phoneNumber.trim() || !/^[+0-9]+$/.test(phoneNumber) || !phoneNumber.length > 8) {
            return { valid: false, message: 'Número de teléfono inválido.' };
        }

        return { valid: true };
    };


  return (

    <PatientUpdateTable
        columns={columns}
        rows={rows}
        onChange={(rowIndex, _, value) => handleEdit(rows[rowIndex].key, value)}
        onSubmit={handleSubmit}
        selectOptions={{healthInsurance: obrasSociales}}
    />
  )
}





export default PatientUpdate
