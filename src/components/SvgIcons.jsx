import { View, Text } from 'react-native'
import React from 'react'
import Svg,{
    Defs,
    Path,
    G,
    Circle,
    ClipPath,
    LinearGradient,
    Stop,
    RadialGradient,
    Ellipse,
    Rect
} from 'react-native-svg'

export function LowerCurve(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={90}
      viewBox="0 0 125.739 55.813"
      {...props}
    >
      <Path
        d="M-.025 728.5a43.738 43.738 0 0024.962.34c27.354-7.546 94.325-19.808 99.985 36.787.44 4.4.7 8.185.782 12.374-9.656.021-117.054.068-125.72 0-.035-20.401-.009-43.579-.009-49.501z"
        transform="translate(.035 -722.223)"
        fill="#e5dffb"
      />
    </Svg>
  )
}

export function UpperCurve(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={137.464}
      height={105.734}
      viewBox="0 0 137.464 105.734"
      {...props}
    >
      <Path
        d="M237.981 44a63.513 63.513 0 002.678 6.263c19.62 41.692 38.013 25.751 85.836 79.705 19.7 22.229 35.783 22.658 48.94 16.032 0-15.905.021-47.176 0-102-7.302.084-131.535.084-137.454 0z"
        transform="translate(-237.981 -44)"
        fill="#e5dffb"
      />
    </Svg>
  )
}

export function OneBancLogo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={68}
      height={52}
      viewBox="0 0 68 52"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="b"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0.324} stopColor="#a2a2a2" />
          <Stop offset={0.628} stopColor="#cfcfcf" />
          <Stop offset={0.963} stopColor="#848484" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#95762b" />
          <Stop offset={0.514} stopColor="#edc87d" />
          <Stop offset={1} stopColor="#95762b" />
        </LinearGradient>
        <ClipPath id="a">
          <Path d="M0 0H68V52H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Group 1" clipPath="url(#a)">
        <Path
          data-name="Path 1"
          d="M535.07 743.18a21.621 21.621 0 01-3.063-7.371 20.245 20.245 0 003.063 7.371z"
          transform="translate(-162.437 -267.583) translate(-340.849 -431.838)"
          opacity={0.27}
        />
        <Path
          data-name="Path 2"
          d="M547.786 297.667q.045.454.062.908l.039 1.262a9.7 9.7 0 10.73-3.7A21.375 21.375 0 00538.187 282v-14.417a9.7 9.7 0 019.7 9.707v5.73a19.419 19.419 0 11-9.7 16.971v-16.935a20.045 20.045 0 019.6 14.611"
          transform="translate(-162.437 -267.583) translate(-346.549)"
          fill="url(#b)"
        />
        <Path
          data-name="Path 3"
          d="M194.491 463.641a26.342 26.342 0 01-3.522-8.19 9.719 9.719 0 11.581-3.318q0 .265-.014.527a20.464 20.464 0 004.954 12.221 19.441 19.441 0 10-.538.593 16.942 16.942 0 01-1.461-1.833z"
          transform="translate(-162.437 -267.583) translate(0 -152.293)"
          fill="url(#c)"
        />
      </G>
    </Svg>
  )
}

