import * as React from 'react';
import { SVGProps } from 'react';

const Whitepapers: React.FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>,
) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1080_2294)">
      <path
        d="M324,90.59H304.69V56a16,16,0,0,0-16-16H91.31a16,16,0,0,0-16,16V90.59H56a16,16,0,0,0-16,16V304a16,16,0,0,0,16,16h1.65v4a16,16,0,0,0,16,16h232.7a16,16,0,0,0,16-16v-4H324a16,16,0,0,0,16-16V106.59A16,16,0,0,0,324,90.59Z"
        fill="white"
      />
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d="M30.3884 4.21053H9.61158C8.68141 4.21053 7.92737 4.96457 7.92737 5.89474V20.9905C7.92737 21.9207 8.68141 22.6747 9.61158 22.6747H30.3884C31.3186 22.6747 32.0726 21.9207 32.0726 20.9905V5.89474C32.0726 4.96457 31.3186 4.21053 30.3884 4.21053Z"
          fill="#FFCC00"
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d="M34.1052 9.53579H5.89472C4.96456 9.53579 4.21051 10.2898 4.21051 11.22V32C4.21051 32.9302 4.96456 33.6842 5.89472 33.6842H34.1052C35.0354 33.6842 35.7895 32.9302 35.7895 32V11.22C35.7895 10.2898 35.0354 9.53579 34.1052 9.53579Z"
          fill="#FFCC00"
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d="M32.2484 14.4821H7.75263C6.82247 14.4821 6.06842 15.2361 6.06842 16.1663V34.1053C6.06842 35.0354 6.82247 35.7895 7.75263 35.7895H32.2484C33.1786 35.7895 33.9326 35.0354 33.9326 34.1053V16.1663C33.9326 15.2361 33.1786 14.4821 32.2484 14.4821Z"
          fill="#00FFFF"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1080_2294">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { Whitepapers };
