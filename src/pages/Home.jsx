import { GenericTable } from "../components/Tables/GenericTable";
import { UserProfile } from "../components/Tables/UserProfile";
import { useState } from "react";

export const Home = () => {
    /*const columns = [
        { key: 'name', label: 'Nombre' },
        { key: 'age', label: 'Edad' },
        { key: 'city', label: 'Ciudad' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'phone', label: 'Teléfono' },
        { key: 'status', label: 'Estado' },
    ];

    const rows = [
        { name: 'Juan', age: 30, city: 'Madrid', email: 'juan@email.com', phone: '123456789', status: 'Activo' },
        { name: 'Ana', age: 25, city: 'Barcelona', email: 'ana@email.com', phone: '987654321', status: 'Inactivo' },
        { name: 'Luis', age: 28, city: 'Valencia', email: 'luis@email.com', phone: '555555555', status: 'Activo' },
        { name: 'Carlos', age: 35, city: 'Sevilla', email: 'carlos@email.com', phone: '333333333', status: 'Activo' },
        { name: 'María', age: 40, city: 'Bilbao', email: 'maria@email.com', phone: '444444444', status: 'Inactivo' },
        { name: 'Pedro', age: 22, city: 'Zaragoza', email: 'pedro@email.com', phone: '666666666', status: 'Activo' },
        { name: 'Laura', age: 29, city: 'Madrid', email: 'laura@email.com', phone: '777777777', status: 'Activo' },
        { name: 'Marta', age: 34, city: 'Valencia', email: 'marta@email.com', phone: '888888888', status: 'Inactivo' },
    ];

    //(nombre, apellido, fecha de nacimiento, documento, email, teléfono).
    const personColumns = [
        { key: 'name', label: 'Nombre' },
        { key: 'age', label: 'Edad' },
        { key: 'city', label: 'Ciudad' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'phone', label: 'Teléfono' },
        { key: 'status', label: 'Estado' },
    ];
*/

    const personColumns = [
        { key: 'name', label: 'Nombre completo' },
        { key: 'bornDate', label: 'Fecha de nacimiento' },
        { key: 'idCard', label: 'DNI' },
        { key: 'email', label: 'Email' },
        { key: 'phoneNumber', label: 'Número de teléfono' },
      ];


    const [persona, setPersona] = useState({
        name: "Juan Manuel",
        bornDate : '22/07/1999',
        idCard: 30205632,
        email: "juan@manuel.com",
        phoneNumber: "+549 3416123456",
      });

    
      const rows = personColumns.map((col) => ({
        field: col.label,
        key: col.key, // para editarlo después
        value: persona[col.key] ?? '', // muestra vacío si falta
      }));


      const handleEdit = (fieldKey, newValue) => {
        setPersona((prev) => ({
          ...prev,
          [fieldKey]: newValue
        }));
      };
    
      const columns = [
        { label: "Campo", key: "field" },
        { label: "Valor", key: "value" },
      ];

    
  return (
    <UserProfile
    columns={columns}
    rows={rows}
    onChange={(rowIndex, _, value) => handleEdit(rows[rowIndex].key, value)}
    />
  );
};  