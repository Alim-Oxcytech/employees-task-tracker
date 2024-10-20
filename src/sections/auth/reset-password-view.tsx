import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useRouter } from 'src/routes/hooks';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------
type ShowPasswordState = {
  newPass: boolean;
  confirmPass: boolean;
};
export function RestPasswordView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<ShowPasswordState>({
    newPass: false,
    confirmPass: false,
  });

  const togglePasswordVisibility = (field: keyof ShowPasswordState) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // TypeScript now knows that field is a valid key of the state object
    }));
  };

  const handleResetPassword = useCallback(() => {
    router.push('/sign-in');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="email"
        label="Email address"
        defaultValue="john@gmail.com"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="newPassword"
        label="New Password"
        defaultValue="Alim@123"
        InputLabelProps={{ shrink: true }}
        type={showPassword.newPass ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => togglePasswordVisibility('newPass')} edge="end">
                <Iconify icon={showPassword.newPass ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        defaultValue="Alim@123"
        InputLabelProps={{ shrink: true }}
        type={showPassword.confirmPass ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => togglePasswordVisibility('confirmPass')} edge="end">
                <Iconify
                  icon={showPassword.confirmPass ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleResetPassword}
      >
        Change password
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Reset password</Typography>
      </Box>

      {renderForm}
    </>
  );
}
