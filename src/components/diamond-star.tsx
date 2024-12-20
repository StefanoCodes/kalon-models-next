export default function Diamond({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_225_335)">
        <circle
          cx="8"
          cy="8"
          r="8"
          transform="matrix(-1 0 0 1 17 1)"
          fill="#E9EAF0"
        />
      </g>
      <g filter="url(#filter1_di_225_335)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99262 5.45322C9.99262 4.92677 9.56585 4.5 9.0394 4.5C8.51296 4.5 8.08619 4.92677 8.08619 5.45322V5.45322C8.08619 6.19389 7.28586 6.65809 6.64295 6.29032L6.42567 6.16603C5.97186 5.90643 5.39058 6.06218 5.12736 6.5139C4.86414 6.96562 5.01864 7.54226 5.47245 7.80185L5.51196 7.82446C6.26035 8.25256 6.26035 9.33177 5.51197 9.75987V9.75987C5.05815 10.0195 4.90365 10.5961 5.16687 11.0478C5.43009 11.4996 6.01137 11.6553 6.46518 11.3957L6.71615 11.2521C7.32645 10.903 8.08619 11.3437 8.08619 12.0468V12.0468C8.08619 12.5732 8.51296 13 9.0394 13C9.56585 13 9.99262 12.5732 9.99262 12.0468V12.0468C9.99262 11.3077 10.7913 10.8444 11.4329 11.2114L11.5338 11.2692C11.9876 11.5288 12.5689 11.373 12.8321 10.9213C13.0953 10.4696 12.9408 9.89294 12.487 9.63335V9.63335C11.8365 9.26122 11.8365 8.32311 12.487 7.95098L12.5265 7.92838C12.9803 7.66878 13.1348 7.09215 12.8716 6.64042C12.6084 6.1887 12.0271 6.03296 11.5733 6.29256L11.5061 6.33103C10.8319 6.71669 9.99262 6.22991 9.99262 5.45322V5.45322Z"
          fill="#DDDDE6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_225_335"
          x="0"
          y="0"
          width="18"
          height="18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.697767 0 0 0 0 0.701777 0 0 0 0 0.79 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_225_335"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_225_335"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_di_225_335"
          x="3.99902"
          y="4.5"
          width="10.001"
          height="10.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_225_335"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_225_335"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.697767 0 0 0 0 0.701777 0 0 0 0 0.79 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_225_335"
          />
        </filter>
      </defs>
    </svg>
  );
}
