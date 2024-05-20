import { IconButton, Stack, TextField, Typography } from '@mui/material';
import { GridSlotsComponentsProps } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';

// declare module '@mui/x-data-grid' {
//   interface ToolbarPropsOverrides {
//     title: string;
//   }
// }

const DataGridTitle = (props: NonNullable<GridSlotsComponentsProps['toolbar']>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(event as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Stack
      sx={({ spacing }) => ({
        my: spacing(1),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: spacing(1.5),
      })}
    >
      <Typography variant="h6">{props.title}</Typography>

      <TextField
        variant="filled"
        size="small"
        value={props.value}
        onChange={handleChange}
        placeholder={`Search ${props.flag}...`}
        InputProps={{
          //   startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <IconifyIcon icon="mdi:clear-circle" />
            </IconButton>
          ),
        }}
      />
    </Stack>
  );
};

export default DataGridTitle;