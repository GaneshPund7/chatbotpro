import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils';
import useBodyClasses from '@/hooks/useBodyClasses';
import { AuthBrandedLayoutProvider } from './AuthBrandedLayoutProvider';
const Layout = () => {
  // Applying body classes to manage the background color in dark mode
  useBodyClasses('dark:bg-coal-500');
  return <Fragment>
      <div className="grid lg:grid-cols-2 grow">

       <div className='h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-coal-500 branded-bg shadow'>
       <div className="w-full flex justify-center p-8 lg:p-10">
          <Outlet />
        </div>
       </div>
      </div>
    </Fragment>;
};

// AuthBrandedLayout component that wraps the Layout component with AuthBrandedLayoutProvider
const AuthBrandedLayout = () => <AuthBrandedLayoutProvider>
    <Layout />
  </AuthBrandedLayoutProvider>;
export { AuthBrandedLayout };