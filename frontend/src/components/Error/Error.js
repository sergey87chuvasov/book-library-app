import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';

const Error = () => {
  // toast.info('test msg');
  // toast.warn('test msg');
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(clearError);
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position='top-right' autoClose={2000} />;
};

export default Error;
