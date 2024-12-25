import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialCredentials = {
  admin: { email: 'admin@gmail.com', password: 'admin@12345' },
  superAdmin: { email: 'superadmin@gmail.com', password: 'superadmin@12345' },
};

const Login = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setLoading(true);
      const credentials = activeTab === 'admin' ? initialCredentials.admin : initialCredentials.superAdmin;

      if (values.email === credentials.email && values.password === credentials.password) {
        setStatus('Login successful!');
        setTimeout(() => {
          navigate('/'); // Navigate to the desired route
        }, 100); 
      } else {
        setStatus('Invalid credentials!');
      }
      setLoading(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-center mb-6 border-b border-gray-300">
          <button
            className={clsx(
              'px-4 py-2 font-semibold text-gray-600',
              activeTab === 'admin' && 'border-b-2 border-blue-500 text-gray-900'
            )}
            onClick={() => setActiveTab('admin')}
          >
            Admin Login
          </button>
          <button
            className={clsx(
              'px-4 py-2 font-semibold text-gray-600',
              activeTab === 'superAdmin' && 'border-b-2 border-blue-500 text-gray-900'
            )}
            onClick={() => setActiveTab('superAdmin')}
          >
            Super Admin Login
          </button>
        </div>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <h3 className="text-center font-bold text-2xl text-gray-700 mb-4">
            {activeTab === 'admin' ? 'Admin' : 'Super Admin'} Login
          </h3>

          {status && (
            <div
              className={`p-3 rounded-md text-sm ${
                status.includes('successful')
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {status}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              {...formik.getFieldProps('email')}
              className={clsx(
                'mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2',
                formik.touched.email && formik.errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              )}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              {...formik.getFieldProps('password')}
              className={clsx(
                'mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2',
                formik.touched.password && formik.errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              )}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login };
