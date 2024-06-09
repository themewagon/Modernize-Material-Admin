import { SvgIcon, SvgIconProps } from '@mui/material';

const CategoryOneIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1396_4583)">
        <path
          d="M7.8499 2.5H11.6999L8.8499 0.1C8.7499 0.05 8.5999 0 8.4999 0H6.8999L7.8499 2.5Z"
          fill="white"
        />
        <path
          d="M8 3.5V7H4V3.5H0V11.5C0 11.8 0.2 12 0.5 12H11.5C11.8 12 12 11.8 12 11.5V3.5H8Z"
          fill="white"
        />
        <path
          d="M4.15005 2.5L5.10005 0H3.50005C3.40005 0 3.25005 0.05 3.20005 0.1L0.300049 2.5H4.15005Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1396_4583">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default CategoryOneIcon;