export function WelcomeGraphic(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={375}
      height={270}
      viewBox="0 0 375 270"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Rectangle 8610"
            fill="none"
            d="M0 0H328.984V200.565H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-254.761 -44.057)">
        <Path
          data-name="Path 33351"
          d="M648.3 172.875c-6.039-7.266-24.636-6.888-39.425-6.173-30.7 1.484-42.544-10.46-69-26.112s-52.789-32.93-82.781-39.661a127.761 127.761 0 00-84.254 10.249c-24.086 12.02-44.379 32.306-54.346 57.314-14.112 35.408-5.918 77.65 17.076 108.051 15.754 20.829 37.717 36.268 62.083 45.914h131.21a200.866 200.866 0 0030.593-14.125c38.185-21.716 68.988-55.673 88.528-95.019 3.224-6.493 6.195-13.283 6.878-20.5a27.439 27.439 0 00-6.562-19.938z"
          transform="translate(-56.782 -53.853)"
          fill="#f0eefc"
        />
        <Path
          data-name="Path 33454"
          d="M284.184 187.355a15.811 15.811 0 006.561-10.057c1.2-6.744-1.162-11.966.56-14.365-.005.001-15.232 13.773-7.121 24.422z"
          transform="translate(-16.306 -85.789)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33455"
          d="M293.229 204.215a15.81 15.81 0 006.56-10.055c1.2-6.746-1.164-11.968.56-14.367.001.001-15.231 13.773-7.12 24.422z"
          transform="translate(-8.231 -70.735)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33456"
          d="M303.985 195.1a15.808 15.808 0 00-10.88-5.077c-6.848-.233-11.684 2.841-14.3 1.473-.005-.003 15.78 13.133 25.18 3.604z"
          transform="translate(-18.987 -61.617)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33457"
          d="M302.056 215.2a15.8 15.8 0 006.561-10.055c1.2-6.746-1.164-11.966.56-14.367 0 .004-15.232 13.776-7.121 24.422z"
          transform="translate(-.35 -60.925)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33458"
          d="M312.812 206.084a15.81 15.81 0 00-10.88-5.075c-6.848-.233-11.684 2.839-14.3 1.471-.002 0 15.78 13.136 25.18 3.604z"
          transform="translate(-11.106 -51.805)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33459"
          d="M310.745 225.829a13.958 13.958 0 005.794-8.881c1.056-5.959-1.028-10.57.494-12.688 0 0-13.452 12.163-6.288 21.569z"
          transform="translate(7.656 -48.891)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33460"
          d="M320.246 217.774a13.966 13.966 0 00-9.612-4.482c-6.048-.206-10.318 2.508-12.631 1.3-.003-.001 13.941 11.602 22.243 3.182z"
          transform="translate(-1.844 -40.837)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33461"
          d="M269.513 96.884s-7.331 10.3 11.043 31.633 61.655 67.442 52.377 110.64"
          fill="none"
          stroke="#5b5b5b"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33462"
          d="M322.419 161.136s-4.1 6.555-3.78 13.227"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33463"
          d="M315.95 176.807a20.388 20.388 0 00-15.633-1.626"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33464"
          d="M298.508 153.635s-10.129-2.483-18.02-1.524"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33465"
          d="M306.631 134.837s-4.5 9.125-4.13 15.68"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33466"
          d="M290.073 113.282s-5.109 9.055-5.073 16.8"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33467"
          d="M282.293 133.019s-12.074-3.03-17.647-1.563"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33468"
          d="M272.354 82.36a78.347 78.347 0 00-3.9 16.825"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33350"
          d="M618.893 200.4c-3.425-24.73-10.2-49.935-26.177-69.12s-42.62-29.745-66.623-22.888a101.6 101.6 0 00-11.618 4.226c-27.529 12.62-50.873 30.547-73.788 50.35s-47.255 39.257-76.147 48.332c-14.681 4.611-30.507 6.537-43.627 14.579a52.943 52.943 0 00-12.166 80.012 55.257 55.257 0 005.041 5.045h280.494c11-11.863 18.633-27 22.708-42.757 5.695-22.027 5.026-45.25 1.903-67.779z"
          transform="translate(8.497 3.123)"
          fill="#d8d2fc"
        />
        <Path
          data-name="Path 33355"
          d="M457.309 302.3h9.158l16.606.125c50.4-70.669 83.429-88.081 117.758-108.193-7.5-3.193-17.122-7.984-22.955-13.758 11.389 1.806 21.432 4.893 32.854 8.256 14.807-17.763 31.581-26.254 14.926-52.546-24.153-38.126-100.29 10.737-121.7 33.349a137.935 137.935 0 00.605 33.722 37.039 37.039 0 01-16.746-16.7c-17.894 25.231-34.442 66.645-30.506 115.745zm72.3-75.839a4.234 4.234 0 015.18-3.6 4.7 4.7 0 013.71 5.428 4.043 4.043 0 01-5.024 3.47 4.579 4.579 0 01-3.867-5.299z"
          transform="translate(-7.816 9.792)"
          fill="#b8b8b8"
        />
        <Path
          data-name="Path 33356"
          d="M604.712 156.889c-95.988 58.285-103.65 71.235-146.173 156.123"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33357"
          d="M596.327 184.578c-7.663-3.3-14.007-6.173-21.892-8.894 2.467-9.327 3.975-18.531 6.593-27.814"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33358"
          d="M572.229 207.253c-11.644-2.541-23.321-4.341-35.155-5.718a193.615 193.615 0 014.314-31.81"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33359"
          d="M549.352 223.599c-11.4-.978-23.606-1.687-35.049-1.549a237.593 237.593 0 01-.264-32.857"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33360"
          d="M519.958 246.482a96.071 96.071 0 00-27.079 3c-4.235-9.864-10.871-19.719-13.354-30.165"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33361"
          d="M500.089 266.645c-9.359 2.094-16.115 6.64-23.968 11.9-6.845-9.012-14.295-18.416-19.681-28.366"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33362"
          d="M555.326 154.505c-1.69 2.487-.978 5.22 1.789 6.31a6.816 6.816 0 007.825-2.35 3.976 3.976 0 00-1.767-6.346 6.55 6.55 0 00-7.847 2.386z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33363"
          d="M526.957 232.567c-2.529-.221-4.738.991-5.163 3.671a4.55 4.55 0 003.873 5.306 4.145 4.145 0 005.065-3.449 5.052 5.052 0 00-.046-1.863"
          fill="none"
          stroke="#722030"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33384"
          d="M607.987 141.472c-3.529-1.645-5.356-3.771-9.625-4.2-19.6-1.965-38.975 4.321-56.489 13.308"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33385"
          d="M618.728 158.255a33.874 33.874 0 00-5.194-11.248"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33386"
          d="M589.097 191.871c-5.194-1.363-10.447-2.571-15.728-3.549"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33387"
          d="M597.054 194.25c-1.592-.482-3.179-.981-4.765-1.479"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33388"
          d="M486.312 211.961c-3.377-2.077-6.808-4.324-8.62-7.939"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33389"
          d="M494.116 215.599c-1.67-.674-3.322-1.341-4.952-2.114"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33390"
          d="M514.474 262.992c-6.111 8.329-9.976 18.007-16.224 26.246"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33391"
          d="M521.409 254.21c-1.247 1.565-2.566 3.063-3.895 4.557"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 31850"
          d="M472.807 203.483h-70.121v-14.807a14.346 14.346 0 0114.331-14.333h41.457a14.35 14.35 0 0114.333 14.333zm-63.894-6.227h57.666v-8.58a8.112 8.112 0 00-8.1-8.1h-41.462a8.113 8.113 0 00-8.1 8.1z"
          transform="translate(-2.664 1.159)"
          fill="#2a2b2a"
        />
        <Rect
          data-name="Rectangle 8246"
          width={15.122}
          height={7.91}
          rx={1.719}
          transform="translate(395.574 193.803)"
          fill="#fff8f0"
        />
        <Rect
          data-name="Rectangle 8247"
          width={15.122}
          height={7.91}
          rx={1.719}
          transform="translate(459.468 193.803)"
          fill="#fff8f0"
        />
        <Path
          data-name="Rectangle 8248"
          d="M381.231 184.3h164.375v94.72a20.049 20.049 0 01-20.049 20.049H401.28a20.049 20.049 0 01-20.049-20.049V184.3z"
          transform="translate(-30.577 14.114)"
          fill="#2a2b2a"
        />
        <Path
          data-name="Path 31852"
          d="M545.611 244.225v-58.382a5.075 5.075 0 00-1.054-.11H382.285a5.075 5.075 0 00-1.054.11v58.381c.157.032.313.06.467.078l46.929 5.38a305.639 305.639 0 0069.578 0l46.932-5.38a4.52 4.52 0 00.474-.077z"
          transform="translate(-30.577 15.978)"
          opacity={0.3}
          style={{
            isolation: "isolate"
          }}
        />
        <Path
          data-name="Path 31853"
          d="M547.434 242.5l-46.934 5.38a305.651 305.651 0 01-69.578 0L384 242.5a5.111 5.111 0 01-4.531-5.078v-48.374a5.113 5.113 0 015.113-5.113h162.265a5.113 5.113 0 015.113 5.113v48.374a5.111 5.111 0 01-4.526 5.078z"
          transform="translate(-32.872 13.638)"
          fill="#444445"
        />
        <Rect
          data-name="Rectangle 8249"
          width={26.216}
          height={14.084}
          rx={3.06}
          transform="translate(419.735 256.463)"
          fill="#fff8f0"
        />
        <Path
          data-name="Rectangle 8250"
          d="M417.254 210.491h11.164a4.828 4.828 0 014.828 4.828 4.828 4.828 0 01-4.828 4.825h-11.164a4.826 4.826 0 01-4.828-4.825 4.827 4.827 0 014.828-4.828z"
          transform="translate(10.008 48.188)"
          fill="#ffa400"
        />
        <Path
          data-name="Path 31854"
          d="M546.851 183.935H384.583a5.114 5.114 0 00-5.115 5.113v8.576a5.112 5.112 0 015.115-5.113h162.268a5.112 5.112 0 015.113 5.113v-8.576a5.113 5.113 0 00-5.113-5.113z"
          transform="translate(-32.871 13.638)"
          opacity={0.3}
          style={{
            isolation: "isolate"
          }}
        />
        <G
          data-name="Group 26229"
          transform="translate(265.614 113.274)"
          clipPath="url(#a)"
        >
          <G data-name="Group 26200" transform="translate(183.938 21.73)">
            <Path
              data-name="Path 33392"
              d="M16.694 21.702a31.732 31.732 0 01-1.715-5.105c-.766-3.3-.106-7.666-2.578-7.309-1.778.258-1.05 7.923-.151 10.346 0 0-1.179-4.682-1.625-7.551s-1.911-3.578-2.7-1.872c-1.313 2.838.4 10.016.287 9.924a18.922 18.922 0 01-1.4-5.645c-.194-2.7-.22-3.512-1.567-3.249-2.256.442-.761 10.523-.761 10.523-.128.1-.832-.586-1.058-1.916-.332-1.945-.609-5.124-1.575-4.97-2.317.372-2.545 6.571-.205 12.376a98.376 98.376 0 005.783 11.3h.007a7.284 7.284 0 0013.423.453c1.01-2.186.587-3.784.45-6.273v-.2c-.09-2 .87-4.5.968-6.35-.05-2.512-.09-8.165.753-11.016s-3.357-1.464-3.821 1.123-.746 3.56-1.721 4.826c-.069.086-.794.585-.794.585z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Path 33393"
              d="M489.675 128.466a9.036 9.036 0 016.529 2.489c2.163 2.084 3.213 5.192 5.605 7.01 2.693 2.046 6.519 2.021 9.282 3.972a7.626 7.626 0 011.724 10.779 10.255 10.255 0 01-5.15 3.433 30.542 30.542 0 01-6.181 1.1c-4.422.474-8.944.944-13.278-.055a10.677 10.677 0 01-5.85-3.16c-1.616-1.9-2.133-4.47-2.594-6.92-.477-2.533-.941-5.222-.012-7.627.6-1.564 1.765-2.89 2.212-4.507a7.9 7.9 0 00.208-1.086 6.272 6.272 0 016.9-5.528l.17.021"
              transform="translate(-424.736 -128.318)"
              fill="#000e1b"
            />
            <G data-name="Group 26181" transform="translate(17.556 88.066)">
              <G data-name="Group 26180">
                <Path
                  data-name="Path 33394"
                  d="M44.279-.004s12.277 13.117 7.767 42.145c-1.921 12.36-15.453 50.535-18.973 75.635L0 113.138 15.115 5.319z"
                  fill="#2c2c2c"
                  stroke="#262626"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(6.899)"
                />
              </G>
              <Ellipse
                data-name="Ellipse 3737"
                cx={16.698}
                cy={16.699}
                rx={16.698}
                ry={16.699}
                transform="rotate(-37.932 163.756 56.277)"
                fill="#2e2850"
              />
            </G>
            <G data-name="Group 26182">
              <Path
                data-name="Path 33395"
                d="M458.777 401.808s-4.31 9.563-5.239 11.466-19.262 5.851-19.262 10.047h27.442l10.69-6.513 3.428 6.639h3.289s-1.626-16.184-3.479-24.205z"
                transform="translate(4.319 302.451) translate(-434.276 -399.243)"
                fill="#000e1b"
              />
            </G>
            <G data-name="Group 26183">
              <Path
                data-name="Path 33396"
                d="M524.973 401.808s-4.311 9.563-5.239 11.466-19.262 5.851-19.262 10.047h27.441l10.691-6.513 3.427 6.639h3.29s-1.627-16.184-3.479-24.205z"
                transform="translate(78.206 302.451) translate(-500.472 -399.243)"
                fill="#000e1b"
              />
            </G>
            <G
              data-name="Group 26184"
              transform="translate(18.983 183.662)"
              fill="#823c26"
            >
              <Path
                data-name="Path 33397"
                d="M486.1 311.458l-4.888 108.726-33.8-1.52 5.328-108.706z"
                transform="translate(-447.413 -290.843)"
              />
              <Ellipse
                data-name="Ellipse 3738"
                cx={16.698}
                cy={16.701}
                rx={16.698}
                ry={16.701}
                transform="rotate(-12.255 34.09 -6.455)"
              />
            </G>
            <G data-name="Group 26186" transform="translate(52.573 93.386)">
              <G data-name="Group 26185">
                <Path
                  data-name="Path 33398"
                  d="M33.787 0s10.084 11.13 12.856 23.33 1.238 52.831 5.8 77.763l-32.85 6.006L.004-.001z"
                  fill="#3d3d3d"
                  stroke="#262626"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                />
              </G>
              <Ellipse
                data-name="Ellipse 3739"
                cx={16.701}
                cy={16.698}
                rx={16.701}
                ry={16.698}
                transform="rotate(-72.49 85.94 47.206)"
                fill="#3d345a"
              />
            </G>
            <G
              data-name="Group 26187"
              transform="translate(67.641 176.531)"
              fill="#b46226"
            >
              <Path
                data-name="Path 33399"
                d="M527.909 302.521L547.49 409.58l-33.285 6.09-19.148-107.139z"
                transform="translate(-490.536 -284.578)"
              />
              <Ellipse
                data-name="Ellipse 3740"
                cx={16.701}
                cy={16.698}
                rx={16.701}
                ry={16.698}
                transform="matrix(.301 -.954 .954 .301 0 31.856)"
              />
            </G>
            <G data-name="Group 26191">
              <G
                data-name="Group 26188"
                transform="translate(5.747 24.431) translate(14.109)"
              >
                <Path
                  data-name="Path 33400"
                  d="M474.634 170.963a11 11 0 10-4.691-14.829 11 11 0 004.691 14.829z"
                  transform="translate(-445.813 -150.202)"
                  fill="#ffac9c"
                />
                <Path
                  data-name="Path 33401"
                  d="M454.126 210.453a11 11 0 10-4.69-14.83 11 11 0 004.69 14.83z"
                  transform="translate(-448.196 -145.607)"
                  fill="#e5f3ff"
                />
                <Path
                  data-name="Rectangle 8607"
                  transform="scale(-1) rotate(-62.54 -35.068 27.913)"
                  fill="#e5f3ff"
                  d="M0 0H49.672V21.991H0z"
                />
              </G>
              <G data-name="Group 26189">
                <Path
                  data-name="Path 33402"
                  d="M454.126 210.453a11 11 0 10-4.69-14.83 11 11 0 004.69 14.83z"
                  transform="translate(5.747 24.431) translate(14.109) translate(-448.196 -145.607)"
                  fill="#e5f3ff"
                />
                <Path
                  data-name="Path 33403"
                  d="M38.957 1.24A11 11 0 0024.13 5.931L1.241 50.016l19.518 10.138L43.65 16.07a11 11 0 00-4.693-14.83z"
                  fill="#e4e4e4"
                  stroke="#262626"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(5.747 24.431) translate(14.109)"
                />
              </G>
              <G data-name="Group 26190">
                <Path
                  data-name="Path 33404"
                  d="M38.22 52.823L16.88 0 0 6.589s13.772 44.236 17.732 54.232c8.113 6.694 20.488-7.998 20.488-7.998z"
                  fill="#e4e4e4"
                  stroke="#262626"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(5.747 24.431) translate(0 6.202)"
                />
              </G>
            </G>
            <Path
              data-name="Path 33406"
              d="M53.63 24.429h32.438l6.584 50.19a6.348 6.348 0 01-6.293 7.175H39.571a4.983 4.983 0 01-4.673-6.712z"
              fill="#eceeef"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Rectangle 8608"
              transform="translate(39.57 81.797)"
              fill="#eceeef"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
              d="M0 0H46.789V11.591H0z"
            />
            <G data-name="Group 26194">
              <G data-name="Group 26192">
                <Path
                  data-name="Path 33407"
                  d="M477.542 202.794a2.487 2.487 0 01-1.719-1.64 2.882 2.882 0 01.487-2.325 1.853 1.853 0 011.076-.819 1.615 1.615 0 00-1.536-.691 2.732 2.732 0 00-1.485.961l2.327 9.642a16.572 16.572 0 001.039-2.57l-.02-.025a2.7 2.7 0 01-.169-2.533z"
                  transform="translate(23.122 24.469) translate(15.346 40.82) translate(-463.768 -185.579)"
                  fill="none"
                />
                <Path
                  data-name="Path 33408"
                  d="M498.551 194.487l-.012 2.044a40.264 40.264 0 00-2.161-.652 72.014 72.014 0 01-10.342-4.537c-2.91-1.891-4.934-6.487-5.958-3.627s6.43 11 6.43 11a29.823 29.823 0 01-4.859.526c-.736-2.358-2.294-4.416-5.083-3.664a5.792 5.792 0 00-1.837.857l-.537-2.222a.563.563 0 00.144-.459c-.14-.576-1.707-.746-4.112-.563-.249.023-.5.058-.746.085l-4.606 33.48a72.996 72.996 0 004.1-.866c6.805-1.642 11.945-3.832 11.677-4.942l-1.843-7.636a10.339 10.339 0 002.1-3.652 2.3 2.3 0 00.28.562 2.4 2.4 0 002.237.991 3.948 3.948 0 001.515 3.092c.942.725 2.189.612 3.376.673.632.032 1.834-.174 2.712-.231a28.652 28.652 0 007.414-1.614v.2l13.758-.748v-19.757zM477.8 209.144l-2.327-9.642a2.732 2.732 0 011.485-.961 1.615 1.615 0 011.536.691 1.853 1.853 0 00-1.076.819 2.882 2.882 0 00-.487 2.325 2.487 2.487 0 001.719 1.64 2.7 2.7 0 00.17 2.533l.02.025a16.569 16.569 0 01-1.04 2.57z"
                  transform="translate(23.122 24.469) translate(15.346 40.82) translate(-464.871 -186.801)"
                  opacity={0.5}
                />
              </G>
              <Path
                data-name="Path 33409"
                d="M546.832 201.485a11 11 0 10-15.546-.419 11 11 0 0015.546.419z"
                transform="translate(23.122 24.469) translate(-442.159 -146.482)"
                fill="#fff"
              />
              <G data-name="Group 26193">
                <G data-name="Group 25311">
                  <G data-name="Group 25310">
                    <G data-name="Group 25304">
                      <Path
                        data-name="Path 32151"
                        d="M.747 5.888s.354-4.6 4.548-5.729 5.617 4.088 5.62 7.135-1.362 10.851-5.43 11.838c-3.149.759-3.295-3.552-2.258-3.8s1.627.683 2.033.515a16.537 16.537 0 002.961-7.931c-.032-3.162-1-5-2.538-4.791s-3.37 3.428-2.988 4.512S2.12 10.566.633 9.132s.114-3.244.114-3.244z"
                        fill="#ffa400"
                        stroke="#262626"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                        transform="translate(23.122 24.469) translate(0 34.122) translate(0 6.321) translate(21.746 2.298)"
                      />
                    </G>
                    <G data-name="Group 25305">
                      <Path
                        data-name="Path 32152"
                        d="M0 5.908L24.314 0l6.551 27.134h0c.268 1.11-4.872 3.3-11.679 4.942s-12.378 2.036-12.641.927z"
                        fill="#ffa400"
                        stroke="#262626"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                        transform="translate(23.122 24.469) translate(0 34.122) translate(0 6.321) translate(.256 .692)"
                      />
                    </G>
                    <G data-name="Group 25306">
                      <Path
                        data-name="Path 32153"
                        d="M451.342 193.019c.268 1.109 5.93.69 12.642-.928s11.945-3.835 11.677-4.942-5.929-.69-12.641.928-11.945 3.833-11.678 4.942z"
                        transform="translate(23.122 24.469) translate(0 34.122) translate(0 6.321) translate(.235 .074) translate(-451.332 -186.529)"
                        fill="#f2f2f2"
                      />
                    </G>
                    <G data-name="Group 25307">
                      <Path
                        data-name="Path 32154"
                        d="M24.81.637c.273 1.131-5.06 3.388-11.91 5.039S.276 7.754.009 6.623c-.129-.531.981-1.312 2.9-2.161a56.319 56.319 0 019-2.881A59.044 59.044 0 0120.69.075c2.414-.188 3.981-.018 4.12.562zm-.916.221a10.137 10.137 0 00-2.859-.08c-.228.015-.473.035-.734.059A67.084 67.084 0 004.11 4.745c-.455.182-.847.352-1.191.507A8.79 8.79 0 00.927 6.403a11.958 11.958 0 003.592.021 55.741 55.741 0 006.366-1.028q.918-.2 1.851-.423a72.379 72.379 0 002.86-.748 53.057 53.057 0 005.115-1.708c1.138-.391 3.057-1.187 3.184-1.659z"
                        fill="#262626"
                        stroke="#262626"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                        transform="translate(23.122 24.469) translate(0 34.122) translate(0 6.321)"
                      />
                    </G>
                    <G data-name="Group 25309">
                      <G data-name="Group 25308">
                        <Path
                          data-name="Path 32155"
                          d="M463.092 188.692a59.4 59.4 0 018.059-1.421 11.755 11.755 0 013.523.02c.065.28-2.008 1.245-3.125 1.627a65.885 65.885 0 01-15.879 3.832 11.756 11.756 0 01-3.523-.021 11.728 11.728 0 013.126-1.627 59.406 59.406 0 017.819-2.41z"
                          transform="translate(23.122 24.469) translate(0 34.122) translate(0 6.321) translate(1.144 .765) translate(-452.147 -187.148)"
                          fill="#bc821a"
                        />
                      </G>
                    </G>
                  </G>
                </G>
                <G data-name="Group 25330">
                  <G data-name="Group 25329">
                    <Path
                      data-name="Path 32164"
                      d="M11.47 28.178c-1.188-.061-2.434.051-3.376-.673a3.948 3.948 0 01-1.515-3.092 2.352 2.352 0 01-2.382-3.434 2.652 2.652 0 01-2.39-3.762 2.491 2.491 0 01-1.719-1.641 2.882 2.882 0 01.487-2.325 1.88 1.88 0 011.65-.909 25.739 25.739 0 007.445-.426s-7.456-8.142-6.43-11 3.048 1.736 5.958 3.627A72.015 72.015 0 0019.54 9.08c6.165 1.677 13.963 5.253 10.253 11.246s-12.807 7.442-15.611 7.623c-.874.05-2.08.262-2.712.229z"
                      fill="#ffac9c"
                      stroke="#262626"
                      strokeMiterlimit={10}
                      strokeWidth={1}
                      transform="translate(23.122 24.469) translate(0 34.122) translate(27.313)"
                    />
                  </G>
                </G>
              </G>
              <Path
                data-name="Path 33410"
                d="M108.078 46.234a10.956 10.956 0 00-2.987-6.78h0l-.014-.014-.007-.008-12.671-13.374L72.386 5.332l-1.828-1.883a10.6 10.6 0 00-15.765.133 11.22 11.22 0 00.4 15.188l18.933 19.983-25.1 3.055-.118 18.843 48.986-2.661a11 11 0 0010.184-11.756z"
                fill="#eceeef"
                stroke="#262626"
                strokeMiterlimit={10}
                strokeWidth={1}
                transform="translate(23.122 24.469)"
              />
              <Path
                data-name="Path 33411"
                d="M477.542 202.794a2.487 2.487 0 01-1.719-1.64 2.882 2.882 0 01.487-2.325 1.853 1.853 0 011.076-.819 1.615 1.615 0 00-1.536-.691 2.732 2.732 0 00-1.485.961l2.327 9.642a16.572 16.572 0 001.039-2.57l-.02-.025a2.7 2.7 0 01-.169-2.533z"
                transform="translate(23.122 24.469) translate(-448.421 -144.759)"
                fill="none"
              />
            </G>
            <G data-name="Group 26199">
              <G data-name="Group 26198">
                <G data-name="Group 26195">
                  <Path
                    data-name="Path 33413"
                    d="M485.81 131.946l5.255 1.308a6.242 6.242 0 014.613 7.272l-1.534 7.733-4.612 3.972-1.943-3.024c-2.244-.27-5.311-3.007-4.547-8.825a31.8 31.8 0 012.2-8.176.49.49 0 01.568-.26z"
                    transform="translate(58.618 4.033) translate(-482.923 -131.93)"
                    fill="#ffac9c"
                  />
                </G>
                <G data-name="Group 26196">
                  <Path
                    data-name="Path 33414"
                    d="M487.174 147.478a13.659 13.659 0 004.481-.692s-1.445 1.9-5.151 2.244z"
                    transform="translate(58.618 4.033) translate(3.997 16.584) translate(-486.504 -146.786)"
                    fill="#000e1b"
                  />
                </G>
                <G data-name="Group 26197">
                  <Path
                    data-name="Path 33415"
                    d="M487.273 147.5l1.943 2.832 4.612-3.781 1.145 4.191-4.212 3.246-1.711-2.884-2.368 2.414-1.037-2.776z"
                    transform="translate(58.618 4.033) translate(3.039 16.328) translate(-485.646 -146.557)"
                    fill="#4b4b4b"
                  />
                </G>
              </G>
              <Path
                data-name="Path 33416"
                d="M493.44 140.93a1.673 1.673 0 101.673-1.672 1.673 1.673 0 00-1.673 1.672z"
                transform="translate(58.618 4.033) translate(-481.701 -131.078)"
                fill="#ffac9c"
              />
            </G>
          </G>
          <G data-name="Group 26228" transform="translate(12.38 5.028)">
            <G data-name="Group 26201" transform="translate(91.126 29.576)">
              <Ellipse
                data-name="Ellipse 3741"
                cx={11.189}
                cy={11.188}
                rx={11.189}
                ry={11.188}
                transform="rotate(-82.93 49.309 13.407)"
                fill="#ffae9d"
              />
              <Path
                data-name="Rectangle 8609"
                transform="rotate(51.852 5.593 22.695)"
                fill="#ffac9c"
                stroke="#262626"
                strokeMiterlimit={10}
                strokeWidth={1}
                d="M0 0H50.537V22.381H0z"
              />
              <Path
                data-name="Path 33417"
                d="M376.445 159.84a11.189 11.189 0 111.887-15.712 11.186 11.186 0 01-1.887 15.712z"
                transform="translate(-358.346 -139.85)"
                fill="#2743ab"
              />
            </G>
            <Path
              data-name="Path 33418"
              d="M111.112 33.855l-.022.016a11.185 11.185 0 00-18.488 12.443l-3.949 2.657 19.034 27.689 23.482-17.265z"
              fill="#4a4a4a"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Path 33419"
              d="M154.759 34.181l-.606.738-9.565 47.225a11.186 11.186 0 11-21.872-4.521 11.376 11.376 0 01.407-1.218l13.245-39.634a32.1 32.1 0 001.464-6.652c.35-3.148.939-7.87 1.516-10.744 1.07-3.834 3.368-12.49 3.2-17.2s5.729-.918 5.418 3.233-.551 5.9.733 8.082 12.3-2.664 14.1-.57.034 4.457.034 4.457 2.124 1.317.342 4.314l-1.238 1.009c.465.627 1.246 1.173 1.312 2.353a3.5 3.5 0 01-1.691 2.591 3.235 3.235 0 01.189 2.539c-.539.98-3.688 2.608-6.988 3.998z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Path 33420"
              d="M159.576 31.569l-4.581-.255a1.453 1.453 0 01-1.438-1.072h0a1.533 1.533 0 011.257-1.63l3.988-1.111a2.408 2.408 0 013.077 1.528h0a2.4 2.4 0 01-2.303 2.54z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Path 33421"
              d="M160.998 28.015l-6.4-.194a1.641 1.641 0 01-1.563-1.337h0a1.641 1.641 0 011.164-1.88l5.831-1.659a2.585 2.585 0 013.172 2.031h0a2.585 2.585 0 01-2.204 3.039z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <Path
              data-name="Path 33422"
              d="M161.366 17.712l-6.938.643a1.621 1.621 0 01-1.727-1.243h0a1.622 1.622 0 01.987-1.882l6.481-2.539a2.585 2.585 0 013.261 1.882h0a2.585 2.585 0 01-2.064 3.139z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <G data-name="Group 26208">
              <G data-name="Group 26202">
                <Path
                  data-name="Path 33423"
                  d="M364.439 412.125c5.006-.63 8.875-5.637 8.875-5.637h4.739c-1.627-8.192-1.337-10.723-1.337-10.723l-20.782 6.779.27 4.353a3.746 3.746 0 013.714 2.417 3.938 3.938 0 004.521 2.811z"
                  transform="translate(88.433 315.272) translate(-355.934 -395.766)"
                  fill="#fff"
                />
              </G>
              <G data-name="Group 26203">
                <Path
                  data-name="Path 33424"
                  d="M395.9 417.011c-5.766-3.178-15.847-1.747-17.69-10.7-.068-.327-.126-.627-.188-.939h-4.739s-3.869 5.007-8.875 5.637a3.938 3.938 0 01-4.522-2.811 3.746 3.746 0 00-3.714-2.417l1.074 17.339h45.08s-.657-2.931-6.426-6.109z"
                  transform="translate(88.433 315.272) translate(.27 10.723) translate(-356.176 -405.371)"
                  fill="#00d5ff"
                />
              </G>
              <G data-name="Group 26206">
                <G data-name="Group 26204">
                  <Path
                    data-name="Path 33425"
                    d="M364.941 415.006a15.178 15.178 0 00-8.386-3.153l.07 1.147a13.891 13.891 0 0112.205 9.365h1.205a15.192 15.192 0 00-5.094-7.359z"
                    transform="translate(88.433 315.272) translate(.693 10.723) translate(0 7.236) translate(-356.555 -411.853)"
                    fill="#87ebff"
                  />
                </G>
                <G data-name="Group 26205">
                  <Path
                    data-name="Path 33426"
                    d="M371.554 405.371s-.169.215-.467.55c1.133 5.975 4.1 9.864 9.1 11.85a9.078 9.078 0 003.362.644 9.346 9.346 0 006.708-2.885q-.633-.174-1.28-.337a8.1 8.1 0 01-8.367 1.513c-4.7-1.868-7.465-5.578-8.47-11.336z"
                    transform="translate(88.433 315.272) translate(.693 10.723) translate(16.22) translate(-371.087 -405.371)"
                    fill="#87ebff"
                  />
                </G>
              </G>
              <G data-name="Group 26207">
                <Path
                  data-name="Path 33427"
                  d="M357.138 421.269l.289 3.472h45.083l-.292-3.472z"
                  transform="translate(88.433 315.272) translate(1.344 28.47) translate(-357.138 -421.269)"
                  fill="#fff"
                />
              </G>
            </G>
            <G data-name="Group 26209">
              <Path
                data-name="Path 33428"
                d="M284.973 407.982l4.266-8.442 18.388 4.2-1.239 5.168s-3.871 2.337-12.126 2.779-9.289-3.705-9.289-3.705z"
                transform="translate(9.228 319.486) translate(-284.973 -399.54)"
                fill="#fff"
              />
            </G>
            <G data-name="Group 26210">
              <Path
                data-name="Path 33429"
                d="M288.949 407.35a13.507 13.507 0 017.579-2.174 8.836 8.836 0 016.441 3.11h4.2l-4.305 14.841h-24.595l7.483-15.778z"
                transform="translate(1.745 325.768) translate(-278.269 -405.168)"
                fill="#00d5ff"
              />
            </G>
            <G data-name="Group 26211">
              <Path
                data-name="Path 33430"
                d="M278.45 421.256l-1.745 3.486h25.452l.886-3.486z"
                transform="translate(0 343.728) translate(-276.705 -421.256)"
                fill="#fff"
              />
            </G>
            <G data-name="Group 26212">
              <Path
                data-name="Path 33431"
                d="M278.9 421.583l.152.167h1.456a17.27 17.27 0 0121.117 0h1.163l.122-.42a18.4 18.4 0 00-24.009.252z"
                transform="translate(2.451 338.981) translate(-278.901 -417.004)"
                fill="#87ebff"
              />
            </G>
            <G data-name="Group 26213">
              <Path
                data-name="Path 33432"
                d="M302.048 408.06s-.071-.095-.208-.247c-.685 2.118-3.436 9.187-9.6 9.185h-.215a4.294 4.294 0 01-3.647-1.676c-1.7-2.373-.873-6.621-.482-8.2h-1.181c-.449 1.9-1.168 6.211.73 8.862a5.435 5.435 0 004.548 2.157h.25c7 0 10.019-7.889 10.723-10.085z"
                transform="translate(10.594 327.951) translate(-286.197 -407.123)"
                fill="#87ebff"
              />
            </G>
            <G data-name="Group 26215">
              <G data-name="Group 26214">
                <Path
                  data-name="Path 33433"
                  d="M3.906 0S-1.649 7.638.491 37.448c.911 12.693 6.857 53.8 8.321 79.549l29.7-1.872L33.03 7.842z"
                  fill="#141414"
                  stroke="#262626"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(72.01 109.727)"
                />
              </G>
            </G>
            <Path
              data-name="Path 33434"
              d="M349.114 316.643l6.359 96.393h25.647l-2.3-98.266z"
              transform="translate(-268.293 -89.919)"
              fill="#000615"
            />
            <Path
              data-name="Path 33435"
              d="M378.819 316.225a14.88 14.88 0 11-15.786-13.918 14.882 14.882 0 0115.786 13.918z"
              transform="translate(-268.296 -91.373)"
              fill="#000615"
            />
            <Path
              data-name="Path 33436"
              d="M378.819 316.225a14.88 14.88 0 11-15.786-13.918 14.882 14.882 0 0115.786 13.918z"
              transform="translate(-268.296 -91.373)"
              fill="#000615"
            />
            <Path
              data-name="Path 33437"
              d="M302.462 314.093l-18.472 94.82 24.8 6.553 22.871-95.594z"
              transform="translate(-275.859 -89.998)"
              fill="#000615"
            />
            <Ellipse
              data-name="Ellipse 3742"
              cx={14.88}
              cy={14.881}
              rx={14.88}
              ry={14.881}
              transform="rotate(-31.168 408.286 73.747)"
              fill="#000615"
            />
            <G data-name="Group 26218" transform="translate(20.767 116.678)">
              <G data-name="Group 26217">
                <G data-name="Group 26216">
                  <Path
                    data-name="Path 33438"
                    d="M24.96.479s-6.226 6.463-11.8 33.781c-2.545 12.469-8 47.894-13.159 73.158l29.195 5.779L56.325-.003z"
                    fill="#141414"
                    stroke="#262626"
                    strokeMiterlimit={10}
                    strokeWidth={1}
                    transform="translate(5.837)"
                  />
                </G>
              </G>
              <Ellipse
                data-name="Ellipse 3743"
                cx={14.88}
                cy={14.881}
                rx={14.88}
                ry={14.881}
                transform="rotate(-31.168 188.732 52.638)"
                fill="#141414"
              />
            </G>
            <G data-name="Group 26219">
              <Path
                data-name="Path 33439"
                d="M319.674 181.016a.651.651 0 00-.057.069l.1.19z"
                transform="translate(47.897 75.533) translate(-319.617 -181.016)"
                fill="none"
              />
            </G>
            <Path
              data-name="Path 33440"
              d="M51.563 117.156l-5.932-59.022 4.139-28.591h52.6s13.058 25.679 2.882 58.454l-.208 29.573z"
              fill="#5d5d5e"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
            <G data-name="Group 26220">
              <Path
                data-name="Path 33441"
                d="M339.577 127.641l.512 13.268h11.071l-.827-5.28z"
                transform="translate(70.177 15.947) translate(-339.577 -127.641)"
                fill="#ffae9d"
              />
            </G>
            <Path
              data-name="Path 33442"
              d="M349.431 135.171c.313.03.592.65.644 1.01l.333 2.124c-5.389-.347-7.11-5.858-7.11-5.858 1.194 1.336 4.717 2.591 6.133 2.724z"
              transform="translate(-268.969 -111.135)"
              fill="#000615"
            />
            <G data-name="Group 26221">
              <Path
                data-name="Path 33443"
                d="M341.724 130.226a16.842 16.842 0 001.525 3.677c.8 1.2 7.7 4.7 9.269 3.662 1.341-.89 1.579-4.977 1.682-7.346a45.517 45.517 0 00-.228-8.373l-9.213-1.826-3.4 7.518z"
                transform="translate(72.167 7.439) translate(-341.361 -120.02)"
                fill="#ffae9d"
              />
            </G>
            <G data-name="Group 26222">
              <Path
                data-name="Path 33444"
                d="M339.879 121.034s-6.139-1.868-.405 8.4l.6 4.941 2.028-2.83 1.4-2.56.9 2.348h.52l-.142-5.6a3.2 3.2 0 001.915-3.355s9.058 2.625 10.444-.547l-1.609-2.271-1.1.593a6.292 6.292 0 001.61-3.814l-2.118 1.864a3.7 3.7 0 00.663-2.478 2.225 2.225 0 00-2.14-1.956 2.327 2.327 0 00-1.807.766 7.075 7.075 0 01-2.3 1.592c-2.715 1.216-9.87.153-8.459 4.907z"
                transform="translate(67.329 .456) translate(-337.026 -113.765)"
                fill="#000615"
              />
            </G>
            <G data-name="Group 26223">
              <Path
                data-name="Path 33445"
                d="M343.419 128.351a2.212 2.212 0 11-2.212-2.213 2.213 2.213 0 012.212 2.213z"
                transform="translate(69.525 14.269) translate(-338.994 -126.138)"
                fill="#ffae9d"
              />
            </G>
            <G data-name="Group 26224">
              <Path
                data-name="Path 33446"
                d="M346.585 144.926l2.386-4.434 2.873 4.193a31.367 31.367 0 00.922-4.222l-2.041-3.507-1.819 2.531-8.951-4.047-.736 5.02z"
                transform="translate(69.777 24.653) translate(-339.219 -135.44)"
                fill="#fff"
              />
            </G>
            <G data-name="Group 26227">
              <G data-name="Group 26225">
                <Path
                  data-name="Path 33447"
                  d="M378.086 184.338l-.045-1.251c-.018-.562-4.333-.879-9.635-.709s-9.589.765-9.571 1.326l.044 1.244c-1.647.31-2.633.668-2.622 1.023l.09 2.287c.011.231.291.455.77.665l.63 5.131-.315-.035-.215-1.769a44.327 44.327 0 00-7.41 1.316l-29.294-3.549 2.067 19.89 26.263-.057c5.632 1.749 8.893 1.355 10.972 1.047l.244 1.986c.049 1.5 4.215 2.3 9.328 2.139a27.624 27.624 0 006.706-.922c.166-8.542 1.433-21.16 2.466-29.7-.159-.019-.308-.042-.473-.062z"
                  transform="translate(17.24 29.566) translate(31.655 47.435) translate(-320.511 -182.331)"
                  opacity={0.5}
                />
              </G>
              <G data-name="Group 25242">
                <G data-name="Group 25241">
                  <G data-name="Group 25232">
                    <G data-name="Group 25231">
                      <Path
                        data-name="Path 32115"
                        d="M23.095 0l-1.48 25.558h0c.048 1.5-4.067 2.569-9.182 2.734s-9.279-.637-9.328-2.139L0 .864C4.177 3.891 19.123 3.291 23.095 0z"
                        fill="#ffa400"
                        stroke="#262626"
                        strokeMiterlimit={10}
                        strokeWidth={1}
                        transform="translate(17.24 29.566) translate(67.352 40.737) translate(.744 4.402)"
                      />
                    </G>
                  </G>
                  <G data-name="Group 25234">
                    <G data-name="Group 25233">
                      <Path
                        data-name="Path 32116"
                        d="M352.625 182.015l-.09-2.287 1.227-.171c1.951-.978 20.044-1.56 22.059-.709l1.211.093.081 2.287c.045.9-5.406 2.375-12.171 2.591s-12.264-.736-12.317-1.804z"
                        transform="translate(17.24 29.566) translate(67.352 40.737) translate(.047 2.35) translate(-352.535 -178.436)"
                        fill="#fff"
                      />
                    </G>
                  </G>
                  <G data-name="Group 25236">
                    <G data-name="Group 25235">
                      <Ellipse
                        data-name="Ellipse 3662"
                        cx={12.246}
                        cy={1.513}
                        rx={12.246}
                        ry={1.513}
                        transform="translate(17.24 29.566) translate(67.352 40.737) translate(0 1.344) rotate(-1.835 24.477 .392)"
                        fill="#262626"
                      />
                    </G>
                  </G>
                  <G data-name="Group 25238">
                    <G data-name="Group 25237">
                      <Path
                        data-name="Path 32117"
                        d="M354.9 179.1l-.051-1.437.954-.151c1.534-.637 15.727-1.094 17.3-.556l.952.088.05 1.438c.032.97-4.256 1.641-9.56 1.812s-9.618-.227-9.645-1.194z"
                        transform="translate(17.24 29.566) translate(67.352 40.737) translate(2.627 .43) translate(-354.846 -176.716)"
                        fill="#fff"
                      />
                    </G>
                  </G>
                  <G data-name="Group 25240">
                    <G data-name="Group 25239">
                      <Path
                        data-name="Path 32118"
                        d="M364.482 178.412c5.3-.171 9.589-.764 9.57-1.326s-4.333-.879-9.635-.709-9.589.765-9.571 1.326 4.332.88 9.636.709z"
                        transform="translate(17.24 29.566) translate(67.352 40.737) translate(2.627) translate(-354.846 -176.331)"
                        fill="#262626"
                      />
                    </G>
                  </G>
                </G>
              </G>
              <Path
                data-name="Path 33448"
                d="M339.061 193.968a8.156 8.156 0 117.659 8.625 8.156 8.156 0 01-7.659-8.625z"
                transform="translate(17.24 29.566) translate(-286.703 -134.435)"
                fill="#ffac9c"
              />
              <G
                data-name="Group 26226"
                stroke="#262626"
                strokeMiterlimit={10}
                strokeWidth={1}
              >
                <Path
                  data-name="Path 33449"
                  d="M0 51.962L20.513 5.775l19.882 8.833-19.943 46.444z"
                  fill="#ffac9c"
                  transform="translate(17.24 29.566) translate(1.448)"
                />
                <Path
                  data-name="Path 33450"
                  d="M34.285.965a11.177 11.177 0 00-13.979 4.24l-.011-.006L2.702 33.778l24.085 11.635 13.182-29.68A11.191 11.191 0 0034.285.965z"
                  fill="#606060"
                  transform="translate(17.24 29.566) translate(1.448)"
                />
              </G>
              <Path
                data-name="Path 33452"
                d="M2.74 49.859a11.191 11.191 0 007.785 18.507 11.429 11.429 0 001.283 0l48.176-.1c8.8 2.733 11.82.234 13.57 1s8.9 3.225 9.526 1.345c.676-2.031-7.707-5.237-7.538-5.389 0 0 10.583 3.717 11.247 1.487.657-2.207-10.168-5.421-10.168-5.421s11.48 3.575 12.133.882c.621-2.562-11.78-4.405-11.78-4.405s11.769 2.156 12.143-.5c.365-2.584-11.014-3.767-20.542-4.834l-.215-1.769a44.326 44.326 0 00-7.41 1.316l-43.409-5.259"
                fill="#ffac9c"
                stroke="#262626"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={1}
                transform="translate(17.24 29.566)"
              />
            </G>
            <Path
              data-name="Path 33453"
              d="M162.243 22.472l-8.164.778a1.592 1.592 0 01-1.7-1.207h0a1.593 1.593 0 011.014-1.88l7.608-2.7a2.583 2.583 0 013.277 1.854h0a2.586 2.586 0 01-2.035 3.155z"
              fill="#ffac9c"
              stroke="#262626"
              strokeMiterlimit={10}
              strokeWidth={1}
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export function KotakLogo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="112.669dp"
      height="30dp"
      {...props}
    >
      <Path
        d="M17.898 29.724C8.29 29.724.454 23.11.454 14.999S8.289.276 17.898.276 35.342 6.89 35.342 14.999s-7.835 14.725-17.444 14.725z"
        fill="#003b7e"
        fillRule="evenOdd"
      />
      <Path
        d="M28.711 16.405l1.947.084c-1.156 8.084-8.829 8.675-12.693.847l.507-.847c4.006 2.54 8.688 3.5 10.24-.084z"
        fill="#fff"
        fillRule="evenOdd"
      />
      <Path
        d="M15.889 5.008l3.893-1.239.169 21.472-4.231 1.4.169-21.637z"
        fill="#e50019"
        fillRule="evenOdd"
      />
      <Path
        d="M29.177 13.614h1.777c-.684-3.569-2.56-5.814-6.178-6.121q-4.529.082-7.7 5.06c-1.4 2.04-3.63 5.256-6.349 5.634-3.274.457-5.177-2.322-3.76-4.716.86-1.457 3.18-2.066 4.8-1.918h.027a9.687 9.687 0 014.031 1.2l.026-3.008a11.071 11.071 0 00-2.205-1.625 5.551 5.551 0 00-3.427-.549C5.28 8.617 4.378 12.506 5.31 17.69c1.918 6.012 7.9 6.474 11.34 2.61 2.355-2.717 8.21-11.9 12.527-6.691z"
        fill="#fff"
        fillRule="evenOdd"
      />
      <Path
        d="M54.204 18.968c3.061 0 5.478-1.773 5.478-4.834s-2.417-5-5.478-5-5.477 1.934-5.477 5 2.415 4.834 5.477 4.834zm0-2.256c-1.449 0-2.093-1.288-2.093-2.578 0-1.449.644-2.739 2.093-2.739s2.1 1.29 2.1 2.739c0 1.29-.644 2.578-2.1 2.578zm5.156-5h1.771v3.707c0 2.256.807 3.544 3.707 3.544.807 0 1.29-.163 1.934-.163l-.163-2.093c-.32 0-.644.161-.964.161-.968 0-1.292-.644-1.292-1.771v-3.385h2.256V9.456h-2.256V6.234l-3.058 1.129v2.093h-1.936v2.256zm18.529 7.089h3.224v-4.672h.161l2.578 4.672h3.868l-3.546-5.153L87.4 9.456h-3.548l-2.578 3.868h-.161V6.233l-3.224 1.129V18.8zm-37.7 0h3.222v-4.672l2.578 4.672h3.868l-3.385-5.153 3.222-4.192h-3.547l-2.739 3.868V6.233l-3.222.968v11.6zm36.577 0a10.627 10.627 0 01-.161-2.254v-3.544c0-2.9-2.093-3.868-4.51-3.868a9.468 9.468 0 00-3.707.644v2.258a6.529 6.529 0 013.063-.646c1.127 0 2.093.322 2.093 1.612a3.95 3.95 0 00-1.449-.163c-1.773 0-5 .324-5 3.224 0 2.1 1.771 2.9 3.546 2.9a3.315 3.315 0 003.061-1.612c0 .485.161.966.161 1.449zm-6.6-3.058c0-.807.964-1.129 2.093-1.129h1.288a2.144 2.144 0 01-1.932 2.254c-.807 0-1.449-.481-1.449-1.125z"
        fill="#e50019"
        fillRule="evenOdd"
      />
      <Path
        d="M88.395 6.782a1.557 1.557 0 01.745.2 1.4 1.4 0 01.565.56 1.523 1.523 0 010 1.513 1.4 1.4 0 01-.56.562 1.524 1.524 0 01-1.508 0 1.417 1.417 0 01-.562-.562 1.511 1.511 0 010-1.513 1.415 1.415 0 01.567-.56 1.557 1.557 0 01.745-.2zm0 .251a1.286 1.286 0 00-.622.165 1.164 1.164 0 00-.472.468 1.273 1.273 0 00-.17.631 1.248 1.248 0 00.168.628 1.167 1.167 0 00.468.468 1.266 1.266 0 001.255 0 1.178 1.178 0 00.468-.468 1.261 1.261 0 000-1.259 1.152 1.152 0 00-.472-.468 1.285 1.285 0 00-.62-.165zm-.664 2.1V7.506h.56a1.333 1.333 0 01.415.046.4.4 0 01.207.157.428.428 0 01-.053.547.5.5 0 01-.34.15.419.419 0 01.139.086 1.807 1.807 0 01.242.322l.2.318h-.318l-.145-.256a1.3 1.3 0 00-.276-.379.318.318 0 00-.21-.055h-.156v.69zm.262-.917h.32a.517.517 0 00.313-.068.221.221 0 00.082-.18.213.213 0 00-.04-.128.234.234 0 00-.11-.086.868.868 0 00-.265-.027h-.3v.489z"
        fill="#003b7e"
        fillRule="evenOdd"
      />
      <Path
        d="M43.399 27.182h-.867l-2.183-2.553a2.874 2.874 0 01-.146-.187h-.018v2.739h-.611v-5.574h.611v2.617h.018a1.389 1.389 0 01.146-.183l2.119-2.434h.763l-2.419 2.672 2.587 2.9zm.291-1.938a2.185 2.185 0 01.54-1.562 1.938 1.938 0 011.475-.571 1.756 1.756 0 011.374.551 2.18 2.18 0 01.5 1.521 2.139 2.139 0 01-.54 1.519 1.863 1.863 0 01-1.427.575 1.84 1.84 0 01-1.391-.552 2.054 2.054 0 01-.531-1.479zm.611-.026a1.64 1.64 0 00.37 1.125 1.236 1.236 0 00.983.421 1.194 1.194 0 00.97-.41 1.743 1.743 0 00.344-1.151 1.8 1.8 0 00-.34-1.171 1.189 1.189 0 00-.974-.41 1.241 1.241 0 00-.986.425 1.743 1.743 0 00-.366 1.171zm6.113 1.925a1.169 1.169 0 01-.578.124c-.682 0-1.027-.384-1.027-1.155v-2.39h-.69v-.52h.69v-.979l.6-.192v1.176h1.005v.52h-1.006v2.28a.944.944 0 00.137.58.546.546 0 00.456.172.64.64 0 00.414-.132v.518zm.957-3.656a2.432 2.432 0 011.341-.377q1.386 0 1.387 1.471v2.6h-.6v-.626h-.022a1.327 1.327 0 01-1.222.719 1.309 1.309 0 01-.93-.315 1.076 1.076 0 01-.34-.831q0-1.106 1.308-1.294l1.2-.172q0-1.035-.827-1.036a1.932 1.932 0 00-1.3.494v-.635zm1.149 1.806a1.363 1.363 0 00-.712.247.694.694 0 00-.2.547.616.616 0 00.214.487.822.822 0 00.56.187 1.04 1.04 0 00.794-.34 1.211 1.211 0 00.316-.853v-.4l-.973.13zm6.049 1.888h-.855l-1.788-1.907h-.012v1.907h-.6v-5.888h.6v3.735h.018l1.7-1.824h.8l-1.87 1.925 2.018 2.053zm7.612 0v-3.76c0-.287.02-.646.057-1.078h-.017a3.1 3.1 0 01-.166.525l-1.942 4.313h-.273l-1.94-4.282a3.435 3.435 0 01-.161-.556h-.018q.033.3.033 1.065v3.773h-.6v-5.574h.8l1.744 3.923a5.839 5.839 0 01.26.657h.024c.073-.192.163-.419.271-.673l1.785-3.907h.756v5.57zm2.093-3.694a2.432 2.432 0 011.341-.377q1.386 0 1.385 1.471v2.6h-.6v-.626h-.022a1.327 1.327 0 01-1.222.719 1.309 1.309 0 01-.93-.315 1.076 1.076 0 01-.34-.831q0-1.106 1.308-1.294l1.2-.172q0-1.035-.827-1.036a1.932 1.932 0 00-1.3.494v-.635zm1.147 1.806a1.369 1.369 0 00-.71.247.694.694 0 00-.2.547.616.616 0 00.214.487.821.821 0 00.56.187 1.04 1.04 0 00.794-.34 1.211 1.211 0 00.317-.853v-.4l-.975.13zm6.06 1.888h-.6v-2.294q0-1.265-.946-1.264a1.028 1.028 0 00-.8.364 1.37 1.37 0 00-.324.944v2.251h-.6v-5.888h.6v2.576h.018a1.447 1.447 0 011.308-.759q1.342 0 1.341 1.623v2.448zm1.136-5.409a.394.394 0 01.113-.286.367.367 0 01.274-.117.4.4 0 01.287.117.392.392 0 01.115.286.375.375 0 01-.115.276.384.384 0 01-.287.119.369.369 0 01-.278-.115.4.4 0 01-.11-.28zm.082 5.409v-3.974h.6v3.978zm5.176 0h-.6v-2.274q0-1.287-.942-1.286a1.023 1.023 0 00-.811.368 1.365 1.365 0 00-.315.922v2.269h-.6v-3.973h.6v.666h.016a1.433 1.433 0 011.307-.759 1.218 1.218 0 011 .421 1.87 1.87 0 01.346 1.221v2.43zm4.575 0h-.6v-.683h-.015a1.606 1.606 0 01-2.575.238 2.194 2.194 0 01-.446-1.451 2.386 2.386 0 01.5-1.577 1.635 1.635 0 011.319-.6 1.294 1.294 0 011.2.651h.015v-2.468h.6v5.888zm-.6-2.4a1.136 1.136 0 00-.333-.827 1.092 1.092 0 00-.814-.337 1.117 1.117 0 00-.939.439 1.913 1.913 0 00-.339 1.193 1.716 1.716 0 00.326 1.1 1.056 1.056 0 00.875.412 1.124 1.124 0 00.876-.386 1.429 1.429 0 00.348-.988v-.6zm3.945-.968a.774.774 0 00-.478-.126.8.8 0 00-.692.4 1.825 1.825 0 00-.273 1.052v2.035h-.6v-3.967h.6v.825h.017a1.378 1.378 0 01.419-.659.943.943 0 01.618-.234 1.061 1.061 0 01.388.055v.628zm.79-.331a2.432 2.432 0 011.341-.377q1.386 0 1.385 1.471v2.6h-.6v-.626h-.022a1.327 1.327 0 01-1.222.719 1.309 1.309 0 01-.93-.315 1.076 1.076 0 01-.34-.831q0-1.106 1.308-1.294l1.2-.172q0-1.035-.827-1.036a1.932 1.932 0 00-1.3.494v-.635zm1.147 1.806a1.362 1.362 0 00-.71.247.694.694 0 00-.2.547.616.616 0 00.214.487.822.822 0 00.56.187 1.043 1.043 0 00.794-.34 1.211 1.211 0 00.317-.853v-.4l-.975.13zm4.719 1.888v-5.569h1.563a1.7 1.7 0 011.118.348 1.136 1.136 0 01.425.924 1.344 1.344 0 01-.955 1.327v.017a1.353 1.353 0 01.9.417 1.317 1.317 0 01.34.94 1.459 1.459 0 01-.509 1.153 1.887 1.887 0 01-1.286.445zm.611-5v1.83h.677a1.3 1.3 0 00.864-.264.926.926 0 00.309-.739c0-.553-.36-.827-1.08-.827zm0 2.4v2.04h.9a1.358 1.358 0 00.9-.276.941.941 0 00.326-.761q0-1-1.374-1zm3.921-1.087a2.432 2.432 0 011.341-.377q1.386 0 1.385 1.471v2.6h-.6v-.626h-.022a1.331 1.331 0 01-1.224.719 1.316 1.316 0 01-.93-.315 1.075 1.075 0 01-.338-.831q0-1.106 1.308-1.294l1.2-.172q0-1.035-.827-1.036a1.932 1.932 0 00-1.3.494v-.635zm1.147 1.806a1.361 1.361 0 00-.71.247.694.694 0 00-.2.547.616.616 0 00.214.487.818.818 0 00.56.187 1.034 1.034 0 00.792-.34 1.2 1.2 0 00.318-.853v-.4l-.975.13zm6.058 1.888h-.6v-2.276q0-1.287-.942-1.286a1.02 1.02 0 00-.811.368 1.365 1.365 0 00-.315.922v2.269h-.6v-3.973h.6v.666h.017a1.432 1.432 0 011.306-.759 1.218 1.218 0 011 .421 1.881 1.881 0 01.344 1.221v2.43zm4.472 0h-.846l-1.788-1.907h-.012v1.907h-.6v-5.888h.6v3.735h.016l1.7-1.824h.794l-1.87 1.925 2.018 2.053z"
        fill="#002c62"
      />
    </Svg>
  )
}

