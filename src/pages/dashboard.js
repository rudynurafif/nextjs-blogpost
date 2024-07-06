import React from 'react';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Link from 'next/link';

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
   

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <Button
        label='Delete'
        className='p-button-danger'
        onClick={() => deleteComment(rowData.id)}
      />
    );
  };

  return (
    <div className='container mt-5'>
      <h2>Dashboard</h2>
      <Link href='/create-comment'>
        <button className='btn btn-success mb-3'> Create Comment</button>
      </Link>
      <div className='card'>
        <DataTable
          value={comments}
          paginator
          rows={10}
          globalFilter={globalFilter}
          header='List of Comments'
        >
          <Column field='name' header='Name' filter filterPlaceholder='Search by name' />
          <Column
            field='email'
            header='Email'
            filter
            filterPlaceholder='Search by email'
          />
          <Column field='body' header='Comment' />
          <Column field={actionBodyTemplate} header='Actions' />
        </DataTable>
      </div>
    </div>
  );
};

export default Dashboard;
