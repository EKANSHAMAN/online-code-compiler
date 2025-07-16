import React from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Button } from '@mui/material';

function Compiler({
  language,
  setLanguage,
  code,
  handleCodeChange,
  handleRun,
  output,
  shareableLink,
  children
}) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Online Code Compiler
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Card>
          <CardContent>

            {children}

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleRun}
            >
              ▶️ Run Code
            </Button>

            {shareableLink && (
              <Typography sx={{ mt: 2 }}>
                🔗 <a href={shareableLink} target="_blank" rel="noreferrer">{shareableLink}</a>
              </Typography>
            )}

            <Typography variant="h6" sx={{ mt: 4 }}>
              📤 Output:
            </Typography>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "#00ff90", mt: 1, p: 2 }}>
              {output}
            </Card>

          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Compiler;