export function YesBankLogo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="82.945dp"
      height="30dp"
      {...props}
    >
      <Path
        d="M0 6.308h39.977l-13.026 18h-3.105l-1.695-.057.053.057H0v-18zm42.88 0h40.065v18H32.958l9.922-18z"
        fill="#0055a5"
        fillRule="evenOdd"
      />
      <Path
        d="M61.738 14.18c.113.069 1.362 1.4 1.479 1.523.246.262.488.511.727.768.587.631 1.262 1.294 1.837 1.918l1.443 1.517c.286.274.229.281.442.283v-9.322h-1.523v5.72l-2.2-2.288c-.13-.12-.246-.261-.369-.393s-.24-.241-.362-.371c-.816-.89-1.737-1.8-2.545-2.674-.069-.072-.114-.127-.18-.2-.088-.1-.085-.1-.262-.087l.007 9.317 1.505-.005v-5.711zm-17.172 4.449l.008-2.816a3.741 3.741 0 012.357.37 1.469 1.469 0 01.023 2.04 3.367 3.367 0 01-2.388.406zm0-4.01l.013-2.554a3.936 3.936 0 012.179.306 1.035 1.035 0 01.406.936c-.027 1.267-1.652 1.521-2.6 1.312zm2.752.449a1.951 1.951 0 001.346-1.47 2.182 2.182 0 00-.643-2.079 3.393 3.393 0 00-2.169-.647c-.917-.021-1.862-.007-2.786 0l.008 9.026c.933.023 2.123.044 3.043-.028a3.237 3.237 0 002.183-.859 2.7 2.7 0 00.528-2.4 2.133 2.133 0 00-1.509-1.538zm26.294.108c.249-.218.772-.845 1.028-1.078l2.529-2.687a5.865 5.865 0 00.487-.538l-1.64-.005c-.144 0-.129-.013-.21.06l-1.507 1.6c-.081.1-.157.157-.245.253-.644.688-1.308 1.408-1.987 2.1-.047-1.225.013-2.731-.008-4.013l-1.548.005.005 9.02h1.539l.007-.14c.023-1.081 0-2.392 0-3.488l.009-.576 3.861 4.03c.15.146.069.174.349.174l1.81-.005-1.122-1.173c-.2-.185-.361-.4-.552-.592l-1.983-2.063c-.092-.1-.189-.177-.281-.274a4.6 4.6 0 01-.54-.615zm-20.764 1.827c.073-.249 1.4-3.271 1.479-3.347l1.433 3.349zm-1.338 2.892c.168-.193.662-1.576.789-1.6h4.022l.728 1.6 1.63-.005-2.124-4.684c-.349-.78-.715-1.557-1.061-2.341l-.934-2.056c-.093-.213-.075-.24-.178-.233-.09.028-.062.017-.114.124l-1.033 2.191c-.373.767-.732 1.561-1.093 2.338l-1.927 4.082a3.616 3.616 0 00-.26.584h1.555zM7.697 15.612c.035.036.024-.055.041.089v4.191l2.07.005c.039-1.117 0-2.651 0-3.848v-.413c.008-.126-.011-.06.039-.109.221-.367 2.543-3.444 2.985-4.05.15-.2.3-.387.423-.582l-2.253-.009-2.043 2.832c-.176-.173-1.806-2.8-1.875-2.828H4.537l.781 1.183c.266.393.536.777.791 1.174l1.586 2.367zm12.017 2.4l-3.453.005v-1.791h2.937v-1.842h-2.937v-1.637h3.427V10.89h-5.459l-.009 9 5.5.005-.005-1.886zm2.185 1.756c2.028.747 4.951.7 5.539-1.773.4-1.686-.516-2.678-1.89-3.43l-1.318-.735c-1.083-.637-.588-1.72.677-1.5a3.933 3.933 0 011.033.346c.325.152.591.326.88.467v-2.106c-.349-.088-.683-.22-1.071-.309-3.941-.893-5.094 2.631-3.248 4.274a4.852 4.852 0 00.793.587c.592.362 1.089.6 1.682 1.009 1 .688.494 1.987-1.354 1.622a7.983 7.983 0 01-1.9-.829l.172 2.378z"
        fill="#fff"
        fillRule="evenOdd"
      />
      <Path
        d="M46.061 0L28.699 30l-5.008-5.169 3.415.112L46.06 0z"
        fill="#e50019"
        fillRule="evenOdd"
      />
    </Svg>
  )
}

