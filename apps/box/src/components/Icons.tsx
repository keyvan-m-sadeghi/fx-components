import { FxSvg, FxSvgProps } from '@functionland/component-library';
import React from 'react';
import { Circle, Path } from 'react-native-svg';

export const Logo = (props: FxSvgProps) => (
  <FxSvg width={105} height={102} viewBox="0 0 105 102" {...props}>
    <Path d="M22.4201 25.9917L1.46107 26.0222C0.660168 26.0222 0.012794 26.6691 0.012794 27.4663L0 78.7207C0 80.6868 0.821372 82.5638 2.26965 83.9009L21.3889 101.55C22.2922 102.493 23.8889 101.856 23.8863 100.552L23.8684 27.4306C23.8684 26.6335 23.2185 25.9891 22.4176 25.9891L22.4201 25.9917ZM102.73 18.0991L83.6085 0.449795C82.7053 -0.492522 81.1086 0.144178 81.1111 1.44814L81.129 74.5694C81.129 75.3665 81.779 76.0109 82.5799 76.0109L103.539 75.9803C104.34 75.9803 104.987 75.3334 104.987 74.5363L105 23.2819C105 21.3157 104.179 19.4388 102.728 18.1017L102.73 18.0991ZM66.9226 35.1347L37.8241 35.178C37.0155 35.178 36.363 35.8325 36.363 36.6373L36.4065 65.5995C36.4065 66.4043 37.0641 67.0538 37.8727 67.0538L66.9712 67.0105C67.7798 67.0105 68.4323 66.356 68.4323 65.5512L68.3888 36.5889C68.3888 35.7841 67.7312 35.1347 66.9226 35.1347ZM28.6201 84.0206L41.6392 99.5739C42.9263 101.11 44.8326 101.998 46.8412 101.998H101.768C103.539 101.998 104.974 100.57 104.974 98.8073V81.1198H29.9839C28.4768 81.1198 27.6554 82.8694 28.6201 84.0206ZM76.3518 18.201L63.3352 2.64769C62.0481 1.11196 60.1418 0.223129 58.1332 0.223129H3.20617C1.43548 0.220582 0 1.64934 0 3.41173V21.1018H74.9879C76.4951 21.1018 77.3164 19.3522 76.3518 18.201Z" />
  </FxSvg>
);

