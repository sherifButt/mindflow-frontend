


import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Registration</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;