export function Cross(props) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path d="M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z" />
    </Svg>
  )
}

export function PermissionGraphic(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={375}
      height={270.802}
      viewBox="0 0 375 270.802"
      {...props}
    >
      <G opacity={0.2}>
        <Path
          data-name="Path 33470"
          d="M409.7 2693.489a84.892 84.892 0 0010.312-5.458 111.841 111.841 0 0047.04-56.344c8.236-22 9.271-45.94 10.217-69.414 1.352-33.576 2.679-67.511-3.711-100.5-2.129-10.988-5.474-22.44-13.727-30-12.326-11.291-32.368-10.168-46.779-1.7s-24.375 22.69-33.391 36.766c-19.984 31.2-38.17 64.573-66.442 88.522-14.272 12.09-31.411 22.177-39.759 38.916-8.163 16.367-6.03 36.566 2.371 52.812s23.389 27.637 37.508 39.264a70.307 70.307 0 0010.322 7.156z"
          transform="translate(-181.439 -2469.837) translate(-6.677 46.326)"
          fill="#ece9fc"
        />
        <Path
          data-name="Path 33474"
          d="M485.035 2775.713c15.145-6.139 30.61-15.721 41.379-27.92 15.615-17.689 23.716-42.821 17.68-65.631-4.952-18.715-18.7-34.153-34.813-44.889-29.423-19.611-67.8-24.949-101.6-14.56s-62.433 36.171-76.73 68.511c-5.734 12.969-9.278 27.117-8.521 41.276s9.972 33.13 20.02 43.135z"
          transform="translate(-181.439 -2469.837) translate(-20.5 -35.668)"
          fill="#d8d2fc"
        />
        <Path
          data-name="Path 33355"
          d="M637.786 308.256h-9.461l-17.155.129c-52.067-73.005-86.187-90.993-121.651-111.77 7.743-3.3 17.688-8.248 23.714-14.213-11.765 1.866-22.14 5.055-33.941 8.528-15.3-18.351-32.625-27.122-15.419-54.283 24.951-39.386 103.606 11.093 125.719 34.453a142.5 142.5 0 01-.625 34.837 38.263 38.263 0 0017.3-17.256c18.49 26.07 35.585 68.853 31.519 119.575zM563.1 229.91a4.374 4.374 0 00-5.351-3.723 4.86 4.86 0 00-3.832 5.608 4.176 4.176 0 005.19 3.585 4.731 4.731 0 003.993-5.47z"
          transform="translate(-181.439 -2469.837) translate(-275.284 2430.837)"
          fill="#b8b8b8"
        />
        <Path
          data-name="Path 33356"
          d="M202.152 2578.761c99.161 60.212 107.076 73.589 151.005 161.284"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33357"
          d="M210.813 2607.365c7.917-3.41 14.47-6.377 22.616-9.188-2.549-9.635-4.106-19.143-6.811-28.733"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33358"
          d="M235.708 2630.788c12.029-2.625 24.092-4.484 36.318-5.907a200.016 200.016 0 00-4.456-32.862"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33359"
          d="M259.342 2647.677c11.776-1.011 24.386-1.743 36.208-1.6a245.45 245.45 0 00.273-33.943"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33360"
          d="M289.706 2671.316a99.248 99.248 0 0127.974 3.1c4.375-10.19 11.23-20.371 13.8-31.162"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33361"
          d="M310.233 2692.144c9.668 2.164 16.648 6.86 24.76 12.294 7.072-9.309 14.767-19.025 20.332-29.3"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33362"
          d="M253.17 2576.299c1.746 2.57 1.011 5.393-1.848 6.519a7.041 7.041 0 01-8.084-2.427 4.108 4.108 0 011.826-6.556 6.767 6.767 0 018.106 2.464z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33363"
          d="M282.476 2656.94c2.613-.228 4.895 1.024 5.333 3.792a4.7 4.7 0 01-4 5.482 4.282 4.282 0 01-5.234-3.561 5.22 5.22 0 01.047-1.925"
          fill="none"
          stroke="#722030"
          strokeMiterlimit={10}
          strokeWidth={0.75}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33384"
          d="M198.768 2562.833c3.645-1.7 5.534-3.9 9.944-4.339 20.25-2.03 40.264 4.464 58.357 13.748"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33385"
          d="M187.672 2580.172a34.992 34.992 0 015.366-11.62"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33386"
          d="M218.282 2614.897c5.366-1.408 10.793-2.656 16.248-3.666"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33387"
          d="M210.062 2617.356c1.645-.5 3.284-1.014 4.923-1.528"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33388"
          d="M324.465 2635.653c3.488-2.146 7.033-4.467 8.9-8.2"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33389"
          d="M316.403 2639.411c1.725-.7 3.432-1.386 5.116-2.184"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33390"
          d="M295.372 2688.371c6.313 8.6 10.305 18.6 16.761 27.113"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33391"
          d="M288.208 2679.299c1.288 1.617 2.651 3.164 4.023 4.708"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33475"
          d="M597.9 2600.271a19.709 19.709 0 01-2.976-14.67c1.716-8.367 6.853-13.332 5.958-16.9.001-.001 11.318 22.96-2.982 31.57z"
          transform="translate(-181.439 -2469.837) translate(-91.307 -22.97)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33476"
          d="M589.308 2641.945a19.712 19.712 0 0111.324-9.79c8.133-2.608 14.979-.569 17.653-3.1 0 .001-14.461 21.124-28.977 12.89z"
          transform="translate(-181.439 -2469.837) translate(-89.945 -38.671)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33477"
          d="M582.534 2637.621a19.711 19.711 0 01-12.153-8.739c-4.426-7.3-4.032-14.437-7.116-16.45 0 0 23.906 9.157 19.269 25.189z"
          transform="translate(-181.439 -2469.837) translate(-83.171 -34.346)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33478"
          d="M573.53 2678.249a19.71 19.71 0 0111.324-9.789c8.133-2.608 14.979-.568 17.653-3.1 0 0-14.461 21.124-28.977 12.889z"
          transform="translate(-181.439 -2469.837) translate(-85.841 -48.114)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33479"
          d="M566.756 2673.926a19.711 19.711 0 01-12.153-8.739c-4.427-7.305-4.033-14.437-7.117-16.45 0 0 23.907 9.158 19.27 25.189z"
          transform="translate(-181.439 -2469.837) translate(-79.067 -43.79)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33480"
          d="M556.239 2716.514a17.261 17.261 0 0110.37-8.021c7.237-1.893 13.126.218 15.585-1.868 0 0-13.654 17.783-25.955 9.889z"
          transform="translate(-181.439 -2469.837) translate(-81.343 -58.847)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33481"
          d="M550.737 2711.924a17.263 17.263 0 01-10.211-8.222c-3.523-6.6-2.838-12.818-5.439-14.724.001 0 20.47 9.148 15.65 22.946z"
          transform="translate(-181.439 -2469.837) translate(-75.842 -54.257)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33482"
          d="M508.837 2560.253s.6 9.159-1.525 15.118"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33483"
          d="M484.42 2582.825s8.62 16.294 14.776 17.341"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33484"
          d="M521.952 2594.2s-10.638 8.376-18.868 7.3"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33485"
          d="M473.154 2609.887s7.338 16.963 15.061 17.612"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33486"
          d="M509.578 2621.062s-9.3 8.21-18.422 7.422"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33487"
          d="M463.952 2640.952s4.371 13.769 10.675 14.178"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33488"
          d="M494.152 2651.072s-10.036 6.145-17.293 5.191"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33489"
          d="M508.138 2572.45S480.8 2696.058 395.41 2738.306"
          fill="none"
          stroke="#5b5b5b"
          strokeMiterlimit={10}
          strokeWidth={4}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 32592"
          d="M424.585 2735.748a9.556 9.556 0 10-7.743-11.075 9.555 9.555 0 007.743 11.075m-1.111 6.273c16.763 2.969 33.056-9.9 35.726-24.975s-5.869-28.852-17.9-33.962c4.709-26.594 19.1-107.518 23.809-134.113l-4.707-.833-3.6-.638-1.334-.237-3.072-.544-23.749 133.773c-14.787-.065-27.274 9.562-30.151 25.8a31.165 31.165 0 0024.976 35.725z"
          transform="translate(-181.439 -2469.837) translate(-34.472 -2.239)"
          fill="#656bc1"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32593"
          d="M421.349 2732.135a9.556 9.556 0 10-7.744-11.077 9.556 9.556 0 007.744 11.077m28.046-190.429l.009-.047a6.458 6.458 0 0112.718 2.249c-5.311 29.991-18.745 105.565-24.055 135.555 12.027 5.114 20.567 18.889 17.9 33.965s-18.967 27.944-35.73 24.972a31.167 31.167 0 01-24.976-35.725c2.874-16.244 15.363-25.869 30.151-25.8z"
          transform="translate(-181.439 -2469.837) translate(-33.461 .981)"
          fill="#ffa400"
        />
        <Path
          data-name="Path 32594"
          d="M466.958 2548.344l-23.238 130.921a1.4 1.4 0 001.136 1.625 1.408 1.408 0 001.627-1.137l23.237-130.922a1.405 1.405 0 00-1.136-1.625 1.409 1.409 0 00-1.627 1.139"
          transform="translate(-181.439 -2469.837) translate(-48.726 -2.385)"
          fill="#fedca0"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32595"
          d="M491.857 2572.657l5.721 1.013 1.121-6.33-5.721-1.013 1.111-6.274 7.982 1.414 1.678-9.477-14.552-2.578-6.849 38.312 14.615 2.588 1.741-9.467-8.044-1.424z"
          transform="translate(-181.439 -2469.837) translate(-60.794 -3.081)"
          fill="#ffa400"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 33520"
          d="M416.182 2535.15a7.748 7.748 0 00-1.794.05l.005-.04-33.019-6.307-17.569-30.39-14.943 8.637 19.177 33.175a8.564 8.564 0 007.676 4.914l31.878 2.107a3.389 3.389 0 001.007.637s12.574-12.383 7.582-12.783z"
          fill="#ffac9c"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33521"
          d="M407.135 2547.195c.233.159 5.264 3.94 7.369 4.858 1.571.685 6.145 2.534 7.07.879.633-1.127-1.929-2.531-3.718-3.565-.942-.543-2.035-1.746-1.659-2.348.659-1.053 3.078.4 4.638 1.6 3.016 2.318 6.919 6.293 9.126 4.9.834-.529.107-1.781-1.028-3.063 1.908 1.571 3.983 2.925 4.933 2.375a1.1 1.1 0 00.435-1.454 1.466 1.466 0 001.635-.042c.767-.618.573-1.7-.027-2.868a.813.813 0 00.665-.323c1.711-1.994-4.63-9.177-7.028-10.084a55.5 55.5 0 00-14.878-3.046c-.19-.045-2.09-.2-2.09-.2"
          fill="#ffac9c"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33522"
          d="M420.429 2543.427a11.987 11.987 0 014.612 2.5c1.547 1.386 2.691 3.155 4.088 4.678"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33523"
          d="M422.186 2540.514a29.62 29.62 0 015.395 2.688 19.694 19.694 0 014.419 4.8q1.165 1.574 2.26 3.2"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33525"
          d="M424.58 2538.08a15.677 15.677 0 014.9 2.368 26.791 26.791 0 014.459 4.978c.7.976 1.371 1.975 2.026 2.982"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33526"
          d="M356.53 2530.769l19.811-10.623-12.534-21.684h-.008c-.1-.166-.188-.332-.3-.493a8.629 8.629 0 00-15.456 7.2h0l.014.045c.008.029.02.057.029.086z"
          fill="#4a4a4a"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33527"
          d="M362.258 2727.264c3.874-.374 6.967-4.148 6.967-4.148l3.654.1c-1.074-6.351-.794-8.3-.794-8.3l-16.174 4.765.112 3.361h0a2.891 2.891 0 012.81 1.947 3.038 3.038 0 003.425 2.275z"
          fill="#fff"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33528"
          d="M386.406 2732.59c-4.376-2.578-12.18-1.7-13.4-8.641-.045-.254-.083-.488-.124-.729l-3.654-.1s-3.094 3.774-6.967 4.148a3.039 3.039 0 01-3.424-2.267 2.89 2.89 0 00-2.81-1.946h0l.444 13.391 34.757 1s-.447-2.279-4.822-4.856z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <G data-name="Path 33529" fill="#fff" strokeMiterlimit={10}>
          <Path
            d="M398.366 2822.969l-.675-.02-.886-.026-.36-.01-.104-.345c-.572-1.903-1.638-3.567-3.082-4.813a9.485 9.485 0 00-5.253-2.274l-.436-.045-.013-.437-.027-.881-.017-.566.563.053a11.45 11.45 0 016.374 2.714c1.77 1.53 3.098 3.66 3.738 5.999l.178.651z"
            transform="translate(-181.439 -2469.837) translate(-31.345 -85.723)"
          />
          <Path
            d="M388.03 2814.103l.027.88a10.05 10.05 0 015.528 2.394c1.526 1.316 2.646 3.089 3.235 5.047l.886.025c-.611-2.233-1.857-4.262-3.583-5.751a10.887 10.887 0 00-6.093-2.595m-1.034-1.1l1.126.104c2.438.226 4.801 1.233 6.655 2.834 1.845 1.593 3.228 3.81 3.893 6.245l.356 1.303-2.956-.087-.208-.69c-.545-1.812-1.558-3.395-2.93-4.578a8.99 8.99 0 00-4.978-2.156l-.87-.09-.088-2.886z"
            fill="#262626"
            transform="translate(-181.439 -2469.837) translate(-31.345 -85.723)"
          />
        </G>
        <G data-name="Path 33530" fill="#fff" strokeMiterlimit={10}>
          <Path
            d="M415.571 2817.57a7.519 7.519 0 01-2.902-.579c-1.925-.802-3.478-1.976-4.614-3.491-1.128-1.504-1.89-3.404-2.264-5.646l-.042-.249.176-.181c.09-.092.163-.171.22-.232v-.308h.516l.438.013.417.013.062.412c.606 3.997 2.508 6.608 5.815 7.984a5.617 5.617 0 002.177.436 5.79 5.79 0 003.623-1.275l.199-.16.246.067c.335.09.66.183.966.274l.831.248-.63.595a7.597 7.597 0 01-5.234 2.079z"
            transform="translate(-181.439 -2469.837) translate(-37.044 -83.625)"
          />
          <Path
            d="M406.644 2807.384s-.13.15-.36.388c.725 4.34 2.872 7.215 6.578 8.757a7.042 7.042 0 002.71.54 7.147 7.147 0 004.89-1.942 40.225 40.225 0 00-.955-.27c-1.737 1.4-4.173 1.803-6.306.911-3.483-1.45-5.483-4.19-6.117-8.37l-.44-.014m-1-1h1.032l1.272.04.125.823c.585 3.862 2.337 6.276 5.512 7.598.63.263 1.298.397 1.985.397a5.29 5.29 0 003.31-1.164l.397-.32.492.133c.339.092.667.186.977.278l1.664.495-1.263 1.19a8.094 8.094 0 01-5.806 2.212 8.019 8.019 0 01-2.864-.614c-2.009-.836-3.631-2.065-4.822-3.652-1.176-1.569-1.97-3.541-2.357-5.863l-.084-.499.352-.363.078-.08v-.611z"
            fill="#262626"
            transform="translate(-181.439 -2469.837) translate(-37.044 -83.625)"
          />
        </G>
        <Path
          data-name="Path 33531"
          d="M356.468 2736.442l.146 2.683 34.759 1-.148-2.683z"
          fill="#fff"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33532"
          d="M304.383 2727.264c3.946-.374 7.779-4.148 7.779-4.148l3.634.1c.171-6.351.831-8.3.831-8.3l-17.106 4.765-.546 3.361h0a2.278 2.278 0 012.429 1.947 2.43 2.43 0 002.979 2.275z"
          fill="#fff"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33533"
          d="M327.489 2732.59c-3.871-2.578-11.848-1.7-11.711-8.641 0-.254.012-.488.019-.729l-3.634-.1s-3.832 3.774-7.779 4.148a2.431 2.431 0 01-2.981-2.267 2.278 2.278 0 00-2.429-1.946h0l-2.177 13.391 34.561 1s.002-2.279-3.869-4.856z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <G data-name="Path 33534" fill="#fff" strokeMiterlimit={10}>
          <Path
            d="M312.1 2823.159l-.563-.016-.872-.025-.43-.012-.052-.428c-.212-1.776-.946-3.33-2.123-4.491-1.219-1.205-2.853-1.942-4.726-2.133l-.528-.054.085-.523.136-.835.075-.46.464.042c2.283.209 4.362 1.135 5.853 2.609 1.492 1.472 2.426 3.52 2.63 5.765l.05.56z"
            transform="translate(-181.439 -2469.837) translate(-4.917 -85.917)"
          />
          <Path
            d="M303.52 2814.722l-.135.835c1.957.2 3.724.987 5.026 2.274 1.266 1.25 2.047 2.93 2.269 4.787l.87.025c-.192-2.118-1.05-4.041-2.482-5.455-1.433-1.415-3.39-2.269-5.548-2.466m-.837-1.08l.928.084c2.399.22 4.586 1.196 6.16 2.75 1.575 1.556 2.56 3.713 2.776 6.076l.102 1.123-2.86-.081-.102-.857c-.199-1.663-.883-3.113-1.978-4.194-1.137-1.124-2.667-1.812-4.425-1.991l-1.056-.108.455-2.802z"
            fill="#262626"
            transform="translate(-181.439 -2469.837) translate(-4.917 -85.917)"
          />
        </G>
        <G data-name="Path 33535" fill="#fff" strokeMiterlimit={10}>
          <Path
            d="M330.452 2817.523l-.212-.003a6.734 6.734 0 01-2.608-.588c-1.8-.821-3.142-2.026-3.99-3.58-.835-1.535-1.218-3.467-1.136-5.744l.008-.22.168-.142c.109-.093.198-.171.266-.232v-.279h.515l.44.013.511.014-.026.51c-.205 4.001 1.154 6.612 4.156 7.981a4.96 4.96 0 002.08.433c1.341 0 2.75-.466 3.966-1.311l.195-.136.228.065c.303.088.612.181.918.278l.896.284-.736.584c-1.682 1.337-3.684 2.073-5.639 2.073z"
            transform="translate(-181.439 -2469.837) translate(-11.04 -83.579)"
          />
          <Path
            d="M323.448 2807.235s-.162.153-.442.391c-.158 4.387 1.416 7.291 4.833 8.851a6.257 6.257 0 002.613.546c1.82 0 3.738-.7 5.328-1.964-.297-.094-.599-.186-.905-.274-2.037 1.416-4.572 1.823-6.539.923-3.212-1.466-4.664-4.235-4.448-8.46l-.44-.013m-1-1h1.029l1.463.041-.053 1.023c-.196 3.824 1.032 6.207 3.864 7.5a4.467 4.467 0 001.874.387c1.24 0 2.546-.434 3.68-1.222l.39-.272.457.132c.307.088.62.183.93.282l1.79.567-1.47 1.169c-1.77 1.406-3.883 2.18-5.95 2.18a7.229 7.229 0 01-3.028-.635c-1.9-.867-3.32-2.145-4.22-3.796-.88-1.614-1.283-3.633-1.197-6l.016-.44.334-.286.091-.078v-.552z"
            fill="#262626"
            transform="translate(-181.439 -2469.837) translate(-11.04 -83.579)"
          />
        </G>
        <Path
          data-name="Path 33536"
          d="M296.798 2736.442l-.379 2.683 34.564 1 .377-2.683z"
          fill="#fff"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33537"
          d="M335.265 2559.391s-3.363 6.461 1.682 28.952c2.148 9.576 11.392 40.249 15.456 59.715l22.693-2.807-16.719-83.214z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33538"
          d="M352.153 2646.036l2.769 74.449 19.774.568.4-75.8z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33539"
          d="M404.043 2688.477a10.9 10.9 0 01-10.661 11.593c-6.335.216-11.468-5.136-11.685-11.472a10.991 10.991 0 0110.9-11.471c6.335-.218 11.23 5.015 11.446 11.35z"
          transform="translate(-181.439 -2469.837) translate(-29.365 -42.954)"
          fill="#000e1b"
        />
        <Path
          data-name="Path 33540"
          d="M305.569 2645.616l-7.441 74.128 19.511 3.267 10.764-75.036z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33541"
          d="M317.13 2561.714s-4.322 5.406-6.66 26.781c-1.067 9.756-2.735 37.348-4.9 57.115l22.834 2.36 12.781-88.856z"
          fill="#000e1b"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33542"
          d="M336.3 2691.536a11.063 11.063 0 01-12.216 10.154 10.819 10.819 0 01-9.868-12.181c.652-6.306 5.922-11.305 12.228-10.654s10.508 6.376 9.856 12.681z"
          transform="translate(-181.439 -2469.837) translate(-8.278 -43.479)"
          fill="#000e1b"
        />
        <Path
          data-name="Path 33543"
          d="M326.452 2525.112a.392.392 0 00-.044.053l.074.147-.03-.2z"
          transform="translate(-181.439 -2469.837) translate(-12.105 4.506)"
          fill="none"
        />
        <Path
          data-name="Path 33544"
          d="M317.13 2561.719l-2.741-36.333 1.358-31.236h40.574s10.072 19.8 2.223 45.08l-.165 22.806z"
          fill="#606060"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33545"
          d="M352.427 2457.663l.41 10.613h8.857l-.662-4.224z"
          transform="translate(-181.439 -2469.837) translate(-20.229 25.566)"
          fill="#ffac9c"
        />
        <Path
          data-name="Path 33546"
          d="M362.033 2466.892a3.186 3.186 0 00.647 0l.266 1.7c-4.312-.277-5.688-4.686-5.688-4.686.955 1.065 3.642 2.88 4.775 2.986z"
          transform="translate(-181.439 -2469.837) translate(-21.737 23.618)"
          fill="#000e1b"
        />
        <Path
          data-name="Path 33547"
          d="M355.033 2455.932a13.49 13.49 0 001.219 2.941c.64.959 4.585 4.158 6.72 2.755 1.635-1.074 1.959-3.807 2.041-5.7a36.429 36.429 0 00-.182-6.7l-7.371-1.461-2.719 6.013z"
          transform="translate(-181.439 -2469.837) translate(-20.952 28.655)"
          fill="#ffac9c"
        />
        <Path
          data-name="Path 33548"
          d="M351.4 2445.461s-4.911-1.494-.324 6.717l.479 3.952 1.622-2.263 1.117-2.048.721 1.878h.415l-.113-4.48a2.556 2.556 0 001.532-2.683s7.246 2.1 8.356-.438l-1.288-1.816-.881.474a5.032 5.032 0 001.288-3.05l-1.695 1.491a2.95 2.95 0 00.536-1.891 1.8 1.8 0 00-1.72-1.656 1.858 1.858 0 00-1.443.612 5.655 5.655 0 01-1.845 1.274c-2.164.973-7.889.125-6.757 3.927z"
          transform="translate(-181.439 -2469.837) translate(-19.195 31.191)"
          fill="#000e1b"
        />
        <Path
          data-name="Path 33549"
          d="M355.21 2457.48a1.77 1.77 0 11-1.77-1.77 1.77 1.77 0 011.77 1.77z"
          transform="translate(-181.439 -2469.837) translate(-19.993 26.175)"
          fill="#ffac9c"
        />
        <Path
          data-name="Path 33550"
          d="M357.855 2475.377l1.909-3.547 2.3 3.353a25.011 25.011 0 00.737-3.377l-1.633-2.8-1.455 2.025-7.161-3.237-.589 4.016z"
          transform="translate(-181.439 -2469.837) translate(-20.083 22.405)"
          fill="#fff"
        />
        <Path
          data-name="Path 33551"
          d="M317.824 2570.058a6.291 6.291 0 11-1.966 8.677 6.291 6.291 0 011.966-8.677z"
          transform="translate(-181.439 -2469.837) translate(-8.508 -9.224)"
          fill="#ffac9c"
        />
        <Path
          data-name="Path 33552"
          d="M322.032 2568.443c1.194-.1 1.892.356 3.6 1.336s4.53-.766 2.486-1.654-5.271-3.636-6.689-4.875c-1.109-.833-3.061-1.966-4.279-2.84a9.318 9.318 0 01-.748-.749c-1.392-1.609-2.36-3.331-4.455-3.846a6.526 6.526 0 00-7.188 9.649h-.007a88.1 88.1 0 004.677 10.367c2.755 4.882 7.22 8.189 8.776 6.775.648-.589-1.422-2.562-2.6-3.88-.8-.9-.893-1.78-.75-1.811 0 0 6.219 6.681 7.79 5.35.938-.8.385-1.267-1.4-2.914a16.931 16.931 0 01-3.17-4.133c0-.131 4.065 5.082 6.785 5.75 1.634.4 1.959-1.02.2-2.936s-4.376-5.36-4.376-5.36c1.193 1.985 6.151 6.78 7.326 5.679 1.632-1.53-1.791-3.509-3.673-5.891a44.154 44.154 0 01-3.821-6.278"
          fill="#ffac9c"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33553"
          d="M316.403 2559.662l-13.812-24.968 5.034-6.7-9.121-16.6-13.045 17.374h.006a8.627 8.627 0 00-.4 9.781 8.748 8.748 0 00.578.8l19.114 26.113"
          fill="#ffac9c"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 33554"
          d="M320.944 2495.88a8.624 8.624 0 00-10.627.217l-.008-.007-.159.14q-.1.082-.19.167l-19.873 17.529 17.536 14.064 15.038-20.028a8.629 8.629 0 00-1.717-12.082z"
          fill="#606060"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 32596"
          d="M576.825 2493.5v-11.663a15.585 15.585 0 010-1.501v-.028a16.891 16.891 0 0133.7 0v13.192h9.681v-13.422l-.012-.229a26.57 26.57 0 00-53.041 0v.041c-.018.4-.03.8-.03 1.2q0 .475.019.951v11.459z"
          transform="translate(-181.439 -2469.837) translate(-73.845 16.629)"
          fill="#5e5e5e"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32596"
          d="M519.822 2475.647a23.726 23.726 0 00-23.5 22.821v.037a26.58 26.58 0 00-.026 1.094"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          fillRule="evenodd"
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 32597"
          d="M607.106 2510.3h-44.173v.072a11.349 11.349 0 00-10.162 11.162v40.443a11.37 11.37 0 0011.439 11.234h50.9a11.371 11.371 0 0011.44-11.234v-40.442a11.342 11.342 0 00-9.588-11.086v-.148z"
          transform="translate(-181.439 -2469.837) translate(-70.111 2.219)"
          fill="#5e5e5e"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32597"
          d="M494.629 2514.71a10.581 10.581 0 00-9.475 10.407v24.256"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
          fillRule="evenodd"
          transform="translate(-181.439 -2469.837)"
        />
        <Path
          data-name="Path 32598"
          d="M566.63 2506.937h10.136a.633.633 0 01.632.632v2.42a.634.634 0 01-.632.632H566.63a.633.633 0 01-.632-.632v-2.42a.633.633 0 01.632-.632"
          transform="translate(-181.439 -2469.837) translate(-73.551 3.094)"
          fill="#232528"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32599"
          d="M625.275 2506.937h10.136a.634.634 0 01.632.632v2.42a.634.634 0 01-.632.632h-10.136a.633.633 0 01-.632-.632v-2.42a.633.633 0 01.632-.632"
          transform="translate(-181.439 -2469.837) translate(-88.805 3.094)"
          fill="#232528"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32612"
          d="M606.525 2515.8H568.07v.062a9.881 9.881 0 00-8.846 9.719v35.208a9.9 9.9 0 009.957 9.78h44.314a9.9 9.9 0 009.958-9.78v-35.208a9.872 9.872 0 00-8.347-9.651v-.129z"
          transform="translate(-181.439 -2469.837) translate(-71.789 .788)"
          fill="#232528"
          fillRule="evenodd"
        />
        <Path
          data-name="Path 32613"
          d="M608.152 2540.4a8.516 8.516 0 00-8.516-8.516 8.518 8.518 0 00-3.967 16.053v14.077a4.02 4.02 0 002.972 1.982 5.11 5.11 0 004.962-1.982v-14.077a8.515 8.515 0 004.55-7.537"
          transform="translate(-181.439 -2469.837) translate(-80.086 -3.397)"
          fill="#fff"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  )
}