export const BloxIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={24} viewBox="0 0 25 24" {...props}>
    <Path
      d="M4.1001 3.5H9.1001C9.37624 3.5 9.6001 3.72386 9.6001 4V9C9.6001 9.27614 9.37624 9.5 9.1001 9.5H4.1001C3.82396 9.5 3.6001 9.27614 3.6001 9V4C3.6001 3.72386 3.82396 3.5 4.1001 3.5ZM2.1001 4C2.1001 2.89543 2.99553 2 4.1001 2H9.1001C10.2047 2 11.1001 2.89543 11.1001 4V9C11.1001 10.1046 10.2047 11 9.1001 11H4.1001C2.99553 11 2.1001 10.1046 2.1001 9V4ZM15.1001 3.5H20.1001C20.3762 3.5 20.6001 3.72386 20.6001 4V9C20.6001 9.27614 20.3762 9.5 20.1001 9.5H15.1001C14.824 9.5 14.6001 9.27614 14.6001 9V4C14.6001 3.72386 14.824 3.5 15.1001 3.5ZM13.1001 4C13.1001 2.89543 13.9955 2 15.1001 2H20.1001C21.2047 2 22.1001 2.89543 22.1001 4V9C22.1001 10.1046 21.2047 11 20.1001 11H15.1001C13.9955 11 13.1001 10.1046 13.1001 9V4ZM9.1001 14.5H4.1001C3.82396 14.5 3.6001 14.7239 3.6001 15V20C3.6001 20.2761 3.82396 20.5 4.1001 20.5H9.1001C9.37624 20.5 9.6001 20.2761 9.6001 20V15C9.6001 14.7239 9.37624 14.5 9.1001 14.5ZM4.1001 13C2.99553 13 2.1001 13.8954 2.1001 15V20C2.1001 21.1046 2.99553 22 4.1001 22H9.1001C10.2047 22 11.1001 21.1046 11.1001 20V15C11.1001 13.8954 10.2047 13 9.1001 13H4.1001ZM13.1001 15.05C13.1001 13.9178 14.0179 13 15.1501 13H21.3501C21.7643 13 22.1001 13.3358 22.1001 13.75C22.1001 14.1642 21.7643 14.5 21.3501 14.5H15.6608L21.8804 20.7197C22.1733 21.0126 22.1733 21.4874 21.8804 21.7803C21.5875 22.0732 21.1127 22.0732 20.8198 21.7803L14.6001 15.5607V21.25C14.6001 21.6642 14.2643 22 13.8501 22C13.4359 22 13.1001 21.6642 13.1001 21.25V15.05Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const SettingsIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={24} viewBox="0 0 25 24" {...props}>
    <Path
      d="M11.3999 6C11.3999 6.82843 10.7283 7.5 9.8999 7.5C9.07148 7.5 8.3999 6.82843 8.3999 6C8.3999 5.17157 9.07148 4.5 9.8999 4.5C10.7283 4.5 11.3999 5.17157 11.3999 6ZM12.8054 6.75C12.4724 8.04392 11.2978 9 9.8999 9C8.50202 9 7.32745 8.04392 6.99442 6.75H4.8999C4.48569 6.75 4.1499 6.41421 4.1499 6C4.1499 5.58579 4.48569 5.25 4.8999 5.25H6.99442C7.32745 3.95608 8.50202 3 9.8999 3C11.2978 3 12.4724 3.95608 12.8054 5.25H20.8999C21.3141 5.25 21.6499 5.58579 21.6499 6C21.6499 6.41421 21.3141 6.75 20.8999 6.75H12.8054ZM4.8999 11.25C4.48569 11.25 4.1499 11.5858 4.1499 12C4.1499 12.4142 4.48569 12.75 4.8999 12.75H13.9944C14.3274 14.0439 15.502 15 16.8999 15C18.2978 15 19.4724 14.0439 19.8054 12.75H20.8999C21.3141 12.75 21.6499 12.4142 21.6499 12C21.6499 11.5858 21.3141 11.25 20.8999 11.25H19.8054C19.4724 9.95608 18.2978 9 16.8999 9C15.502 9 14.3274 9.95608 13.9944 11.25H4.8999ZM4.1499 18C4.1499 17.5858 4.48569 17.25 4.8999 17.25H5.99442C6.32745 15.9561 7.50202 15 8.8999 15C10.2978 15 11.4724 15.9561 11.8054 17.25H20.8999C21.3141 17.25 21.6499 17.5858 21.6499 18C21.6499 18.4142 21.3141 18.75 20.8999 18.75H11.8054C11.4724 20.0439 10.2978 21 8.8999 21C7.50202 21 6.32745 20.0439 5.99442 18.75H4.8999C4.48569 18.75 4.1499 18.4142 4.1499 18ZM16.8999 13.5C17.7283 13.5 18.3999 12.8284 18.3999 12C18.3999 11.1716 17.7283 10.5 16.8999 10.5C16.0715 10.5 15.3999 11.1716 15.3999 12C15.3999 12.8284 16.0715 13.5 16.8999 13.5ZM10.3999 18C10.3999 18.8284 9.72833 19.5 8.8999 19.5C8.07148 19.5 7.3999 18.8284 7.3999 18C7.3999 17.1716 8.07148 16.5 8.8999 16.5C9.72833 16.5 10.3999 17.1716 10.3999 18Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const HubIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={24} viewBox="0 0 25 24" {...props}>
    <Path
      d="M5.175 3.59375C4.88823 3.59375 4.61321 3.70767 4.41044 3.91044C4.20767 4.11321 4.09375 4.38823 4.09375 4.675C4.09375 4.96177 4.20767 5.23679 4.41044 5.43956C4.61321 5.64233 4.88823 5.75625 5.175 5.75625C5.46177 5.75625 5.73679 5.64233 5.93956 5.43956C6.14233 5.23679 6.25625 4.96177 6.25625 4.675C6.25625 4.38823 6.14233 4.11321 5.93956 3.91044C5.73679 3.70767 5.46177 3.59375 5.175 3.59375ZM3.34978 2.84978C3.83386 2.3657 4.49041 2.09375 5.175 2.09375C5.85959 2.09375 6.51614 2.3657 7.00022 2.84978C7.4843 3.33386 7.75625 3.99041 7.75625 4.675C7.75625 5.35959 7.4843 6.01614 7.00022 6.50022C6.51614 6.9843 5.85959 7.25625 5.175 7.25625C4.49041 7.25625 3.83386 6.9843 3.34978 6.50022C2.8657 6.01614 2.59375 5.35959 2.59375 4.675C2.59375 3.99041 2.8657 3.33386 3.34978 2.84978ZM12.5 3.59375C12.2132 3.59375 11.9382 3.70767 11.7354 3.91044C11.5327 4.11321 11.4187 4.38824 11.4187 4.675C11.4187 4.96177 11.5327 5.23679 11.7354 5.43956C11.9382 5.64233 12.2132 5.75625 12.5 5.75625C12.7868 5.75625 13.0618 5.64233 13.2646 5.43956C13.4673 5.23679 13.5812 4.96177 13.5812 4.675C13.5813 4.38824 13.4673 4.11321 13.2646 3.91044C13.0618 3.70767 12.7868 3.59375 12.5 3.59375ZM10.6748 2.84978C11.1589 2.3657 11.8154 2.09375 12.5 2.09375C13.1846 2.09375 13.8411 2.3657 14.3252 2.84978C14.8093 3.33386 15.0813 3.99041 15.0812 4.675C15.0812 5.35959 14.8093 6.01614 14.3252 6.50022C13.8411 6.9843 13.1846 7.25625 12.5 7.25625C12.072 7.25625 11.6549 7.14995 11.2842 6.95197L7.45197 10.7842C7.64995 11.1549 7.75625 11.572 7.75625 12C7.75625 12.6846 7.4843 13.3411 7.00022 13.8252C6.51614 14.3093 5.85959 14.5812 5.175 14.5812C4.49041 14.5812 3.83386 14.3093 3.34978 13.8252C2.8657 13.3411 2.59375 12.6846 2.59375 12C2.59375 11.3154 2.8657 10.6589 3.34978 10.1748C3.83386 9.6907 4.49041 9.41875 5.175 9.41875C5.60324 9.41875 6.02051 9.52517 6.39145 9.72335L10.2234 5.89145C10.0252 5.52051 9.91875 5.10324 9.91875 4.675C9.91875 3.99041 10.1907 3.33386 10.6748 2.84978ZM19.825 3.59375C19.5382 3.59375 19.2632 3.70767 19.0604 3.91044C18.8577 4.11321 18.7437 4.38824 18.7437 4.675C18.7437 4.96177 18.8577 5.23679 19.0604 5.43956C19.2632 5.64233 19.5382 5.75625 19.825 5.75625C20.1118 5.75625 20.3868 5.64233 20.5896 5.43956C20.7923 5.23679 20.9062 4.96177 20.9062 4.675C20.9062 4.38824 20.7923 4.11321 20.5896 3.91044C20.3868 3.70767 20.1118 3.59375 19.825 3.59375ZM17.9998 2.84978C18.4839 2.3657 19.1404 2.09375 19.825 2.09375C20.5096 2.09375 21.1661 2.3657 21.6502 2.84978C22.1343 3.33386 22.4062 3.99041 22.4062 4.675C22.4062 5.35959 22.1343 6.01614 21.6502 6.50022C21.1661 6.9843 20.5096 7.25625 19.825 7.25625C19.397 7.25625 18.9799 7.14995 18.6091 6.95197L14.777 10.7842C14.9749 11.1549 15.0812 11.572 15.0812 12C15.0812 12.6846 14.8093 13.3411 14.3252 13.8252C13.8411 14.3093 13.1846 14.5812 12.5 14.5812C12.072 14.5812 11.6549 14.4749 11.2842 14.277L7.45197 18.1091C7.64995 18.4799 7.75625 18.897 7.75625 19.325C7.75625 20.0096 7.4843 20.6661 7.00022 21.1502C6.51614 21.6343 5.85959 21.9062 5.175 21.9062C4.49041 21.9062 3.83386 21.6343 3.34978 21.1502C2.8657 20.6661 2.59375 20.0096 2.59375 19.325C2.59375 18.6404 2.8657 17.9839 3.34978 17.4998C3.83386 17.0157 4.49041 16.7437 5.175 16.7437C5.60324 16.7437 6.02051 16.8502 6.39145 17.0484L10.2234 13.2164C10.0252 12.8455 9.91875 12.4282 9.91875 12C9.91875 11.3154 10.1907 10.6589 10.6748 10.1748C11.1589 9.6907 11.8154 9.41875 12.5 9.41875C12.9282 9.41875 13.3455 9.52517 13.7164 9.72335L17.5484 5.89145C17.3502 5.52051 17.2437 5.10324 17.2437 4.675C17.2437 3.99041 17.5157 3.33386 17.9998 2.84978ZM5.175 10.9187C4.88824 10.9187 4.61321 11.0327 4.41044 11.2354C4.20767 11.4382 4.09375 11.7132 4.09375 12C4.09375 12.2868 4.20767 12.5618 4.41044 12.7646C4.61321 12.9673 4.88824 13.0812 5.175 13.0812C5.46177 13.0812 5.73679 12.9673 5.93956 12.7646C6.14233 12.5618 6.25625 12.2868 6.25625 12C6.25625 11.7132 6.14233 11.4382 5.93956 11.2354C5.73679 11.0327 5.46177 10.9187 5.175 10.9187ZM12.5 10.9187C12.2132 10.9187 11.9382 11.0327 11.7354 11.2354C11.5327 11.4382 11.4187 11.7132 11.4187 12C11.4187 12.2868 11.5327 12.5618 11.7354 12.7646C11.9382 12.9673 12.2132 13.0812 12.5 13.0812C12.7868 13.0812 13.0618 12.9673 13.2646 12.7646C13.4673 12.5618 13.5812 12.2868 13.5812 12C13.5813 11.7132 13.4673 11.4382 13.2646 11.2354C13.0618 11.0327 12.7868 10.9187 12.5 10.9187ZM19.825 10.9187C19.5382 10.9187 19.2632 11.0327 19.0604 11.2354C18.8577 11.4382 18.7437 11.7132 18.7437 12C18.7437 12.2868 18.8577 12.5618 19.0604 12.7646C19.2632 12.9673 19.5382 13.0812 19.825 13.0812C20.1118 13.0812 20.3868 12.9673 20.5896 12.7646C20.7923 12.5618 20.9062 12.2868 20.9062 12C20.9062 11.7132 20.7923 11.4382 20.5896 11.2354C20.3868 11.0327 20.1118 10.9187 19.825 10.9187ZM17.9998 10.1748C18.4839 9.6907 19.1404 9.41875 19.825 9.41875C20.5096 9.41875 21.1661 9.6907 21.6502 10.1748C22.1343 10.6589 22.4062 11.3154 22.4062 12C22.4062 12.6846 22.1343 13.3411 21.6502 13.8252C21.1661 14.3093 20.5096 14.5812 19.825 14.5812C19.397 14.5812 18.9799 14.4749 18.6091 14.277L14.777 18.1091C14.9749 18.4799 15.0812 18.897 15.0812 19.325C15.0812 20.0096 14.8093 20.6661 14.3252 21.1502C13.8411 21.6343 13.1846 21.9062 12.5 21.9062C11.8154 21.9062 11.1589 21.6343 10.6748 21.1502C10.1907 20.6661 9.91875 20.0096 9.91875 19.325C9.91875 18.6404 10.1907 17.9839 10.6748 17.4998C11.1589 17.0157 11.8154 16.7437 12.5 16.7437C12.9282 16.7437 13.3455 16.8502 13.7164 17.0484L17.5484 13.2164C17.3502 12.8455 17.2437 12.4282 17.2437 12C17.2437 11.3154 17.5157 10.6589 17.9998 10.1748ZM5.175 18.2437C4.88824 18.2437 4.61321 18.3577 4.41044 18.5604C4.20767 18.7632 4.09375 19.0382 4.09375 19.325C4.09375 19.6118 4.20767 19.8868 4.41044 20.0896C4.61321 20.2923 4.88824 20.4062 5.175 20.4062C5.46177 20.4062 5.73679 20.2923 5.93956 20.0896C6.14233 19.8868 6.25625 19.6118 6.25625 19.325C6.25625 19.0382 6.14233 18.7632 5.93956 18.5604C5.73679 18.3577 5.46177 18.2437 5.175 18.2437ZM12.5 18.2437C12.2132 18.2437 11.9382 18.3577 11.7354 18.5604C11.5327 18.7632 11.4187 19.0382 11.4187 19.325C11.4187 19.6118 11.5327 19.8868 11.7354 20.0896C11.9382 20.2923 12.2132 20.4062 12.5 20.4062C12.7868 20.4062 13.0618 20.2923 13.2646 20.0896C13.4673 19.8868 13.5812 19.6118 13.5812 19.325C13.5813 19.0382 13.4673 18.7632 13.2646 18.5604C13.0618 18.3577 12.7868 18.2437 12.5 18.2437ZM19.825 18.2437C19.5382 18.2437 19.2632 18.3577 19.0604 18.5604C18.8577 18.7632 18.7437 19.0382 18.7437 19.325C18.7437 19.6118 18.8577 19.8868 19.0604 20.0896C19.2632 20.2923 19.5382 20.4062 19.825 20.4062C20.1118 20.4062 20.3868 20.2923 20.5896 20.0896C20.7923 19.8868 20.9062 19.6118 20.9062 19.325C20.9062 19.0382 20.7923 18.7632 20.5896 18.5604C20.3868 18.3577 20.1118 18.2437 19.825 18.2437ZM17.9998 17.4998C18.4839 17.0157 19.1404 16.7437 19.825 16.7437C20.5096 16.7437 21.1661 17.0157 21.6502 17.4998C22.1343 17.9839 22.4062 18.6404 22.4062 19.325C22.4062 20.0096 22.1343 20.6661 21.6502 21.1502C21.1661 21.6343 20.5096 21.9062 19.825 21.9062C19.1404 21.9062 18.4839 21.6343 17.9998 21.1502C17.5157 20.6661 17.2437 20.0096 17.2437 19.325C17.2437 18.6404 17.5157 17.9839 17.9998 17.4998Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const DevicesIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M22.4804 3.28C22.6128 3.13782 22.685 2.94978 22.6815 2.75548C22.6781 2.56118 22.5994 2.37579 22.462 2.23838C22.3246 2.10096 22.1392 2.02225 21.9449 2.01882C21.7506 2.0154 21.5625 2.08752 21.4203 2.22L19.4083 4.232C18.5897 3.65191 17.5922 3.3801 16.5924 3.46465C15.5926 3.5492 14.655 3.98466 13.9453 4.694L12.8773 5.763C12.5494 6.09115 12.3652 6.53608 12.3652 7C12.3652 7.46391 12.5494 7.90885 12.8773 8.237L16.4623 11.823C16.6249 11.9855 16.8178 12.1144 17.0301 12.2024C17.2424 12.2904 17.47 12.3356 17.6998 12.3356C17.9297 12.3356 18.1573 12.2904 18.3696 12.2024C18.5819 12.1144 18.7748 11.9855 18.9373 11.823L20.0054 10.755C20.7148 10.0455 21.1505 9.1079 21.2352 8.10811C21.32 7.10832 21.0483 6.11078 20.4683 5.292L22.4804 3.28ZM18.8953 5.755L18.9173 5.778L18.9203 5.78L18.9223 5.783L18.9454 5.805C19.2008 6.06038 19.4035 6.36359 19.5418 6.69732C19.6801 7.03105 19.7513 7.38876 19.7513 7.75C19.7513 8.11124 19.6801 8.46895 19.5418 8.80268C19.4035 9.13641 19.2008 9.43962 18.9454 9.695L17.8773 10.762C17.8541 10.7853 17.8265 10.8038 17.7962 10.8164C17.7658 10.829 17.7332 10.8354 17.7003 10.8354C17.6675 10.8354 17.6349 10.829 17.6045 10.8164C17.5742 10.8038 17.5466 10.7853 17.5233 10.762L13.9373 7.177C13.9141 7.15378 13.8956 7.12619 13.883 7.09582C13.8704 7.06544 13.8639 7.03288 13.8639 7C13.8639 6.96712 13.8704 6.93456 13.883 6.90418C13.8956 6.87381 13.9141 6.84622 13.9373 6.823L15.0053 5.755C15.2607 5.4995 15.5639 5.29682 15.8977 5.15854C16.2314 5.02026 16.5891 4.94909 16.9503 4.94909C17.3116 4.94909 17.6693 5.02026 18.003 5.15854C18.3368 5.29682 18.64 5.4995 18.8953 5.755ZM11.4803 11.28C11.554 11.2113 11.6131 11.1285 11.6541 11.0365C11.6951 10.9445 11.7172 10.8452 11.7189 10.7445C11.7207 10.6438 11.7022 10.5438 11.6645 10.4504C11.6268 10.357 11.5706 10.2722 11.4994 10.201C11.4282 10.1297 11.3433 10.0736 11.2499 10.0359C11.1566 9.99816 11.0565 9.97963 10.9558 9.98141C10.8551 9.98318 10.7558 10.0052 10.6638 10.0462C10.5718 10.0872 10.489 10.1463 10.4203 10.22L8.70035 11.94L8.23035 11.47C8.08972 11.3295 7.8991 11.2507 7.70035 11.2507C7.5016 11.2507 7.31097 11.3295 7.17035 11.47L5.39535 13.245C4.68586 13.9545 4.25021 14.8921 4.16548 15.8919C4.08074 16.8917 4.35239 17.8892 4.93235 18.708L2.92035 20.72C2.84666 20.7887 2.78756 20.8715 2.74657 20.9635C2.70558 21.0555 2.68353 21.1548 2.68176 21.2555C2.67998 21.3562 2.69851 21.4562 2.73623 21.5496C2.77395 21.643 2.83009 21.7278 2.90131 21.799C2.97253 21.8703 3.05736 21.9264 3.15075 21.9641C3.24414 22.0018 3.34417 22.0204 3.44487 22.0186C3.54557 22.0168 3.64489 21.9948 3.73689 21.9538C3.82889 21.9128 3.91169 21.8537 3.98035 21.78L5.99235 19.768C6.81113 20.348 7.80867 20.6196 8.80846 20.5349C9.80825 20.4501 10.7458 20.0145 11.4553 19.305L13.2303 17.53C13.3708 17.3894 13.4497 17.1987 13.4497 17C13.4497 16.8012 13.3708 16.6106 13.2303 16.47L12.7603 16L14.4803 14.28C14.554 14.2113 14.6131 14.1285 14.6541 14.0365C14.6951 13.9445 14.7172 13.8452 14.7189 13.7445C14.7207 13.6438 14.7022 13.5438 14.6645 13.4504C14.6268 13.357 14.5706 13.2722 14.4994 13.201C14.4282 13.1297 14.3433 13.0736 14.2499 13.0359C14.1566 12.9982 14.0565 12.9796 13.9558 12.9814C13.8551 12.9832 13.7558 13.0052 13.6638 13.0462C13.5718 13.0872 13.489 13.1463 13.4203 13.22L11.7003 14.94L9.76035 13L11.4803 11.28ZM8.16635 13.527L8.17035 13.53L8.17335 13.534L11.1663 16.527L11.1703 16.53L11.1733 16.534L11.6393 17L10.3953 18.245C10.14 18.5005 9.83676 18.7032 9.50303 18.8415C9.1693 18.9797 8.81159 19.0509 8.45035 19.0509C8.08911 19.0509 7.7314 18.9797 7.39767 18.8415C7.06394 18.7032 6.76073 18.5005 6.50535 18.245L6.45535 18.195C6.19985 17.9396 5.99717 17.6364 5.85889 17.3027C5.72061 16.9689 5.64944 16.6112 5.64944 16.25C5.64944 15.8888 5.72061 15.5311 5.85889 15.1973C5.99717 14.8636 6.19985 14.5604 6.45535 14.305L7.70035 13.062L8.16635 13.528V13.527Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const UserIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={24} viewBox="0 0 25 24" {...props}>
    <Path
      d="M14.8003 7.125C14.8003 8.50571 13.681 9.625 12.3003 9.625C10.9196 9.625 9.80029 8.50571 9.80029 7.125C9.80029 5.74429 10.9196 4.625 12.3003 4.625C13.681 4.625 14.8003 5.74429 14.8003 7.125ZM16.3003 7.125C16.3003 9.33414 14.5094 11.125 12.3003 11.125C10.0912 11.125 8.30029 9.33414 8.30029 7.125C8.30029 4.91586 10.0912 3.125 12.3003 3.125C14.5094 3.125 16.3003 4.91586 16.3003 7.125ZM12.3003 12.375C7.80317 12.375 5.3201 14.247 3.99222 16.2039C3.34108 17.1634 2.98342 18.1191 2.78789 18.8332C2.68983 19.1913 2.63162 19.4921 2.59762 19.7071C2.5806 19.8147 2.56959 19.9011 2.56267 19.963C2.55921 19.9939 2.55677 20.0187 2.55511 20.0369L2.55317 20.0593L2.55259 20.0667L2.55238 20.0695L2.5523 20.0706C2.55226 20.0711 2.55223 20.0716 3.30033 20.125L2.55223 20.0716C2.52272 20.4847 2.83373 20.8436 3.24689 20.8731C3.65952 20.9026 4.01799 20.5924 4.0483 20.18C4.04832 20.1798 4.04834 20.1795 4.04836 20.1792L4.04893 20.1729C4.04968 20.1646 4.05109 20.1501 4.05336 20.1298C4.05792 20.0891 4.06595 20.0252 4.0792 19.9414C4.10574 19.7736 4.153 19.5275 4.23464 19.2293C4.39848 18.6309 4.69707 17.8366 5.23343 17.0461C6.28055 15.503 8.29748 13.875 12.3003 13.875C16.3032 13.875 18.3201 15.503 19.3672 17.0461C19.9036 17.8366 20.2022 18.6309 20.366 19.2293C20.4476 19.5275 20.4949 19.7736 20.5214 19.9414C20.5347 20.0252 20.5427 20.0891 20.5473 20.1298C20.5496 20.1501 20.551 20.1646 20.5517 20.1729L20.5522 20.1784L20.5523 20.1792L20.5523 20.1798L20.5523 20.1799L20.5523 20.18L20.5524 20.1805C20.5829 20.5926 20.9413 20.9026 21.3538 20.8731C21.7669 20.8436 22.0779 20.4847 22.0484 20.0716L21.3003 20.125C22.0484 20.0716 22.0484 20.0711 22.0483 20.0706L22.0483 20.0695L22.0481 20.0667L22.0475 20.0593L22.0455 20.0369C22.0439 20.0187 22.0414 19.9939 22.038 19.963C22.0311 19.9011 22.0201 19.8147 22.003 19.7071C21.969 19.4921 21.9108 19.1913 21.8128 18.8332C21.6172 18.1191 21.2596 17.1634 20.6084 16.2039C19.2805 14.247 16.7975 12.375 12.3003 12.375Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const CopyIcon = (props: FxSvgProps) => (
  <FxSvg width={25} height={25} viewBox="0 0 25 25" {...props}>
    <Path
      d="M9.07135 2.5C8.10485 2.5 7.32135 3.2835 7.32135 4.25V5.5H6.07135C5.10485 5.5 4.32135 6.2835 4.32135 7.25V20.25C4.32135 21.2165 5.10485 22 6.07135 22H16.0714C17.0378 22 17.8214 21.2165 17.8214 20.25V19H19.0714C20.0378 19 20.8214 18.2165 20.8214 17.25V8.66421C20.8214 8.20008 20.637 7.75496 20.3088 7.42678L15.8946 3.01256C15.5664 2.68437 15.1213 2.5 14.6571 2.5H9.07135ZM16.3214 19V20.25C16.3214 20.3881 16.2094 20.5 16.0714 20.5H6.07135C5.93328 20.5 5.82135 20.3881 5.82135 20.25V7.25C5.82135 7.11193 5.93328 7 6.07135 7H7.32135V17.25C7.32135 18.2165 8.10485 19 9.07135 19H16.3214ZM8.82135 6.25V17.25C8.82135 17.3881 8.93328 17.5 9.07135 17.5H17.0714H19.0714C19.2094 17.5 19.3214 17.3881 19.3214 17.25V8.66421C19.3214 8.59791 19.295 8.53432 19.2481 8.48744L14.8339 4.07322C14.787 4.02634 14.7234 4 14.6571 4H9.07135C8.93328 4 8.82135 4.11193 8.82135 4.25V6.25Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const ExternalLinkIcon = (props: FxSvgProps) => (
  <FxSvg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M14.625 3.375C14.625 2.96079 14.9608 2.625 15.375 2.625H20.625C21.0392 2.625 21.375 2.96079 21.375 3.375V8.625C21.375 9.03921 21.0392 9.375 20.625 9.375C20.2108 9.375 19.875 9.03921 19.875 8.625V5.18566L11.4053 13.6553C11.1124 13.9482 10.6376 13.9482 10.3447 13.6553C10.0518 13.3624 10.0518 12.8876 10.3447 12.5947L18.8143 4.125H15.375C14.9608 4.125 14.625 3.78921 14.625 3.375ZM2.625 5.875C2.625 4.9085 3.4085 4.125 4.375 4.125H11.625C12.0392 4.125 12.375 4.46079 12.375 4.875C12.375 5.28921 12.0392 5.625 11.625 5.625H4.375C4.23693 5.625 4.125 5.73693 4.125 5.875V19.625C4.125 19.7631 4.23693 19.875 4.375 19.875H18.125C18.2631 19.875 18.375 19.7631 18.375 19.625V12.375C18.375 11.9608 18.7108 11.625 19.125 11.625C19.5392 11.625 19.875 11.9608 19.875 12.375V19.625C19.875 20.5915 19.0915 21.375 18.125 21.375H4.375C3.4085 21.375 2.625 20.5915 2.625 19.625V5.875Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </FxSvg>
);

export const CircleFilledIcon = (props: FxSvgProps) => (
  <FxSvg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <Circle cx="10" cy="9.99996" r="8.33333" />
  </FxSvg>
);
