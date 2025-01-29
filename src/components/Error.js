import {useRouteError} from "react-router-dom";

const Error = () => {
    const obj = useRouteError();
  return (
    <div className="error">
      <h1>Oppps!</h1>
      <h1>Something went wrong!</h1>
      <h2>status: {obj.status}</h2>
      <h2>message: {obj.statusText}</h2>
    </div>
  );
};

export default Error;