export function Camera(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        transform="translate(0 -.04) translate(0 .04)"
        fill="#3d345a"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={50} height={50} rx={25} stroke="none" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
      </G>
      <Path
        data-name="Path 34320"
        d="M10.829 42a3.553 3.553 0 00-3.258 2.032c-.264.629-.527 1.265-.79 1.9h-.852A3.81 3.81 0 002 49.661v10.41A3.937 3.937 0 005.929 64h14.142A3.937 3.937 0 0024 60.071v-10.41a3.81 3.81 0 00-3.929-3.732h-.851l-.78-1.874A3.489 3.489 0 0015.171 42zM13 49.857a4.714 4.714 0 11-4.714 4.714A4.726 4.726 0 0113 49.857zm6.286 0a.786.786 0 11-.786.786.786.786 0 01.786-.786z"
        transform="translate(0 -.04) translate(12 -27.96)"
        fill="#fff"
      />
    </Svg>
  )
}

export function Location(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        transform="translate(-.328 -.368) translate(.328 .368)"
        fill="#3d345a"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={50} height={50} rx={25} stroke="none" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
      </G>
      <Path
        data-name="Path 34321"
        d="M174 201.992a8.836 8.836 0 00-9 8.637 14.5 14.5 0 002.685 7.529 23.854 23.854 0 004.462 5.181 2.954 2.954 0 003.706 0 23.856 23.856 0 004.463-5.181 14.5 14.5 0 002.684-7.529 8.837 8.837 0 00-9-8.637zm0 3.926a4.715 4.715 0 11-4.909 4.711 4.825 4.825 0 014.909-4.711z"
        transform="translate(-.328 -.368) translate(-148.672 -187.624)"
        fill="#fff"
      />
    </Svg>
  )
}

