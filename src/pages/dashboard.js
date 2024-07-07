import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { setComments, deleteComment } from '@/store/commentsSlice';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Dashboard = () => {
  const [globalFilter, setGlobalFilter] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
          dispatch(setComments(JSON.parse(storedComments)));
        } else {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/comments'
          );
          dispatch(setComments(response.data));
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#f87171',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteComment(id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your comment has been deleted.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your data is safe!',
          icon: 'info',
          timer: 3000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleLogout = () => {
    router.push('/');
  };

  const onGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };

  const clearFilter = () => {
    setGlobalFilter('');
  };

  const renderHeader = () => {
    return (
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
          <h3 className='text-lg font-semibold'>List of Comments</h3>
        </div>
        <div className='flex items-center'>
          <span className='p-input-icon-left'>
            <InputText
              value={globalFilter}
              onChange={onGlobalFilterChange}
              placeholder='Keyword search...'
              className='p-inputtext-sm ml-5 h-10 p-3 rounded'
            />
          </span>
          <Button
            type='button'
            label='Clear'
            className='p-button-outlined ml-3 hidden sm:block'
            onClick={clearFilter}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  const actionBodyTemplate = (rowData) => {
    return (
      <Button
        label='Delete'
        className='bg-red-400 text-white p-2 rounded'
        onClick={() => confirmDelete(rowData.id)}
      />
    );
  };

  const indexBodyTemplate = (rowData, { rowIndex }) => {
    return rowIndex + 1;
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='container mx-auto mt-5'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-3xl font-bold text-sky-500'>Welcome, Admin!</h1>
          <Button
            label='Logout'
            className='bg-red-500 font-semibold text-white p-2 rounded'
            onClick={handleLogout}
          />
        </div>
        <h2 className='text-2xl font-bold mb-4'>Dashboard</h2>
        <Link href='/create-comment'>
          <Button className='bg-green-600 text-white font-bold px-4 py-2 rounded-md mb-3'>
            Create Comment
          </Button>
        </Link>
        <div className='card shadow-md rounded-lg overflow-hidden'>
          <DataTable
            value={comments}
            paginator
            stripedRows
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            globalFilter={globalFilter}
            header={header}
            emptyMessage='No comments found.'
          >
            <Column header='#' body={indexBodyTemplate} />
            <Column
              field='name'
              header='Name'
              filter
              filterPlaceholder='Search by name'
            />
            <Column
              field='email'
              header='Email'
              filter
              filterPlaceholder='Search by email'
            />
            <Column field='body' header='Comment' />
            <Column
              body={actionBodyTemplate}
              header='Actions'
              style={{ width: '8rem' }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
