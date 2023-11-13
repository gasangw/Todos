import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditForm() {
  return (
    <>
      <div className="flex justify-between rounded-full shadow-md w-3/5 mx-auto mt-8 px-6 items-center">
        <input
          type="text"
          placeholder="Add todo..."
          value="message"
          name="message"
          className="py-4 px-3 w-4/5 outline-none placeholder-black"
        />
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