export function Mic(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        transform="translate(.584 .544) translate(-.584 -.544)"
        fill="#3d345a"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={50} height={50} rx={25} stroke="none" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
      </G>
      <Path
        data-name="Path 34322"
        d="M54.175 82A5.419 5.419 0 0049 87.624v4.82a5.193 5.193 0 1010.351 0v-4.82A5.419 5.419 0 0054.175 82z"
        transform="translate(.584 .544) translate(-29.759 -68.544)"
        fill="#fff"
      />
      <Path
        data-name="Path 34323"
        d="M46.009 97.088a.814.814 0 00-.487 1.012 8.557 8.557 0 007.2 6.1v1.646h-2.281a.8.8 0 000 1.607h6.086a.8.8 0 000-1.607h-2.282V104.2a8.557 8.557 0 007.2-6.1.814.814 0 00-.487-1.012.753.753 0 00-.958.512 6.734 6.734 0 01-13.031 0 .73.73 0 00-.96-.515z"
        transform="translate(.584 .544) translate(-29.068 -71.997)"
        fill="#fff"
      />
    </Svg>
  )
}

export function Phone(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        transform="translate(-.883 -.883) translate(.883 .883)"
        fill="#3d345a"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={50} height={50} rx={25} stroke="none" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
      </G>
      <Path
        data-name="Path 34324"
        d="M79.559 8h8.881A1.6 1.6 0 0190 9.6v18.8a1.553 1.553 0 01-1.559 1.6h-8.882A1.6 1.6 0 0178 28.4V9.6A1.644 1.644 0 0179.559 8zm0 3.47h8.881a.541.541 0 01.542.555v13.95a.541.541 0 01-.542.555h-8.881a.59.59 0 01-.542-.555v-13.95a.59.59 0 01.542-.555zm4.475 15.754a1.055 1.055 0 011.017 1.041 1.072 1.072 0 01-1.017 1.11 1.084 1.084 0 01-1.085-1.11 1.069 1.069 0 011.085-1.041z"
        transform="translate(-.883 -.883) translate(-58.117 6.883)"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export function Sms(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        transform="translate(-.496 -.021) translate(.496 .021)"
        fill="#3d345a"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={50} height={50} rx={25} stroke="none" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="none" />
      </G>
      <Path
        data-name="Path 34325"
        d="M44.379 59H29.41a2.47 2.47 0 00-2.464 2.466v9.709a1.645 1.645 0 00.012.242l.007.063-2.105 4.3a.153.153 0 00.2.2l4.74-2.334h14.579a2.471 2.471 0 002.463-2.471v-9.709A2.471 2.471 0 0044.379 59zm-12.895 8.34a1.019 1.019 0 111.016-1.019 1.018 1.018 0 01-1.016 1.019zm5.41 0a1.019 1.019 0 111.016-1.019 1.018 1.018 0 01-1.016 1.019zm5.411 0a1.019 1.019 0 111.016-1.019 1.018 1.018 0 01-1.016 1.019z"
        transform="translate(-.496 -.021) translate(-10.346 -41.979)"
        fill="#fff"
      />
    </Svg>
  )
}

