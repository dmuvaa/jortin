import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/254722902688?text=" + encodeURIComponent(
    "Hello Jortin Limited, I found you through your website. I would like to discuss a project. Type of work: ____. Location: ____. Preferred time for a call: ____."
  );

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-emerald-400"
      aria-label="Chat directly on WhatsApp with Jortin Limited"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.122-.524-1.826-.763-3.003-2.617-3.094-2.738-.091-.122-.743-.988-.743-1.884 0-.896.47-1.338.638-1.518.167-.18.365-.225.487-.225.122 0 .243.001.35.006.113.005.263-.043.412.316.155.375.529 1.29.575 1.383.046.092.077.201.015.323-.061.123-.092.199-.183.305-.091.107-.192.239-.274.321-.092.091-.187.19-.081.373.107.182.476.786 1.021 1.272.702.626 1.294.82 1.477.912.183.091.29.076.397-.046.107-.122.456-.532.578-.714.122-.182.244-.153.411-.092.167.061 1.066.502 1.249.594.182.091.304.137.35.213.045.076.045.441-.099.846z"/>
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
        WhatsApp Us
      </span>
    </a>
  );
}
