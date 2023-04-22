import { Outlet } from "react-router-dom";
// outleti childrenları alabilmek için kullanıyoruz

export default function AuthLayout() {
  return (
    <div className="bg-gradient-to-tr from-green-400 to-green-200 w-full h-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <Outlet />
    </div>
  );
}