export function GreenTick(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      {...props}
    >
      <G
        data-name="Rectangle 5116"
        fill="#26bb48"
        stroke="#d5d5d5"
        strokeWidth={1}
      >
        <Rect width={30} height={30} rx={15} stroke="none" />
        <Rect x={0.5} y={0.5} width={29} height={29} rx={14.5} fill="none" />
      </G>
      <Path
        data-name="Path 11182"
        d="M97.265 132.727a.772.772 0 01-.6-.255l-3.177-3.263a.843.843 0 111.22-1.163l2.582 2.667 5.447-5.163a.843.843 0 011.163 1.22l-6.039 5.73a.975.975 0 01-.596.227z"
        transform="translate(-83.5 -113.909)"
        fill="#fff"
      />
    </Svg>
  )
}

export function PhoneGraphic(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={375}
      height={270.698}
      viewBox="0 0 375 270.698"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Path 34193"
            d="M370.038 4243.78c.1.583 1.672.919 5.094.919 3.4 0 5.883-3.854 5.883-3.854s-1.66-2.259-1.725-2.259-5.3-.134-5.3-.134l-4.166 3.292z"
            transform="translate(-369.819 -4238.452)"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-193.933 -4038.532)">
        <Path
          transform="translate(225.212 4038.732)"
          fill="none"
          d="M0 0H314.341V269.8H0z"
        />
        <Path
          data-name="Path 34105"
          d="M600.864 4188.259c-19.6-19.474-49.726-21.918-76.645-28.154-42.984-9.959-82.545-32.031-125.8-40.725-15.744-3.165-32.623-4.406-47.4 1.88-11.754 5-21.165 14.376-28.648 24.727-18.309 25.32-26.221 59.875-13.731 88.517 12.527 28.725 41.837 45.757 69.308 60.836 16.328 8.965 33.473 18.313 51.167 24.137h65.821c38.751-9.253 52.283-42.737 86.828-62.583 7.162-4.113 14.775-7.5 21.47-12.339s12.563-11.469 14.336-19.536c3.395-15.446-8.672-29.645-20.087-40.591"
          transform="translate(-108.644 -78.24)"
          fill="#ece9fc"
        />
        <Path
          data-name="Path 34101"
          d="M575.556 4202.083a17.512 17.512 0 00-3.828-7.328c-5.093-5.957-12.364-8.676-19.46-11.328-33.633-12.57-69.025-27.208-89.518-56.5-6.794-9.714-12.123-21.183-22.337-27.274-11.2-6.683-25.924-5.022-37.481 1.033s-20.579 15.881-29.12 25.7-17.027 19.978-27.979 27.052c-13.9 8.977-30.624 12.277-46.845 15.69s-32.924 7.362-46.132 17.31-22.01 27.543-16.687 43.125c5.65 16.54 23.831 24.589 39.17 33.152 11.519 6.432 22.347 14.112 33.395 21.346h179.04l74.551-58.7c7.419-5.861 15.599-13.122 13.231-23.278z"
          transform="translate(-7.039 -42.816)"
          fill="#d8d2fc"
        />
        <Path
          data-name="Path 33355"
          d="M457.2 267.9h7.409l13.436.1c40.779-57.178 67.5-71.266 95.277-87.538-6.064-2.584-13.854-6.46-18.573-11.132 9.214 1.461 17.34 3.959 26.582 6.68 11.98-14.372 25.551-21.242 12.076-42.514-19.542-30.848-81.144 8.687-98.463 26.983a111.605 111.605 0 00.49 27.284 29.968 29.968 0 01-13.549-13.515C467.4 194.662 454.013 228.17 457.2 267.9zm58.5-61.361a3.426 3.426 0 014.191-2.916 3.807 3.807 0 013 4.392 3.271 3.271 0 01-4.065 2.808 3.705 3.705 0 01-3.132-4.288z"
          transform="translate(-50.69 3980.53)"
          fill="#b8b8b8"
        />
        <Path
          data-name="Path 33356"
          d="M532.088 4122.854c-77.663 47.158-83.862 57.635-118.267 126.317"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33357"
          d="M525.31 4145.257c-6.2-2.671-11.332-4.994-17.713-7.2 2-7.546 3.216-14.993 5.334-22.5"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33358"
          d="M505.812 4163.6c-9.421-2.056-18.868-3.512-28.444-4.626a156.653 156.653 0 013.49-25.737"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33359"
          d="M487.302 4176.828c-9.223-.792-19.1-1.365-28.358-1.253a192.245 192.245 0 01-.214-26.584"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33360"
          d="M463.521 4195.343a77.731 77.731 0 00-21.91 2.427c-3.426-7.981-8.8-15.954-10.8-24.406"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33361"
          d="M447.444 4211.656c-7.572 1.695-13.039 5.373-19.392 9.629-5.539-7.291-11.566-14.9-15.924-22.951"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33362"
          d="M492.136 4120.925c-1.367 2.013-.792 4.224 1.447 5.106a5.515 5.515 0 006.331-1.9 3.217 3.217 0 00-1.43-5.135 5.3 5.3 0 00-6.348 1.929z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33384"
          d="M534.743 4110.38c-2.855-1.331-4.334-3.051-7.788-3.4-15.86-1.59-31.535 3.5-45.7 10.767"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33385"
          d="M543.434 4123.959a27.407 27.407 0 00-4.2-9.1"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33386"
          d="M519.459 4151.157c-4.2-1.1-8.453-2.08-12.725-2.871"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33387"
          d="M525.898 4153.082c-1.288-.39-2.572-.794-3.856-1.2"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33388"
          d="M436.297 4167.409c-2.732-1.681-5.508-3.5-6.974-6.423"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33389"
          d="M442.612 4170.356c-1.351-.546-2.688-1.085-4.007-1.711"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33390"
          d="M459.083 4208.7c-4.944 6.739-8.071 14.57-13.127 21.235"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33391"
          d="M464.693 4201.595c-1.009 1.266-2.076 2.478-3.151 3.687"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33454"
          d="M283.935 184.8a14.159 14.159 0 005.875-9.006c1.071-6.039-1.041-10.716.5-12.864.002.004-13.638 12.337-6.375 21.87z"
          transform="translate(-61.315 3913.528)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33455"
          d="M292.98 201.663a14.158 14.158 0 005.875-9c1.071-6.041-1.042-10.718.5-12.865.002-.004-13.638 12.329-6.375 21.865z"
          transform="translate(-55.029 3925.246)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33456"
          d="M301.354 194.565a14.156 14.156 0 00-9.743-4.546c-6.133-.208-10.464 2.544-12.808 1.319-.003-.001 14.133 11.762 22.551 3.227z"
          transform="translate(-63.402 3932.344)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33457"
          d="M301.807 212.651a14.152 14.152 0 005.875-9c1.071-6.041-1.042-10.716.5-12.865.002-.004-13.638 12.329-6.375 21.865z"
          transform="translate(-48.893 3932.884)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33458"
          d="M310.181 205.552a14.158 14.158 0 00-9.743-4.544c-6.133-.208-10.464 2.543-12.808 1.317 0 0 14.133 11.763 22.551 3.227z"
          transform="translate(-57.267 3939.983)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33459"
          d="M310.526 223.575a12.5 12.5 0 005.189-7.953c.946-5.336-.92-9.465.442-11.362-.001 0-12.047 10.892-5.631 19.315z"
          transform="translate(-42.661 3942.252)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33460"
          d="M317.921 217.3a12.506 12.506 0 00-8.608-4.014c-5.416-.185-9.24 2.246-11.311 1.163-.002.005 12.485 10.395 19.919 2.851z"
          transform="translate(-50.057 3948.521)"
          fill="#5b5b5b"
        />
        <Path
          data-name="Path 33461"
          d="M224.085 4094.138s-6.565 9.224 9.889 28.328 55.213 60.394 46.9 99.079"
          fill="none"
          stroke="#5b5b5b"
          strokeMiterlimit={10}
          strokeWidth={0.75}
        />
        <Path
          data-name="Path 33462"
          d="M271.462 4151.676s-3.671 5.87-3.385 11.845"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33463"
          d="M265.67 4165.71a18.258 18.258 0 00-14-1.456"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33464"
          d="M250.05 4144.958s-9.07-2.224-16.137-1.365"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33465"
          d="M257.325 4128.125s-4.033 8.172-3.7 14.042"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33466"
          d="M242.497 4108.822s-4.575 8.109-4.543 15.047"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33467"
          d="M235.532 4126.496s-10.813-2.714-15.8-1.4"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 33468"
          d="M226.629 4081.132a70.159 70.159 0 00-3.492 15.067"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Rectangle 8524"
          transform="translate(271.472 4038.532)"
          fill="#e8e8e8"
          d="M0 0H116.057V197.831H0z"
        />
        <Path
          data-name="Path 34158"
          d="M292.391 4063.927l22.6 3.845 93.456-15.657v-4.643H292.391z"
          transform="translate(-20.919 -8.941)"
          fill="#fff"
        />
        <Path
          data-name="Path 34159"
          d="M314.992 4072.081v177.532h-22.6v-181.377z"
          transform="translate(-20.919 -13.25)"
          fill="#c4c4c4"
        />
        <Path
          data-name="Rectangle 8525"
          transform="translate(271.472 4093.112)"
          fill="#383838"
          d="M0 0H116.057V7.905H0z"
        />
        <Path
          data-name="Rectangle 8526"
          transform="translate(271.472 4040.519)"
          fill="#383838"
          d="M0 0H116.057V5.311H0z"
        />
        <Path
          data-name="Rectangle 8527"
          transform="translate(271.472 4049.675)"
          fill="#383838"
          d="M0 0H116.057V5.311H0z"
        />
        <Path
          data-name="Rectangle 8528"
          transform="translate(271.472 4058.832)"
          fill="#383838"
          d="M0 0H116.057V5.311H0z"
        />
        <Path
          data-name="Rectangle 8529"
          transform="translate(271.472 4067.989)"
          fill="#383838"
          d="M0 0H116.057V5.311H0z"
        />
        <Path
          data-name="Path 32514"
          d="M427.733 4101.262v-11.2a.744.744 0 00-1.488 0v11.205a2.658 2.658 0 101.488 0zm-.744 3.767a1.185 1.185 0 111.169-1.2v.013a1.178 1.178 0 01-1.168 1.188z"
          transform="translate(-48.298 -17.625)"
          fill="#fff"
        />
        <Path
          data-name="Rectangle 8530"
          transform="translate(263.666 4236.363)"
          fill="#383838"
          d="M0 0H167.495V12.039H0z"
        />
        <Path
          data-name="Rectangle 8646"
          transform="rotate(-76.05 2828 1926.347)"
          fill="#eaba24"
          d="M0 0H8.926V36.038H0z"
        />
        <Path
          data-name="Path 34160"
          d="M313.582 4204.31h0a3.837 3.837 0 004.739-4.148l-2.42-21.792-1.12-10.089-1.049-9.454-24.247-6.028-14.247 36.287a4.889 4.889 0 003.37 6.532h0"
          fill="#eaba24"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34161"
          d="M357.138 4185.766c2.584-4.6-10.55-15.552-10.55-15.552l-3.94-3.576-16.848-16.257-17.328 13.369 18.019 17.328s5.645 6.107 8.43 8.611 5.555 5.233 10.916 4.641 8.718-3.962 11.301-8.564z"
          fill="#5d5d5d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34162"
          d="M341.251 4193.771a10.22 10.22 0 0013.6-.882l14.425-12.9-9.173-11.885s-17.737 8.524-18.837 9.374"
          fill="#5d5d5d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Ellipse
          data-name="Ellipse 3773"
          cx={5.984}
          cy={7.905}
          rx={5.984}
          ry={7.905}
          transform="rotate(-38.617 6130.974 1579.326)"
          fill="#262626"
        />
        <Path
          data-name="Path 34163"
          d="M402.155 4215.522a6.6 6.6 0 01-.85.08 8.759 8.759 0 002.013 6.243c2.12 2.579 3.383 2.836 3.383 2.836l.838-.689.36-5.127z"
          transform="translate(-43.492 -44.013)"
          fill="#ffac9c"
        />
        <Path
          data-name="Path 34164"
          d="M367.507 4145.587l-1.106.082c-.651.18-.871.346-3.787 10.418l-1.98 6.292a.654.654 0 00.219.711l2.224 1.745 9.179-5.939 2.721-10.154a1.164 1.164 0 00-.825-1.427l-6.382-1.7a.8.8 0 00-.263-.028z"
          fill="#ffa400"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34166"
          d="M363.265 4153.186c.517.305 4.258 2.6 5.383 4.281"
          fill="#ffac9c"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <G data-name="Group 26615">
          <G data-name="Group 26614">
            <G data-name="Group 26613">
              <Path
                data-name="Path 34167"
                d="M15.997 13.388c.626-3.469.254-4.455 2.336-7.1 1.367-1.737.844-3.354-1.255-2.417-3.432 1.535-5.179 5.84-5.355 7.507z"
                fill="#ffac9c"
                stroke="#262626"
                strokeMiterlimit={10}
                strokeWidth={1}
                transform="translate(358.251 4147.482)"
              />
              <G data-name="Group 26611">
                <Path
                  data-name="Path 34168"
                  d="M6.046 32.835a9.293 9.293 0 002.691-3.319s3.131-6.326 3.531-7a35.9 35.9 0 003.366-7.464A13.08 13.08 0 0011.92 1.263c-1.775-1.7-4.371-1.888-2.918.667 1.128 1.981 2.291 3.072 2.6 4.384 0 0-3.668-.858-4.959.47-.577.594-.645 3.838-1.658 5.3a7.168 7.168 0 00.642.646s.033.195-.388 1.093-3.577 5.336-3.565 7.714-1.675 2.23-1.675 2.23"
                  fill="#ffac9c"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(358.251 4147.482)"
                />
              </G>
              <G data-name="Group 26612">
                <Path
                  data-name="Path 34169"
                  d="M9.395 2.499C7.409.539 2.645-.769 1.904.507c-.758 1.306 1.692 2.33 1.692 2.33-.724-.172-1.907-.586-2.641.6a1.192 1.192 0 00.423 1.709 1.924 1.924 0 00-1.27 1.057C-.536 7.558 1.802 7.627 2.49 9.516"
                  fill="#ffac9c"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={1}
                  transform="translate(358.251 4147.482) translate(2.884 4.45)"
                />
              </G>
            </G>
          </G>
        </G>
        <Path
          data-name="Path 34170"
          d="M364.733 4154.771c.615.366 3.03.981 4.665 2.491"
          fill="#ffac9c"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34171"
          d="M362.516 4157.078a6.614 6.614 0 014.119 1.984"
          fill="#ffac9c"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34172"
          d="M369.426 4216.912a16.755 16.755 0 00-10.392-4.56l-7.814-.384-1.908-.248s-45.45-6.9-64.134-7.444l-8.388-.02s-1.075 14.595 2.775 23.424c4.5 10.329 33.747 11.683 57.163 12.69l.006-.011 10.339.3 10.357.046 55.475 53.381 18.072-18.781z"
          fill="#151516"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Rectangle 8647"
          d="M455.087 4275.29l2.117 1.98h0l-29.227 31.237h0l-16.29-15.242h0l15.965-17.063a19.41 19.41 0 0127.435-.913z"
          fill="#1c191a"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={0.99969}
        />
        <Path
          data-name="Rectangle 8648"
          transform="rotate(43.1 -5187.389 2713.657)"
          fill="#f7f7f7"
          d="M0 0H3.352V42.791H0z"
        />
        <Circle
          data-name="Ellipse 3774"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(436.282 4271.594)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3775"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(433.235 4273.256)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3776"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(439.922 4270.963)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3777"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(443.645 4271.013)"
          fill="#fff"
        />
        <Path
          data-name="Path 34173"
          d="M296.477 4242.453s-.021.022-.052.065l.09.175z"
          transform="translate(-21.734 -49.602)"
          fill="none"
        />
        <Path
          data-name="Path 34174"
          d="M278.076 4229.767l-6.1-58.908 5.729-20.4 47.208-.173s12.1 23.469 2.767 53.473l.1 4.3-24.661 9.994-24.279 12.138a.534.534 0 01-.764-.424z"
          fill="#3d3d3d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34176"
          d="M325.136 4174.12l.157 11.843a4.664 4.664 0 004.661 4.313h.884a4.665 4.665 0 004.594-5.419l-.728-4.437z"
          transform="translate(-27.692 -35.421)"
          fill="#ffae9d"
        />
        <Path
          data-name="Path 34177"
          d="M335.086 4181.506c.3.028.572.627.623.976l.327 2.052c-5.21-.325-6.883-5.647-6.883-5.647 1.157 1.288 4.563 2.494 5.933 2.619z"
          transform="translate(-28.526 -36.411)"
          fill="#262626"
        />
        <Path
          data-name="Path 34178"
          d="M326.856 4171.834a16.275 16.275 0 001.481 3.551c.776 1.156 7.455 4.527 8.965 3.521 1.294-.862 1.518-4.812 1.613-7.1a44.011 44.011 0 00-.236-8.09l-8.908-1.748-3.27 7.271z"
          transform="translate(-27.975 -32.9)"
          fill="#ffae9d"
        />
        <Path
          data-name="Path 34179"
          d="M327.337 4172.669a2.138 2.138 0 11-2.142-2.134 2.139 2.139 0 012.142 2.134z"
          transform="translate(-27.262 -34.678)"
          fill="#ffae9d"
        />
        <Path
          data-name="Path 34180"
          d="M340.96 4158.243a4.463 4.463 0 00-2.142-2.693 7.216 7.216 0 00-6.61-.8 25.532 25.532 0 00-4.376 2.682 6.605 6.605 0 01-4.754 1.331l1.372 1.442a11.355 11.355 0 01-2.379 1.725l1.2.612a14.579 14.579 0 00.537 3.6c.06.216 0 1.125.161 1.269a2.513 2.513 0 01.819-.222c1.214-.057 2.161 1.092 2.439 2.4q.042-1.681-.057-3.359a2.319 2.319 0 001.459-1.382 2.721 2.721 0 00-.072-2.125c.705-.018 1.263-.628 1.8-1.138s1.012-.4 1.659-.084a4.818 4.818 0 003 .574 4.6 4.6 0 011.917.685 2.622 2.622 0 002.145-.144c.409-.279 2.463-1.016 1.882-4.373z"
          transform="translate(-27.056 -31.307)"
          fill="#3f3333"
        />
        <Path
          data-name="Path 34181"
          d="M340.471 4180.52c.332-1.227.561-2.869.277-3.235a5.213 5.213 0 00-1.96-1.236c-.175.163-.637.061-.727 0-2.076.439-3.219.948-3.29 1.415a23.553 23.553 0 00-.236 4.029c.154.57 2.4 1.389 3.836 1.342s1.768-1.088 2.1-2.315zm-1.375.346a8 8 0 01-.3-1.683 2.1 2.1 0 01-.911-.04s-.063 1.794-1.5 1.616-1.292-1.687-1.228-2.036 1.063-.982 1.587-1.006a4.091 4.091 0 001.622-.244c.42.252 1.557.49 1.732.652a5.622 5.622 0 01-.406 2.282c-.192.459-.459.534-.592.458z"
          transform="translate(-29.634 -35.821)"
          fill="#3f3333"
        />
        <Path
          data-name="Path 34175"
          d="M310.466 4150.414c2.063 2.164 7.144 7.314 8.667 22.876s-.794 29.178-.441 39.086l-16.131 7.105s-.344-10.01.319-22.937-8.079-30.418-8.661-37.721 1.087-8.425 1.087-8.425h2.38s3.287 4.7 5.828 4.7 4.338-4.691 4.338-4.691z"
          fill="#fff"
          stroke="#262626"
          strokeWidth={1}
        />
        <Path
          data-name="Path 34182"
          d="M398.753 4243.908a1 1 0 00-.666.472l1.38-.168a.967.967 0 00-.714-.304z"
          transform="translate(-42.83 -49.902)"
          fill="#1d1d1d"
        />
        <Path
          data-name="Path 34183"
          d="M357.054 4221.202l41.06 65.067 23.223-11.829-38.061-73.431a13.067 13.067 0 00-11.914-7.05l-14.725.351-1.38.168-29.347 2.989.7 13.572z"
          fill="#1d1d1d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Rectangle 8649"
          d="M444.197 4282.216l1.353 2.565h0l-37.848 19.964h0l-10.412-19.738h0l20.676-10.906a19.416 19.416 0 0126.231 8.115z"
          fill="#111010"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Rectangle 8650"
          transform="rotate(62.19 -3327.791 2508.628)"
          fill="#f7f7f7"
          d="M0 0H3.352V42.791H0z"
        />
        <Circle
          data-name="Ellipse 3778"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(427.205 4272.93)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3779"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(423.781 4273.503)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3780"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(430.851 4273.525)"
          fill="#fff"
        />
        <Circle
          data-name="Ellipse 3781"
          cx={0.95}
          cy={0.95}
          r={0.95}
          transform="translate(434.352 4274.791)"
          fill="#fff"
        />
        <Path
          data-name="Path 32115"
          d="M349.493 4191.609l-1.051 18.144h0c.034 1.065-2.888 1.823-6.519 1.941s-6.588-.452-6.623-1.519l-2.2-17.953c2.961 2.149 13.572 1.723 16.393-.613z"
          fill="#ffa400"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 32116"
          d="M369.563 4241.588l-.063-1.625.87-.122c1.385-.694 14.231-1.107 15.662-.5l.86.066.058 1.624c.032.637-3.838 1.686-8.641 1.84s-8.709-.524-8.746-1.283z"
          transform="translate(-36.898 -48.894)"
          fill="#fff"
        />
        <Ellipse
          data-name="Ellipse 3662"
          cx={8.695}
          cy={1.074}
          rx={8.695}
          ry={1.074}
          transform="rotate(-1.835 130982.91 -8288.17)"
          fill="#262626"
        />
        <Path
          data-name="Path 32117"
          d="M371.846 4239.017l-.036-1.02.678-.107c1.09-.453 11.166-.775 12.283-.395l.676.063.036 1.02c.022.688-3.023 1.166-6.788 1.286s-6.827-.158-6.849-.847z"
          transform="translate(-37.378 -48.538)"
          fill="#fff"
        />
        <Path
          data-name="Path 32118"
          d="M378.652 4238.42c3.763-.122 6.808-.543 6.795-.941s-3.076-.624-6.841-.5-6.808.542-6.795.941 3.075.62 6.841.5z"
          transform="translate(-37.378 -48.458)"
          fill="#262626"
        />
        <Path
          data-name="Path 34184"
          d="M284.389 4169.487a10.393 10.393 0 112.951-14.4 10.394 10.394 0 01-2.951 14.4z"
          fill="#5d5d5d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34185"
          d="M268.272 4160.714l.7 31.054.216 8.079a15.386 15.386 0 0016.759 14.912l42.137-3.789 1.466-4.386c1.191-4.54-1.365-10.243-1.365-10.243l-.283-.694-37.548-4.216-1.36-30.13"
          fill="#5d5d5d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34186"
          d="M337.62 4196.122c.539-1.11 1.314-1.484 3.083-2.477s1.716-4.407-.149-3.071-6 2.739-7.841 3.338c-1.322.54-3.353 1.667-4.768 2.281a9.683 9.683 0 01-1.057.265c-2.74.484-5.28.267-6.907 3.585a6.8 6.8 0 00.361 6.818 6.713 6.713 0 005.525 2.951v.008a90.7 90.7 0 0011.631 1.341c5.771.144 11.05-2.056 10.622-4.178-.178-.884-3.015-.1-4.8.247-1.222.233-2.045-.149-2-.295 0 0 9.19-1.967 8.843-4.061-.208-1.249-.917-1.008-3.313-.3a17.446 17.446 0 01-5.327.618c-.116-.068 6.637-.909 8.664-2.959 1.218-1.232.133-2.27-2.489-1.727s-7.048 1.038-7.048 1.038c2.384-.006 9.24-1.855 8.887-3.476-.49-2.25-7.146.136-7.146.136l-7.565.062"
          fill="#ffac9c"
          stroke="#262626"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <Path
          data-name="Path 34187"
          d="M278.078 4229.841s.6 3.234 9.534 7.016c8.048 3.406 9.175 8.558 13.143 8.151s1.716-31.421 1.716-31.421"
          fill="#3d3d3d"
          stroke="#262626"
          strokeMiterlimit={10}
          strokeWidth={1}
        />
        <G
          data-name="Group 26639"
          transform="translate(332.849 4189.765)"
          clipPath="url(#a)"
        >
          <G data-name="Group 25241">
            <G data-name="Group 25232">
              <G data-name="Group 25231">
                <G data-name="Path 32115">
                  <Path
                    data-name="Path 34188"
                    d="M386.517 4240.884l-1.051 18.144c.034 1.065-2.888 1.823-6.519 1.941s-6.588-.452-6.623-1.519l-2.2-17.953c2.961 2.149 13.576 1.723 16.393-.613z"
                    transform="translate(-.29 -1.197) translate(.024 2.239) translate(-369.615 -4239.999)"
                    fill="#ffa400"
                  />
                  <Path
                    data-name="Path 34189"
                    d="M377.983 4261.146c-1.99 0-6.132-.206-6.188-1.914l-2.312-18.82.737.533c2.8 2.03 13.212 1.639 15.912-.6l.7-.582-1.1 19.052c.065 1.986-5.737 2.275-6.9 2.313-.185.01-.48.018-.849.018zM370.477 4242l2.108 17.171c.021.58 2.248 1.31 6.218 1.169s6.152-.987 6.135-1.532l1.006-17.387c-3.407 1.87-11.97 2.19-15.467.579z"
                    transform="translate(-.29 -1.197) translate(.024 2.239) translate(-369.483 -4239.768)"
                    fill="#262626"
                  />
                </G>
              </G>
            </G>
            <G data-name="Group 25234">
              <G data-name="Group 25233">
                <G data-name="Path 32116">
                  <Path
                    data-name="Path 34190"
                    d="M369.559 4241.588l-.063-1.625.87-.122c1.385-.694 14.231-1.107 15.662-.5l.86.066.058 1.624c.032.637-3.838 1.686-8.641 1.84s-8.705-.524-8.746-1.283z"
                    transform="translate(-.29 -1.197) translate(.034 1.667) translate(-369.496 -4239.046)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
            <G data-name="Group 25236">
              <G data-name="Group 25235">
                <G data-name="Ellipse 3662">
                  <Ellipse
                    data-name="Ellipse 3782"
                    cx={8.695}
                    cy={1.074}
                    rx={8.695}
                    ry={1.074}
                    transform="translate(-.29 -1.197) translate(0 .954) rotate(-1.835 17.39 .279)"
                    fill="#262626"
                  />
                </G>
              </G>
            </G>
            <G data-name="Group 25238">
              <G data-name="Group 25237">
                <G data-name="Path 32117">
                  <Path
                    data-name="Path 34191"
                    d="M371.842 4239.017l-.036-1.02.678-.107c1.09-.453 11.166-.775 12.283-.395l.676.063.036 1.02c.022.688-3.023 1.166-6.788 1.286s-6.827-.158-6.849-.847z"
                    transform="translate(-.29 -1.197) translate(1.865 .305) translate(-371.806 -4237.327)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
            <G data-name="Group 25240">
              <G data-name="Group 25239">
                <G data-name="Path 32118">
                  <Path
                    data-name="Path 34192"
                    d="M378.648 4238.42c3.763-.122 6.808-.543 6.795-.941s-3.076-.624-6.841-.5-6.808.542-6.795.941 3.075.62 6.841.5z"
                    transform="translate(-.29 -1.197) translate(1.865) translate(-371.807 -4236.942)"
                    fill="#262626"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}