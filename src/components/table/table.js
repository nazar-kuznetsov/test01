import React from 'react';
import { Icon } from 'antd';
import TableRow from './table-row/table-row';
import './table.scss';

const Table = ({data, header, className, deleteUsers}) => {
  const handleClick = (id, name) => () => {
    // alert(2);
    if (name === 'nazar.kuznettsov@gmail.com') {
      return alert('Нельзя удалить Главного администратора ');
    }
    const result = window.confirm(`Вы хотите удалить акаунт ${name}`);
    if (result) {
      deleteUsers(id);
    }
  };

  return (
    <div>
      <table className={`${className} table`}>
        <thead>

          <tr>
            {
              header.map(item => {
                return (
                  <td style={item.style && item.style} key={item.label}>{item.label}</td>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {data.map(element => {
            return (
              <TableRow key={element._id}>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td onClick={handleClick(element._id, element.email)} className="delete-user"><Icon type="delete" theme="filled" /></td>
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
