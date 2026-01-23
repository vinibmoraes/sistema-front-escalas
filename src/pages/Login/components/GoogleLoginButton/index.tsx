import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';

interface GoogleLoginButtonProps {
  onSuccess: (response: any) => void;
}

function GoogleLoginButton({ onSuccess }: GoogleLoginButtonProps) {
  const handleGoogleLogin = () => {
    // Aqui você vai integrar com o Google OAuth
    // Por enquanto, apenas um placeholder
    console.log('Login com Google clicado');
    
    // Quando integrar, você usará algo assim:
    // google.accounts.id.initialize({
    //   client_id: 'SEU_CLIENT_ID',
    //   callback: onSuccess
    // });
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      size="large"
      startIcon={<Google />}
      onClick={handleGoogleLogin}
      sx={{
        py: 1.5,
        borderColor: '#dadce0',
        color: '#3c4043',
        '&:hover': {
          borderColor: '#dadce0',
          bgcolor: '#f8f9fa'
        }
      }}
    >
      Continuar com Google
    </Button>
  );
}

export default GoogleLoginButton;