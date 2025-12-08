import React from "react";

const Table = ({ columns, data, actions }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.image}</td>
            <td>{row.quantity}</td>

            <td className="actions">{actions(row)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
