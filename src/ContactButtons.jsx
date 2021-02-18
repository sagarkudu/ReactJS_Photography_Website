import React from 'react';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const ContactButtons = () => {

    return (
        <>
            <center>
                <table >
                <tr>
                    <td>
                        <a href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation"><WhatsAppIcon className="material-icons md-48 whatsapp-icon"/></a> 
                        <a href="https://www.instagram.com/bhaveshthakur_photography/"><InstagramIcon className="material-icons md-48 instagram-icon"/></a> 
                        <a href="https://www.facebook.com/bhavesh3550"><FacebookIcon className="material-icons md-48 facebook-icon" /></a>
                        <center>Any Query <ContactSupportIcon /></center>    
                    </td>
                </tr> 
                </table>
            </center>
        </>
    );
}

export default ContactButtons;


// import React from 'react';

// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';

// const ContactButtons = () => {

//     return (
//         <>
//             <center>
//                 <table >
//                 <tr>
//                     <td>
//                         <a href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation"><WhatsAppIcon className="material-icons md-48 whatsapp-icon"/></a> 
//                         <a href="https://www.instagram.com/bhaveshthakur_photography/"><InstagramIcon className="material-icons md-48 instagram-icon"/></a> 
//                         <a href="https://www.facebook.com/bhavesh3550"><FacebookIcon className="material-icons md-48 facebook-icon" /></a>
//                         <center>Any Query <ContactSupportIcon /></center>    
//                     </td>
//                 </tr> 
//                 </table>
//             </center>
//         </>
//     );
// }

// export default ContactButtons;