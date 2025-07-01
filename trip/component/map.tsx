"use client";

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15483729.23859798!2d105.41517710000002!3d18.654689845406867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4fa3152619e3d%3A0xea08a6700fdd9ffe!2z7LaU65287Jqw66-4IOyImOyhseq0gA!5e0!3m2!1sko!2skr!4v1751366616888!5m2!1sko!2skr"
        width="100%" height="100%" style={{ border: 0 }}  loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
