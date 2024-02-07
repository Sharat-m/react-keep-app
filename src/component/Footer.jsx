import React from "react";



// const customStyle = {
//     color: ""
//   };

function Footer() {
    const date = new Date();
const year = date.getFullYear();
    return (
        <footer>

          CopyRight@{year}

        </footer>
    );
}

export default Footer;
