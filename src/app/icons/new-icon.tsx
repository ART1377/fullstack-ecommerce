import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const NewIcon = ({ styles , size = 24 }: Props) => {
  return (
      <svg
        className={styles}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_250_3051)">
          <g clipPath="url(#clip1_250_3051)">
            <path
              d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM8.5 15H7.3L4.75 11.5V15H3.5V9H4.75L7.25 12.5V9H8.5V15ZM13.5 10.26H11V11.38H13.5V12.64H11V13.75H13.5V15H9.5V9H13.5V10.26ZM20.5 14C20.5 14.55 20.05 15 19.5 15H15.5C14.95 15 14.5 14.55 14.5 14V9H15.75V13.51H16.88V9.99H18.13V13.5H19.25V9H20.5V14Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_250_3051">
            <rect width="24" height="24" fill="white" />
          </clipPath>
          <clipPath id="clip1_250_3051">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
  );
};

export default NewIcon;
