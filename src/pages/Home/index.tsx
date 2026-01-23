import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { CustomThemeToggle } from '../../components/CustomThemeToggle';

function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Minha Aplicação
          </Typography>
          <CustomThemeToggle />
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Bem-vindo!</Typography>
      </Box>
    </Box>
  );
}

export default Home;