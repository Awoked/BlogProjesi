import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DeletePost = ({ ID }) => {

    const Delete = () => {
        AlertHandler();
    }

    const AlertHandler = () => {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            title: <p>Silme işlemini onaylıyor musun ?</p>,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Evet'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                fetch(`http://localhost:5000/deletepost?id=${ID}`)
            } else {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <button className="bg-red-500 absolute right-5 top-5 p-2" onClick={Delete}>Delete</button>
    )
}

export default DeletePost;