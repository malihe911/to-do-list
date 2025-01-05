// Import necessary components
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const DashboardFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
      }}
    >
      {/* Copyright Section */}
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>

      {/* Quick Links */}
      <Box sx={{ mt: 1 }}>
        <Link href="/about" color="inherit" sx={{ mx: 1 }}>
          About Us
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
        <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default DashboardFooter;