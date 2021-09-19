import { createGlobalStyle } from 'styled-components';
import appleColorEmoji from './circularStdBook.woff';
import appleColorEmoji2 from './circularStdBook.woff2';

/*Fonts made from <a href="http://www.onlinewebfonts.com">Online Web Fonts</a>is licensed by CC BY 3.0*/
export default createGlobalStyle`
    @font-face {
        font-family: 'Apple Color Emoji';
        src: local('Apple Color Emoji'), local('AppleColorEmoji'),
        url(${appleColorEmoji}) format('woff2'),
        url(${appleColorEmoji2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
