import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-gray-600 text-sm">
      <p>©{currentYear} Aditya Parthiban. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
