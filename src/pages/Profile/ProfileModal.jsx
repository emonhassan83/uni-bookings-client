import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../api/users";
import Swal from "sweetalert2";

const ProfileModal = ({ userData, isOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      name: data?.name,
      email: data?.email,
      address: data?.address,
      university: data?.university,
      photoURL: data?.photoURL,
    };

    //post admission data in database
    updateUser(userData)
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Yep...",
          text: "User Information Update Successfully!",
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Please update your profile!!!
                </Dialog.Title>
                <hr className="my-6" />

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2 text-sm">
                    <label>Change Name</label>
                    <input
                      type="text"
                      defaultValue={userData?.name}
                      {...register("name", { required: true })}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 -mt-5">
                        <small>Name field is required</small>
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Your Email</label>
                    <input
                      type="email"
                      defaultValue={userData?.email}
                      {...register("email", { required: true })}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 -mt-5">
                        <small>Email field is required</small>
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Your Address</label>
                    <input
                      type="text"
                      defaultValue={userData?.address}
                      {...register("address", { required: true })}
                      required
                    />
                    {errors.address && (
                      <p className="text-red-500 -mt-5">
                        <small>Address field is required</small>
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Your University</label>
                    <input
                      type="text"
                      defaultValue={userData?.university}
                      {...register("university", { required: true })}
                      required
                    />
                    {errors.university && (
                      <p className="text-red-500 -mt-5">
                        <small>University field is required</small>
                      </p>
                    )}
                  </div>
                  <div className="mt-2 text-sm">
                    <label>Photo URL</label>
                    <input
                      type="text"
                      defaultValue={userData?.image}
                      {...register("image", { required: true })}
                      required
                    />
                    {errors.image && (
                      <p className="text-red-500 -mt-5">
                        <small>Image field is required</small>
                      </p>
                    )}
                  </div>
                  <div className="flex mt-6 justify-around">
                    <button
                      onClick={closeModal}
                      className="btn btn-sm w-40 rounded-3xl mt-2"
                    >
                      {" "}
                      cancel
                    </button>
                    <input
                      onClick={closeModal}
                      type="submit"
                      value="submit"
                      className="btn btn-sm w-40 rounded-3xl text-black"
                    />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProfileModal;
