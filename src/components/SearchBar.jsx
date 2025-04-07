import { TextField, Box } from '@mui/material';

const SearchBar = () => (
  <Box mt={4} mb={2}>
    <TextField
      fullWidth
      label="Search Wikipedia"
      variant="outlined"
      placeholder="e.g. Artificial Intelligence"
    />
  </Box>
);

export default SearchBar;
