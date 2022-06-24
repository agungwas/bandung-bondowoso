import {
  toast,
  ToastOptions
} from 'react-toastify';

const defaultConfig: ToastOptions = {
  theme: 'colored',
  position: toast.POSITION.TOP_CENTER,
};

const success = (message: string) => {
  toast.success(message, defaultConfig);
};

const error = (message: string) => {
  toast.error(message, defaultConfig);
};

const warning = (message: string) => {
  toast.warning(message, defaultConfig);
};

const info = (message: string) => {
  toast.info(message, defaultConfig);
};

const errorDefaultApi = () => {
  error('Maaf, terjadi kesalahan. Silakan muat ulang halaman.');
};

const toastify = {
  success,
  error,
  warning,
  info,
  errorDefaultApi
}

export default toastify