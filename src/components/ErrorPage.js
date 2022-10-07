import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';

const ErrorPage = () => {
  const error = useRouteError();
  const {status,statusText,message} = error;
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
      {
        error && (
        <div>
            <p>{status}</p>
            <p className='text-red-500 text-xl'>{statusText || message}</p>
        </div>
        )
      }
      </div>
    </>
  )
}

export default ErrorPage
