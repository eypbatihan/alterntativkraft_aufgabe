import Swal from "sweetalert2";

//delete confirm alert
export const confirmDelete = (user) => {
  return Swal.fire({
    title: "Are you sure?",
    html: `Are you sure you want to delete <b>${user.name}</b>? This action cannot be undone!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  });
};
//delete success alert
export const successDelete = (user) => {
  return Swal.fire({
    title: "Deleted!",
    html: `<b>${user.name}</b> was successfully deleted!`,
    icon: "success",
    timer: 1000,
    showConfirmButton: false,
  });
};
//loading alert
export const showLoading = () => {
  Swal.fire({
    title: "Loading...",
    text: "Please wait...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
//error alert
export const showError = (errorMessage) => {
  Swal.fire({
    icon: "error",
    title: "ERROR!",
    text: errorMessage,
    confirmButtonColor: "#d33",
  });
};
