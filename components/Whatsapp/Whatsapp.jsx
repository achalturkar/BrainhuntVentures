"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const Whatsapp = () => {
    const phoneNumber = "919960224245";

    const message = `Hello Brainhunt Ventures Team,

We are exploring reliable workforce solutions and would like to discuss your services, including:

• Background Verification (15+ Verification Parameters)
• Recruitment & Executive Search
• HR Outsourcing
• Staffing Solutions

Please share your service portfolio and arrange a consultation with your team.

Looking forward to connecting.

Thank you.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full shadow-lg z-50"
        >
            <FaWhatsapp className="text-white font-bold size-8" />
        </a>
    );
};

export default Whatsapp;
