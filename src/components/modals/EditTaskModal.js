import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateTask, isModal } from "../../state";

export default function EditTaskModal(props) {
  const dispatch = useDispatch();
  let modal = useSelector((state) => state.modal.open);
  const [task, setTask] = useState({
    updatedTask: "",
  });
  const onChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isModal(false));
    dispatch(actionUpdateTask(task, props.taskId));
  };
  const closeModal = () => {
    dispatch(isModal(false));
  };
  return (
    <Transition show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 flex items-center justify-center py-14 px-6">
          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 translate-x-4 sm:translate-y-0 sm:translate-x-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 translate-x-0 sm:scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 translate-x-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 translate-x-4 sm:translate-y-0 sm:translate-x-0 sm:scale-95"
          >
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-[#1868db] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-white"
                    >
                      Update Task
                    </DialogTitle>
                    <div className="mt-2 space-y-2 w-full">
                      <textarea
                        placeholder="update"
                        rows={4}
                        className="w-10/12 p-2 border rounded-md"
                        onChange={onChange}
                        value={task.updatedTask}
                        name="updatedTask"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1868db] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm sm:ml-3 sm:w-auto transition-transform transform hover:scale-110"
                  onClick={handleSubmit}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-transform transform hover:scale-110"
                  onClick={closeModal}
                  data-autofocus
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
