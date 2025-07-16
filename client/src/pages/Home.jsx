import React, { useContext } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Home() {
  const { isLoggedIn, username } = useContext(AuthContext);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Online Code Compiler!
        </Typography>

        {isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <EmojiEventsIcon sx={{ fontSize: 60, color: 'gold', mb: 2 }} />
            <Typography variant="h5" color="success.main">
              🎉 Welcome, {username}! Ready to code and compete!
            </Typography>
          </motion.div>
        ) : (
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/login"
            sx={{ mt: 4 }}
          >
            Login To Get Started
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Home;
